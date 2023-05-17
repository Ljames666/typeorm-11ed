import { Column, Entity } from 'typeorm';
import { EntityBase } from './entityBase';

@Entity({ name: 'address' })
export class Address extends EntityBase {
    @Column()
    street!: string;

    @Column()
    city!: string;

    @Column()
    uf!: string;
}
