import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v803 from './v803'
import * as v804 from './v804'
import * as v805 from './v805'
import * as v900 from './v900'
import * as v901 from './v901'
import * as v902 from './v902'
import * as v906 from './v906'
import * as v908 from './v908'
import * as v910 from './v910'
import * as v912 from './v912'
import * as v914 from './v914'
import * as v915 from './v915'
import * as v916 from './v916'
import * as v918 from './v918'
import * as v920 from './v920'
import * as v922 from './v922'
import * as v923 from './v923'
import * as v926 from './v926'
import * as v927 from './v927'
import * as v930 from './v930'
import * as v932 from './v932'

export class BalancesTotalIssuanceStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The total units issued in the system.
   */
  get isV1() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1(): Promise<bigint> {
    assert(this.isV1)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class BountiesBountiesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Bounties that have been made.
   */
  get isV906() {
    return this.ctx._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV906(key: number): Promise<v906.Bounty | undefined> {
    assert(this.isV906)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Bounties', 'Bounties', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Bounties', 'Bounties') != null
  }
}

export class CouncilMembersStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV906() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV906(): Promise<v906.AccountId32[]> {
    assert(this.isV906)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'Members') != null
  }
}

export class CouncilProposalCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals so far.
   */
  get isV906() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV906(): Promise<number> {
    assert(this.isV906)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalCount') != null
  }
}

export class CouncilProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV906() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '41895466e484ffa23b7dce58e3c36fada1543bdff8c033fab32033d59628c150'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV906(key: v906.H256): Promise<v906.Call | undefined> {
    assert(this.isV906)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV908() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '690a5633a50cd13e473e9dcc5c576014cfb055286f7c0054a91c7f29fefd7b90'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV908(key: v908.H256): Promise<v908.Call | undefined> {
    assert(this.isV908)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV910() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '1ecec68300532c998b4551cf99ce181f6826d6f6c8e38901df3c23db0280297d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV910(key: v910.H256): Promise<v910.Call | undefined> {
    assert(this.isV910)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV912() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'dc88f3110f06d2704c3da45bbdbf60387114d13f45ad9ffdd3db2d14565383f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV912(key: v912.H256): Promise<v912.Call | undefined> {
    assert(this.isV912)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV914() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '7ced8245fec2975a273e6f351a8d598f3af18165feac4c1f10236009606f45f3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV914(key: v914.H256): Promise<v914.Call | undefined> {
    assert(this.isV914)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV915() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '1e918700e1dd96a255f0d980be19c7c28355c65562bb46da88e77b83116ba8d4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV915(key: v915.H256): Promise<v915.Call | undefined> {
    assert(this.isV915)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV916() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '944f53c00dd6f3fb35b188146f022e245c7acceb00add3706a5a23c50899b6b4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV916(key: v916.H256): Promise<v916.Call | undefined> {
    assert(this.isV916)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV918() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '7b1a9e54042100fc16881541bfcb9570d1f19137423bfa40d0c1c3c35a6fdcc3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV918(key: v918.H256): Promise<v918.Call | undefined> {
    assert(this.isV918)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV920() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'a94fc6badbbf6e2d24d87f34aa03134a554016977ff7bc8254f5dc4ad881f7d1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV920(key: v920.H256): Promise<v920.Call | undefined> {
    assert(this.isV920)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV922() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '409c7ffe7ade69e548a550e75b7cdfddcf51fccbf904d4879dff4a3c747d7c2c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV922(key: v922.H256): Promise<v922.Call | undefined> {
    assert(this.isV922)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV923() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'db70658483f4e4ab655ba045f2f621854744fc1b275e4ef8bac9c9e88ec4e745'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV923(key: v923.H256): Promise<v923.Call | undefined> {
    assert(this.isV923)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV926() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'd3809d8d0a4c9a0263cb69aa4c212e06c231d16fe0978d76b16bbc7e1b2ab339'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV926(key: v926.H256): Promise<v926.Call | undefined> {
    assert(this.isV926)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV927() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === 'f80dd54ed30adcc73b8bcb1720f35ce0fbafbe08d50f9689a4b7a382e6a49778'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV927(key: v927.H256): Promise<v927.Call | undefined> {
    assert(this.isV927)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV930() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '324726837b6b91949266f7d63bdc804b7f0edf8af6cb8bf1b12e730e7cce7324'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV930(key: v930.H256): Promise<v930.Call | undefined> {
    assert(this.isV930)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV932() {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') === '938c529a83b688566da3fcba9b67583a6c1abc6f760820668df2288b973a9c11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV932(key: v932.H256): Promise<v932.Call | undefined> {
    assert(this.isV932)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Council', 'ProposalOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Council', 'ProposalOf') != null
  }
}

export class DemocracyPreimagesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV803(key: Uint8Array): Promise<v803.PreimageStatus | undefined> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV906() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV906(key: v906.H256): Promise<v906.PreimageStatus | undefined> {
    assert(this.isV906)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') != null
  }
}

export class DemocracyPublicPropCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The number of (public) proposals that have been made so far.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'PublicPropCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') != null
  }
}

export class DemocracyPublicPropsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV803(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'PublicProps')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') != null
  }
}

export class DemocracyReferendumInfoOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV803(key: number): Promise<v803.ReferendumInfo | undefined> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV906() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV906(key: number): Promise<v906.ReferendumInfo | undefined> {
    assert(this.isV906)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class Instance1CollectiveMembersStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV803(): Promise<Uint8Array[]> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'Members') != null
  }
}

export class Instance1CollectiveProposalCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals so far.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV803(): Promise<number> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalCount') != null
  }
}

export class Instance1CollectiveProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ff3f2ad65672f17d3bbc15457e62e22594f0b89856bb4e3159d7b9c9c2d7b5d5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV803(key: Uint8Array): Promise<v803.Type_107 | undefined> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV804() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f469074e9c9227a3e912f03dcac5c4ed936205a77048a65c6e2a9dc835688e27'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV804(key: Uint8Array): Promise<v804.Type_107 | undefined> {
    assert(this.isV804)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV805() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'ce8853364959a90ac79e6f73e0a72998a069c8fbb65c307d892d8fcdbcadfa3c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV805(key: Uint8Array): Promise<v805.Type_104 | undefined> {
    assert(this.isV805)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === '16b177961a30ecf818ebad48a3d0a06b91074a16dec95709286a5ebfcaac2fd3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: Uint8Array): Promise<v900.Type_104 | undefined> {
    assert(this.isV900)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV901() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'a1795356664688824aad7064b1edcc104c2d0fdfb18b9f5631fc180ad884c439'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV901(key: Uint8Array): Promise<v901.Type_104 | undefined> {
    assert(this.isV901)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV902() {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') === 'f097e7fa22ba32e212600e411788d686ba0dcdf264e5ddbb1a5c0ce950919e77'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV902(key: Uint8Array): Promise<v902.Type_104 | undefined> {
    assert(this.isV902)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance1Collective', 'ProposalOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance1Collective', 'ProposalOf') != null
  }
}

export class Instance2CollectiveProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ff3f2ad65672f17d3bbc15457e62e22594f0b89856bb4e3159d7b9c9c2d7b5d5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV803(key: Uint8Array): Promise<v803.Type_107 | undefined> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV804() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f469074e9c9227a3e912f03dcac5c4ed936205a77048a65c6e2a9dc835688e27'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV804(key: Uint8Array): Promise<v804.Type_107 | undefined> {
    assert(this.isV804)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV805() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'ce8853364959a90ac79e6f73e0a72998a069c8fbb65c307d892d8fcdbcadfa3c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV805(key: Uint8Array): Promise<v805.Type_104 | undefined> {
    assert(this.isV805)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === '16b177961a30ecf818ebad48a3d0a06b91074a16dec95709286a5ebfcaac2fd3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: Uint8Array): Promise<v900.Type_104 | undefined> {
    assert(this.isV900)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV901() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'a1795356664688824aad7064b1edcc104c2d0fdfb18b9f5631fc180ad884c439'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV901(key: Uint8Array): Promise<v901.Type_104 | undefined> {
    assert(this.isV901)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV902() {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') === 'f097e7fa22ba32e212600e411788d686ba0dcdf264e5ddbb1a5c0ce950919e77'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV902(key: Uint8Array): Promise<v902.Type_104 | undefined> {
    assert(this.isV902)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Instance2Collective', 'ProposalOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Instance2Collective', 'ProposalOf') != null
  }
}

