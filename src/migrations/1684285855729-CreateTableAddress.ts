import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableAddress1684285855729 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'address',
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true, isNullable: false },
                    { name: 'street', type: 'varchar', length: '100', isNullable: false },
                    { name: 'city', type: 'varchar', length: '50', isNullable: false },
                    { name: 'uf', type: 'varchar', length: '2', isNullable: false },
                    {
                        name: 'created_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'current_timestamp',
                    },
                    {
                        name: 'updated_at',
                        type: 'timestamp',
                        isNullable: false,
                        default: 'current_timestamp',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address', true, true, true);
    }
}
