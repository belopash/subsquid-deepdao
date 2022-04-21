import { BlockHandlerContext, Store } from '@subsquid/substrate-processor'
import { Chain, ChainState, RelayChain, Token } from './model'
import {
    BalancesTotalIssuanceStorage,
    CouncilCollectiveMembersStorage,
    CouncilCollectiveProposalCountStorage,
    DemocracyPublicPropCountStorage,
} from './types/storage'
import { getApi } from './common/api'
import { PERIOD } from './consts/consts'
import { StorageContext } from './types/support'
import chains from './consts/chains'
import config from './config'
import { UnknownVersionError } from './common/errors'
import { ChainInfo } from './common/types'

let lastStateTimestamp = 0

export async function handleChainState(ctx: BlockHandlerContext) {
    if (!lastStateTimestamp) {
        const lastChainState = await getLastChainState(ctx.store)
        if (lastChainState) lastStateTimestamp = lastChainState.timestamp?.getTime() || 0
    }

    if (ctx.block.timestamp - lastStateTimestamp >= PERIOD) {
        await saveChainState(ctx)
        lastStateTimestamp = ctx.block.timestamp
        console.log(`Chain state updated at block ${ctx.block.height}`)
    }
}

async function saveChainState(ctx: BlockHandlerContext) {
    const state = new ChainState({ id: ctx.block.id })

    state.chain = await getChainInfo(ctx.store)
    state.timestamp = new Date(ctx.block.timestamp)
    state.councilMembers = (await getCouncilCollectiveMembers(ctx))?.length || 0
    state.councilProposals = (await getCouncilCollectiveProposalsCount(ctx)) || 0
    state.democracyProposals = (await getDemocracyProposalsCount(ctx)) || 0
    state.tokenBalance = (await getTotalIssuance(ctx)) || 0n

    const api = await getApi()
    state.tokenHolders = await api.getHoldersCount(ctx.block.hash)

    await ctx.store.save(state)
}

async function getChainInfo(store: Store) {
    const id = config.chainName

    let chain = await store.findOne(Chain, id, { cache: true })

    if (!chain) {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        const chainInfo = chains.find((ch: ChainInfo) => ch.name === id)!

        chain = new Chain({
            id,
            token: new Token(chainInfo.tokens[0]),
            paraId: chainInfo.paraId,
            relayChain: chainInfo.relay
                ? chainInfo.relay == 'polkadot'
                    ? RelayChain.polkadot
                    : RelayChain.kusama
                : null,
        })

        await store.insert(Chain, chain)
    }

    return chain
}

async function getLastChainState(store: Store) {
    return await store.findOne(
        ChainState,
        {},
        {
            order: {
                timestamp: 'DESC',
            },
        }
    )
}

async function getCouncilCollectiveMembers(ctx: StorageContext) {
    const storage = new CouncilCollectiveMembersStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV900) {
        return await storage.getAsV900()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getCouncilCollectiveProposalsCount(ctx: StorageContext) {
    const storage = new CouncilCollectiveProposalCountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV900) {
        return await storage.getAsV900()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getDemocracyProposalsCount(ctx: StorageContext) {
    const storage = new DemocracyPublicPropCountStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV900) {
        return await storage.getAsV900()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

async function getTotalIssuance(ctx: StorageContext) {
    const storage = new BalancesTotalIssuanceStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV900) {
        return await storage.getAsV900()
    }

    throw new UnknownVersionError(storage.constructor.name)
}

// function getHoldersCount(ctx: EventHandlerContext) {
//     const storage = new BalancesTotalIssuanceStorage(ctx)

//     if (storage.isV900) {
//         return await storage.getasV900()
//     }

//     return undefined
// }
