import { UnknownVersionError } from '../../common/errors'
import { CouncilProposalOfStorage, Instance1CollectiveProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Call } from '../../types/v932'

type CouncilProposalStorageData = Call

async function getInstanceStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<CouncilProposalStorageData | undefined> {
    const storage = new Instance1CollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV803) {
        return (await storage.getAsV803(hash)) as Call
    } else if (storage.isV804) {
        return (await storage.getAsV804(hash)) as Call
    } else if (storage.isV805) {
        return (await storage.getAsV805(hash)) as Call
    } else if (storage.isV900) {
        return (await storage.getAsV900(hash)) as Call
    } else if (storage.isV901) {
        return (await storage.getAsV901(hash)) as Call
    } else if (storage.isV902) {
        return (await storage.getAsV902(hash)) as Call
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getCoucilStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<CouncilProposalStorageData | undefined> {
    const storage = new CouncilProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV906) {
        return (await storage.getAsV906(hash)) as Call
    } else if (storage.isV908) {
        return (await storage.getAsV908(hash)) as Call
    } else if (storage.isV910) {
        return (await storage.getAsV910(hash)) as Call
    } else if (storage.isV912) {
        return (await storage.getAsV912(hash)) as Call
    } else if (storage.isV914) {
        return (await storage.getAsV914(hash)) as Call
    } else if (storage.isV915) {
        return (await storage.getAsV915(hash)) as Call
    } else if (storage.isV916) {
        return (await storage.getAsV916(hash)) as Call
    } else if (storage.isV918) {
        return (await storage.getAsV918(hash)) as Call
    } else if (storage.isV920) {
        return (await storage.getAsV920(hash)) as Call
    } else if (storage.isV922) {
        return (await storage.getAsV922(hash)) as Call
    } else if (storage.isV923) {
        return (await storage.getAsV923(hash)) as Call
    } else if (storage.isV926) {
        return (await storage.getAsV926(hash)) as Call
    } else if (storage.isV927) {
        return (await storage.getAsV927(hash)) as Call
    } else if (storage.isV930) {
        return (await storage.getAsV930(hash)) as Call
    } else if (storage.isV932) {
        return (await storage.getAsV932(hash)) as Call
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposalOf(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<CouncilProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash)) || (await getInstanceStorageData(ctx, hash))
}
