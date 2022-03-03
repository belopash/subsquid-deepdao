import * as ss58 from '@subsquid/ss58'
import { Store } from '@subsquid/substrate-processor'

export async function getOrCreate<T extends { id: string }>(
    store: Store,
    entityConstructor: EntityConstructor<T>,
    id: string
): Promise<T>
export async function getOrCreate<T extends { id: string }>(
    store: Store,
    entityConstructor: EntityConstructor<T>,
    id: Partial<T>
): Promise<T>
export async function getOrCreate<T extends { id: string }>(
    store: Store,
    entityConstructor: EntityConstructor<T>,
    idOrOptions: string | Partial<T>
): Promise<T> {
    let e

    if (typeof idOrOptions == 'string') {
        e = await store.findOne<T>(entityConstructor, idOrOptions)
    } else {
        e = await store.findOne<T>(entityConstructor, { where: idOrOptions })
    }

    if (!e) {
        if (typeof idOrOptions == 'string') {
            e = new entityConstructor({ id: idOrOptions })
        } else {
            e = new entityConstructor(idOrOptions)
        }
    }

    return e
}

export function encodeID(ID: Uint8Array, prefix: string | number) {
    let ret: string | null
    try {
        ret = ss58.codec(prefix).encode(ID)
    } catch (e) {
        ret = null
    }

    return ret
}

export type EntityConstructor<T> = {
    new (...args: any[]): T
}
