"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isFriday", () => {
    (0, vitest_1.it)("returns true if the given date is Friday", () => {
        const result = (0, index_js_1.isFriday)(new Date(2014, 8 /* Sep */, 26));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is not Friday", () => {
        const result = (0, index_js_1.isFriday)(new Date(2014, 8 /* Sep */, 25));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isFriday)(new Date(2014, 1 /* Feb */, 14).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is `Invalid Date`", () => {
        const result = (0, index_js_1.isFriday)(new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
