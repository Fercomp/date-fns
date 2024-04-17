"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("millisecondsToHours", () => {
    (0, vitest_1.it)("converts milliseconds to hours", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToHours)(3600000)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToHours)(7200000)).toBe(2);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToHours)(3600001)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToHours)(3599999)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToHours)(3600000.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToHours)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.millisecondsToHours)(123456789)).toBe(34);
        (0, vitest_1.expect)((0, index_js_1.millisecondsToHours)(-123456789)).toBe(-34);
    });
});
