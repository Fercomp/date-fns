"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("differenceInWeeks", () => {
    (0, vitest_1.it)("returns the number of full weeks between the given dates", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 6 /* Jul */, 8, 18, 0), new Date(2014, 5 /* Jun */, 29, 6, 0));
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("returns the number of weeks between the given dates with `trunc` as default a rounding method", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 5 /* Jun */, 29, 6, 0), new Date(2014, 6 /* Jul */, 13, 5, 0));
        (0, vitest_1.expect)(result).toBe(-1);
    });
    (0, vitest_1.it)("returns the number of weeks between the given dates with `trunc` passed in as a rounding method", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 6 /* Jul */, 8, 18, 0), new Date(2014, 5 /* Jun */, 29, 6, 0), { roundingMethod: "trunc" });
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("returns the number of weeks between the given dates with `ceil` passed in as a rounding method", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 6 /* Jul */, 8, 18, 0), new Date(2014, 5 /* Jun */, 29, 6, 0), { roundingMethod: "ceil" });
        (0, vitest_1.expect)(result).toBe(2);
    });
    (0, vitest_1.it)("returns the number of weeks between the given dates with `floor` passed in as a rounding method", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 6 /* Jul */, 8, 18, 0), new Date(2014, 5 /* Jun */, 29, 6, 0), { roundingMethod: "floor" });
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("returns the number of weeks between the given dates with `round` passed in as a rounding method", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 6 /* Jul */, 10, 18, 0), new Date(2014, 5 /* Jun */, 29, 6, 0), { roundingMethod: "round" });
        (0, vitest_1.expect)(result).toBe(2);
    });
    (0, vitest_1.it)("returns a negative number if the time value of the first date is smaller", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 5 /* Jun */, 29, 6, 0), new Date(2014, 6 /* Jul */, 8, 18, 0));
        (0, vitest_1.expect)(result).toBe(-1);
    });
    (0, vitest_1.it)("returns a 0, not a negative 0 - issue #2555 ", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973), new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976));
        (0, vitest_1.expect)(result).toBe(0);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 6 /* Jul */, 12).getTime(), new Date(2014, 6 /* Jul */, 2).getTime());
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("the difference is less than a week, but the given dates are in different calendar weeks", () => {
            const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 6 /* Jul */, 6), new Date(2014, 6 /* Jul */, 5));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("the same for the swapped dates", () => {
            const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 6 /* Jul */, 5), new Date(2014, 6 /* Jul */, 6));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("days of weeks of the given dates are the same", () => {
            const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 6 /* Jul */, 9), new Date(2014, 6 /* Jul */, 2));
            (0, vitest_1.expect)(result).toBe(1);
        });
        (0, vitest_1.it)("the given dates are the same", () => {
            const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("does not return -0 when the given dates are the same", () => {
            function isNegativeZero(x) {
                return x === 0 && 1 / x < 0;
            }
            const result = (0, index_js_1.differenceInWeeks)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            const resultIsNegative = isNegativeZero(result);
            (0, vitest_1.expect)(resultIsNegative).toBe(false);
        });
    });
    (0, vitest_1.it)("returns NaN if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(NaN), new Date(2017, 0 /* Jan */, 1));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(2017, 0 /* Jan */, 1), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInWeeks)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
