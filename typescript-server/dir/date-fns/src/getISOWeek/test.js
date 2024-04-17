"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getISOWeek", () => {
    (0, vitest_1.it)("returns the ISO week of the given date", () => {
        const result = (0, index_js_1.getISOWeek)(new Date(2005, 0 /* Jan */, 2));
        (0, vitest_1.expect)(result).toBe(53);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getISOWeek)(new Date(2008, 11 /* Dec */, 29).getTime());
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("returns the ISO week at 1 January 2016", () => {
            const result = (0, index_js_1.getISOWeek)(new Date(2016, 0 /* Jan */, 1));
            (0, vitest_1.expect)(result).toBe(53);
        });
        (0, vitest_1.it)("returns the ISO week at 1 May 2016", () => {
            const result = (0, index_js_1.getISOWeek)(new Date(2016, 4 /* May */, 1));
            (0, vitest_1.expect)(result).toBe(17);
        });
        (0, vitest_1.it)("returns the ISO week at 2 May 2016", () => {
            const result = (0, index_js_1.getISOWeek)(new Date(2016, 4 /* May */, 2));
            (0, vitest_1.expect)(result).toBe(18);
        });
        (0, vitest_1.it)("returns the ISO week at 31 May 2016", () => {
            const result = (0, index_js_1.getISOWeek)(new Date(2016, 4 /* May */, 31));
            (0, vitest_1.expect)(result).toBe(22);
        });
        (0, vitest_1.it)("properly works with negative numbers", () => {
            (0, vitest_1.expect)((0, index_js_1.getISOWeek)(new Date(2014, 6 /* Jul */, 14))).toBe(29);
            (0, vitest_1.expect)((0, index_js_1.getISOWeek)(new Date(-2014, 6 /* Jul */, 14))).toBe(29);
        });
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(7, 11 /* Dec */, 30);
        initialDate.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.getISOWeek)(initialDate);
        (0, vitest_1.expect)(result).toBe(52);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getISOWeek)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
