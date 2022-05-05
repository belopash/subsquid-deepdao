import { UnknownVersionError } from '../../common/errors'
import { Instance2CollectiveProposalOfStorage, TechnicalCommitteeProposalOfStorage } from '../../types/storage'
import { StorageContext } from '../../types/support'
import { Call } from '../../types/v932'

type TechnicalCommitteeProposalStorageData = Call

async function getInstanceStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new Instance2CollectiveProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return await ctx._chain.getStorage(ctx.block.hash, 'Instance2Collective', 'ProposalOf', hash)

    // if (storage.isV803) {
    //     return (await storage.getAsV803(hash)) as Call
    // } else if (storage.isV804) {
    //     return (await storage.getAsV804(hash)) as Call
    // } else if (storage.isV805) {
    //     return (await storage.getAsV805(hash)) as Call
    // } else if (storage.isV900) {
    //     return (await storage.getAsV900(hash)) as Call
    // } else if (storage.isV901) {
    //     return (await storage.getAsV901(hash)) as Call
    // } else if (storage.isV902) {
    //     return (await storage.getAsV902(hash)) as Call
    // } else {
    //     throw new UnknownVersionError(storage.constructor.name)
    // }
}

// eslint-disable-next-line sonarjs/cognitive-complexity
async function getCoucilStorageData(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    const storage = new TechnicalCommitteeProposalOfStorage(ctx)
    if (!storage.isExists) return undefined

    return await ctx._chain.getStorage(ctx.block.hash, 'TechnicalCommitteeCollective', 'ProposalOf', hash)
}

export async function getProposalOf(
    ctx: StorageContext,
    hash: Uint8Array
): Promise<TechnicalCommitteeProposalStorageData | undefined> {
    return (await getCoucilStorageData(ctx, hash)) || (await getInstanceStorageData(ctx, hash))
}
