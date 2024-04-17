"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getDecade", () => {
    (0, vitest_1.it)("returns the decade for a the given date", () => {
        const result = (0, index_js_1.getDecade)(new Date(1971, 10 /* Nov */, 8));
        (0, vitest_1.expect)(result).toBe(1970);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getDecade)(new Date(1969, 6 /* Jul */, 20).getTime());
        (0, vitest_1.expect)(result).toBe(1960);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getDecade)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.getDecade)(new Date(2009, 0, 1))).toBe(2000);
        (0, vitest_1.expect)((0, index_js_1.getDecade)(new Date(-2001, 0, 1))).toBe(-2010);
    });
});
