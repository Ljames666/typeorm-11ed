import express from 'express';
import cors from 'cors';
import { pgHelper } from './database/pg-helper';

const app = express();
const port = process.env.PORT || 8081;

pgHelper
    .connect()
    .then(() => {
        app.listen(port, () => console.log(`serve is running on port ${8081}`));
    })
    .catch((error) => console.error(error));

app.use(express.json(), cors());
