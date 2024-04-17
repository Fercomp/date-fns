"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("compareAsc", () => {
    (0, vitest_1.it)("returns 0 if the given dates are equal", () => {
        const result = (0, index_js_1.compareAsc)(new Date(1989, 6 /* Jul */, 10), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(0);
    });
    (0, vitest_1.it)("returns -1 if the first date is before the second one", () => {
        const result = (0, index_js_1.compareAsc)(new Date(1987, 1 /* Feb */, 11), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(-1);
    });
    (0, vitest_1.it)("returns 1 if the first date is after the second one", () => {
        const result = (0, index_js_1.compareAsc)(new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("sorts the dates array in the chronological order when function is passed as the argument to Array.prototype.sort()", () => {
        const unsortedArray = [
            new Date(1995, 6 /* Jul */, 2),
            new Date(1987, 1 /* Feb */, 11),
            new Date(1989, 6 /* Jul */, 10),
        ];
        const sortedArray = [
            new Date(1987, 1 /* Feb */, 11),
            new Date(1989, 6 /* Jul */, 10),
            new Date(1995, 6 /* Jul */, 2),
        ];
        unsortedArray.sort(index_js_1.compareAsc);
        const result = unsortedArray;
        (0, vitest_1.expect)(result).toEqual(sortedArray);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.compareAsc)(new Date(1987, 1 /* Feb */, 11).getTime(), new Date(1989, 6 /* Jul */, 10).getTime());
        (0, vitest_1.expect)(result).toBe(-1);
    });
    (0, vitest_1.it)("returns NaN if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.compareAsc)(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.compareAsc)(new Date(1989, 6 /* Jul */, 10), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.compareAsc)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
