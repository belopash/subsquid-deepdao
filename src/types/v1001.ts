import type {Result} from './support'

export type VoteThreshold = VoteThreshold_SuperMajorityApprove | VoteThreshold_SuperMajorityAgainst | VoteThreshold_SimpleMajority

export interface VoteThreshold_SuperMajorityApprove {
  __kind: 'SuperMajorityApprove'
}

export interface VoteThreshold_SuperMajorityAgainst {
  __kind: 'SuperMajorityAgainst'
}

export interface VoteThreshold_SimpleMajority {
  __kind: 'SimpleMajority'
}

export type AccountVote = AccountVote_Standard | AccountVote_Split

export interface AccountVote_Standard {
  __kind: 'Standard'
  value: AccountVoteStandard
}

export interface AccountVote_Split {
  __kind: 'Split'
  value: AccountVoteSplit
}

export type PreimageStatus = PreimageStatus_Missing | PreimageStatus_Available

export interface PreimageStatus_Missing {
  __kind: 'Missing'
  value: number
}

export interface PreimageStatus_Available {
  __kind: 'Available'
  value: PreimageStatusAvailable
}

export type ReferendumInfo = ReferendumInfo_Ongoing | ReferendumInfo_Finished

export interface ReferendumInfo_Ongoing {
  __kind: 'Ongoing'
  value: ReferendumStatus
}

export interface ReferendumInfo_Finished {
  __kind: 'Finished'
  value: ReferendumInfoFinished
}

export interface AccountVoteStandard {
  vote: number
  balance: bigint
}

export interface AccountVoteSplit {
  aye: bigint
  nay: bigint
}

export interface PreimageStatusAvailable {
  data: Uint8Array
  provider: Uint8Array
  deposit: bigint
  since: number
  expiry: (number | undefined)
}

export interface ReferendumStatus {
  end: number
  proposalHash: Uint8Array
  threshold: VoteThreshold
  delay: number
  tally: Tally
}

export interface ReferendumInfoFinished {
  approved: boolean
  end: number
}

export interface Tally {
  ayes: bigint
  nays: bigint
  turnout: bigint
}
