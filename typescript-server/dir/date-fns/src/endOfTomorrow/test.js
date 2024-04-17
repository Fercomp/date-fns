"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sinon_1 = __importDefault(require("sinon"));
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("endOfTomorrow", () => {
    (0, vitest_1.it)("returns tomorrow with the time settled to 23:59:59.999", () => {
        const clock = sinon_1.default.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 14, 30, 45, 500).getTime());
        const result = (0, index_js_1.endOfTomorrow)();
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 26, 23, 59, 59, 999));
        clock.restore();
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const now = new Date(0);
        now.setFullYear(14, 8 /* Sep */, 25);
        now.setHours(14, 30, 45, 500);
        const clock = sinon_1.default.useFakeTimers(now.getTime());
        const expectedResult = new Date(0);
        expectedResult.setFullYear(14, 8 /* Sep */, 26);
        expectedResult.setHours(23, 59, 59, 999);
        const result = (0, index_js_1.endOfTomorrow)();
        (0, vitest_1.expect)(result).toEqual(expectedResult);
        clock.restore();
    });
});
