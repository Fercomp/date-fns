"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const index_js_1 = require("../../../src/getOverlappingDaysInIntervals/index.js");
assert_1.default.strictEqual((0, index_js_1.getOverlappingDaysInIntervals)({
    start: new Date(2001, 8 /* Sep */, 1, 16),
    end: new Date(2023, 11 /* Dec */, 20, 16),
}, {
    start: new Date(2023, 11 /* Dec */, 21, 16),
    end: new Date(2001, 8 /* Sep */, 9, 16),
}), 8137);
