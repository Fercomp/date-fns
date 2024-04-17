"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("differenceInBusinessDays", () => {
    (0, vitest_1.it)("returns the number of business days between the given dates, excluding weekends", () => {
        const result = (0, index_js_1.differenceInBusinessDays)(new Date(2014, 6 /* Jul */, 18), new Date(2014, 0 /* Jan */, 10));
        (0, vitest_1.expect)(result).toBe(135);
    });
    (0, vitest_1.it)("can handle long ranges", () => {
        const result = (0, index_js_1.differenceInBusinessDays)(new Date(15000, 0 /* Jan */, 1), new Date(2014, 0 /* Jan */, 1));
        (0, vitest_1.expect)(result).toBe(3387885);
    });
    (0, vitest_1.it)("the same except given first date falls on a weekend", () => {
        const result = (0, index_js_1.differenceInBusinessDays)(new Date(2019, 6 /* Jul */, 20), new Date(2019, 6 /* Jul */, 18));
        (0, vitest_1.expect)(result).toBe(2);
    });
    (0, vitest_1.it)("the same except given second date falls on a weekend", () => {
        const result = (0, index_js_1.differenceInBusinessDays)(new Date(2019, 6 /* Jul */, 23), new Date(2019, 6 /* Jul */, 20));
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("the same except both given dates fall on a weekend", () => {
        const result = (0, index_js_1.differenceInBusinessDays)(new Date(2019, 6 /* Jul */, 28), new Date(2019, 6 /* Jul */, 20));
        (0, vitest_1.expect)(result).toBe(5);
    });
    (0, vitest_1.it)("returns a negative number if the time value of the first date is smaller", () => {
        const result = (0, index_js_1.differenceInBusinessDays)(new Date(2014, 0 /* Jan */, 10), new Date(2014, 6 /* Jul */, 20));
        (0, vitest_1.expect)(result).toBe(-135);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.differenceInBusinessDays)(new Date(2014, 6, 18).getTime(), new Date(2014, 0, 10).getTime());
        (0, vitest_1.expect)(result).toBe(135);
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("the difference is less than a day, but the given dates are in different calendar days", () => {
            const result = (0, index_js_1.differenceInBusinessDays)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 4, 23, 59));
            (0, vitest_1.expect)(result).toBe(1);
        });
        (0, vitest_1.it)("the same for the swapped dates", () => {
            const result = (0, index_js_1.differenceInBusinessDays)(new Date(2014, 8 /* Sep */, 4, 23, 59), new Date(2014, 8 /* Sep */, 5, 0, 0));
            (0, vitest_1.expect)(result).toBe(-1);
        });
        (0, vitest_1.it)("the time values of the given dates are the same", () => {
            const result = (0, index_js_1.differenceInBusinessDays)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 4, 0, 0));
            (0, vitest_1.expect)(result).toBe(1);
        });
        (0, vitest_1.it)("the given dates are the same", () => {
            const result = (0, index_js_1.differenceInBusinessDays)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("does not return -0 when the given dates are the same", () => {
            function isNegativeZero(x) {
                return x === 0 && 1 / x < 0;
            }
            const result = (0, index_js_1.differenceInBusinessDays)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            const resultIsNegative = isNegativeZero(result);
            (0, vitest_1.expect)(resultIsNegative).toBe(false);
        });
        (0, vitest_1.it)("returns NaN if the first date is `Invalid Date`", () => {
            const result = (0, index_js_1.differenceInBusinessDays)(new Date(NaN), new Date(2017, 0 /* Jan */, 1));
            (0, vitest_1.expect)(isNaN(result)).toBe(true);
        });
        (0, vitest_1.it)("returns NaN if the second date is `Invalid Date`", () => {
            const result = (0, index_js_1.differenceInBusinessDays)(new Date(2017, 0 /* Jan */, 1), new Date(NaN));
            (0, vitest_1.expect)(isNaN(result)).toBe(true);
        });
        (0, vitest_1.it)("returns NaN if the both dates are `Invalid Date`", () => {
            const result = (0, index_js_1.differenceInBusinessDays)(new Date(NaN), new Date(NaN));
            (0, vitest_1.expect)(isNaN(result)).toBe(true);
        });
    });
});
