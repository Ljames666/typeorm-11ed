// import dotenv from 'dotenv-safe';
import { DataSource } from 'typeorm';

import { Growdever } from '../entities/growdever.entity';
import { Address } from '../entities/address.entity';
import { Assessment } from '../entities/assessment.entity';
import { CreateTableGrowdever1684285757517 } from '../migrations/1684285757517-CreateTableGrowdever';
import { CreateTableAssessment1684285837607 } from '../migrations/1684285837607-CreateTableAssessment';
import { CreateTableAddress1684285855729 } from '../migrations/1684285855729-CreateTableAddress';
import config from './ormconfig';

// dotenv.config();

// export const dataSource = new DataSource({
//     type: 'postgres',
//     url: process.env.DB_URL,
//     // synchronize: true,
//     logging: false,
//     entities: [Growdever, Address, Assessment],
//     migrations: [
//         CreateTableGrowdever1684285757517,
//         CreateTableAssessment1684285837607,
//         CreateTableAddress1684285855729,
//     ],
//     ssl: {
//         rejectUnauthorized: false,
//     },
// });

export const ds = new DataSource(config);