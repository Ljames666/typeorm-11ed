import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryColumn } from 'typeorm';
import { EntityBase } from './entityBase';
import { Address } from './address.entity';
import { Assessment } from './assessment.entity';

@Entity({ name: 'growdever' })
export class Growdever extends EntityBase {
    @Column()
    name!: string;
    @Column()
    birth!: Date;
    @Column()
    status!: string;
    @Column()
    skills!: string;
    @Column({ name: 'address_id', nullable: true })
    addressId!: string | null;

    @OneToOne(() => Address)
    @JoinColumn({ name: 'address_id', referencedColumnName: 'id' })
    address?: Address;

    @OneToMany(() => Assessment, (e) => e.growdever)
    assessments?: Assessment[];
}
