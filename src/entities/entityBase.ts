import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryColumn } from 'typeorm';
import { v4 } from 'uuid';

@Entity()
export abstract class EntityBase {
    @PrimaryColumn()
    id!: string;

    @Column({ name: 'updated_at' })
    updatedAt!: Date;

    @Column({ name: 'created_at' })
    createdAt!: Date;

    @BeforeInsert()
    beforeInsert() {
        this.id = v4();
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    @BeforeUpdate()
    beforeUpdate() {
        this.updatedAt = new Date();
    }
}
