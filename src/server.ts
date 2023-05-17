import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { dataSource } from './database/dataSource';

const app = express();
const port = process.env.PORT || 8081;
app.use(express.json(), cors());

dataSource
    .initialize()
    .then(() => {
        app.listen(port, () => console.log(`serve is running on port ${8081}`));
    })
    .catch((error) => console.error(error));
