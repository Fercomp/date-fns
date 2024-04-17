"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("previousThursday", () => {
    (0, vitest_1.it)("returns the previous Thursday given various dates after the same", () => {
        (0, vitest_1.expect)((0, index_js_1.previousThursday)(new Date(2021, 5 /* Jun */, 5))).toEqual(new Date(2021, 5 /* Jun */, 3));
        (0, vitest_1.expect)((0, index_js_1.previousThursday)(new Date(2021, 5 /* Jun */, 6))).toEqual(new Date(2021, 5 /* Jun */, 3));
        (0, vitest_1.expect)((0, index_js_1.previousThursday)(new Date(2021, 5 /* Jun */, 10))).toEqual(new Date(2021, 5 /* Jun */, 3));
        (0, vitest_1.expect)((0, index_js_1.previousThursday)(new Date(2021, 5 /* Jun */, 14))).toEqual(new Date(2021, 5 /* Jun */, 10));
        (0, vitest_1.expect)((0, index_js_1.previousThursday)(new Date(2021, 5 /* Jun */, 15))).toEqual(new Date(2021, 5 /* Jun */, 10));
        (0, vitest_1.expect)((0, index_js_1.previousThursday)(new Date(2021, 5 /* Jun */, 24))).toEqual(new Date(2021, 5 /* Jun */, 17));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        (0, vitest_1.expect)((0, index_js_1.previousThursday)(new Date(NaN)) instanceof Date).toBe(true);
    });
});
