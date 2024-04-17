"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setDay", () => {
    (0, vitest_1.it)("sets the day of the week", () => {
        const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), 0);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 31));
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
        const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), 0, {
            weekStartsOn: 1,
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 7));
    });
    (0, vitest_1.it)("allows to specify which day is the first day of the week in locale", () => {
        const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), 0, {
            locale: {
                options: { weekStartsOn: 1 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 7));
    });
    (0, vitest_1.it)("`options.weekStartsOn` overwrites the first day of the week specified in locale", () => {
        const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), 0, {
            weekStartsOn: 1,
            locale: {
                options: { weekStartsOn: 0 },
            },
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 7));
    });
    (0, vitest_1.it)("specifies Monday as the first day of the week", () => {
        const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 6), 1, {
            weekStartsOn: 1,
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("specifies Tuesday as the first day of the week", () => {
        const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 6), 1, {
            weekStartsOn: 2,
        });
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 8));
    });
    (0, vitest_1.describe)("the day index is more than 6", () => {
        (0, vitest_1.it)("sets the day of the next week", () => {
            const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), 8);
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 8));
        });
        (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
            const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), 7, {
                weekStartsOn: 1,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 8));
        });
        (0, vitest_1.it)("sets the day of another week in the future", () => {
            const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), 14, {
                weekStartsOn: 1,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 15));
        });
    });
    (0, vitest_1.describe)("the day index is less than 0", () => {
        (0, vitest_1.it)("sets the day of the last week", () => {
            const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), -6);
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 25));
        });
        (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
            const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), -7, {
                weekStartsOn: 1,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 25));
        });
        (0, vitest_1.it)("set the day of another week in the past", () => {
            const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), -14, {
                weekStartsOn: 1,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 18));
        });
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1).getTime(), 3);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 3));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.setDay)(date, 3);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setDay)(new Date(NaN), 0);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setDay)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
