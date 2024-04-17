"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("subBusinessDays", () => {
    (0, vitest_1.it)("substract the given number of business days", () => {
        const result = (0, index_js_1.subBusinessDays)(new Date(2014, 8 /* Sep */, 1), 10);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 18));
    });
    (0, vitest_1.it)("handles negative amount", () => {
        const result = (0, index_js_1.subBusinessDays)(new Date(2014, 7 /* Sep */, 18), -10);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("can handle a large number of business days", () => {
        const result = (0, index_js_1.subBusinessDays)(new Date(15000, 0 /* Jan */, 1), 3387885);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 1));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.subBusinessDays)(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 18));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.subBusinessDays)(date, 11);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.subBusinessDays)(new Date(NaN), 10);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.subBusinessDays)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
