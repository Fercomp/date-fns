"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("secondsToMinutes", () => {
    (0, vitest_1.it)("converts seconds to minutes", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToMinutes)(60)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.secondsToMinutes)(120)).toBe(2);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToMinutes)(61)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.secondsToMinutes)(59)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToMinutes)(60.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.secondsToMinutes)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToMinutes)(123456)).toBe(2057);
        (0, vitest_1.expect)((0, index_js_1.secondsToMinutes)(-123456)).toBe(-2057);
    });
});
