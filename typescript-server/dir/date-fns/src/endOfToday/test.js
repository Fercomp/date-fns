"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sinon_1 = __importDefault(require("sinon"));
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("endOfToday", () => {
    let clock;
    (0, vitest_1.beforeEach)(() => {
        clock = sinon_1.default.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime());
    });
    (0, vitest_1.afterEach)(() => {
        clock.restore();
    });
    (0, vitest_1.it)("returns the current date with the time settled to 23:59:59.999", () => {
        const result = (0, index_js_1.endOfToday)();
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 25, 23, 59, 59, 999));
    });
});
