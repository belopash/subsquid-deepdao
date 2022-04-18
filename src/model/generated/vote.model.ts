import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {Proposal} from "./proposal.model"
import {VoteDecision} from "./_voteDecision"
import {VoteBalance, fromJsonVoteBalance} from "./_voteBalance"

@Entity_()
export class Vote {
  constructor(props?: Partial<Vote>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("text", {nullable: false})
  voter!: string

  @Index_()
  @ManyToOne_(() => Proposal, {nullable: false})
  proposal!: Proposal

  @Column_("integer", {nullable: false})
  createdAt!: number

  @Column_("timestamp with time zone", {nullable: false})
  timestamp!: Date

  @Column_("varchar", {length: 7, nullable: true})
  decision!: VoteDecision | undefined | null

  @Column_("jsonb", {transformer: {to: obj => obj == null ? undefined : obj.toJSON(), from: obj => obj == null ? undefined : fromJsonVoteBalance(obj)}, nullable: true})
  balance!: VoteBalance | undefined | null

  @Column_("integer", {nullable: true})
  lockPeriod!: number | undefined | null
}