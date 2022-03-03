module.exports = class Data1646318859942 {
  name = 'Data1646318859942'

  async up(db) {
    await db.query(`CREATE TABLE "token_holder" ("id" character varying NOT NULL, "free" numeric, "reserved" numeric, "chain_id" character varying, CONSTRAINT "PK_c5e10d5c2543fac00a5d3086a2c" PRIMARY KEY ("id"))`)
    await db.query(`CREATE INDEX "IDX_cd72f70f23a8d040f604ae04b7" ON "token_holder" ("chain_id") `)
    await db.query(`ALTER TABLE "token_holder" ADD CONSTRAINT "FK_cd72f70f23a8d040f604ae04b7d" FOREIGN KEY ("chain_id") REFERENCES "chain_info"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`)
  }

  async down(db) {
    await db.query(`DROP TABLE "token_holder"`)
    await db.query(`DROP INDEX "public"."IDX_cd72f70f23a8d040f604ae04b7"`)
    await db.query(`ALTER TABLE "token_holder" DROP CONSTRAINT "FK_cd72f70f23a8d040f604ae04b7d"`)
  }
}
