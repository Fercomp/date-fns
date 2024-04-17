"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("closestIndexTo", () => {
    (0, vitest_1.it)("returns the date index from the given array closest to the given date", () => {
        const date = new Date(2014, 6 /* Jul */, 2);
        const result = (0, index_js_1.closestIndexTo)(date, [
            new Date(2015, 7 /* Aug */, 31),
            new Date(2012, 6 /* Jul */, 2),
        ]);
        (0, vitest_1.expect)(result).toBe(0);
    });
    (0, vitest_1.it)("works if the closest date from the given array is before the given date", () => {
        const date = new Date(2014, 6 /* Jul */, 2, 6, 30, 4, 500);
        const result = (0, index_js_1.closestIndexTo)(date, [
            new Date(2014, 6 /* Jul */, 2, 6, 30, 5, 900),
            new Date(2014, 6 /* Jul */, 2, 6, 30, 3, 900),
            new Date(2014, 6 /* Jul */, 2, 6, 30, 10),
        ]);
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const date = new Date(2014, 6 /* Jul */, 2).getTime();
        const result = (0, index_js_1.closestIndexTo)(date, [
            new Date(2015, 7 /* Aug */, 31).getTime(),
            new Date(2012, 6 /* Jul */, 2).getTime(),
        ]);
        (0, vitest_1.expect)(result).toBe(0);
    });
    (0, vitest_1.it)("returns undefined if the given array is empty", () => {
        const date = new Date(2014, 6 /* Jul */, 2).getTime();
        const result = (0, index_js_1.closestIndexTo)(date, []);
        (0, vitest_1.expect)(result).toBe(undefined);
    });
    (0, vitest_1.it)("returns NaN if the given date is `Invalid Date`", () => {
        const date = new Date(NaN);
        const result = (0, index_js_1.closestIndexTo)(date, [
            new Date(2015, 7 /* Aug */, 31),
            new Date(2012, 6 /* Jul */, 2),
        ]);
        (0, vitest_1.expect)(result != null && isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if any date in the given array is `Invalid Date`", () => {
        const date = new Date(2014, 6 /* Jul */, 2);
        const result = (0, index_js_1.closestIndexTo)(date, [
            new Date(2015, 7 /* Aug */, 31),
            new Date(NaN),
            new Date(2012, 6 /* Jul */, 2),
        ]);
        (0, vitest_1.expect)(result != null && isNaN(result)).toBe(true);
    });
});
