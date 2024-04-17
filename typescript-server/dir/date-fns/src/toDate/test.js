"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("toDate", () => {
    (0, vitest_1.describe)("date argument", () => {
        (0, vitest_1.it)("returns a clone of the given date", () => {
            const date = new Date(2016, 0, 1);
            const dateClone = (0, index_js_1.toDate)(date);
            dateClone.setFullYear(2015);
            (0, vitest_1.expect)(date).toEqual(new Date(2016, 0, 1));
        });
    });
    (0, vitest_1.describe)("timestamp argument", () => {
        (0, vitest_1.it)("creates a date from the timestamp", () => {
            const timestamp = new Date(2016, 0, 1, 23, 30, 45, 123).getTime();
            const result = (0, index_js_1.toDate)(timestamp);
            (0, vitest_1.expect)(result).toEqual(new Date(2016, 0, 1, 23, 30, 45, 123));
        });
    });
    (0, vitest_1.describe)("invalid argument", () => {
        (0, vitest_1.it)("returns Invalid Date if argument is NaN", () => {
            const result = (0, index_js_1.toDate)(NaN);
            (0, vitest_1.expect)(result instanceof Date).toBe(true);
            (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
        });
        (0, vitest_1.it)("returns Invalid Date if argument is Invalid Date", () => {
            const result = (0, index_js_1.toDate)(new Date(NaN));
            (0, vitest_1.expect)(result instanceof Date).toBe(true);
            (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
        });
    });
});
