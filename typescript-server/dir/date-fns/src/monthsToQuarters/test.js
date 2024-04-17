"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("monthsToQuarters", () => {
    (0, vitest_1.it)("converts months to quarters", () => {
        (0, vitest_1.expect)((0, index_js_1.monthsToQuarters)(3)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.monthsToQuarters)(6)).toBe(2);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.monthsToQuarters)(4)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.monthsToQuarters)(2)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.monthsToQuarters)(3.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.monthsToQuarters)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.monthsToQuarters)(12.34)).toBe(4);
        (0, vitest_1.expect)((0, index_js_1.monthsToQuarters)(-12.34)).toBe(-4);
    });
});
