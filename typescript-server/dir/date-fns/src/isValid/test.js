"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isValid", () => {
    (0, vitest_1.it)("returns true if the given date is valid", () => {
        const result = (0, index_js_1.isValid)(new Date());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is invalid", () => {
        const result = (0, index_js_1.isValid)(new Date(""));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        (0, vitest_1.expect)((0, index_js_1.isValid)(new Date(2014, 1 /* Feb */, 11).getTime())).toBe(true);
        (0, vitest_1.expect)((0, index_js_1.isValid)(NaN)).toBe(false);
    });
    (0, vitest_1.it)("treats null as an invalid date", () => {
        const result = (0, index_js_1.isValid)(null);
        (0, vitest_1.expect)(result).toBe(false);
    });
});
