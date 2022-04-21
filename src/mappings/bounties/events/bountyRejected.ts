import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { BountiesBountyRejectedEvent } from '../../../types/events'

interface BountyEventData {
    index: number
}

function getEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyRejectedEvent(ctx)
    if (event.isV1000) {
        const [index] = event.asV1000
        return {
            index,
        }
    } else if (event.isV2010) {
        const { index } = event.asV2010
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleRejected(ctx: EventHandlerContext) {
    const { index } = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Rejected,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Bounty, index, ctx.block.height)
    }
}
