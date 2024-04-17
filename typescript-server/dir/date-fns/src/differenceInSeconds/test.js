"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("differenceInSeconds", () => {
    (0, vitest_1.it)("returns the number of seconds between the given dates with `trunc` as a default rounding method", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 6 /* Jul */, 2, 12, 30, 6, 29), new Date(2014, 6 /* Jul */, 2, 12, 30, 20, 28.777));
        (0, vitest_1.expect)(result).toBe(-13);
    });
    (0, vitest_1.it)("returns the number of seconds between the given dates", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 6 /* Jul */, 2, 12, 30, 20), new Date(2014, 6 /* Jul */, 2, 12, 30, 6));
        (0, vitest_1.expect)(result).toBe(14);
    });
    (0, vitest_1.it)("returns a negative number if the time value of the first date is smaller", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 6 /* Jul */, 2, 12, 30, 6), new Date(2014, 6 /* Jul */, 2, 12, 30, 20));
        (0, vitest_1.expect)(result).toBe(-14);
    });
    (0, vitest_1.it)("returns a 0, not a negative 0 - issue #2555 ", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973), new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976));
        (0, vitest_1.expect)(result).toBe(0);
    });
    (0, vitest_1.it)("returns 1 with `round` passed in as a rounding method", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2021, 6 /* Jul */, 22, 6, 1, 29.973), new Date(2021, 6 /* Jul */, 22, 6, 1, 28.976), { roundingMethod: "round" });
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.it)("returns a -1 with `round` passed in as a rounding method", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2021, 6 /* Jul */, 22, 6, 1, 27.976), new Date(2021, 6 /* Jul */, 22, 6, 1, 28.973), { roundingMethod: "round" });
        (0, vitest_1.expect)(result).toBe(-1);
    });
    (0, vitest_1.it)("returns a -2 with `ceil` passed in as a rounding method", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2021, 6 /* Jul */, 22, 6, 1, 27.976), new Date(2021, 6 /* Jul */, 22, 6, 1, 29.973), { roundingMethod: "ceil" });
        (0, vitest_1.expect)(result).toBe(-2);
    });
    (0, vitest_1.it)("returns a 2 with `ceil` passed in as a rounding method", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2021, 6 /* Jul */, 22, 6, 1, 29.973), new Date(2021, 6 /* Jul */, 22, 6, 1, 27.976), { roundingMethod: "ceil" });
        (0, vitest_1.expect)(result).toBe(2);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 18, 30, 45).getTime(), new Date(2014, 8 /* Sep */, 5, 18, 30, 15).getTime());
        (0, vitest_1.expect)(result).toBe(30);
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("the difference is less than a second, but the given dates are in different calendar seconds", () => {
            const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 12, 30, 12), new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("the same for the swapped dates but a different result as a resulf of the default rounding method `trunc`", () => {
            const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 12, 30, 11, 999), new Date(2014, 8 /* Sep */, 5, 12, 30, 12));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("the difference is an integral number of seconds", () => {
            const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 12, 30, 25), new Date(2014, 8 /* Sep */, 5, 12, 30, 15));
            (0, vitest_1.expect)(result).toBe(10);
        });
        (0, vitest_1.it)("the given dates are the same", () => {
            const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("does not return -0 when the given dates are the same", () => {
            const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            (0, vitest_1.expect)(!isNegativeZero(result)).toBe(true);
        });
        (0, vitest_1.it)("does not return -0 when the given dates have milliseconds difference", () => {
            const result = (0, index_js_1.differenceInSeconds)(new Date(2014, 8 /* Sep */, 5, 0, 0, 0, 973), new Date(2014, 8 /* Sep */, 5, 0, 0, 0, 976));
            (0, vitest_1.expect)(!isNegativeZero(result)).toBe(true);
        });
    });
    (0, vitest_1.it)("returns NaN if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(NaN), new Date(2017, 0 /* Jan */, 1));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(2017, 0 /* Jan */, 1), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInSeconds)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
function isNegativeZero(x) {
    return x === 0 && 1 / x < 0;
}
