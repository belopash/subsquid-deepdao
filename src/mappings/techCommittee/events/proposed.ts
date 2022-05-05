/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { TechCommitteeCollectiveProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { encodeId, parseProposalCall } from '../../../common/tools'
import config from '../../../config'
import { storage } from '../../../storage'
import { toCamelCase } from '@subsquid/util'

interface TechCommitteeCollectiveProposalEventData {
    proposer: Uint8Array
    index: number
    hash: Uint8Array
    threshold: number
}

function getEventData(ctx: EventContext): TechCommitteeCollectiveProposalEventData {
    const event = new TechCommitteeCollectiveProposedEvent(ctx)
    if (event.isV900) {
        const [proposer, index, hash, threshold] = event.asV900
        return {
            proposer,
            index,
            hash,
            threshold,
        }
    } else if (event.isV1201) {
        const { account, proposalIndex, proposalHash, threshold } = event.asV1201
        return {
            proposer: account,
            index: proposalIndex,
            hash: proposalHash,
            threshold,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index, proposer, hash, threshold } = getEventData(ctx)

    const storageData = await storage.techCommittee.getProposalOf(ctx, hash)
    if (!storageData) {
        new StorageNotExists(ProposalType.TechCommitteeProposal, index, ctx.block.height)
        return
    }

    const { section, method, args } = parseProposalCall(storageData)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const description = ((ctx._chain as any).calls.get(`${toCamelCase(section)}.${method}`).docs as string[]).join('\n')

    await proposalManager.create(ctx, {
        index,
        type: ProposalType.TechCommitteeProposal,
        hash: toHex(hash),
        proposer: encodeId(proposer, config.prefix),
        status: ProposalStatus.Proposed,
        threshold,
        call: {
            section,
            method,
            description,
            args,
        },
    })
}
