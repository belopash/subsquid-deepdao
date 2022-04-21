/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '@subsquid/substrate-processor'
import { BountiesBountyProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import config from '../../../config'
import { encodeId } from '../../../common/tools'
import { storage } from '../../../storage'

interface BountyEventData {
    index: number
}

function getEventData(ctx: EventContext): BountyEventData {
    const event = new BountiesBountyProposedEvent(ctx)
    if (event.isV2000) {
        const index = event.asV2000
        return {
            index,
        }
    } else if (event.isV2011) {
        const { index } = event.asV2011
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index } = getEventData(ctx)

    const storageData = await storage.bounties.getBounties(ctx, index)
    if (!storageData) {
        new StorageNotExists(ProposalType.Bounty, index, ctx.block.height)
        return
    }

    const { proposer, value, bond } = storageData

    await proposalManager.create(ctx, {
        index,
        type: ProposalType.Bounty,
        proposer: encodeId(proposer, config.prefix),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
    })
}
