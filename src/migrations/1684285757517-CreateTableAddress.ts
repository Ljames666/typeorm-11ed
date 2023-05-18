import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableAddress1684285757517 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'address',
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true, isNullable: false },
                    { name: 'street', type: 'varchar', isNullable: false },
                    { name: 'city', type: 'varchar', isNullable: false },
                    { name: 'uf', type: 'varchar', isNullable: false },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address', true, true, true);
    }
}