export class TechnicalCommitteeProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV906() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '41895466e484ffa23b7dce58e3c36fada1543bdff8c033fab32033d59628c150'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV906(key: v906.H256): Promise<v906.Call | undefined> {
    assert(this.isV906)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV908() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '690a5633a50cd13e473e9dcc5c576014cfb055286f7c0054a91c7f29fefd7b90'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV908(key: v908.H256): Promise<v908.Call | undefined> {
    assert(this.isV908)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV910() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '1ecec68300532c998b4551cf99ce181f6826d6f6c8e38901df3c23db0280297d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV910(key: v910.H256): Promise<v910.Call | undefined> {
    assert(this.isV910)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV912() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'dc88f3110f06d2704c3da45bbdbf60387114d13f45ad9ffdd3db2d14565383f4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV912(key: v912.H256): Promise<v912.Call | undefined> {
    assert(this.isV912)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV914() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '7ced8245fec2975a273e6f351a8d598f3af18165feac4c1f10236009606f45f3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV914(key: v914.H256): Promise<v914.Call | undefined> {
    assert(this.isV914)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV915() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '1e918700e1dd96a255f0d980be19c7c28355c65562bb46da88e77b83116ba8d4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV915(key: v915.H256): Promise<v915.Call | undefined> {
    assert(this.isV915)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV916() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '944f53c00dd6f3fb35b188146f022e245c7acceb00add3706a5a23c50899b6b4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV916(key: v916.H256): Promise<v916.Call | undefined> {
    assert(this.isV916)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV918() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '7b1a9e54042100fc16881541bfcb9570d1f19137423bfa40d0c1c3c35a6fdcc3'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV918(key: v918.H256): Promise<v918.Call | undefined> {
    assert(this.isV918)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV920() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'a94fc6badbbf6e2d24d87f34aa03134a554016977ff7bc8254f5dc4ad881f7d1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV920(key: v920.H256): Promise<v920.Call | undefined> {
    assert(this.isV920)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV922() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '409c7ffe7ade69e548a550e75b7cdfddcf51fccbf904d4879dff4a3c747d7c2c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV922(key: v922.H256): Promise<v922.Call | undefined> {
    assert(this.isV922)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV923() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'db70658483f4e4ab655ba045f2f621854744fc1b275e4ef8bac9c9e88ec4e745'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV923(key: v923.H256): Promise<v923.Call | undefined> {
    assert(this.isV923)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV926() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'd3809d8d0a4c9a0263cb69aa4c212e06c231d16fe0978d76b16bbc7e1b2ab339'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV926(key: v926.H256): Promise<v926.Call | undefined> {
    assert(this.isV926)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV927() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'f80dd54ed30adcc73b8bcb1720f35ce0fbafbe08d50f9689a4b7a382e6a49778'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV927(key: v927.H256): Promise<v927.Call | undefined> {
    assert(this.isV927)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV930() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '324726837b6b91949266f7d63bdc804b7f0edf8af6cb8bf1b12e730e7cce7324'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV930(key: v930.H256): Promise<v930.Call | undefined> {
    assert(this.isV930)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV932() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '938c529a83b688566da3fcba9b67583a6c1abc6f760820668df2288b973a9c11'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV932(key: v932.H256): Promise<v932.Call | undefined> {
    assert(this.isV932)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') != null
  }
}

export class TipsTipsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV906() {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV906(key: v906.H256): Promise<v906.OpenTip | undefined> {
    assert(this.isV906)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Tips', 'Tips', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') != null
  }
}

export class TreasuryBountiesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Bounties that have been made.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Bounties') === '338c03a838c88e6ae3cb2011fbe2c50c23c1a14bcea7cd6606cc95ea0a3a18ab'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV803(key: number): Promise<v803.Bounty | undefined> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Bounties', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Bounties') != null
  }
}

export class TreasuryProposalsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals that have been made.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV803(key: number): Promise<v803.TreasuryProposal | undefined> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Proposals', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}

export class TreasuryTipsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  get isV803() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV803(key: Uint8Array): Promise<v803.OpenTip | undefined> {
    assert(this.isV803)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Tips', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Tips') != null
  }
}
