"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("previousMonday", () => {
    (0, vitest_1.it)("returns the previous Monday given various dates after the same", () => {
        (0, vitest_1.expect)((0, index_js_1.previousMonday)(new Date(2021, 5 /* Jun */, 5))).toEqual(new Date(2021, 4 /* May */, 31));
        (0, vitest_1.expect)((0, index_js_1.previousMonday)(new Date(2021, 5 /* Jun */, 6))).toEqual(new Date(2021, 4 /* May */, 31));
        (0, vitest_1.expect)((0, index_js_1.previousMonday)(new Date(2021, 5 /* Jun */, 7))).toEqual(new Date(2021, 4 /* May */, 31));
        (0, vitest_1.expect)((0, index_js_1.previousMonday)(new Date(2021, 5 /* Jun */, 14))).toEqual(new Date(2021, 5 /* Jun */, 7));
        (0, vitest_1.expect)((0, index_js_1.previousMonday)(new Date(2021, 5 /* Jun */, 15))).toEqual(new Date(2021, 5 /* Jun */, 14));
        (0, vitest_1.expect)((0, index_js_1.previousMonday)(new Date(2021, 5 /* Jun */, 16))).toEqual(new Date(2021, 5 /* Jun */, 14));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        (0, vitest_1.expect)((0, index_js_1.previousMonday)(new Date(NaN)) instanceof Date).toBe(true);
    });
});
