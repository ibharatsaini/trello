"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
// Importing modules
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
// import statusRouter from "./api/status.router";
// import authRouter from "./api/auth.routes";
// import database from "./config/database";
// import serverless from "serverless-http";
const auth_routes_1 = __importDefault(require("./api/auth.routes"));
const status_router_1 = __importDefault(require("./api/status.router"));
const app = (0, express_1.default)();
// Middleware setup
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
// Serve static files from the frontend build
app.use(express_1.default.static(path_1.default.resolve(__dirname, "..", "frontend", "build")));
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
app.use("/api/status", status_router_1.default);
app.use("/api/auth", auth_routes_1.default);
app.use((req, res) => {
    res
        .status(404)
        .json({ message: "Route not found", req: req.method, d: req.url });
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
exports.default = app;
