import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v1000 from './v1000'
import * as v1001 from './v1001'
import * as v1019 from './v1019'
import * as v2001 from './v2001'
import * as v2010 from './v2010'
import * as v2011 from './v2011'
import * as v2012 from './v2012'
import * as v2013 from './v2013'
import * as v2022 from './v2022'
import * as v2023 from './v2023'
import * as v2032 from './v2032'
import * as v2033 from './v2033'
import * as v2040 from './v2040'
import * as v2041 from './v2041'
import * as v2042 from './v2042'
import * as v2050 from './v2050'

export class BalancesTotalIssuanceStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The total units issued in the system.
   */
  get isV1000() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV1000(): Promise<bigint> {
    assert(this.isV1000)
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
  get isV1019() {
    return this.ctx._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV1019(key: number): Promise<v1019.Bounty | undefined> {
    assert(this.isV1019)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Bounties', 'Bounties', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Bounties', 'Bounties') != null
  }
}

export class DemocracyPreimagesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV1001() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '0e0e3c0f32264d14a97bb80cf16ecda808e2404f87100dc025cf84cfcc821fef'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1001(key: Uint8Array): Promise<v1001.PreimageStatus | undefined> {
    assert(this.isV1001)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'Preimages', key)
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV1019() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV1019(key: v1019.H256): Promise<v1019.PreimageStatus | undefined> {
    assert(this.isV1019)
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
  get isV1001() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV1001(): Promise<number> {
    assert(this.isV1001)
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
  get isV1001() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV1001(): Promise<[number, Uint8Array, Uint8Array][]> {
    assert(this.isV1001)
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
  get isV1001() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '657d9c0cc58504c79c02d5040424e2dce3c3e5fe2b52b13a7a024ff5b06c7a99'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV1001(key: number): Promise<v1001.ReferendumInfo | undefined> {
    assert(this.isV1001)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  get isV1019() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV1019(key: number): Promise<v1019.ReferendumInfo | undefined> {
    assert(this.isV1019)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class GeneralCouncilMembersStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV1019() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV1019(): Promise<v1019.AccountId32[]> {
    assert(this.isV1019)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'Members') != null
  }
}

export class GeneralCouncilProposalCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals so far.
   */
  get isV1019() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV1019(): Promise<number> {
    assert(this.isV1019)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalCount') != null
  }
}

export class GeneralCouncilProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1019() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '900a8391262eaa1b4df18c6b5b4fb105dbc6c11f562ed9f2d0a9f7eb775a682c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1019(key: v1019.H256): Promise<v1019.Call | undefined> {
    assert(this.isV1019)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2001() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '38b7dba9448d6c10ed61ae94cd1cf7955e828c54bd4115e14d0fde52f2a06d3f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2001(key: v2001.H256): Promise<v2001.Call | undefined> {
    assert(this.isV2001)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2010() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'f2d08d84917be1649f9dd4e41ff4fdab3a5c970e53ee5769afafa1d096259903'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2010(key: v2010.H256): Promise<v2010.Call | undefined> {
    assert(this.isV2010)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'c601623fdeaa74be1a1f5a53bf326e34d295e32ff544c8878fcbc18e36e99b0c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: v2011.H256): Promise<v2011.Call | undefined> {
    assert(this.isV2011)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2012() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '76f48006245121357347e409ea7b93bc04c0ee382eb6143d6b9836bd382bddb1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2012(key: v2012.H256): Promise<v2012.Call | undefined> {
    assert(this.isV2012)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'ca7c162b26f098aca86d96980be8f72d2a245d5dbfafd458ca9fcad0c1450679'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: v2013.H256): Promise<v2013.Call | undefined> {
    assert(this.isV2013)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '60a7679bf74acaa039dcbdfd794116afb91ee1abdd4e17bef6798741546ba168'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: v2022.H256): Promise<v2022.Call | undefined> {
    assert(this.isV2022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '791add825a2c6e632b8d7ab98ffd22353e860b32234aafb99ad65cd3ec109d10'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: v2023.H256): Promise<v2023.Call | undefined> {
    assert(this.isV2023)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2032() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'cd466c0fc303bb461d6a19238a907dcff6e23380c51f6768c3cf3fe095a6acbc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2032(key: v2032.H256): Promise<v2032.Call | undefined> {
    assert(this.isV2032)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2033() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '2a1a7312a01561cc00cf237634d54e50ceec77057583f2182dd9548e2f81e325'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2033(key: v2033.H256): Promise<v2033.Call | undefined> {
    assert(this.isV2033)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2040() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '457650d8a279300e231ee561d895b4242e362e359bb8f857104f80a5b117a8c5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2040(key: v2040.H256): Promise<v2040.Call | undefined> {
    assert(this.isV2040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2041() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '862eb017ff54639a731abf1dbe3f30fcc2763a68465ace17d986e68c42093a8c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2041(key: v2041.H256): Promise<v2041.Call | undefined> {
    assert(this.isV2041)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2042() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '9564ee9b069ddda73112a8b0704491c51f0b66ea74a89fa92b5e6b79286224d4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2042(key: v2042.H256): Promise<v2042.Call | undefined> {
    assert(this.isV2042)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2050() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'dbe2cba238fa76b7e8c44922f91fe2cde995b432afc2cf1166a8633e34c6ed0b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2050(key: v2050.H256): Promise<v2050.Call | undefined> {
    assert(this.isV2050)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') != null
  }
}

export class TechnicalCommitteeProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1019() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '900a8391262eaa1b4df18c6b5b4fb105dbc6c11f562ed9f2d0a9f7eb775a682c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1019(key: v1019.H256): Promise<v1019.Call | undefined> {
    assert(this.isV1019)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2001() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '38b7dba9448d6c10ed61ae94cd1cf7955e828c54bd4115e14d0fde52f2a06d3f'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2001(key: v2001.H256): Promise<v2001.Call | undefined> {
    assert(this.isV2001)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2010() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'f2d08d84917be1649f9dd4e41ff4fdab3a5c970e53ee5769afafa1d096259903'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2010(key: v2010.H256): Promise<v2010.Call | undefined> {
    assert(this.isV2010)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2011() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'c601623fdeaa74be1a1f5a53bf326e34d295e32ff544c8878fcbc18e36e99b0c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2011(key: v2011.H256): Promise<v2011.Call | undefined> {
    assert(this.isV2011)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2012() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '76f48006245121357347e409ea7b93bc04c0ee382eb6143d6b9836bd382bddb1'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2012(key: v2012.H256): Promise<v2012.Call | undefined> {
    assert(this.isV2012)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2013() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ca7c162b26f098aca86d96980be8f72d2a245d5dbfafd458ca9fcad0c1450679'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2013(key: v2013.H256): Promise<v2013.Call | undefined> {
    assert(this.isV2013)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2022() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '60a7679bf74acaa039dcbdfd794116afb91ee1abdd4e17bef6798741546ba168'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2022(key: v2022.H256): Promise<v2022.Call | undefined> {
    assert(this.isV2022)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2023() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '791add825a2c6e632b8d7ab98ffd22353e860b32234aafb99ad65cd3ec109d10'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2023(key: v2023.H256): Promise<v2023.Call | undefined> {
    assert(this.isV2023)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2032() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'cd466c0fc303bb461d6a19238a907dcff6e23380c51f6768c3cf3fe095a6acbc'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2032(key: v2032.H256): Promise<v2032.Call | undefined> {
    assert(this.isV2032)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2033() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '2a1a7312a01561cc00cf237634d54e50ceec77057583f2182dd9548e2f81e325'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2033(key: v2033.H256): Promise<v2033.Call | undefined> {
    assert(this.isV2033)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2040() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '457650d8a279300e231ee561d895b4242e362e359bb8f857104f80a5b117a8c5'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2040(key: v2040.H256): Promise<v2040.Call | undefined> {
    assert(this.isV2040)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2041() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '862eb017ff54639a731abf1dbe3f30fcc2763a68465ace17d986e68c42093a8c'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2041(key: v2041.H256): Promise<v2041.Call | undefined> {
    assert(this.isV2041)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2042() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '9564ee9b069ddda73112a8b0704491c51f0b66ea74a89fa92b5e6b79286224d4'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2042(key: v2042.H256): Promise<v2042.Call | undefined> {
    assert(this.isV2042)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2050() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'dbe2cba238fa76b7e8c44922f91fe2cde995b432afc2cf1166a8633e34c6ed0b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2050(key: v2050.H256): Promise<v2050.Call | undefined> {
    assert(this.isV2050)
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
  get isV1019() {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV1019(key: v1019.H256): Promise<v1019.OpenTip | undefined> {
    assert(this.isV1019)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Tips', 'Tips', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') != null
  }
}

export class TreasuryProposalsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals that have been made.
   */
  get isV1000() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV1000(key: number): Promise<v1000.TreasuryProposal | undefined> {
    assert(this.isV1000)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Proposals', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}
