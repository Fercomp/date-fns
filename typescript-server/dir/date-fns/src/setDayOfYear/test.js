"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setDayOfYear", () => {
    (0, vitest_1.it)("sets the day of the year", () => {
        const result = (0, index_js_1.setDayOfYear)(new Date(2014, 6 /* Jul */, 2), 2);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 2));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setDayOfYear)(new Date(2014, 6 /* Jul */, 2).getTime(), 60);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 2 /* Mar */, 1));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 6 /* Jul */, 2);
        (0, index_js_1.setDayOfYear)(date, 365);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 6 /* Jul */, 2));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setDayOfYear)(new Date(NaN), 2);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setDayOfYear)(new Date(2014, 6 /* Jul */, 2), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
