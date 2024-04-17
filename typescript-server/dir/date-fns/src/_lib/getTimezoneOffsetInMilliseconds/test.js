"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getTimezoneOffsetInMilliseconds", () => {
    (0, vitest_1.it)("works for a modern date", () => {
        const date = new Date(2018, 0 /* Jan */, 1, 12, 34, 56, 789);
        const result = date.getTime() - (0, index_js_1.getTimezoneOffsetInMilliseconds)(date);
        const expectedResult = Date.UTC(2018, 0 /* Jan */, 1, 12, 34, 56, 789);
        (0, vitest_1.expect)(result).toBe(expectedResult);
    });
    (0, vitest_1.it)("works for a date before standardized timezones", () => {
        const date = new Date(1800, 0 /* Jan */, 1, 12, 34, 56, 789);
        const result = date.getTime() - (0, index_js_1.getTimezoneOffsetInMilliseconds)(date);
        const expectedResult = Date.UTC(1800, 0 /* Jan */, 1, 12, 34, 56, 789);
        (0, vitest_1.expect)(result).toBe(expectedResult);
    });
    (0, vitest_1.it)("works for a date BC", () => {
        const date = new Date(-500, 0 /* Jan */, 1, 12, 34, 56, 789);
        const result = date.getTime() - (0, index_js_1.getTimezoneOffsetInMilliseconds)(date);
        const expectedResult = Date.UTC(-500, 0 /* Jan */, 1, 12, 34, 56, 789);
        (0, vitest_1.expect)(result).toBe(expectedResult);
    });
});
