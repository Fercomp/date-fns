"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const index_js_2 = require("../isWeekend/index.js");
(0, vitest_1.describe)("eachWeekendOfYear", () => {
    (0, vitest_1.it)("returns all weekends of the given year", () => {
        const result = (0, index_js_1.eachWeekendOfYear)(new Date(2020, 0, 1));
        (0, vitest_1.expect)(result.length).toBe(104);
        (0, vitest_1.expect)(result.every(index_js_2.isWeekend)).toBe(true);
        (0, vitest_1.expect)(result[0]).toEqual(new Date(2020, 0, 4));
        (0, vitest_1.expect)(result[103]).toEqual(new Date(2020, 11, 27));
    });
    (0, vitest_1.it)("returns an empty asrray when the expected year is an Invalid Date", () => {
        const result = (0, index_js_1.eachWeekendOfYear)(new Date(NaN));
        (0, vitest_1.expect)(result).toEqual([]);
    });
});
