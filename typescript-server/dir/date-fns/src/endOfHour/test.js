"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("endOfHour", () => {
    (0, vitest_1.it)("returns the date with the time set to the last millisecond before an hour ends", () => {
        const date = new Date(2014, 11, 1, 22, 15);
        const result = (0, index_js_1.endOfHour)(date);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 11, 1, 22, 59, 59, 999));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.endOfHour)(new Date(2014, 11, 1, 22, 15).getTime());
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 11, 1, 22, 59, 59, 999));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 11, 1, 22, 15);
        (0, index_js_1.endOfHour)(date);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 11, 1, 22, 15));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.endOfHour)(new Date(NaN));
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
