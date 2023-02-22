"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createReservationSchema = void 0;
const yup = __importStar(require("yup"));
const helpers_1 = require("../utils/helpers");
const fullNameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
exports.createReservationSchema = yup.object({
    body: yup.object({
        fullName: yup.string().required((0, helpers_1.requiredMessageValidation)('Full name')).matches(fullNameRegex, (0, helpers_1.validationErrorMessage)('fullName')),
        email: yup.string().required((0, helpers_1.requiredMessageValidation)('Email')).matches(emailRegex, (0, helpers_1.validationErrorMessage)('email')),
        phone: yup.string().required((0, helpers_1.requiredMessageValidation)('Phone')).matches(phoneNumberRegex, (0, helpers_1.validationErrorMessage)('phone')),
        subject: yup.string().required((0, helpers_1.requiredMessageValidation)('Subject')).min(3, (0, helpers_1.minRequiredMessageVal)('Title', 3)),
        message: yup.string().required((0, helpers_1.requiredMessageValidation)('Message')).min(10, (0, helpers_1.minRequiredMessageVal)('Message', 10))
    })
});
