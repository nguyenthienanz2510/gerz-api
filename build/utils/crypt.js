"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.compareValue = exports.hashValue = void 0;
const crypto_1 = __importDefault(require("crypto"));
const hashValue = (value) => {
    return crypto_1.default.createHash("sha256")
        .update(value)
        .digest("hex");
};
exports.hashValue = hashValue;
const compareValue = (plainText, hash) => {
    return (0, exports.hashValue)(plainText) === hash;
};
exports.compareValue = compareValue;
