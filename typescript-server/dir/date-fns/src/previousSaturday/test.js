"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("previousSaturday", () => {
    (0, vitest_1.it)("returns the previous Saturday given various dates after the same", () => {
        (0, vitest_1.expect)((0, index_js_1.previousSaturday)(new Date(2021, 5 /* Jun */, 7))).toEqual(new Date(2021, 5 /* Jun */, 5));
        (0, vitest_1.expect)((0, index_js_1.previousSaturday)(new Date(2021, 5 /* Jun */, 8))).toEqual(new Date(2021, 5 /* Jun */, 5));
        (0, vitest_1.expect)((0, index_js_1.previousSaturday)(new Date(2021, 5 /* Jun */, 12))).toEqual(new Date(2021, 5 /* Jun */, 5));
        (0, vitest_1.expect)((0, index_js_1.previousSaturday)(new Date(2021, 5 /* Jun */, 16))).toEqual(new Date(2021, 5 /* Jun */, 12));
        (0, vitest_1.expect)((0, index_js_1.previousSaturday)(new Date(2021, 5 /* Jun */, 17))).toEqual(new Date(2021, 5 /* Jun */, 12));
        (0, vitest_1.expect)((0, index_js_1.previousSaturday)(new Date(2021, 5 /* Jun */, 24))).toEqual(new Date(2021, 5 /* Jun */, 19));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        (0, vitest_1.expect)((0, index_js_1.previousSaturday)(new Date(NaN)) instanceof Date).toBe(true);
    });
});
