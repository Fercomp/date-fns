"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isSameSecond", () => {
    (0, vitest_1.it)("returns true if the given dates have the same second", () => {
        const result = (0, index_js_1.isSameSecond)(new Date(2014, 8 /* Sep */, 4, 6, 30, 15), new Date(2014, 8 /* Sep */, 4, 6, 30, 15, 500));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given dates have different seconds", () => {
        const result = (0, index_js_1.isSameSecond)(new Date(2014, 8 /* Sep */, 4, 6, 30, 58, 999), new Date(2014, 8 /* Sep */, 4, 6, 30, 59));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isSameSecond)(new Date(2014, 8 /* Sep */, 4, 18, 45, 30).getTime(), new Date(2014, 8 /* Sep */, 4, 18, 45, 30, 400).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameSecond)(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameSecond)(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.isSameSecond)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
