import assert from 'assert'
import {StorageContext, Result} from './support'
import * as v1001 from './v1001'
import * as v1101 from './v1101'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v900 from './v900'

export class BalancesTotalIssuanceStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The total units issued in the system.
   */
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') === 'f8ebe28eb30158172c0ccf672f7747c46a244f892d08ef2ebcbaadde34a26bc0'
  }

  /**
   *  The total units issued in the system.
   */
  async getAsV900(): Promise<bigint> {
    assert(this.isV900)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Balances', 'TotalIssuance')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Balances', 'TotalIssuance') != null
  }
}

export class CouncilCollectiveMembersStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'Members') === 'd14508def9da76532021b53d553e9048fd079e2e735d2393e6d531e6d1fd29ca'
  }

  /**
   *  The current members of the collective. This is stored sorted (just by value).
   */
  async getAsV900(): Promise<v900.H160[]> {
    assert(this.isV900)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'CouncilCollective', 'Members')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'Members') != null
  }
}

export class CouncilCollectiveProposalCountStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals so far.
   */
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  Proposals so far.
   */
  async getAsV900(): Promise<number> {
    assert(this.isV900)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'CouncilCollective', 'ProposalCount')
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalCount') != null
  }
}

export class CouncilCollectiveProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === 'd51fefa76f62a2b7ceac95525ba89c61cddd3315a5e7ee25d057967ccf5a99c8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: v900.H256): Promise<v900.Call | undefined> {
    assert(this.isV900)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'CouncilCollective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1001() {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === '919af622d951de732d3f1c7b7c7ddcf243abf5da10b66cab64909ba5624c46aa'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1001(key: v1001.H256): Promise<v1001.Call | undefined> {
    assert(this.isV1001)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'CouncilCollective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1101() {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === '6ead1e9c0d2fca989310366d152236346152ea4c00b150c42a830863adbd42b7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1101(key: v1101.H256): Promise<v1101.Call | undefined> {
    assert(this.isV1101)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'CouncilCollective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1201() {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === 'adac8b1e930f0dfc4bbaf266955a2478dcb8f27995a57c8bf984083640bdfe19'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1201(key: v1201.H256): Promise<v1201.Call | undefined> {
    assert(this.isV1201)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'CouncilCollective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1300() {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') === 'e299c91b5dedd2fa94ef2428f108832be8fa9944f78bfc107925d77dd2dee53b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1300(key: v1300.H256): Promise<v1300.Call | undefined> {
    assert(this.isV1300)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'CouncilCollective', 'ProposalOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('CouncilCollective', 'ProposalOf') != null
  }
}

export class DemocracyPreimagesStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'Preimages') === '60fe06c38eb62917e9245a08596a5df3f74614d80d6826dddb51ea5e1c475c31'
  }

  /**
   *  Map of hashes to the proposal preimage, along with who registered it and their deposit.
   *  The block number is the block at which it was deposited.
   */
  async getAsV900(key: v900.H256): Promise<v900.PreimageStatus | undefined> {
    assert(this.isV900)
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
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicPropCount') === '81bbbe8e62451cbcc227306706c919527aa2538970bd6d67a9969dd52c257d02'
  }

  /**
   *  The number of (public) proposals that have been made so far.
   */
  async getAsV900(): Promise<number> {
    assert(this.isV900)
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
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'PublicProps') === '50ae2b6d7ba179c0ff783cad2f9c19cbf1f250422f7e7b7cca7df80c63db8f09'
  }

  /**
   *  The public proposals. Unsorted. The second item is the proposal's hash.
   */
  async getAsV900(): Promise<[number, v900.H256, v900.H160][]> {
    assert(this.isV900)
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
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') === '2e86290b25fe028668a12b0e97306da926c3578533bd5de6396ccfc917cb15e5'
  }

  /**
   *  Information concerning any given referendum.
   * 
   *  TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
   */
  async getAsV900(key: number): Promise<v900.ReferendumInfo | undefined> {
    assert(this.isV900)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Democracy', 'ReferendumInfoOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Democracy', 'ReferendumInfoOf') != null
  }
}

export class TechCommitteeCollectiveProposalOfStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === 'd51fefa76f62a2b7ceac95525ba89c61cddd3315a5e7ee25d057967ccf5a99c8'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV900(key: v900.H256): Promise<v900.Call | undefined> {
    assert(this.isV900)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1001() {
    return this.ctx._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === '919af622d951de732d3f1c7b7c7ddcf243abf5da10b66cab64909ba5624c46aa'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1001(key: v1001.H256): Promise<v1001.Call | undefined> {
    assert(this.isV1001)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1101() {
    return this.ctx._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === '6ead1e9c0d2fca989310366d152236346152ea4c00b150c42a830863adbd42b7'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1101(key: v1101.H256): Promise<v1101.Call | undefined> {
    assert(this.isV1101)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1201() {
    return this.ctx._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === 'adac8b1e930f0dfc4bbaf266955a2478dcb8f27995a57c8bf984083640bdfe19'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1201(key: v1201.H256): Promise<v1201.Call | undefined> {
    assert(this.isV1201)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  get isV1300() {
    return this.ctx._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') === 'e299c91b5dedd2fa94ef2428f108832be8fa9944f78bfc107925d77dd2dee53b'
  }

  /**
   *  Actual proposal for a given hash, if it's current.
   */
  async getAsV1300(key: v1300.H256): Promise<v1300.Call | undefined> {
    assert(this.isV1300)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'TechCommitteeCollective', 'ProposalOf', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('TechCommitteeCollective', 'ProposalOf') != null
  }
}

export class TreasuryProposalsStorage {
  constructor(private ctx: StorageContext) {}

  /**
   *  Proposals that have been made.
   */
  get isV900() {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') === '5809021f1759a617a0966e43472afb05550ea26070ada63315ba0f5aab3dcf85'
  }

  /**
   *  Proposals that have been made.
   */
  async getAsV900(key: number): Promise<v900.Proposal | undefined> {
    assert(this.isV900)
    return this.ctx._chain.getStorage(this.ctx.block.hash, 'Treasury', 'Proposals', key)
  }

  /**
   * Checks whether the storage item is defined for the current chain version.
   */
  get isExists(): boolean {
    return this.ctx._chain.getStorageItemTypeHash('Treasury', 'Proposals') != null
  }
}
