import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { TipsTipSlashedEvent } from '../../../types/events'

interface TipEventData {
    hash: Uint8Array
}

function getEventData(ctx: EventContext): TipEventData {
    const event = new TipsTipSlashedEvent(ctx)
    if (event.isV28) {
        const [hash] = event.asV28
        return {
            hash,
        }
    } else if (event.isV9140) {
        const { tipHash: hash } = event.asV9140
        return {
            hash,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleSlashed(ctx: EventHandlerContext) {
    const { hash } = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.Tip, {
        status: ProposalStatus.Slashed,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Tip, hexHash, ctx.block.height)
    }
}