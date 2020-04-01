"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var collection_1 = __importDefault(require("./en/collection"));
var collection_2 = __importDefault(require("./pt_BR/collection"));
var locales = { en: collection_1.default, pt_BR: collection_2.default };
exports.default = locales;
