"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getMinutes", () => {
    (0, vitest_1.it)("returns the minutes of the given date", () => {
        const result = (0, index_js_1.getMinutes)(new Date(2012, 1 /* Feb */, 29, 11, 45, 5));
        (0, vitest_1.expect)(result).toBe(45);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getMinutes)(new Date(2014, 3 /* Apr */, 2, 23, 30).getTime());
        (0, vitest_1.expect)(result).toBe(30);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getMinutes)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
