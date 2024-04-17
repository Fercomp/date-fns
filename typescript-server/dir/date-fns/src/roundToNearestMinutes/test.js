"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("roundToNearestMinutes", () => {
    (0, vitest_1.it)("rounds given date to the nearest minute by default", () => {
        // low
        (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 10))).toEqual(makeDate(15));
        // mid-point
        (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 30))).toEqual(makeDate(16));
        // high
        (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 59))).toEqual(makeDate(16));
    });
    (0, vitest_1.it)("rounds to the closest x minutes if nearestTo is provided", () => {
        const options = { nearestTo: 4 };
        // low
        (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(9, 59), options)).toEqual(makeDate(8));
        // mid-point
        (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10), options)).toEqual(makeDate(12));
        // high
        (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10, 30), options)).toEqual(makeDate(12));
    });
    (0, vitest_1.describe)("roundingMethod", () => {
        (0, vitest_1.it)("trunc, nearestTo === 1 (default)", () => {
            const options = { roundingMethod: "trunc" };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 10), options)).toEqual(makeDate(15));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 30), options)).toEqual(makeDate(15));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 59), options)).toEqual(makeDate(15));
        });
        (0, vitest_1.it)("trunc, nearestTo === 4", () => {
            const options = {
                roundingMethod: "trunc",
                nearestTo: 4,
            };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(9, 59), options)).toEqual(makeDate(8));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10), options)).toEqual(makeDate(8));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10, 30), options)).toEqual(makeDate(8));
        });
        (0, vitest_1.it)("floor, nearestTo === 1 (default)", () => {
            const options = { roundingMethod: "floor" };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 10), options)).toEqual(makeDate(15));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 30), options)).toEqual(makeDate(15));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 59), options)).toEqual(makeDate(15));
        });
        (0, vitest_1.it)("floor, nearestTo === 4", () => {
            const options = {
                roundingMethod: "floor",
                nearestTo: 4,
            };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(9, 59), options)).toEqual(makeDate(8));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10), options)).toEqual(makeDate(8));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10, 30), options)).toEqual(makeDate(8));
        });
        (0, vitest_1.it)("ceil, nearestTo === 1 (default)", () => {
            const options = { roundingMethod: "ceil" };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 10), options)).toEqual(makeDate(16));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 30), options)).toEqual(makeDate(16));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 59), options)).toEqual(makeDate(16));
        });
        (0, vitest_1.it)("ceil, nearestTo === 4", () => {
            const options = {
                roundingMethod: "ceil",
                nearestTo: 4,
            };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(9, 59), options)).toEqual(makeDate(12));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10), options)).toEqual(makeDate(12));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10, 30), options)).toEqual(makeDate(12));
        });
        (0, vitest_1.it)("round, nearestTo === 1 (default)", () => {
            const options = { roundingMethod: "round" };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 10), options)).toEqual(makeDate(15));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 30), options)).toEqual(makeDate(16));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 59), options)).toEqual(makeDate(16));
        });
        (0, vitest_1.it)("round, nearestTo === 4", () => {
            const options = {
                roundingMethod: "round",
                nearestTo: 4,
            };
            // low
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(9, 59), options)).toEqual(makeDate(8));
            // mid-point
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10), options)).toEqual(makeDate(12));
            // high
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(10, 30), options)).toEqual(makeDate(12));
        });
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("rounds up to the next day", () => {
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(new Date(2014, 6, 10, 23, 59, 59))).toEqual(new Date(2014, 6, 11));
        });
        (0, vitest_1.it)("ceils correctly with 0 seconds and 1 millisecond", () => {
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 0, 0), { roundingMethod: "ceil" })).toEqual(makeDate(15));
            (0, vitest_1.expect)((0, index_js_1.roundToNearestMinutes)(makeDate(15, 0, 1), { roundingMethod: "ceil" })).toEqual(makeDate(16));
        });
    });
    (0, vitest_1.describe)("examples", () => {
        (0, vitest_1.it)("example 1", () => {
            const result = (0, index_js_1.roundToNearestMinutes)(new Date(2014, 6, 10, 12, 12, 34));
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 6, 10, 12, 13));
        });
        (0, vitest_1.it)("example 2", () => {
            const result = (0, index_js_1.roundToNearestMinutes)(new Date(2014, 6, 10, 12, 12, 34), {
                nearestTo: 15,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 6, 10, 12, 15));
        });
        (0, vitest_1.it)("example 3", () => {
            const result = (0, index_js_1.roundToNearestMinutes)(new Date(2014, 6, 10, 12, 12, 34), {
                roundingMethod: "floor",
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 6, 10, 12, 12));
        });
        (0, vitest_1.it)("example 4", () => {
            const result = (0, index_js_1.roundToNearestMinutes)(new Date(2014, 6, 10, 12, 12, 34), {
                roundingMethod: "ceil",
                nearestTo: 30,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 6, 10, 12, 30));
        });
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.roundToNearestMinutes)(makeDate(13, 16).getTime());
        (0, vitest_1.expect)(result).toEqual(makeDate(13));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = makeDate(10, 10);
        (0, index_js_1.roundToNearestMinutes)(date);
        (0, vitest_1.expect)(date).toEqual(makeDate(10, 10));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.roundToNearestMinutes)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
function makeDate(minutes, seconds = 0, milliseconds = 0) {
    // helper to make tests more readable since we mostly care about minutes and seconds
    return new Date(2014, 6 /* Jul */, 10, 12, minutes, seconds, milliseconds);
}
