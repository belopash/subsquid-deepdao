import { UnknownVersionError } from '../../common/errors'
import { CouncilCollectiveProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Call } from '../../types/v1300'

type CouncilProposalStorageData = Call

async function getCoucilStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<CouncilProposalStorageData | undefined> {
    const storage = new CouncilCollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return ctx._chain.getStorage(ctx.block.hash, 'CouncilCollective', 'ProposalOf', hash)

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
): Promise<CouncilProposalStorageData | undefined> {
    return await getCoucilStorageData(ctx, hash)
}
