"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getDayOfYear", () => {
    (0, vitest_1.it)("returns the day of the year of the given date", () => {
        const result = (0, index_js_1.getDayOfYear)(new Date(2014, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(183);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getDayOfYear)(new Date(2014, 0 /* Jan */, 2).getTime());
        (0, vitest_1.expect)(result).toBe(2);
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const initialDate = new Date(0);
        initialDate.setFullYear(0, 11 /* Dec */, 31);
        initialDate.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.getDayOfYear)(initialDate);
        (0, vitest_1.expect)(result).toBe(366);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getDayOfYear)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
