import { ExtrinsicHandlerContext } from '@subsquid/substrate-processor'
import { getLastChainState, saveChainState } from '../../../common/chainState'
import { INTERVAL } from '../../../common/consts'
import { updateTokenHolders } from '../../../common/tokenHolders'

let lastStateTimestamp = 0

export async function handleSet(ctx: ExtrinsicHandlerContext) {
    if (!lastStateTimestamp) {
        const lastChainState = await getLastChainState(ctx.store)
        if (lastChainState) lastStateTimestamp = lastChainState.timestamp?.getTime() || 0
    }

    if (ctx.block.timestamp - lastStateTimestamp >= INTERVAL) {
        await saveChainState(ctx.store, ctx.block)
        await updateTokenHolders(ctx.store)
        lastStateTimestamp = ctx.block.timestamp
        console.log(`Chain state updated at block ${ctx.block.height}`)
    }
}
