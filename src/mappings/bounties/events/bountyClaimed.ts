import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { BountiesBountyClaimedEvent } from '../../../types/events'
import { encodeId } from '../../../common/tools'
import config from '../../../config'

interface BountyEventData {
    index: number
    payout: bigint
    beneficiary: Uint8Array
}

function getEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyClaimedEvent(ctx)
    if (event.isV803) {
        const [index, payout, beneficiary] = event.asV803
        return {
            index,
            payout,
            beneficiary,
        }
    } else if (event.isV916) {
        const { index, payout, beneficiary } = event.asV916
        return {
            index,
            payout,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleClaimed(ctx: EventHandlerContext) {
    const { index, payout, beneficiary } = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Claimed,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Bounty, index, ctx.block.height)
        return
    }

    proposal.payee = encodeId(beneficiary, config.prefix)
    proposal.reward = payout

    await proposalManager.update(ctx, proposal)
}
