"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("roundToNearestHours", () => {
    (0, vitest_1.it)("rounds given date to the nearest hour by default", () => {
        // low
        (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 10))).toEqual(makeDate(15));
        // mid-point
        (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 30))).toEqual(makeDate(16));
        // high
        (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 59))).toEqual(makeDate(16));
    });
    (0, vitest_1.it)("rounds to the closest x hours if nearestTo is provided", () => {
        const options = { nearestTo: 3 };
        // low
        (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(9, 1), options)).toEqual(makeDate(9));
        // mid-point
        (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(10, 30), options)).toEqual(makeDate(12));
        // high
        (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(11, 59), options)).toEqual(makeDate(12));
    });
    (0, vitest_1.describe)("roundingMethod", () => {
        (0, vitest_1.it)("trunc, nearestTo === 1 (default)", () => {
            const options = { roundingMethod: "trunc" };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 10), options)).toEqual(makeDate(15));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 30), options)).toEqual(makeDate(15));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 59), options)).toEqual(makeDate(15));
        });
        (0, vitest_1.it)("trunc, nearestTo === 3", () => {
            const options = {
                roundingMethod: "trunc",
                nearestTo: 3,
            };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(9), options)).toEqual(makeDate(9));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(10, 30), options)).toEqual(makeDate(9));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(11, 59), options)).toEqual(makeDate(9));
        });
        (0, vitest_1.it)("floor, nearestTo === 1 (default)", () => {
            const options = { roundingMethod: "floor" };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15), options)).toEqual(makeDate(15));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 30), options)).toEqual(makeDate(15));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 59), options)).toEqual(makeDate(15));
        });
        (0, vitest_1.it)("floor, nearestTo === 3", () => {
            const options = {
                roundingMethod: "floor",
                nearestTo: 3,
            };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15), options)).toEqual(makeDate(15));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(16, 30), options)).toEqual(makeDate(15));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(17, 59), options)).toEqual(makeDate(15));
        });
        (0, vitest_1.it)("ceil, nearestTo === 1 (default)", () => {
            const options = { roundingMethod: "ceil" };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 1), options)).toEqual(makeDate(16));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 30), options)).toEqual(makeDate(16));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 59), options)).toEqual(makeDate(16));
        });
        (0, vitest_1.it)("ceil, nearestTo === 3", () => {
            const options = {
                roundingMethod: "ceil",
                nearestTo: 3,
            };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 1), options)).toEqual(makeDate(18));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(16, 30), options)).toEqual(makeDate(18));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(17, 59), options)).toEqual(makeDate(18));
        });
        (0, vitest_1.it)("round, nearestTo === 1 (default)", () => {
            const options = { roundingMethod: "round" };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15), options)).toEqual(makeDate(15));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 30), options)).toEqual(makeDate(16));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 59), options)).toEqual(makeDate(16));
        });
        (0, vitest_1.it)("round, nearestTo === 3", () => {
            const options = {
                roundingMethod: "round",
                nearestTo: 3,
            };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15), options)).toEqual(makeDate(15));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(16, 30), options)).toEqual(makeDate(18));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(17, 59), options)).toEqual(makeDate(18));
        });
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("rounds up to the next day", () => {
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(new Date(2014, 6, 10, 23, 59, 59, 999))).toEqual(new Date(2014, 6, 11));
        });
        (0, vitest_1.it)("ceils correctly with 0 seconds and 1 millisecond", () => {
            // "ceil" does not round up when exactly oclock
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 0, 0, 0), { roundingMethod: "ceil" })).toEqual(makeDate(15));
            (0, vitest_1.expect)((0, index_js_1.roundToNearestHours)(makeDate(15, 0, 0, 1), { roundingMethod: "ceil" })).toEqual(makeDate(16));
        });
    });
    (0, vitest_1.describe)("examples", () => {
        (0, vitest_1.it)("example 1", () => {
            const result = (0, index_js_1.roundToNearestHours)(new Date(2014, 6, 10, 12, 34, 56));
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 6, 10, 13));
        });
        (0, vitest_1.it)("example 2", () => {
            const result = (0, index_js_1.roundToNearestHours)(new Date(2014, 6, 10, 12, 34, 56), {
                nearestTo: 6,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 6, 10, 12));
        });
        (0, vitest_1.it)("example 3", () => {
            const result = (0, index_js_1.roundToNearestHours)(new Date(2014, 6, 10, 12, 34, 56), {
                nearestTo: 8,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 6, 10, 16));
        });
        (0, vitest_1.it)("example 4", () => {
            const result = (0, index_js_1.roundToNearestHours)(new Date(2014, 6, 10, 1, 23, 45), {
                roundingMethod: "ceil",
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 6, 10, 2));
        });
        (0, vitest_1.it)("example 5", () => {
            const result = (0, index_js_1.roundToNearestHours)(new Date(2014, 6, 10, 12, 34, 56), {
                roundingMethod: "floor",
                nearestTo: 8,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 6, 10, 8));
        });
    });
});
function makeDate(hours, minutes = 0, seconds = 0, milliseconds = 0) {
    // helper to make tests more readable since we mostly care about hours and minutes
    return new Date(2014, 6 /* Jul */, 10, hours, minutes, seconds, milliseconds);
}
