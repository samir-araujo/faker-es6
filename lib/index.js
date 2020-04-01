"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = __importDefault(require("./helpers"));
var name_1 = __importDefault(require("./name"));
var faker = { helpers: helpers_1.default, name: name_1.default };
exports.default = faker;
