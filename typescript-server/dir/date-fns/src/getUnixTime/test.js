"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getUnixTime", () => {
    (0, vitest_1.it)("returns the timestamp of the given date", () => {
        const timestamp = 1483228800000;
        const result = (0, index_js_1.getUnixTime)(new Date(timestamp));
        (0, vitest_1.expect)(result).toBe(1483228800);
    });
    (0, vitest_1.it)("accepts a timestamp (and returns it unchanged)", () => {
        const timestamp = 804643200000;
        const result = (0, index_js_1.getUnixTime)(timestamp);
        (0, vitest_1.expect)(result).toBe(804643200);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getUnixTime)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("seconds timestamp handles negative numbers", () => {
        (0, vitest_1.expect)((0, index_js_1.getUnixTime)(new Date(1001))).toBe(1);
        (0, vitest_1.expect)((0, index_js_1.getUnixTime)(new Date(-1001))).toBe(-1);
    });
});
