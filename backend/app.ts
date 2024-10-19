import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });

// Importing modules
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from "cors";
import statusRouter from "./api/status.router";
import authRouter from "./api/auth.routes";
import database from "./config/database";
import serverless from "serverless-http";
import api from "./app";

const app = express();

// Middleware setup
app.use(cors());
app.use(cookieParser());
app.use(express.json());

// Serve static files from the frontend build
app.use(express.static(path.resolve(__dirname, "..", "frontend", "build")));

// Routers
// app.use('/api/status', statusRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/');

// if (process.env.NODE_ENV === 'production') {
//     console.log('Production running');
//     console.log(__dirname);
//     app.get('*', (req: Request, res: Response) => {
//         res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
//     });
// }

app.use("/api/v1", api);

app.use((req: Request, res: Response) => {
  res
    .status(404)
    .json({ message: "Route not found", req: req.method, d: req.url });
});

// export const handler = serverless(app);
export default app;
