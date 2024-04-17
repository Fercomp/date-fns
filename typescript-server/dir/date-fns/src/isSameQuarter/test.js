"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isSameQuarter", () => {
    (0, vitest_1.it)("returns true if the given dates have the same quarter (and year)", () => {
        const result = (0, index_js_1.isSameQuarter)(new Date(2014, 0 /* Jan */, 1), new Date(2014, 2 /* Mar */, 8));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given dates have different quarters", () => {
        const result = (0, index_js_1.isSameQuarter)(new Date(2014, 0 /* Jan */, 1), new Date(2013, 8 /* Sep */, 25));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isSameQuarter)(new Date(2014, 6 /* Jul */, 2).getTime(), new Date(2014, 8 /* Sep */, 25).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameQuarter)(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameQuarter)(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.isSameQuarter)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
