import path from 'path';
import dotenv from 'dotenv';
dotenv.config({ path:'.env'});

// Importing modules
import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import statusRouter from './router/status.router'
import authRouter from './router/auth.routes';
import database from './config/database'

const app = express();

// Middleware setup
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Serve static files from the frontend build
app.use(express.static(path.resolve(__dirname, '..', 'frontend', 'build')));

// Routers
app.use('/status', statusRouter);
app.use('/auth', authRouter);


if (process.env.NODE_ENV === 'production') {
    console.log('Production running');
    console.log(__dirname);
    app.get('*', (req: Request, res: Response) => {
        res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Express Server started on port: `, PORT);
    database();
});

export default app;
