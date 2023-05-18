import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { CreateTableAddress1684285757517 } from '../migrations/1684285757517-CreateTableAddress';
import { CreateTableAssessment1684285855729 } from '../migrations/1684285855729-CreateTableAssessment';
import { CreateTableGrowdever1684285837607 } from '../migrations/1684285837607-CreateTableGrowdever';
import { Address } from '../entities/address.entity';
import { Growdever } from '../entities/growdever.entity';
import { Assessment } from '../entities/assessment.entity';
import { TableGrow1684368531359 } from '../migrations/1684368531359-TableGrow';

const config: DataSourceOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    entities: [Growdever, Address, Assessment],
    synchronize: false,
    logging: false,
    migrations: [
        // TableGrow1684368531359,
        CreateTableGrowdever1684285837607,
        CreateTableAssessment1684285855729,
        CreateTableAddress1684285757517,
    ],
    ssl: {
        rejectUnauthorized: false,
    },
};

export default config;
