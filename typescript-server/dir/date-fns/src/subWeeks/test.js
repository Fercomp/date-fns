"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("subWeeks", () => {
    (0, vitest_1.it)("subtracts the given number of weeks", () => {
        const result = (0, index_js_1.subWeeks)(new Date(2014, 8 /* Sep */, 1), 4);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 4));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.subWeeks)(new Date(2014, 8 /* Sep */, 1).getTime(), 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 25));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.subWeeks)(date, 2);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.subWeeks)(new Date(NaN), 4);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.subWeeks)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
