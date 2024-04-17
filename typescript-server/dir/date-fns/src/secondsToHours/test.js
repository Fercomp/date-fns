"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("secondsToHours", () => {
    (0, vitest_1.it)("converts seconds to hours", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToHours)(3600)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.secondsToHours)(7200)).toBe(2);
    });
    (0, vitest_1.it)("uses floor rounding", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToHours)(3601)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.secondsToHours)(3599)).toBe(0);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToHours)(3600.5)).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.secondsToHours)(0)).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToHours)(123456)).toBe(34);
        (0, vitest_1.expect)((0, index_js_1.secondsToHours)(-123456)).toBe(-34);
    });
});
