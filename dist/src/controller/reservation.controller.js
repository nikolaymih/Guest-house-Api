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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservationHandler = void 0;
const reservation_service_1 = require("../service/reservation.service");
const mailer_1 = require("../utils/mailer");
const createReservationHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const payload = req.body;
    const request = yield (0, reservation_service_1.createReservation)(payload);
    try {
        yield mailer_1.transporter.sendMail((0, mailer_1.configureMailMessage)(payload));
        res.status(201).send(request);
    }
    catch (e) {
        if (e instanceof Error) {
            res.status(401).send(e.message);
        }
    }
});
exports.createReservationHandler = createReservationHandler;
