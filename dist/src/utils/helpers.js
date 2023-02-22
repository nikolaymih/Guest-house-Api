"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationErrorMessage = exports.minRequiredMessageVal = exports.requiredMessageValidation = void 0;
const requiredMessageValidation = (name) => {
    return `${name} must be provided!`;
};
exports.requiredMessageValidation = requiredMessageValidation;
const minRequiredMessageVal = (name, value) => {
    return `${name} must be at least ${value} characters`;
};
exports.minRequiredMessageVal = minRequiredMessageVal;
const validationErrorMessage = (name) => {
    return `Validation for ${name} has failed`;
};
exports.validationErrorMessage = validationErrorMessage;
