import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { BountiesBountyBecameActiveEvent } from '../../../types/events'

interface BountyEventData {
    index: number
}

function getEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyBecameActiveEvent(ctx)
    if (event.isV803) {
        const index = event.asV803
        return {
            index,
        }
    } else if (event.isV916) {
        const { index } = event.asV916
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleBecameActive(ctx: EventHandlerContext) {
    const { index } = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Active,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Bounty, index, ctx.block.height)
    }
}
