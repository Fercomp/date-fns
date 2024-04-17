"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setISODay", () => {
    (0, vitest_1.it)("sets the day of the ISO week", () => {
        const result = (0, index_js_1.setISODay)(new Date(2014, 8 /* Sep */, 1), 3);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 3));
    });
    (0, vitest_1.it)("sets the day to Sunday of this ISO week if the index is 7", () => {
        const result = (0, index_js_1.setISODay)(new Date(2014, 8 /* Sep */, 1), 7);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 7));
    });
    (0, vitest_1.describe)("the day index is more than 7", () => {
        (0, vitest_1.it)("sets the day of the next ISO week", () => {
            const result = (0, index_js_1.setISODay)(new Date(2014, 8 /* Sep */, 1), 8);
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 8));
        });
        (0, vitest_1.it)("sets the day of another ISO week in the future", () => {
            const result = (0, index_js_1.setISODay)(new Date(2014, 8 /* Sep */, 1), 21);
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 21));
        });
    });
    (0, vitest_1.describe)("the day index is less than 1", () => {
        (0, vitest_1.it)("sets the day of the last ISO week", () => {
            const result = (0, index_js_1.setISODay)(new Date(2014, 8 /* Sep */, 1), 0);
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 31));
        });
        (0, vitest_1.it)("set the day of another ISO week in the past", () => {
            const result = (0, index_js_1.setISODay)(new Date(2014, 8 /* Sep */, 1), -13);
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 18));
        });
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setISODay)(new Date(2014, 8 /* Sep */, 1).getTime(), 3);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 3));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.setISODay)(date, 3);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setISODay)(new Date(NaN), 3);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setISODay)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
