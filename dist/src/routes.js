"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("./db/prisma"));
const reservation_controller_1 = require("./controller/reservation.controller");
const validateResource_1 = require("./middleware/validateResource");
const reservation_schema_1 = require("./schema/reservation.schema");
exports.default = (app) => {
    app.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        yield prisma_1.default.user.create({
            data: {
                email: 'patkan',
                name: 'petrov1235',
                password: 'petrov',
            }
        });
        const users = yield prisma_1.default.user.findMany();
        const names = users.map(user => user.name);
        res.send(`This db consists of ${names.length} records with names: ${names.join(', ')}`);
    }));
    app.post('/request', (0, validateResource_1.validateResource)(reservation_schema_1.createReservationSchema), reservation_controller_1.createReservationHandler);
};
