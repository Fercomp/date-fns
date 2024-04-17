"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("quartersToYears", () => {
    (0, vitest_1.it)("converts quarters to years", () => {
        (0, vitest_1.expect)((0, index_js_1.quartersToYears)(4)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.quartersToYears)(8)).toBe(2);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.quartersToYears)(5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.quartersToYears)(3)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.quartersToYears)(4.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.quartersToYears)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.quartersToYears)(12.34)).toBe(3);
        (0, vitest_1.expect)((0, index_js_1.quartersToYears)(-12.34)).toBe(-3);
    });
});
