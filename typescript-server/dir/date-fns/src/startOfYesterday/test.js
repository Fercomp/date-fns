"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sinon_1 = __importDefault(require("sinon"));
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("startOfYesterday", () => {
    (0, vitest_1.it)("returns the start of yesterday", () => {
        const clock = sinon_1.default.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime());
        const result = (0, index_js_1.startOfYesterday)();
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 24));
        clock.restore();
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const now = new Date(0);
        now.setFullYear(14, 8 /* Sep */, 25);
        now.setHours(0, 0, 0, 0);
        const clock = sinon_1.default.useFakeTimers(now.getTime());
        const expectedResult = new Date(0);
        expectedResult.setFullYear(14, 8 /* Sep */, 24);
        expectedResult.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.startOfYesterday)();
        (0, vitest_1.expect)(result).toEqual(expectedResult);
        clock.restore();
    });
});
