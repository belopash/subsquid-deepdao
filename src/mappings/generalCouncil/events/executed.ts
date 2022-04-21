import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { GeneralCouncilExecutedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): Uint8Array {
    const event = new GeneralCouncilExecutedEvent(ctx)
    if (event.isV1000) {
        return event.asV1000[0]
    } else if (event.isV2010) {
        return event.asV2010.proposalHash
    } else if (event.isV2032) {
        return event.asV2032.proposalHash
    } else if (event.isV2040) {
        return event.asV2040.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleExecuted(ctx: EventHandlerContext) {
    const hash = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.CouncilMotion, {
        status: ProposalStatus.Executed,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.CouncilMotion, hexHash, ctx.block.height)
    }
}
