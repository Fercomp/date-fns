"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("millisecondsToSeconds", () => {
    (0, vitest_1.it)("converts milliseconds to seconds", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToSeconds)(1000)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToSeconds)(2000)).toBe(2);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToSeconds)(1001)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToSeconds)(999)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToSeconds)(1000.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToSeconds)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToSeconds)(123456789)).toBe(123456);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToSeconds)(-123456789)).toBe(-123456);
    });
});
