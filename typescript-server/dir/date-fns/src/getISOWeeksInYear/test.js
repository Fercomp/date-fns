"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getISOWeeksInYear", () => {
    (0, vitest_1.it)("returns the number of ISO weeks in the ISO week-numbering year of the given date", () => {
        const result = (0, index_js_1.getISOWeeksInYear)(new Date(2015, 1 /* Feb */, 11));
        (0, vitest_1.expect)(result).toBe(53);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2003, 11 /* Dec */, 30);
        const result = (0, index_js_1.getISOWeeksInYear)(+date);
        (0, vitest_1.expect)(result).toBe(53);
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(4, 0 /* Jan */, 4);
        initialDate.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.getISOWeeksInYear)(initialDate);
        (0, vitest_1.expect)(result).toBe(53);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getISOWeeksInYear)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("properly works with negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.getISOWeeksInYear)(new Date(2015, 1 /* Feb */, 11))).toBe(53);
        // The number must differ. The Gregorian calendar repeats every 400 years,
        // so the number of ISO weeks as well. -2015 corresponds to 385 AD where
        // there was 52 ISO weeks.
        (0, vitest_1.expect)((0, index_js_1.getISOWeeksInYear)(new Date(-2015, 1 /* Feb */, 11))).toBe(52);
        (0, vitest_1.expect)((0, index_js_1.getISOWeeksInYear)(new Date(385, 1 /* Feb */, 11))).toBe(52);
    });
});
