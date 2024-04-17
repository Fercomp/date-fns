"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("daysToWeeks", () => {
    (0, vitest_1.it)("converts days to weeks", () => {
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(7)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(14)).toBe(2);
    });
    (0, vitest_1.it)("uses trunc rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(8)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(6)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(7.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(7)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(-7)).toBe(-1);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(14)).toBe(2);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(-14)).toBe(-2);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(8)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(-8)).toBe(-1);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(6)).toBe(0);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(-6)).toBe(0);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(7.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.daysToWeeks)(-7.5)).toBe(-1);
    });
});
