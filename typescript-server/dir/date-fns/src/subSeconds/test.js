"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("subSeconds", () => {
    (0, vitest_1.it)("subtracts the given number of seconds", () => {
        const result = (0, index_js_1.subSeconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), 30);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 44, 30));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.subSeconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 0).getTime(), 20);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 44, 40));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 6 /* Jul */, 10, 12, 45, 0);
        (0, index_js_1.subSeconds)(date, 15);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 6 /* Jul */, 10, 12, 45, 0));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.subSeconds)(new Date(NaN), 30);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.subSeconds)(new Date(2014, 6 /* Jul */, 10, 12, 45, 0), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
});
