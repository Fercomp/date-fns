"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("previousWednesday", () => {
    (0, vitest_1.it)("returns the previous Wednesday given various dates after the same", () => {
        (0, vitest_1.expect)((0, index_js_1.previousWednesday)(new Date(2021, 5 /* Jun */, 5))).toEqual(new Date(2021, 5 /* Jun */, 2));
        (0, vitest_1.expect)((0, index_js_1.previousWednesday)(new Date(2021, 5 /* Jun */, 6))).toEqual(new Date(2021, 5 /* Jun */, 2));
        (0, vitest_1.expect)((0, index_js_1.previousWednesday)(new Date(2021, 5 /* Jun */, 9))).toEqual(new Date(2021, 5 /* Jun */, 2));
        (0, vitest_1.expect)((0, index_js_1.previousWednesday)(new Date(2021, 5 /* Jun */, 17))).toEqual(new Date(2021, 5 /* Jun */, 16));
        (0, vitest_1.expect)((0, index_js_1.previousWednesday)(new Date(2021, 5 /* Jun */, 18))).toEqual(new Date(2021, 5 /* Jun */, 16));
        (0, vitest_1.expect)((0, index_js_1.previousWednesday)(new Date(2021, 5 /* Jun */, 25))).toEqual(new Date(2021, 5 /* Jun */, 23));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        (0, vitest_1.expect)((0, index_js_1.previousWednesday)(new Date(NaN)) instanceof Date).toBe(true);
    });
});
