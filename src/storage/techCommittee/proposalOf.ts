import { UnknownVersionError } from '../../common/errors'
import { TechCommitteeCollectiveProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Call } from '../../types/v1300'

type TechCommitteeCollectiveProposalStorageData = Call

async function getStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechCommitteeCollectiveProposalStorageData | undefined> {
    const storage = new TechCommitteeCollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(ctx.block.hash, 'TechCommitteeCollective', 'ProposalOf', hash)

    // if (storage.isV900) {
    //     return (await storage.getAsV900(hash)) as Call
    // } else if (storage.isV1001) {
    //     return (await storage.getAsV1001(hash)) as Call
    // } else if (storage.isV1101) {
    //     return (await storage.getAsV1101(hash)) as Call
    // } else if (storage.isV1201) {
    //     return (await storage.getAsV1201(hash)) as Call
    // } else if (storage.isV1300) {
    //     return (await storage.getAsV1300(hash)) as Call
    // } else if (storage.isV1401) {
    //     return (await storage.getAsV1401(hash)) as Call
    // } else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}

export async function getProposalOf(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechCommitteeCollectiveProposalStorageData | undefined> {
    return await getStorageData(ctx, hash)
}
