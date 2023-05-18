import { MigrationInterface, QueryRunner } from "typeorm";

export class TableGrow1684368531359 implements MigrationInterface {
    name = 'TableGrow1684368531359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "address" ("id" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL, "street" character varying NOT NULL, "city" character varying NOT NULL, "uf" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "assessment" ("id" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL, "grade" integer NOT NULL, "subject" character varying NOT NULL, "growdever_id" character varying NOT NULL, CONSTRAINT "PK_c511a7dc128256876b6b1719401" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "growdever" ("id" character varying NOT NULL, "updated_at" TIMESTAMP NOT NULL, "created_at" TIMESTAMP NOT NULL, "name" character varying NOT NULL, "birth" TIMESTAMP NOT NULL, "status" character varying NOT NULL, "skills" character varying NOT NULL, "address_id" character varying, CONSTRAINT "REL_e31fea1f20c6983749d721027f" UNIQUE ("address_id"), CONSTRAINT "PK_e4de93ef840d0194b464e76b34b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "assessment" ADD CONSTRAINT "FK_45b5c1b56b1fcbf98c59bc097a1" FOREIGN KEY ("growdever_id") REFERENCES "growdever"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "growdever" ADD CONSTRAINT "FK_e31fea1f20c6983749d721027f0" FOREIGN KEY ("address_id") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "growdever" DROP CONSTRAINT "FK_e31fea1f20c6983749d721027f0"`);
        await queryRunner.query(`ALTER TABLE "assessment" DROP CONSTRAINT "FK_45b5c1b56b1fcbf98c59bc097a1"`);
        await queryRunner.query(`DROP TABLE "growdever"`);
        await queryRunner.query(`DROP TABLE "assessment"`);
        await queryRunner.query(`DROP TABLE "address"`);
    }

}
