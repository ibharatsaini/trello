"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: ".env" });
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./api/auth.routes"));
const status_router_1 = __importDefault(require("./api/status.router"));
const board_router_1 = __importDefault(require("./api/board.router"));
const list_router_1 = __importDefault(require("./api/list.router"));
const card_router_1 = __importDefault(require("./api/card.router"));
const app = (0, express_1.default)();
// app.use(cors());
const allowedOrigins = [
    "http://localhost:5173",
    /\.vercel\.app$/ // regex to match any subdomain on vercel.app
];
app.use((0, cookie_parser_1.default)());
app.use((0, cors_1.default)({
    origin: (origin, callback) => {
        // Allow requests with no origin, like mobile apps or curl requests
        if (!origin)
            return callback(null, true);
        if (allowedOrigins.some((allowedOrigin) => allowedOrigin instanceof RegExp ? allowedOrigin.test(origin) : allowedOrigin === origin)) {
            return callback(null, true);
        }
        return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.static(path_1.default.resolve(__dirname, "..", "frontend", "build")));
// app.use(express.static(path.resolve(__dirname, "..", "build")));  
// Routers
// app.use('/api/status', statusRouter);
// app.use('/api/auth', authRouter);
// app.use('/api/');
// if (process.env.NODE_ENV === 'production') {
//     app.get('*', (req: Request, res: Response) => {
//         res.sendFile(path.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
//     });
// }
// app.use(database)
//api status
app.use("/api/status", status_router_1.default);
app.use("/api/auth", auth_routes_1.default);
app.use("/api/board", board_router_1.default);
app.use("/api/list", list_router_1.default);
app.use("/api/card", card_router_1.default);
app.use((req, res) => {
    res
        .status(404)
        .json({ message: "Route not found", req: req.method, url: req.url });
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
