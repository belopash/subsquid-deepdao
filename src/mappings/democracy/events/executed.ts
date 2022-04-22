import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyExecutedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): number {
    const event = new DemocracyExecutedEvent(ctx)
    if (event.isV803) {
        return event.asV803[0]
    } else if (event.isV804) {
        return event.asV804[0]
    } else if (event.isV906) {
        return event.asV906[0]
    } else if (event.isV916) {
        return event.asV916.refIndex
    } else if (event.isV926) {
        return event.asV926.refIndex
    } else if (event.isV932) {
        return event.asV932.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleExecuted(ctx: EventHandlerContext) {
    const index = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Referendum, {
        status: ProposalStatus.Executed,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Referendum, index, ctx.block.height)
    }
}
