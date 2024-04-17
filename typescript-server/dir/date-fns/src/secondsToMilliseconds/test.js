"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("secondsToMilliseconds", () => {
    (0, vitest_1.it)("converts seconds to milliseconds", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToMilliseconds)(1)).toBe(1000);
        (0, vitest_1.expect)((0, index_js_1.secondsToMilliseconds)(2)).toBe(2000);
    });
    (0, vitest_1.it)("handles border values", () => {
        (0, vitest_1.expect)((0, index_js_1.secondsToMilliseconds)(1.5)).toBe(1500);
        (0, vitest_1.expect)((0, index_js_1.secondsToMilliseconds)(0)).toBe(0);
    });
});
