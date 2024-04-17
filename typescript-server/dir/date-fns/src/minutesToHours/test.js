"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("minuteToHours", () => {
    (0, vitest_1.it)("converts minutes to hours", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToHours)(60)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.minutesToHours)(120)).toBe(2);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToHours)(61)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.minutesToHours)(59)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToHours)(60.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.minutesToHours)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToHours)(123456)).toBe(2057);
        (0, vitest_1.expect)((0, index_js_1.minutesToHours)(-123456)).toBe(-2057);
    });
});
