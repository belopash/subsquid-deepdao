import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { MissingProposalRecord, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import { TechnicalCommitteeDisapprovedEvent } from '../../../types/events'

function getEventData(ctx: EventContext): Uint8Array {
    const event = new TechnicalCommitteeDisapprovedEvent(ctx)
    if (event.isV1000) {
        return event.asV1000
    } else if (event.isV2010) {
        return event.asV2010.proposalHash
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleDisapproved(ctx: EventHandlerContext) {
    const hash = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.updateStatus(ctx, hexHash, ProposalType.TechCommitteeProposal, {
        status: ProposalStatus.Disapproved,
        isEnded: true,
    })
    if (!proposal) {
        new MissingProposalRecord(ProposalType.TechCommitteeProposal, hexHash, ctx.block.height)
    }
}
