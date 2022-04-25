import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { DemocracyPassedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): number {
    const event = new DemocracyPassedEvent(ctx)
    if (event.isV803) {
        return event.asV803
    } else if (event.isV916) {
        return event.asV916.refIndex
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handlePassed(ctx: EventHandlerContext) {
    const index = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Referendum, {
        status: ProposalStatus.Passed,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Referendum, index, ctx.block.height)
    }
}
