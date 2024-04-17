"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("millisecondsToMinutes", () => {
    (0, vitest_1.it)("converts milliseconds to minutes", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToMinutes)(60000)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToMinutes)(120000)).toBe(2);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToMinutes)(60001)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToMinutes)(59999)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToMinutes)(60000.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToMinutes)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToMinutes)(123456)).toBe(2);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToMinutes)(-123456)).toBe(-2);
    });
});
