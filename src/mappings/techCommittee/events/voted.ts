import { EventHandlerContext, toHex } from '@subsquid/substrate-processor'
import { UnknownVersionError } from '../../../common/errors'
import { encodeId } from '../../../common/tools'
import config from '../../../config'
import { proposalManager, voteManager } from '../../../managers'
import { ProposalType, Vote, VoteDecision } from '../../../model'
import { TechCommitteeCollectiveVotedEvent } from '../../../types/events'
import { EventContext } from '../../../types/support'

interface TechCommitteeCollectiveVoteEventData {
    voter: Uint8Array
    hash: Uint8Array
    decision: boolean
}

function getEventData(ctx: EventContext): TechCommitteeCollectiveVoteEventData {
    const event = new TechCommitteeCollectiveVotedEvent(ctx)
    if (event.isV900) {
        const [voter, hash, decision] = event.asV900
        return {
            voter,
            hash,
            decision,
        }
    } else if (event.isV1201) {
        const { account, proposalHash, voted } = event.asV1201
        return {
            voter: account,
            hash: proposalHash,
            decision: voted,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleVoted(ctx: EventHandlerContext) {
    const { voter, hash, decision } = getEventData(ctx)

    const hexHash = toHex(hash)
    const proposal = await proposalManager.get(ctx, hexHash, ProposalType.TechCommitteeProposal)

    await voteManager.save(
        ctx,
        new Vote({
            id: ctx.event.id,
            voter: encodeId(voter, config.prefix),
            createdAt: ctx.block.height,
            decision: decision ? VoteDecision.yes : VoteDecision.no,
            proposal,
            timestamp: new Date(ctx.block.timestamp),
        })
    )
}
