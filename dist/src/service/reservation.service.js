"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservation = void 0;
const prisma_1 = __importDefault(require("../db/prisma"));
const createReservation = (payload) => {
    return prisma_1.default.request.create({
        data: Object.assign({}, payload)
    });
};
exports.createReservation = createReservation;
