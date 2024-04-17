"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("differenceInMinutes", () => {
    (0, vitest_1.it)("returns the number of minutes between the given dates", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 12, 20), new Date(2014, 6 /* Jul */, 2, 12, 6));
        (0, vitest_1.expect)(result).toBe(14);
    });
    (0, vitest_1.it)("returns the number of minutes between the given dates with `trunc` as a default rounding method", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 12, 6, 50), new Date(2014, 6 /* Jul */, 2, 12, 20, 10));
        (0, vitest_1.expect)(result).toBe(-13);
    });
    (0, vitest_1.it)("returns the number of minutes between the given dates with `trunc` passed in as a rounding method ", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 12, 20, 50), new Date(2014, 6 /* Jul */, 2, 12, 6, 10), { roundingMethod: "trunc" });
        (0, vitest_1.expect)(result).toBe(14);
    });
    (0, vitest_1.it)("returns the number of minutes between the given dates with `ceil` passed in as a rounding method ", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 12, 20, 50), new Date(2014, 6 /* Jul */, 2, 12, 6, 10), { roundingMethod: "ceil" });
        (0, vitest_1.expect)(result).toBe(15);
    });
    (0, vitest_1.it)("returns the number of minutes between the given dates with `floor` passed in as a rounding method ", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 12, 20, 50), new Date(2014, 6 /* Jul */, 2, 12, 6, 10), { roundingMethod: "floor" });
        (0, vitest_1.expect)(result).toBe(14);
    });
    (0, vitest_1.it)("returns the number of minutes between the given dates with `round` passed in as a rounding method ", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 12, 20, 60), new Date(2014, 6 /* Jul */, 2, 12, 6, 10), { roundingMethod: "round" });
        (0, vitest_1.expect)(result).toBe(15);
    });
    (0, vitest_1.it)("returns a negative number if the time value of the first date is smaller", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 6 /* Jul */, 2, 12, 6), new Date(2014, 6 /* Jul */, 2, 12, 20));
        (0, vitest_1.expect)(result).toBe(-14);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 18, 45).getTime(), new Date(2014, 8 /* Sep */, 5, 18, 15).getTime());
        (0, vitest_1.expect)(result).toBe(30);
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("the difference is less than a minute, but the given dates are in different calendar minutes", () => {
            const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 12, 12), new Date(2014, 8 /* Sep */, 5, 12, 11, 59));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("the same for the swapped dates", () => {
            const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 12, 11, 59), new Date(2014, 8 /* Sep */, 5, 12, 12));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("the difference is an integral number of minutes", () => {
            const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 12, 25), new Date(2014, 8 /* Sep */, 5, 12, 15));
            (0, vitest_1.expect)(result).toBe(10);
        });
        (0, vitest_1.it)("the given dates are the same", () => {
            const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("does not return -0 when the given dates are the same", () => {
            function isNegativeZero(x) {
                return x === 0 && 1 / x < 0;
            }
            const result = (0, index_js_1.differenceInMinutes)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            const resultIsNegative = isNegativeZero(result);
            (0, vitest_1.expect)(resultIsNegative).toBe(false);
        });
    });
    (0, vitest_1.it)("returns NaN if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(NaN), new Date(2017, 0 /* Jan */, 1));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(2017, 0 /* Jan */, 1), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInMinutes)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
