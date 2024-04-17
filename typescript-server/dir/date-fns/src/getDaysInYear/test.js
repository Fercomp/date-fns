"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getDaysInYear", () => {
    (0, vitest_1.it)("returns the number of days in the year of the given date", () => {
        const result = (0, index_js_1.getDaysInYear)(new Date(2014, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(365);
    });
    (0, vitest_1.it)("works for a leap year", () => {
        const result = (0, index_js_1.getDaysInYear)(new Date(2012, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(366);
    });
    (0, vitest_1.it)("works for the years divisible by 100 but not by 400", () => {
        const result = (0, index_js_1.getDaysInYear)(new Date(2100, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(365);
    });
    (0, vitest_1.it)("works for the years divisible by 400", () => {
        const result = (0, index_js_1.getDaysInYear)(new Date(2000, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(366);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2012, 6 /* Jul */, 2).getTime();
        const result = (0, index_js_1.getDaysInYear)(date);
        (0, vitest_1.expect)(result).toBe(366);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getDaysInYear)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
