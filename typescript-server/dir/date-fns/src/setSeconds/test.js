"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("setSeconds", () => {
    (0, vitest_1.it)("sets the seconds", () => {
        const result = (0, index_js_1.setSeconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), 45);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 45, 500));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.setSeconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 15).getTime(), 45);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 45));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1, 11, 30, 40);
        (0, index_js_1.setSeconds)(date, 15);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1, 11, 30, 40));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.setSeconds)(new Date(NaN), 45);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.setSeconds)(new Date(2014, 8 /* Sep */, 1, 11, 30, 40, 500), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
