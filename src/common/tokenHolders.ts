import { Store } from '@subsquid/substrate-processor'
import { TokenHolder } from '../model'
import { getApi } from './api'

export async function updateTokenHolders(store: Store) {
    await store.clear(TokenHolder)

    const api = await getApi()

    let lastKey = ''

    let total = 0

    while (true) {
        const query = await api.getCurrentHolders(100, lastKey)

        if (query.length == 0) {
            break
        }

        const holders = query.map((account) => {
            lastKey = account.id

            return new TokenHolder({
                id: account.id,
                free: account.free,
                reserved: account.reserved,
            })
        })

        total += holders.length

        await store.save(holders)
    }
}
