import express from 'express';
import airoute from './routes/ai.route.js';
import userroutes from './routes/userRoutes.js';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/ai', airoute);
app.use('/user', userroutes);

export default app;
