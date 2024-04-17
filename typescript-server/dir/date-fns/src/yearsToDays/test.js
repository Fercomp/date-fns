"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_1 = require("./index");
(0, vitest_1.describe)("yearsToDays", () => {
    (0, vitest_1.it)("converts years to days", () => {
        (0, vitest_1.expect)((0, index_1.yearsToDays)(1)).toBe(365);
        (0, vitest_1.expect)((0, index_1.yearsToDays)(2)).toBe(730);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_1.yearsToDays)(1.7)).toBe(620);
        (0, vitest_1.expect)((0, index_1.yearsToDays)(0.1)).toBe(36);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_1.yearsToDays)(1.5)).toBe(547);
        (0, vitest_1.expect)((0, index_1.yearsToDays)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_1.yearsToDays)(1.23)).toBe(449);
        (0, vitest_1.expect)((0, index_1.yearsToDays)(-1.23)).toBe(-449);
    });
});
