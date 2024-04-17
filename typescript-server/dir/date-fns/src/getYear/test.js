"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getYear", () => {
    (0, vitest_1.it)("returns the year of the given date", () => {
        const result = (0, index_js_1.getYear)(new Date(2014, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(2014);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.getYear)(new Date(2000, 3 /* Apr */, 2).getTime());
        (0, vitest_1.expect)(result).toBe(2000);
    });
    (0, vitest_1.it)("returns NaN if the given date is invalid", () => {
        const result = (0, index_js_1.getYear)(new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
