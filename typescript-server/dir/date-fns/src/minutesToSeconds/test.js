"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("minutesToSeconds", () => {
    (0, vitest_1.it)("converts minutes to seconds", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToSeconds)(1)).toBe(60);
        (0, vitest_1.expect)((0, index_js_1.minutesToSeconds)(2)).toBe(120);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToSeconds)(0.123456)).toBe(7);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToSeconds)(1.5)).toBe(90);
        (0, vitest_1.expect)((0, index_js_1.minutesToSeconds)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.minutesToSeconds)(1.23)).toBe(73);
        (0, vitest_1.expect)((0, index_js_1.minutesToSeconds)(-1.23)).toBe(-73);
    });
});
