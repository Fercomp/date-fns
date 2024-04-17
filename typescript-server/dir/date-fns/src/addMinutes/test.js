"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("addMinutes", () => {
    (0, vitest_1.it)("adds the given number of minutes", () => {
        const result = (0, index_js_1.addMinutes)(new Date(2014, 6 /* Jul */, 10, 12, 0), 30);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 30));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.addMinutes)(new Date(2014, 6 /* Jul */, 10, 12, 0).getTime(), 20);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 20));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 6 /* Jul */, 10, 12, 0);
        (0, index_js_1.addMinutes)(date, 25);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 0));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.addMinutes)(new Date(NaN), 30);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.addMinutes)(new Date(2014, 6 /* Jul */, 10, 12, 0), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
