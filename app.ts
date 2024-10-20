import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: ".env" });
import { Request, Response } from "express";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import authRouter from "./api/auth.routes";
import statusRouter from "./api/status.router";

const app = express();
app.use(cors());
app.use(cookieParser());
app.use(express.json());
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
// app.use(database)
app.use("/api/status", statusRouter);
app.use("/api/auth", authRouter);

app.use((req: Request, res: Response) => {
  res
    .status(404)
    .json({ message: "Route not found", req: req.method, url: req.url })
});

// const routes = app._router.stack.forEach((middleware: any) => {
//     if (middleware.route) { // Route middleware
//       const route = middleware.route;
//       const methods = Object.keys(route.methods).join(', ').toUpperCase();
//       console.log(`${methods} ${route.path}`);
//     } else if (middleware.name === 'router') { // Sub-routes within routers
//       middleware.handle.stack.forEach((handler: any) => {
//         const route = handler.route;
//         if (route) {
//           const methods = Object.keys(route.methods).join(', ').toUpperCase();
//           console.log(`${methods} ${route.path}`);
//         }
//       });
//     }
//   });
//   console.log(routes)

// export const handler = serverless(app);
export default app;
