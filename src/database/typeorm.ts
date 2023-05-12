import { DataSource } from 'typeorm/data-source';
import config from './ormconfig';

export const dataSouce = new DataSource(config);
