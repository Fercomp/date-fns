"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getISOWeekYear", () => {
    (0, vitest_1.it)("returns the ISO week-numbering year of the given date", () => {
        const result = (0, index_js_1.getISOWeekYear)(new Date(2007, 11 /* Dec */, 31));
        (0, vitest_1.expect)(result).toBe(2008);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getISOWeekYear)(new Date(2005, 0 /* Jan */, 1).getTime());
        (0, vitest_1.expect)(result).toBe(2004);
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(7, 11 /* Dec */, 31);
        initialDate.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.getISOWeekYear)(initialDate);
        (0, vitest_1.expect)(result).toBe(8);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getISOWeekYear)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
