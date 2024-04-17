"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getDate", () => {
    (0, vitest_1.it)("returns the day of the month of the given date", () => {
        const result = (0, index_js_1.getDate)(new Date(2012, 1 /* Feb */, 29));
        (0, vitest_1.expect)(result).toBe(29);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getDate)(new Date(2014, 11 /* Dec */, 31).getTime());
        (0, vitest_1.expect)(result).toBe(31);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getDate)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
