import { EventHandlerContext } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { BountiesBountyAwardedEvent } from '../../../types/events'
import { encodeId } from '../../../common/tools'
import config from '../../../config'

interface BountyEventData {
    index: number
    beneficiary: Uint8Array
}

function getEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyAwardedEvent(ctx)
    if (event.isV1000) {
        const [index, beneficiary] = event.asV1000
        return {
            index,
            beneficiary,
        }
    } else if (event.isV2010) {
        const { index, beneficiary } = event.asV2010
        return {
            index,
            beneficiary,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleAwarded(ctx: EventHandlerContext) {
    const { index, beneficiary } = getEventData(ctx)

    const proposal = await proposalManager.updateStatus(ctx, index, ProposalType.Bounty, {
        status: ProposalStatus.Awarded,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.Bounty, index, ctx.block.height)
        return
    }

    proposal.payee = encodeId(beneficiary, config.prefix)
    await proposalManager.update(ctx, proposal)
}
