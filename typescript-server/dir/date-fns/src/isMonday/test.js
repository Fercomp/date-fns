"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isMonday", () => {
    (0, vitest_1.it)("returns true if the given date is Monday", () => {
        const result = (0, index_js_1.isMonday)(new Date(2014, 8 /* Sep */, 22));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is not Monday", () => {
        const result = (0, index_js_1.isMonday)(new Date(2014, 8 /* Sep */, 25));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isMonday)(new Date(2014, 1 /* Feb */, 10).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is `Invalid Date`", () => {
        const result = (0, index_js_1.isMonday)(new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
