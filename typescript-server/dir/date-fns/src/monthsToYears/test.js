"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("monthsToYears", () => {
    (0, vitest_1.it)("converts months to years", () => {
        (0, vitest_1.expect)((0, index_js_1.monthsToYears)(12)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.monthsToYears)(24)).toBe(2);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.monthsToYears)(13)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.monthsToYears)(11)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.monthsToYears)(12.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.monthsToYears)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.monthsToYears)(1234567)).toBe(102880);
        (0, vitest_1.expect)((0, index_js_1.monthsToYears)(-1234567)).toBe(-102880);
    });
});
