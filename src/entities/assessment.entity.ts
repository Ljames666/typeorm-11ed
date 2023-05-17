import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { EntityBase } from './entityBase';
import { Growdever } from './growdever.entity';

@Entity('assessment')
export class Assessment extends EntityBase {
    @Column()
    grade!: number;

    @Column()
    subject!: string;

    @Column({ name: 'growdever_id' })
    growdeverId!: string;

    @ManyToOne(() => Growdever, (e) => e.assessments)
    @JoinColumn({ name: 'growdever_id', referencedColumnName: 'id' })
    growdever?: Growdever;
}
