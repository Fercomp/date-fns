"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("nextWednesday", () => {
    (0, vitest_1.it)("returns the following Wednesday given various dates before the same", () => {
        (0, vitest_1.expect)((0, index_js_1.nextWednesday)(new Date(2020, 4 /* May */, 23))).toEqual(new Date(2020, 4 /* May */, 27));
        (0, vitest_1.expect)((0, index_js_1.nextWednesday)(new Date(2020, 4 /* May */, 22))).toEqual(new Date(2020, 4 /* May */, 27));
        (0, vitest_1.expect)((0, index_js_1.nextWednesday)(new Date(2020, 4 /* May */, 21))).toEqual(new Date(2020, 4 /* May */, 27));
        (0, vitest_1.expect)((0, index_js_1.nextWednesday)(new Date(2020, 4 /* May */, 20))).toEqual(new Date(2020, 4 /* May */, 27));
        (0, vitest_1.expect)((0, index_js_1.nextWednesday)(new Date(2020, 4 /* May */, 19))).toEqual(new Date(2020, 4 /* May */, 20));
        (0, vitest_1.expect)((0, index_js_1.nextWednesday)(new Date(2020, 4 /* May */, 18))).toEqual(new Date(2020, 4 /* May */, 20));
        (0, vitest_1.expect)((0, index_js_1.nextWednesday)(new Date(2020, 4 /* May */, 17))).toEqual(new Date(2020, 4 /* May */, 20));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        (0, vitest_1.expect)((0, index_js_1.nextWednesday)(new Date(NaN)) instanceof Date).toBe(true);
    });
});
