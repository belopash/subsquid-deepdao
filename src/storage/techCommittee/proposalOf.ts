import { UnknownVersionError } from '../../common/errors'
import { Instance2CollectiveProposalOfStorage, TechCommitteeCollectiveProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Call } from '../../types/v1300'

type TechCommitteeCollectiveProposalStorageData = Call

async function getOldStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechCommitteeCollectiveProposalStorageData | undefined> {
    const storage = new Instance2CollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV49) {
        return (await storage.getAsV49(hash)) as Call
    } else if (storage.isV53) {
        return (await storage.getAsV53(hash)) as Call
    } else if (storage.isV155) {
        return (await storage.getAsV155(hash)) as Call
    } else if (storage.isV159) {
        return (await storage.getAsV159(hash)) as Call
    } else if (storage.isV200) {
        return (await storage.getAsV200(hash)) as Call
    } else if (storage.isV400) {
        return (await storage.getAsV400(hash)) as Call
    } else if (storage.isV501) {
        return (await storage.getAsV501(hash)) as Call
    } else if (storage.isV600) {
        return (await storage.getAsV600(hash)) as Call
    } else if (storage.isV701) {
        return (await storage.getAsV701(hash)) as Call
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

async function getStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechCommitteeCollectiveProposalStorageData | undefined> {
    const storage = new TechCommitteeCollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV900) {
        return (await storage.getAsV900(hash)) as Call
    } else if (storage.isV1001) {
        return (await storage.getAsV1001(hash)) as Call
    } else if (storage.isV1101) {
        return (await storage.getAsV1101(hash)) as Call
    } else if (storage.isV1201) {
        return (await storage.getAsV1201(hash)) as Call
    } else if (storage.isV1300) {
        return (await storage.getAsV1300(hash)) as Call
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposalOf(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechCommitteeCollectiveProposalStorageData | undefined> {
    return (await getStorageData(ctx, hash)) || (await getOldStorageData(ctx, hash))
}
