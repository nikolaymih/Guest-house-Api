"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pino_1 = __importDefault(require("pino"));
const moment_1 = __importDefault(require("moment"));
const log = (0, pino_1.default)({
    transport: {
        target: 'pino-pretty',
        options: {
            levelFirst: true,
            translateFrom: true,
            colorize: true
        }
    },
    base: {
        pid: false
    },
    timestamp: () => `,"time= ${(0, moment_1.default)().format()}"`
});
exports.default = log;
