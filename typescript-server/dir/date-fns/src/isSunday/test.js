"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isSunday", () => {
    (0, vitest_1.it)("returns true if the given date is Sunday", () => {
        const result = (0, index_js_1.isSunday)(new Date(2014, 8 /* Sep */, 21));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is not Sunday", () => {
        const result = (0, index_js_1.isSunday)(new Date(2014, 8 /* Sep */, 25));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isSunday)(new Date(2014, 1 /* Feb */, 9).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is `Invalid Date`", () => {
        const result = (0, index_js_1.isSunday)(new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
