import express from 'express';
import mongoose from 'mongoose';
import {} from 'dotenv/config';
import { parameterFactorRouter } from './controller/parameterFactor.js';

const app = express();
const port = process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use('/factors', parameterFactorRouter);

app.listen(port, () => {
    console.log(`app working on: http://localhost:${port}`);
});