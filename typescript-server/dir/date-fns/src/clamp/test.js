"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("clamp", () => {
    (0, vitest_1.it)("accepts timestamps", () => {
        const start = new Date(2000, 1, 1).getTime();
        const date = new Date(2000, 1, 2).getTime();
        const end = new Date(2000, 1, 3).getTime();
        const result = (0, index_js_1.clamp)(date, { start, end });
        (0, vitest_1.expect)(result).toEqual(new Date(2000, 1, 2));
    });
    (0, vitest_1.it)("returns the start date when the date is less than start", () => {
        const start = new Date(2001, 1, 1);
        const date = new Date(2000, 1, 1);
        const end = new Date(2020, 1, 1);
        const result = (0, index_js_1.clamp)(date, { start, end });
        (0, vitest_1.expect)(result).toEqual(new Date(2001, 1, 1));
    });
    (0, vitest_1.it)("returns the end date when the date is greater than the end date", () => {
        const start = new Date(2000, 1, 1);
        const date = new Date(2003, 1, 1);
        const end = new Date(2001, 1, 1);
        const result = (0, index_js_1.clamp)(date, { start, end });
        (0, vitest_1.expect)(result).toEqual(new Date(2001, 1, 1));
    });
    (0, vitest_1.it)("returns the date when the date is within the bound of start and end", () => {
        const start = new Date(2000, 1, 1);
        const date = new Date(2001, 1, 1);
        const end = new Date(2003, 1, 1);
        const result = (0, index_js_1.clamp)(date, { start, end });
        (0, vitest_1.expect)(result).toEqual(new Date(2001, 1, 1));
    });
});
