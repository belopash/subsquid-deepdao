import { UnknownVersionError } from '../../common/errors'
import { TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Call } from '../../types/v2050'

type TechnicalCommitteeProposalStorageData = Call

async function getCoucilStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV2000) {
        return (await storage.getAsV2000(hash)) as Call
    } else if (storage.isV2011) {
        return (await storage.getAsV2011(hash)) as Call
    } else if (storage.isV2020) {
        return (await storage.getAsV2020(hash)) as Call
    } else if (storage.isV2021) {
        return (await storage.getAsV2021(hash)) as Call
    } else if (storage.isV2022) {
        return (await storage.getAsV2022(hash)) as Call
    } else if (storage.isV2032) {
        return (await storage.getAsV2032(hash)) as Call
    } else if (storage.isV2033) {
        return (await storage.getAsV2033(hash)) as Call
    } else if (storage.isV2034) {
        return (await storage.getAsV2034(hash)) as Call
    } else if (storage.isV2042) {
        return (await storage.getAsV2042(hash)) as Call
    } else if (storage.isV2050) {
        return (await storage.getAsV2050(hash)) as Call
    } else {
        throw new UnknownVersionError(storage.constructor.name)
    }
}

export async function getProposalOf(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return await getCoucilStorageData(ctx, hash)
}
