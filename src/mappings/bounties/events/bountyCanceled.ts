import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { BountiesBountyCanceledEvent, TreasuryBountyCanceledEvent } from '../../../types/events'

interface BountyEventData {
    index: number
}

function getTreasuryEventData(ctx: EventContext): BountyEventData {
    const event = new TreasuryBountyCanceledEvent(ctx)
    if (event.isV2025) {
        const index = event.asV2025
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

function getBountyEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyCanceledEvent(ctx)
    if (event.isV2028) {
        const index = event.asV2028
        return {
            index,
        }
    } else if (event.isV9130) {
        const { index } = event.asV9130
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleCanceled(ctx: EventHandlerContext) {
    const getEventData = ctx.event.section === 'bounties' ? getBountyEventData : getTreasuryEventData
    const { index } = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Cancelled,
        isEnded: true,
    })
    if (!proposal) {
        (new MissingProposalRecord(ProposalType.Bounty, index, ctx.block.height))
    }
}
