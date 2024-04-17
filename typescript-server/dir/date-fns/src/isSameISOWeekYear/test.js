"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isSameISOWeekYear", () => {
    (0, vitest_1.it)("returns true if the given dates have the same ISO week-numbering year", () => {
        const result = (0, index_js_1.isSameISOWeekYear)(new Date(2003, 11 /* Dec */, 29), new Date(2005, 0 /* Jan */, 2));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given dates have different ISO week-numbering years", () => {
        const result = (0, index_js_1.isSameISOWeekYear)(new Date(2014, 11 /* Dec */, 28), new Date(2014, 11 /* Dec */, 29));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isSameISOWeekYear)(new Date(2003, 11 /* Dec */, 29).getTime(), new Date(2005, 0 /* Jan */, 2).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const firstDate = new Date(0);
        firstDate.setFullYear(5, 0 /* Jan */, 1);
        firstDate.setHours(0, 0, 0, 0);
        const secondDate = new Date(0);
        secondDate.setFullYear(5, 0 /* Jan */, 2);
        secondDate.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.isSameISOWeekYear)(firstDate, secondDate);
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameISOWeekYear)(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSameISOWeekYear)(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.isSameISOWeekYear)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
