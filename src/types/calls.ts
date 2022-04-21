import assert from 'assert'
import {CallContext, Result, deprecateLatest} from './support'
import * as v1001 from './v1001'
import * as v1019 from './v1019'

export class DemocracyVoteCall {
  constructor(private ctx: CallContext) {
    assert(this.ctx.extrinsic.name === 'democracy.vote')
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  The dispatch origin of this call must be _Signed_.
   * 
   *  - `ref_index`: The index of the referendum to vote for.
   *  - `vote`: The vote configuration.
   * 
   *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get isV1001(): boolean {
    return this.ctx._chain.getCallHash('democracy.vote') === '6cdb35b5ffcb74405cdf222b0cc0bf7ad7025d59f676bea6712d77bcc9aff1db'
  }

  /**
   *  Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   *  otherwise it is a vote to keep the status quo.
   * 
   *  The dispatch origin of this call must be _Signed_.
   * 
   *  - `ref_index`: The index of the referendum to vote for.
   *  - `vote`: The vote configuration.
   * 
   *  Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get asV1001(): {refIndex: number, vote: v1001.AccountVote} {
    assert(this.isV1001)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  /**
   * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `ref_index`: The index of the referendum to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get isV1019(): boolean {
    return this.ctx._chain.getCallHash('democracy.vote') === '3936a4cb49f77280bd94142d4ec458afcf5cb8a5e5b0d602b1b1530928021e28'
  }

  /**
   * Vote in a referendum. If `vote.is_aye()`, the vote is to enact the proposal;
   * otherwise it is a vote to keep the status quo.
   * 
   * The dispatch origin of this call must be _Signed_.
   * 
   * - `ref_index`: The index of the referendum to vote for.
   * - `vote`: The vote configuration.
   * 
   * Weight: `O(R)` where R is the number of referendums the voter has voted on.
   */
  get asV1019(): {refIndex: number, vote: v1019.AccountVote} {
    assert(this.isV1019)
    return this.ctx._chain.decodeCall(this.ctx.extrinsic)
  }

  get isLatest(): boolean {
    deprecateLatest()
    return this.isV1019
  }

  get asLatest(): {refIndex: number, vote: v1019.AccountVote} {
    deprecateLatest()
    return this.asV1019
  }
}
