"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("differenceInMilliseconds", () => {
    (0, vitest_1.it)("returns the number of milliseconds between the given dates", () => {
        const result = (0, index_js_1.differenceInMilliseconds)(new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700), new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600));
        (0, vitest_1.expect)(result).toBe(100);
    });
    (0, vitest_1.it)("returns a negative number if the time value of the first date is smaller", () => {
        const result = (0, index_js_1.differenceInMilliseconds)(new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 600), new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 700));
        (0, vitest_1.expect)(result).toBe(-100);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.differenceInMilliseconds)(new Date(2014, 8 /* Sep */, 5, 18, 30, 45, 500).getTime(), new Date(2014, 8 /* Sep */, 5, 18, 30, 45, 500).getTime());
        (0, vitest_1.expect)(result).toBe(0);
    });
    (0, vitest_1.it)("does not return -0 when the given dates are the same", () => {
        function isNegativeZero(x) {
            return x === 0 && 1 / x < 0;
        }
        const result = (0, index_js_1.differenceInMilliseconds)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
        const resultIsNegative = isNegativeZero(result);
        (0, vitest_1.expect)(resultIsNegative).toBe(false);
    });
    (0, vitest_1.it)("returns NaN if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInMilliseconds)(new Date(NaN), new Date(2017, 0 /* Jan */, 1));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInMilliseconds)(new Date(2017, 0 /* Jan */, 1), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInMilliseconds)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
