/* eslint-disable @typescript-eslint/ban-ts-comment */
import { EventHandlerContext } from '@subsquid/substrate-processor'
import { TreasuryProposedEvent } from '../../../types/events'
import { StorageNotExists, UnknownVersionError } from '../../../common/errors'
import { EventContext } from '../../../types/support'
import { ProposalStatus, ProposalType } from '../../../model'
import { proposalManager } from '../../../managers'
import config from '../../../config'
import { encodeId } from '../../../common/tools'
import { storage } from '../../../storage'

interface TreasuryProposalEventData {
    index: number
}

function getEventData(ctx: EventContext): TreasuryProposalEventData {
    const event = new TreasuryProposedEvent(ctx)
    if (event.isV900) {
        const index = event.asV900
        return {
            index,
        }
    } else if (event.isV1300) {
        const { proposalIndex: index } = event.asV1300
        return {
            index,
        }
    } else {
        throw new UnknownVersionError(event.constructor.name)
    }
}

export async function handleProposed(ctx: EventHandlerContext) {
    const { index } = getEventData(ctx)

    const storageData = await storage.treasury.getProposals(ctx, index)
    if (!storageData) {
        new StorageNotExists(ProposalType.TreasuryProposal, index, ctx.block.height)
        return
    }

    const { proposer, beneficiary, value, bond } = storageData

    await proposalManager.create(ctx, {
        index,
        type: ProposalType.TreasuryProposal,
        proposer: encodeId(proposer, config.prefix),
        status: ProposalStatus.Proposed,
        reward: value,
        deposit: bond,
        payee: encodeId(beneficiary, config.prefix),
    })
}
