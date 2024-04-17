"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getDaysInMonth", () => {
    (0, vitest_1.it)("returns the number of days in the month of the given date", () => {
        const result = (0, index_js_1.getDaysInMonth)(new Date(2100, 1 /* Feb */, 11));
        (0, vitest_1.expect)(result).toBe(28);
    });
    (0, vitest_1.it)("works for the February of a leap year", () => {
        const result = (0, index_js_1.getDaysInMonth)(new Date(2000, 1 /* Feb */, 11));
        (0, vitest_1.expect)(result).toBe(29);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 6 /* Jul */, 2).getTime();
        const result = (0, index_js_1.getDaysInMonth)(date);
        (0, vitest_1.expect)(result).toBe(31);
    });
    (0, vitest_1.it)("handles dates before 100 AD", () => {
        const date = new Date(0);
        date.setFullYear(0, 1 /* Feb */, 15);
        date.setHours(0, 0, 0, 0);
        const result = (0, index_js_1.getDaysInMonth)(date);
        (0, vitest_1.expect)(result).toBe(29);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getDaysInMonth)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
