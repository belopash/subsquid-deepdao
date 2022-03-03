import {Entity as Entity_, Column as Column_, PrimaryColumn as PrimaryColumn_, ManyToOne as ManyToOne_, Index as Index_} from "typeorm"
import * as marshal from "./marshal"
import {ChainInfo} from "./chainInfo.model"

@Entity_()
export class TokenHolder {
  constructor(props?: Partial<TokenHolder>) {
    Object.assign(this, props)
  }

  @PrimaryColumn_()
  id!: string

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  free!: bigint | undefined | null

  @Column_("numeric", {transformer: marshal.bigintTransformer, nullable: true})
  reserved!: bigint | undefined | null

  @Index_()
  @ManyToOne_(() => ChainInfo, {nullable: true})
  chain!: ChainInfo | undefined | null
}
