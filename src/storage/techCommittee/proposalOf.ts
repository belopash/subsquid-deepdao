import { UnknownVersionError } from '../../common/errors'
import { TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Call } from '../../types/v2050'

type TechnicalCommitteeProposalStorageData = Call

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    if (storage.isV1019) {
        return (await storage.getAsV1019(hash)) as Call
    } else if (storage.isV2001) {
        return (await storage.getAsV2001(hash)) as Call
    } else if (storage.isV2010) {
        return (await storage.getAsV2010(hash)) as Call
    } else if (storage.isV2011) {
        return (await storage.getAsV2011(hash)) as Call
    } else if (storage.isV2012) {
        return (await storage.getAsV2012(hash)) as Call
    } else if (storage.isV2013) {
        return (await storage.getAsV2013(hash)) as Call
    } else if (storage.isV2022) {
        return (await storage.getAsV2022(hash)) as Call
    } else if (storage.isV2023) {
        return (await storage.getAsV2023(hash)) as Call
    } else if (storage.isV2032) {
        return (await storage.getAsV2032(hash)) as Call
    } else if (storage.isV2033) {
        return (await storage.getAsV2033(hash)) as Call
    } else if (storage.isV2040) {
        return (await storage.getAsV2040(hash)) as Call
    } else if (storage.isV2041) {
        return (await storage.getAsV2041(hash)) as Call
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
    return await getStorageData(ctx, hash)
}
