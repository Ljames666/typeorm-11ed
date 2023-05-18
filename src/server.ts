import express from 'express';
import cors from 'cors';
import 'reflect-metadata';
import { ds } from './database/dataSource';
import Routes from './routes';

const app = express();
const port = process.env.PORT || 8081;
app.use(express.json(), cors());
Routes(app);
ds.initialize()
    .then(() => {
        app.listen(port, () => console.log(`serve is running on port ${8081}`));
    })
    .catch((error) => console.error(error));
