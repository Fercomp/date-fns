"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("hoursToSeconds", () => {
    (0, vitest_1.it)("converts hours to seconds", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToSeconds)(1)).toBe(3600);
        (0, vitest_1.expect)((0, index_js_1.hoursToSeconds)(2)).toBe(7200);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToSeconds)(0.123)).toBe(442);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToSeconds)(1.5)).toBe(5400);
        (0, vitest_1.expect)((0, index_js_1.hoursToSeconds)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.hoursToSeconds)(1.11)).toBe(3996);
        (0, vitest_1.expect)((0, index_js_1.hoursToSeconds)(1.44)).toBe(5184);
        (0, vitest_1.expect)((0, index_js_1.hoursToSeconds)(-1.11)).toBe(-3996);
        (0, vitest_1.expect)((0, index_js_1.hoursToSeconds)(-1.44)).toBe(-5184);
    });
});
