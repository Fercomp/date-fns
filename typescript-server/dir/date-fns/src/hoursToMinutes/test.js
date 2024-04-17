"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("hoursToMinutes", () => {
    (0, vitest_1.it)("converts hours to minutes", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToMinutes)(1)).toBe(60);
        (0, vitest_1.expect)((0, index_js_1.hoursToMinutes)(2)).toBe(120);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToMinutes)(0.123)).toBe(7);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToMinutes)(1.5)).toBe(90);
        (0, vitest_1.expect)((0, index_js_1.hoursToMinutes)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToMinutes)(1.11)).toBe(66);
        (0, vitest_1.expect)((0, index_js_1.hoursToMinutes)(1.44)).toBe(86);
        (0, vitest_1.expect)((0, index_js_1.hoursToMinutes)(-1.11)).toBe(-66);
        (0, vitest_1.expect)((0, index_js_1.hoursToMinutes)(-1.44)).toBe(-86);
    });
});
