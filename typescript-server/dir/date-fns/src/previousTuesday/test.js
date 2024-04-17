"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("previousTuesday", () => {
    (0, vitest_1.it)("returns the previous Tuesday given various dates after the same", () => {
        (0, vitest_1.expect)((0, index_js_1.previousTuesday)(new Date(2021, 5 /* Jun */, 5))).toEqual(new Date(2021, 5 /* Jun */, 1));
        (0, vitest_1.expect)((0, index_js_1.previousTuesday)(new Date(2021, 5 /* Jun */, 6))).toEqual(new Date(2021, 5 /* Jun */, 1));
        (0, vitest_1.expect)((0, index_js_1.previousTuesday)(new Date(2021, 5 /* Jun */, 8))).toEqual(new Date(2021, 5 /* Jun */, 1));
        (0, vitest_1.expect)((0, index_js_1.previousTuesday)(new Date(2021, 5 /* Jun */, 15))).toEqual(new Date(2021, 5 /* Jun */, 8));
        (0, vitest_1.expect)((0, index_js_1.previousTuesday)(new Date(2021, 5 /* Jun */, 17))).toEqual(new Date(2021, 5 /* Jun */, 15));
        (0, vitest_1.expect)((0, index_js_1.previousTuesday)(new Date(2021, 5 /* Jun */, 18))).toEqual(new Date(2021, 5 /* Jun */, 15));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        (0, vitest_1.expect)((0, index_js_1.previousTuesday)(new Date(NaN)) instanceof Date).toBe(true);
    });
});
