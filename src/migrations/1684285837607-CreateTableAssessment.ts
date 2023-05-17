import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateTableAssessment1684285837607 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'assessment',
                columns: [
                    { name: 'id', type: 'uuid', isPrimary: true, isNullable: false },
                    {
                        name: 'grade',
                        type: 'numeric',
                        precision: 4,
                        scale: 2,
                        isNullable: false,
                    },
                    {
                        name: 'subject',
                        type: 'varchar',
                        length: '50',
                        isNullable: false,
                    },
                    { name: 'growdever_id', type: 'uuid', isNullable: false },
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
                foreignKeys: [
                    {
                        name: 'fk_assessment_growdever',
                        columnNames: ['growdever_id'],
                        referencedColumnNames: ['id'],
                        referencedTableName: 'growdever',
                    },
                ],
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('assessment', true, true, true);
    }
}
