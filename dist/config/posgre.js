"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostgreSQLConfig = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
dotenv_1.default.config({
    path: "process.env"
});
const isProduction = process.env.PRODUCTION === 'true';
console.log(process.env.PRODUCTION);
const productionConf = {
    connectionString: "postgres://hieu:ywG8Zbj73TeoV4NG0AOfnwLXtvsiMme9@dpg-celfo7pa6gdkdn2csu3g-a/lpshop"
};
const nonProductionConf = {
    host: process.env.HOST,
    port: Number(process.env.PORT),
    database: process.env.DATABASE,
    user: process.env.USER,
    password: process.env.PASSWORD,
    // ssl : true
    ssl: {
        rejectUnauthorized: false,
        cert: fs_1.default.readFileSync('./cert.pem').toString(),
        key: fs_1.default.readFileSync('./key.pem').toString(),
    },
    query_timeout: 0,
    connectionTimeoutMillis: 0,
};
exports.PostgreSQLConfig = isProduction ? productionConf : nonProductionConf;
