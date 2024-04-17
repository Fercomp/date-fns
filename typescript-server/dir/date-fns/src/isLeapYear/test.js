"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isLeapYear", () => {
    (0, vitest_1.it)("returns true if the given date is in the leap year", () => {
        const result = (0, index_js_1.isLeapYear)(new Date(2012, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is not in the leap year", () => {
        const result = (0, index_js_1.isLeapYear)(new Date(2014, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("works for the years divisible by 100 but not by 400", () => {
        const result = (0, index_js_1.isLeapYear)(new Date(2100, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("works for the years divisible by 400", () => {
        const result = (0, index_js_1.isLeapYear)(new Date(2000, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2012, 6 /* Jul */, 2).getTime();
        const result = (0, index_js_1.isLeapYear)(date);
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is `Invalid Date`", () => {
        const result = (0, index_js_1.isLeapYear)(new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
