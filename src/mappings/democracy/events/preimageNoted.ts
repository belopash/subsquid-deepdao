/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { DemocracyPreimageNotedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext, StorageContext } from '../../../types/support'
import { DemocracyPreimagesStorage } from '../../../types/storage'
import { ProposalStatus, ProposalType } from '../../../model'
import { encodeId, parseProposalCall } from '../../../common/tools'
import config from '../../../config'
import { Chain } from '@subsquid/substrate-processor/lib/chain'
import { Call } from '../../../types/v1300'
import { proposalManager } from '../../../managers'

type ProposalCall = Call

interface PreimageEventData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

interface PreimageStorageData {
    data: Uint8Array
    provider: Uint8Array
    deposit: bigint
    block: number
}

function getEventData(ctx: EventContext): PreimageEventData {
    const event = new DemocracyPreimageNotedEvent(ctx)
    if (event.isV49) {
        const [hash, provider, deposit] = event.asV49
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV1201) {
        const { proposalHash: hash, who: provider, deposit } = event.asV1201
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function decodeProposal(chain: Chain, data: Uint8Array): ProposalCall {
    // @ts-ignore
    return chain.scaleCodec.decodeBinary(chain.description.call, data)
}

async function getStorageData(ctx: StorageContext, hash: Uint8Array): Promise<PreimageStorageData | undefined> {
    const storage = new DemocracyPreimagesStorage(ctx)

    if (storage.isV49) {
        const storageData = await storage.getAsV49(hash)
        if (!storageData || storageData.__kind === 'Missing') return undefined

        const { provider, deposit, since, data } = storageData.value

        return {
            data,
            provider,
            deposit,
            block: since,
        }
    } else if (storage.isV900) {
        const storageData = await storage.getAsV900(hash)
        if (!storageData || storageData.__kind === 'Missing') return undefined

        const { provider, deposit, since, data } = storageData

        return {
            data,
            provider,
            deposit,
            block: since,
        }
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function handlePreimageNoted(ctx: EventHandlerContext) {
    const { hash, provider, deposit } = getEventData(ctx)
    const hexHash = toHex(hash)

    const storageData = await getStorageData(ctx, hash)
    if (!storageData) {
        new StorageNotExists(ProposalType.Preimage, hexHash, ctx.block.height)
        return
    }

    let decodedCall:
        | {
              section: string
              method: string
              description: string
              args: Record<string, unknown>
          }
        | undefined

    try {
        const proposal = decodeProposal(ctx._chain as Chain, storageData.data)

        const { section, method, args } = parseProposalCall(proposal)
        // @ts-ignore
        const meta = ctx._chain.calls.get(`${section}.${method}`)
        const description = (meta.docs as string[]).join('\n')

        decodedCall = {
            section,
            method,
            description,
            args,
        }
    } catch (e) {
        console.warn(`Failed to decode ProposedCall of Preimage ${hash} at block ${ctx.block.height}`)
    }

    const proposer = encodeId(provider, config.prefix)

    await proposalManager.create(ctx, {
        hash: hexHash,
        type: ProposalType.Preimage,
        proposer,
        deposit,
        call: decodedCall,
        status: ProposalStatus.Noted,
    })
}
