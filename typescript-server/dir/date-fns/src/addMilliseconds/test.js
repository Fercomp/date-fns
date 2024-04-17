"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("addMilliseconds", () => {
    (0, vitest_1.it)("adds the given number of milliseconds", () => {
        const result = (0, index_js_1.addMilliseconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), 750);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 750));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.addMilliseconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0).getTime(), 500);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 500));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0);
        (0, index_js_1.addMilliseconds)(date, 250);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.addMilliseconds)(new Date(NaN), 750);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.addMilliseconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 30, 0), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
