import 'dotenv/config';
import { DataSourceOptions } from 'typeorm';

const config: DataSourceOptions = {
    type: 'postgres',
    url: process.env.DB_URL,
    // entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: false,
    logging: false,
    //  migrations: [__dirname + '/../**/*.migration{.ts,.js}'],
    ssl: {
        rejectUnauthorized: false,
    },
};

export default config;
