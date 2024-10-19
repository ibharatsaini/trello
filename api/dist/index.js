"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: '.env' });
// Importing modules
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const cors_1 = __importDefault(require("cors"));
const status_router_1 = __importDefault(require("./router/status.router"));
const auth_routes_1 = __importDefault(require("./router/auth.routes"));
const database_1 = __importDefault(require("./config/database"));
const app = (0, express_1.default)();
// Middleware setup
app.use((0, cors_1.default)());
app.use((0, cookie_parser_1.default)());
app.use(express_1.default.json());
// Serve static files from the frontend build
app.use(express_1.default.static(path_1.default.resolve(__dirname, '..', 'frontend', 'build')));
// Routers
app.use('/status', status_router_1.default);
app.use('/auth', auth_routes_1.default);
console.log(process.env.DATABASE_URL);
if (process.env.NODE_ENV === 'production') {
    console.log('Production running');
    console.log(__dirname);
    app.get('*', (req, res) => {
        res.sendFile(path_1.default.resolve(__dirname, '..', 'frontend', 'build', 'index.html'));
    });
}
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Express Server started on port: `, PORT);
    (0, database_1.default)();
});
exports.default = app;
