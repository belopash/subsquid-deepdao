import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyPreimageReapedEvent } from '../../../types/events'

interface PreimageEventData {
    hash: Uint8Array
    provider: Uint8Array
    deposit: bigint
}

function getEventData(ctx: EventContext): PreimageEventData {
    const event = new DemocracyPreimageReapedEvent(ctx)
    if (event.isV803) {
        const [hash, provider, deposit] = event.asV803
        return {
            hash,
            provider,
            deposit,
        }
    } else if (event.isV916) {
        const { proposalHash: hash, provider, deposit } = event.asV916
        return {
            hash,
            provider,
            deposit,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handlePreimageReaped(ctx: EventHandlerContext) {
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)

    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.Preimage, {
        status: ProposalStatus.Reaped,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Preimage, hexHash, ctx.block.height)
    }
}
