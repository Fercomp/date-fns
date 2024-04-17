"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("milliseconds", () => {
    (0, vitest_1.it)("converts years to milliseconds", () => {
        const result = (0, index_js_1.milliseconds)({ years: 2 });
        (0, vitest_1.expect)(result).toBe(63113903999);
    });
    (0, vitest_1.it)("converts months to milliseconds", () => {
        const result = (0, index_js_1.milliseconds)({ months: 3 });
        (0, vitest_1.expect)(result).toBe(7889237999);
    });
    (0, vitest_1.it)("converts weeks to milliseconds", () => {
        const result = (0, index_js_1.milliseconds)({ weeks: 2 });
        (0, vitest_1.expect)(result).toBe(1209600000);
    });
    (0, vitest_1.it)("converts days to milliseconds", () => {
        const result = (0, index_js_1.milliseconds)({ days: 5 });
        (0, vitest_1.expect)(result).toBe(432000000);
    });
    (0, vitest_1.it)("converts hours to milliseconds", () => {
        const result = (0, index_js_1.milliseconds)({ hours: 2 });
        (0, vitest_1.expect)(result).toBe(7200000);
    });
    (0, vitest_1.it)("converts minutes to milliseconds", () => {
        const result = (0, index_js_1.milliseconds)({ minutes: 5 });
        (0, vitest_1.expect)(result).toBe(300000);
    });
    (0, vitest_1.it)("converts seconds to milliseconds", () => {
        const result = (0, index_js_1.milliseconds)({ seconds: 10 });
        (0, vitest_1.expect)(result).toBe(10000);
    });
    (0, vitest_1.it)("sums all the duration values", () => {
        const result = (0, index_js_1.milliseconds)({
            years: 2,
            months: 3,
            weeks: 2,
            days: 5,
            hours: 2,
            minutes: 5,
            seconds: 10,
        });
        (0, vitest_1.expect)(result).toBe(72652252000);
    });
    (0, vitest_1.it)("returns 0 for an empty duration", () => {
        const result = (0, index_js_1.milliseconds)({});
        (0, vitest_1.expect)(result).toBe(0);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.milliseconds)({ seconds: 1.2345 })).toBe(1234);
        (0, vitest_1.expect)((0, index_js_1.milliseconds)({ seconds: -1.2345 })).toBe(-1234);
    });
});
