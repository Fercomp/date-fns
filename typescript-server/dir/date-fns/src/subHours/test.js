"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("subHours", () => {
    (0, vitest_1.it)("subtracts the given numbers of hours", () => {
        const result = (0, index_js_1.subHours)(new Date(2014, 6 /* Jul */, 11, 1, 0), 2);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 6 /* Jul */, 10, 23, 0));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.subHours)(new Date(2014, 6 /* Jul */, 12, 1, 0).getTime(), 26);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 6 /* Jul */, 10, 23, 0));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 6 /* Jul */, 10, 23, 0);
        (0, index_js_1.subHours)(date, 10);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 6 /* Jul */, 10, 23, 0));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.subHours)(new Date(NaN), 2);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.subHours)(new Date(2014, 6 /* Jul */, 11, 1, 0), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
