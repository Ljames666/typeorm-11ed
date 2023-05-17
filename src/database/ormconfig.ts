import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';
import { CreateTableGrowdever1684285757517 } from '../migrations/1684285757517-CreateTableGrowdever';
import { CreateTableAssessment1684285837607 } from '../migrations/1684285837607-CreateTableAssessment';
import { CreateTableAddress1684285855729 } from '../migrations/1684285855729-CreateTableAddress';
import { Address } from '../entities/address.entity';
import { Growdever } from '../entities/growdever.entity';
import { Assessment } from '../entities/assessment.entity';

const config: DataSourceOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    entities: [Growdever, Address, Assessment],
    synchronize: false,
    logging: false,
    migrations: [
        CreateTableGrowdever1684285757517,
        CreateTableAssessment1684285837607,
        CreateTableAddress1684285855729,
    ],
    ssl: {
        rejectUnauthorized: false,
    },
};

export default config;
