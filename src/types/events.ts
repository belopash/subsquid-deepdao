import assert from 'assert'
import {EventContext, Result, deprecateLatest} from './support'
import * as v1201 from './v1201'
import * as v1300 from './v1300'
import * as v1401 from './v1401'
import * as v49 from './v49'
import * as v701 from './v701'
import * as v900 from './v900'

export class CouncilCollectiveApprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'councilCollective.Approved')
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV49(): Uint8Array {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV1201(): {proposalHash: v1201.H256} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256} {
    deprecateLatest()
    return this.asV1201
  }
}

export class CouncilCollectiveClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'councilCollective.Closed')
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   *  A proposal was closed because its threshold was reached or after its duration was up.
   *  \[proposal_hash, yes, no\]
   */
  get asV49(): [Uint8Array, number, number] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV1201(): {proposalHash: v1201.H256, yes: number, no: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256, yes: number, no: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class CouncilCollectiveDisapprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'councilCollective.Disapproved')
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   *  A motion was not approved by the required threshold.
   *  \[proposal_hash\]
   */
  get asV49(): Uint8Array {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV1201(): {proposalHash: v1201.H256} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256} {
    deprecateLatest()
    return this.asV1201
  }
}

export class CouncilCollectiveExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'councilCollective.Executed')
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Executed') === 'f98b87482f886396f52d6875083e9b201ac0e3f97d718c37613afad51e85a9b7'
  }

  /**
   *  A motion was executed; result will be `Ok` if it returned without error.
   *  \[proposal_hash, result\]
   */
  get asV49(): [Uint8Array, Result<null, v49.DispatchError>] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV900(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV900(): [v900.H256, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1201(): {proposalHash: v1201.H256, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1300(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1300(): {proposalHash: v1300.H256, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1401(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1401(): {proposalHash: v1401.H256, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1401
  }

  get asLatest(): {proposalHash: v1401.H256, result: Result<null, v1401.DispatchError>} {
    deprecateLatest()
    return this.asV1401
  }
}

export class CouncilCollectiveProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'councilCollective.Proposed')
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
  }

  /**
   *  A motion (given hash) has been proposed (by given account) with a threshold (given
   *  `MemberCount`).
   *  \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV49(): [Uint8Array, number, Uint8Array, number] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV1201(): {account: v1201.AccountId20, proposalIndex: number, proposalHash: v1201.H256, threshold: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {account: v1201.AccountId20, proposalIndex: number, proposalHash: v1201.H256, threshold: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class CouncilCollectiveVotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'councilCollective.Voted')
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
  }

  /**
   *  A motion (given hash) has been voted on by given account, leaving
   *  a tally (yes votes and no votes given respectively as `MemberCount`).
   *  \[account, proposal_hash, voted, yes, no\]
   */
  get asV49(): [Uint8Array, Uint8Array, boolean, number, number] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('councilCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV1201(): {account: v1201.AccountId20, proposalHash: v1201.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {account: v1201.AccountId20, proposalHash: v1201.H256, voted: boolean, yes: number, no: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyCancelledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Cancelled')
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.Cancelled') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A referendum has been cancelled. \[ref_index\]
   */
  get asV49(): number {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A referendum has been cancelled.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.Cancelled') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A referendum has been cancelled.
   */
  get asV1201(): {refIndex: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {refIndex: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Executed')
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === 'f267e1fa04f32dd15473e3a6d2514ae684bd7ba5516d192ba70e4d49211868aa'
  }

  /**
   *  A proposal has been enacted. \[ref_index, is_ok\]
   */
  get asV49(): [number, boolean] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get isV701(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === '8d7c54bbac5b548a558504b413146fe5bff0b9275a2e7f4c831a148273ee173a'
  }

  /**
   *  A proposal has been enacted. \[ref_index, result\]
   */
  get asV701(): [number, Result<null, v701.DispatchError>] {
    assert(this.isV701)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get isV900(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === '4569400573983e7dffe031a303e5028518f139390f47223a097cb35de3005258'
  }

  /**
   * A proposal has been enacted. \[ref_index, result\]
   */
  get asV900(): [number, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === '1f0fb32f2f0aaba231b69023c5858e85b8bfd660b5ce8c47d1b99b39602e4963'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1201(): {refIndex: number, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1300(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === 'fe9cbb2e8fcebf406053419831a31120f211751f75230bfefe38454cc691c00a'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1300(): {refIndex: number, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been enacted.
   */
  get isV1401(): boolean {
    return this.ctx._chain.getEventHash('democracy.Executed') === '98c3caaef1b84143deea16c761096200c5e0e631c6a3776ed012edc9788cf6e2'
  }

  /**
   * A proposal has been enacted.
   */
  get asV1401(): {refIndex: number, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1401
  }

  get asLatest(): {refIndex: number, result: Result<null, v1401.DispatchError>} {
    deprecateLatest()
    return this.asV1401
  }
}

export class DemocracyNotPassedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.NotPassed')
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.NotPassed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been rejected by referendum. \[ref_index\]
   */
  get asV49(): number {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.NotPassed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been rejected by referendum.
   */
  get asV1201(): {refIndex: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {refIndex: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyPassedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Passed')
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.Passed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  A proposal has been approved by referendum. \[ref_index\]
   */
  get asV49(): number {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal has been approved by referendum.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.Passed') === '8a84371403a09e2f8fc2aac80f5a8a53229b346c4b3859069867b8e656b13450'
  }

  /**
   * A proposal has been approved by referendum.
   */
  get asV1201(): {refIndex: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {refIndex: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyPreimageInvalidEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageInvalid')
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageInvalid') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was invalid.
   *  \[proposal_hash, ref_index\]
   */
  get asV49(): [Uint8Array, number] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageInvalid') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was invalid.
   */
  get asV1201(): {proposalHash: v1201.H256, refIndex: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256, refIndex: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyPreimageMissingEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageMissing')
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageMissing') === 'a86a85822cc09ae7b3b9587f12944d2954476832a499d679c195ffaa86c16212'
  }

  /**
   *  A proposal could not be executed because its preimage was missing.
   *  \[proposal_hash, ref_index\]
   */
  get asV49(): [Uint8Array, number] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageMissing') === 'd21a40db31aa35f736256c62aed3838360364afbf5d732372a68110d811862d6'
  }

  /**
   * A proposal could not be executed because its preimage was missing.
   */
  get asV1201(): {proposalHash: v1201.H256, refIndex: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256, refIndex: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyPreimageNotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageNoted')
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageNoted') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   *  A proposal's preimage was noted, and the deposit taken. \[proposal_hash, who, deposit\]
   */
  get asV49(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageNoted') === 'd47be2e4a05481fd42e21a0e80292e7b68789de4198c4087194b44ca5b857093'
  }

  /**
   * A proposal's preimage was noted, and the deposit taken.
   */
  get asV1201(): {proposalHash: v1201.H256, who: v1201.AccountId20, deposit: bigint} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256, who: v1201.AccountId20, deposit: bigint} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyPreimageReapedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageReaped')
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageReaped') === 'c1f551cd38e3880870dfafd43056cf3e144a85c870b0b513c2a042c7e4634bf7'
  }

  /**
   *  A registered preimage was removed and the deposit collected by the reaper.
   *  \[proposal_hash, provider, deposit, reaper\]
   */
  get asV49(): [Uint8Array, Uint8Array, bigint, Uint8Array] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageReaped') === '79380123f072831563a9a29ef7dd7d312f309e2ba7fb0a62b701bc6410ad30b7'
  }

  /**
   * A registered preimage was removed and the deposit collected by the reaper.
   */
  get asV1201(): {proposalHash: v1201.H256, provider: v1201.AccountId20, deposit: bigint, reaper: v1201.AccountId20} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256, provider: v1201.AccountId20, deposit: bigint, reaper: v1201.AccountId20} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyPreimageUsedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.PreimageUsed')
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageUsed') === '317eeaadc76ca7d763e634bff31da2b98d72376d5e842a0cded1cf421e0694c1'
  }

  /**
   *  A proposal preimage was removed and used (the deposit was returned).
   *  \[proposal_hash, provider, deposit\]
   */
  get asV49(): [Uint8Array, Uint8Array, bigint] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.PreimageUsed') === '84e66e8024f25586e9c223173463c55e83f2ff96130417e7f93374803337e024'
  }

  /**
   * A proposal preimage was removed and used (the deposit was returned).
   */
  get asV1201(): {proposalHash: v1201.H256, provider: v1201.AccountId20, deposit: bigint} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256, provider: v1201.AccountId20, deposit: bigint} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Proposed')
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.Proposed') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A motion has been proposed by a public account. \[proposal_index, deposit\]
   */
  get asV49(): [number, bigint] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion has been proposed by a public account.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.Proposed') === '02ae149915d453560f4d12074a380744b3bbb2fe4c235e963f440e2d79243477'
  }

  /**
   * A motion has been proposed by a public account.
   */
  get asV1201(): {proposalIndex: number, deposit: bigint} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalIndex: number, deposit: bigint} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyStartedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Started')
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.Started') === '31dcae10175d30392db6fc8a872e963baae4bcf3ee28dfd38b1653a0751c031f'
  }

  /**
   *  A referendum has begun. \[ref_index, threshold\]
   */
  get asV49(): [number, v49.VoteThreshold] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A referendum has begun.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.Started') === '663653944bacc0e562b015a412877b12c32bc62814b673192c550438bf618ab4'
  }

  /**
   * A referendum has begun.
   */
  get asV1201(): {refIndex: number, threshold: v1201.VoteThreshold} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {refIndex: number, threshold: v1201.VoteThreshold} {
    deprecateLatest()
    return this.asV1201
  }
}

export class DemocracyTabledEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'democracy.Tabled')
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('democracy.Tabled') === 'a02fb718124f3ad2168551f865aebb4f81eb1cfe14c9fb743a86ef04f294e29b'
  }

  /**
   *  A public proposal has been tabled for referendum vote. \[proposal_index, deposit, depositors\]
   */
  get asV49(): [number, bigint, Uint8Array[]] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('democracy.Tabled') === '2b043f58d8d5c231c7840a8ddeda0d0c9db1b6f9985329aaaac42d4661be939e'
  }

  /**
   * A public proposal has been tabled for referendum vote.
   */
  get asV1201(): {proposalIndex: number, deposit: bigint, depositors: v1201.AccountId20[]} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalIndex: number, deposit: bigint, depositors: v1201.AccountId20[]} {
    deprecateLatest()
    return this.asV1201
  }
}

export class TechCommitteeCollectiveApprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'techCommitteeCollective.Approved')
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV900(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Approved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV900(): v900.H256 {
    assert(this.isV900)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was approved by the required threshold.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Approved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was approved by the required threshold.
   */
  get asV1201(): {proposalHash: v1201.H256} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256} {
    deprecateLatest()
    return this.asV1201
  }
}

export class TechCommitteeCollectiveClosedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'techCommitteeCollective.Closed')
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get isV900(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Closed') === '7d509ca6ee36d401f2d5410aa32038550c256cc3ce4b34cdfe1f8adea0e1679c'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   * \[proposal_hash, yes, no\]
   */
  get asV900(): [v900.H256, number, number] {
    assert(this.isV900)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Closed') === '084e73926c22836c888c17e49053d3b72e2feaa904b8f0175d21fb5b800542f9'
  }

  /**
   * A proposal was closed because its threshold was reached or after its duration was up.
   */
  get asV1201(): {proposalHash: v1201.H256, yes: number, no: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256, yes: number, no: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class TechCommitteeCollectiveDisapprovedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'techCommitteeCollective.Disapproved')
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get isV900(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Disapproved') === '21ea0c8f2488eafafdea1de92b54cd17d8b1caff525e37616abf0ff93f11531d'
  }

  /**
   * A motion was not approved by the required threshold.
   * \[proposal_hash\]
   */
  get asV900(): v900.H256 {
    assert(this.isV900)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Disapproved') === 'b8668610145a6851ad2d5b7dd4bfc15e29402d9a8558401ab955896007f866a5'
  }

  /**
   * A motion was not approved by the required threshold.
   */
  get asV1201(): {proposalHash: v1201.H256} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {proposalHash: v1201.H256} {
    deprecateLatest()
    return this.asV1201
  }
}

export class TechCommitteeCollectiveExecutedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'techCommitteeCollective.Executed')
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get isV900(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Executed') === '019142f0bd31225b17a5d98473d6ee9928b1e71bb401e1e42248abdb9dca92c7'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   * \[proposal_hash, result\]
   */
  get asV900(): [v900.H256, Result<null, v900.DispatchError>] {
    assert(this.isV900)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Executed') === '5b848c4d2e38fbfb6752ba650f8662bd0df106f400d22ae305ed497d7574ee03'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1201(): {proposalHash: v1201.H256, result: Result<null, v1201.DispatchError>} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1300(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Executed') === '3f97432326c1bc7a1d2b8f8e2b864f870aa8a7a926361a7af32c8e5c45ed9c5e'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1300(): {proposalHash: v1300.H256, result: Result<null, v1300.DispatchError>} {
    assert(this.isV1300)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get isV1401(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Executed') === 'e7bba992b17737087cf79037068ecde07b0ef6afb29be3ddbe1d7afe57e365aa'
  }

  /**
   * A motion was executed; result will be `Ok` if it returned without error.
   */
  get asV1401(): {proposalHash: v1401.H256, result: Result<null, v1401.DispatchError>} {
    assert(this.isV1401)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1401
  }

  get asLatest(): {proposalHash: v1401.H256, result: Result<null, v1401.DispatchError>} {
    deprecateLatest()
    return this.asV1401
  }
}

export class TechCommitteeCollectiveProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'techCommitteeCollective.Proposed')
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get isV900(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Proposed') === 'a613c04c45835d6c8d0d8935013395b895fbdea266e8525d81b3e176c482215c'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   * \[account, proposal_index, proposal_hash, threshold\]
   */
  get asV900(): [v900.H160, number, v900.H256, number] {
    assert(this.isV900)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Proposed') === '2f562f77da96c6e9d914e5ea299d49ccdf6e5f2ac7298893761b08e64df38909'
  }

  /**
   * A motion (given hash) has been proposed (by given account) with a threshold (given
   * `MemberCount`).
   */
  get asV1201(): {account: v1201.AccountId20, proposalIndex: number, proposalHash: v1201.H256, threshold: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {account: v1201.AccountId20, proposalIndex: number, proposalHash: v1201.H256, threshold: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class TechCommitteeCollectiveVotedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'techCommitteeCollective.Voted')
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get isV900(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Voted') === '6ebdb08adf34a07ba1fe77ab63c9bbeeb0196f65844713e59a373a8e8b2527f0'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   * \[account, proposal_hash, voted, yes, no\]
   */
  get asV900(): [v900.H160, v900.H256, boolean, number, number] {
    assert(this.isV900)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get isV1201(): boolean {
    return this.ctx._chain.getEventHash('techCommitteeCollective.Voted') === '21c6fc995cdece31f27f75fd29db36311e324efedc01dd968dcf754af1904de9'
  }

  /**
   * A motion (given hash) has been voted on by given account, leaving
   * a tally (yes votes and no votes given respectively as `MemberCount`).
   */
  get asV1201(): {account: v1201.AccountId20, proposalHash: v1201.H256, voted: boolean, yes: number, no: number} {
    assert(this.isV1201)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1201
  }

  get asLatest(): {account: v1201.AccountId20, proposalHash: v1201.H256, voted: boolean, yes: number, no: number} {
    deprecateLatest()
    return this.asV1201
  }
}

export class TreasuryAwardedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Awarded')
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('treasury.Awarded') === '1ca1bbccad98d48e2621a47ca30161714034e352019415514ef1338743ce0fd8'
  }

  /**
   *  Some funds have been allocated. \[proposal_index, award, beneficiary\]
   */
  get asV49(): [number, bigint, Uint8Array] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * Some funds have been allocated.
   */
  get isV1300(): boolean {
    return this.ctx._chain.getEventHash('treasury.Awarded') === '6f95fbb8a91e310ee6d32f9a9933578e41f325c1506fac22a1f57925002cd904'
  }

  /**
   * Some funds have been allocated.
   */
  get asV1300(): {proposalIndex: number, award: bigint, account: v1300.AccountId20} {
    assert(this.isV1300)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1300
  }

  get asLatest(): {proposalIndex: number, award: bigint, account: v1300.AccountId20} {
    deprecateLatest()
    return this.asV1300
  }
}

export class TreasuryProposedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Proposed')
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('treasury.Proposed') === '0a0f30b1ade5af5fade6413c605719d59be71340cf4884f65ee9858eb1c38f6c'
  }

  /**
   *  New proposal. \[proposal_index\]
   */
  get asV49(): number {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * New proposal.
   */
  get isV1300(): boolean {
    return this.ctx._chain.getEventHash('treasury.Proposed') === 'e9ffb62c9cf38a8abb0e419c0655e66f4415cc9c0faa1066316d07cb033b8ff6'
  }

  /**
   * New proposal.
   */
  get asV1300(): {proposalIndex: number} {
    assert(this.isV1300)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1300
  }

  get asLatest(): {proposalIndex: number} {
    deprecateLatest()
    return this.asV1300
  }
}

export class TreasuryRejectedEvent {
  constructor(private ctx: EventContext) {
    assert(this.ctx.event.name === 'treasury.Rejected')
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get isV49(): boolean {
    return this.ctx._chain.getEventHash('treasury.Rejected') === 'a0e51e81445baa317309351746e010ed2435e30ff7e53fbb2cf59283f3b9c536'
  }

  /**
   *  A proposal was rejected; funds were slashed. \[proposal_index, slashed\]
   */
  get asV49(): [number, bigint] {
    assert(this.isV49)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get isV1300(): boolean {
    return this.ctx._chain.getEventHash('treasury.Rejected') === 'f9b7fb646bc37c38ad87edfaa08a0ca293b38294934c1114934c7a8fe00b6b79'
  }

  /**
   * A proposal was rejected; funds were slashed.
   */
  get asV1300(): {proposalIndex: number, slashed: bigint} {
    assert(this.isV1300)
    return this.ctx._chain.decodeEvent(this.ctx.event)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1300
  }

  get asLatest(): {proposalIndex: number, slashed: bigint} {
    deprecateLatest()
    return this.asV1300
  }
}
