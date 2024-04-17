"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isSameMinute", () => {
    (0, vitest_1.it)("returns true if the given dates have the same minute", () => {
        const result = (0, index_js_1.isSameMinute)(new Date(2014, 8 /* Sep */, 4, 6, 30), new Date(2014, 8 /* Sep */, 4, 6, 30, 15));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given dates have different minutes", () => {
        const result = (0, index_js_1.isSameMinute)(new Date(2014, 8 /* Sep */, 4, 6, 30, 59), new Date(2014, 8 /* Sep */, 4, 6, 31));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isSameMinute)(new Date(2014, 8 /* Sep */, 4, 18, 45).getTime(), new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameMinute)(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameMinute)(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.isSameMinute)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
