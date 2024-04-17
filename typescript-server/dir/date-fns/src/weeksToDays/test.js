"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("weeksToDays", () => {
    (0, vitest_1.it)("converts weeks to days", () => {
        (0, vitest_1.expect)((0, index_js_1.weeksToDays)(1)).toBe(7);
        (0, vitest_1.expect)((0, index_js_1.weeksToDays)(2)).toBe(14);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.weeksToDays)(1.5)).toBe(10);
        (0, vitest_1.expect)((0, index_js_1.weeksToDays)(0.1)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.weeksToDays)(1.5)).toBe(10);
        (0, vitest_1.expect)((0, index_js_1.weeksToDays)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.weeksToDays)(1.23)).toBe(8);
        (0, vitest_1.expect)((0, index_js_1.weeksToDays)(-1.23)).toBe(-8);
    });
});
