"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getLocale_1 = __importDefault(require("./getLocale"));
var randomArrayElement_1 = __importDefault(require("./randomArrayElement"));
var randomArrayElements_1 = __importDefault(require("./randomArrayElements"));
var randomNumber_1 = __importDefault(require("./randomNumber"));
exports.default = { getLocale: getLocale_1.default, randomArrayElement: randomArrayElement_1.default, randomArrayElements: randomArrayElements_1.default, randomNumber: randomNumber_1.default };
