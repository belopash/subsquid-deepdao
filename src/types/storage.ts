import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v2000 from './v2000'
import * as v2011 from './v2011'
import * as v2020 from './v2020'
import * as v2021 from './v2021'
import * as v2022 from './v2022'
import * as v2032 from './v2032'
import * as v2033 from './v2033'
import * as v2034 from './v2034'
import * as v2042 from './v2042'
import * as v2050 from './v2050'

export class BalancesTotalIssuanceStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The total units issued in the system.
   */
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV2000(): Promise<bigint> {
    assert(this.isV2000)
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('Bounties', 'Bounties') === '3a079681beba8ee49f179fd6134858f2cef778fb7ad21438c15303b8dda5c6fd'
  }

  /**
   *  Bounties that have been made.
   */
  async getAsV2000(key: number): Promise<v2000.Bounty | undefined> {
    assert(this.isV2000)
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '2762abd948712e87f9324ca0c5ad1523f92ac946c587c97414ce71252440341f'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV2000(key: v2000.H256): Promise<v2000.PreimageStatus | undefined> {
    assert(this.isV2000)
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV2000(): Promise<number> {
    assert(this.isV2000)
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '54835df1906ed20adb15939607ddf49a9a1447f02d476ca5b7b39c1f35e1a40f'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV2000(): Promise<[number, v2000.H256, v2000.AccountId32][]> {
    assert(this.isV2000)
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV2000(key: number): Promise<v2000.ReferendumInfo | undefined> {
    assert(this.isV2000)
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'Members') === 'f5df25eadcdffaa0d2a68b199d671d3921ca36a7b70d22d57506dca52b4b5895'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV2000(): Promise<v2000.AccountId32[]> {
    assert(this.isV2000)
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV2000(): Promise<number> {
    assert(this.isV2000)
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '5bb0f7ab07f2fe07ffa2dd974c435f37056f3956795ff0ea181bba24127f1154'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2000(key: v2000.H256): Promise<v2000.Call | undefined> {
    assert(this.isV2000)
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
  get isV2020() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '0b4e1a4278711de58776120c57d74f106ad8129565530325c0bc7e773ab59d29'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2020(key: v2020.H256): Promise<v2020.Call | undefined> {
    assert(this.isV2020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2021() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'ca7c162b26f098aca86d96980be8f72d2a245d5dbfafd458ca9fcad0c1450679'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2021(key: v2021.H256): Promise<v2021.Call | undefined> {
    assert(this.isV2021)
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
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'f12b69a85972222426a97487338a9ba465f521a15bba58d2f1248f4e8ca5248e'
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
  get isV2034() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '823d7172279ffe3f582d44e05b66df8a310a34ac464d5a706a36ccf92a43779d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2034(key: v2034.H256): Promise<v2034.Call | undefined> {
    assert(this.isV2034)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'GeneralCouncil', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2042() {
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === 'ae422e1b18086e53e0f94f7210b964c5dcab2476a433c2ecc641174ac1bd796b'
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
    return this.ctx._chain.getStorageItemTypeHash('GeneralCouncil', 'ProposalOf') === '2a9e802d69d4b6b825acc6faaf7cbf306672195da3fc4c22a8edb217e0eb3283'
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '5bb0f7ab07f2fe07ffa2dd974c435f37056f3956795ff0ea181bba24127f1154'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2000(key: v2000.H256): Promise<v2000.Call | undefined> {
    assert(this.isV2000)
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
  get isV2020() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '0b4e1a4278711de58776120c57d74f106ad8129565530325c0bc7e773ab59d29'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2020(key: v2020.H256): Promise<v2020.Call | undefined> {
    assert(this.isV2020)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2021() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ca7c162b26f098aca86d96980be8f72d2a245d5dbfafd458ca9fcad0c1450679'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2021(key: v2021.H256): Promise<v2021.Call | undefined> {
    assert(this.isV2021)
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
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'f12b69a85972222426a97487338a9ba465f521a15bba58d2f1248f4e8ca5248e'
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
  get isV2034() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '823d7172279ffe3f582d44e05b66df8a310a34ac464d5a706a36ccf92a43779d'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV2034(key: v2034.H256): Promise<v2034.Call | undefined> {
    assert(this.isV2034)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechnicalCommittee', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV2042() {
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === 'ae422e1b18086e53e0f94f7210b964c5dcab2476a433c2ecc641174ac1bd796b'
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
    return this.ctx._chain.getStorageItemTypeHash('TechnicalCommittee', 'ProposalOf') === '2a9e802d69d4b6b825acc6faaf7cbf306672195da3fc4c22a8edb217e0eb3283'
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('Tips', 'Tips') === '6b0e5b7ebc2d65a21d475feb112bade61e60fb8067df1e5e3e0b3430945fbb72'
  }

  /**
   *  TipsMap that are not yet completed. Keyed by the hash of `(reason, who)` from the value.
   *  This has the insecure enumerable hash function since the key itself is already
   *  guaranteed to be a secure hash.
   */
  async getAsV2000(key: v2000.H256): Promise<v2000.OpenTip | undefined> {
    assert(this.isV2000)
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
  get isV2000() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '7641e66c93ee52b69acfed5b20da999d04ba6a21fac610732405be939e87d4b7'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV2000(key: number): Promise<v2000.Proposal | undefined> {
    assert(this.isV2000)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Proposals', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}
