"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isSameISOWeek", () => {
    (0, vitest_1.it)("returns true if the given dates have the same ISO week", () => {
        const result = (0, index_js_1.isSameISOWeek)(new Date(2014, 8 /* Sep */, 1), new Date(2014, 8 /* Sep */, 7));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given dates have different ISO weeks", () => {
        const result = (0, index_js_1.isSameISOWeek)(new Date(2014, 8 /* Sep */, 1), new Date(2014, 8 /* Sep */, 14));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isSameISOWeek)(new Date(2014, 5 /* Jun */, 30).getTime(), new Date(2014, 6 /* Jul */, 2).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameISOWeek)(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameISOWeek)(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.isSameISOWeek)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
