"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("addWeeks", () => {
    (0, vitest_1.it)("adds the given number of weeks", () => {
        const result = (0, index_js_1.addWeeks)(new Date(2014, 8 /* Sep */, 1), 4);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 29));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.addWeeks)(new Date(2014, 8 /* Sep */, 1).getTime(), 1);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 8));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.addWeeks)(date, 2);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.addWeeks)(new Date(NaN), 4);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.addWeeks)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
