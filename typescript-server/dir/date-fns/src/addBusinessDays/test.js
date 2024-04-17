"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("addBusinessDays", () => {
    (0, vitest_1.it)("adds the given number of business days", () => {
        const result = (0, index_js_1.addBusinessDays)(new Date(2014, 8 /* Sep */, 1), 10);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 15));
    });
    (0, vitest_1.it)("handles negative amount", () => {
        const result = (0, index_js_1.addBusinessDays)(new Date(2014, 8 /* Sep */, 15), -10);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns the Monday when 1 day is added on the Friday", () => {
        (0, vitest_1.expect)((0, index_js_1.addBusinessDays)(new Date(2020, 0 /* Jan */, 10), 1)).toEqual(// Friday
        // Monday
        new Date(2020, 0 /* Jan */, 13));
    });
    (0, vitest_1.it)("returns the Monday when 1 day is added on the Satuday", () => {
        (0, vitest_1.expect)((0, index_js_1.addBusinessDays)(new Date(2020, 0 /* Jan */, 11), 1)).toEqual(// Saturday
        // Monday
        new Date(2020, 0 /* Jan */, 13));
    });
    (0, vitest_1.it)("returns the Monday when 1 day is added on the Sunday", () => {
        (0, vitest_1.expect)((0, index_js_1.addBusinessDays)(new Date(2020, 0 /* Jan */, 12), 1)).toEqual(// Sunday
        // Monday
        new Date(2020, 0 /* Jan */, 13));
    });
    (0, vitest_1.it)("can handle a large number of business days", () => {
        const result = (0, index_js_1.addBusinessDays)(new Date(2014, 0 /* Jan */, 1), 3387885);
        (0, vitest_1.expect)(result).toEqual(new Date(15000, 0 /* Jan */, 1));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.addBusinessDays)(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 15));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.addBusinessDays)(date, 11);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.addBusinessDays)(new Date(NaN), 10);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.addBusinessDays)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("starting from a weekend day should land on a weekday when reducing a divisible by 5", () => {
        const substractResult = (0, index_js_1.addBusinessDays)(new Date(2019, 7, 18), -5);
        (0, vitest_1.expect)(substractResult).toEqual(new Date(2019, 7, 12));
        const subtractResultWeekend = (0, index_js_1.addBusinessDays)(new Date(2019, 7, 17), -5);
        (0, vitest_1.expect)(subtractResultWeekend).toEqual(new Date(2019, 7, 12));
        const addResult = (0, index_js_1.addBusinessDays)(new Date(2019, 7, 18), 5);
        (0, vitest_1.expect)(addResult).toEqual(new Date(2019, 7, 23));
        const addResultWeekend = (0, index_js_1.addBusinessDays)(new Date(2019, 7, 17), 5);
        (0, vitest_1.expect)(addResultWeekend).toEqual(new Date(2019, 7, 23));
    });
});
