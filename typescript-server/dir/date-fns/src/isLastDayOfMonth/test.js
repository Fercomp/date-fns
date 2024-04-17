"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isLastDayOfMonth", () => {
    (0, vitest_1.it)("returns true if the given date is in the last day of month", () => {
        const result = (0, index_js_1.isLastDayOfMonth)(new Date(2014, 9 /* Oct */, 31));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is not in the last day of month", () => {
        const result = (0, index_js_1.isLastDayOfMonth)(new Date(2014, 9 /* Oct */, 30));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 9 /* Oct */, 31).getTime();
        const result = (0, index_js_1.isLastDayOfMonth)(date);
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is `Invalid Date`", () => {
        const result = (0, index_js_1.isLastDayOfMonth)(new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
