"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isWeekend", () => {
    (0, vitest_1.it)("returns true if the given date is in a weekend", () => {
        const result = (0, index_js_1.isWeekend)(new Date(2014, 9 /* Oct */, 5));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is not in a weekend", () => {
        const result = (0, index_js_1.isWeekend)(new Date(2014, 9 /* Oct */, 6));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isWeekend)(new Date(2014, 9 /* Oct */, 5).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is `Invalid Date`", () => {
        const result = (0, index_js_1.isWeekend)(new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
