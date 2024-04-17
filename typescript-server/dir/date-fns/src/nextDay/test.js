"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("nextDay", () => {
    (0, vitest_1.it)("returns the following Monday given various dates before the same", () => {
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 2 /* Mar */, 20), 1)).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 2 /* Mar */, 19), 1)).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 2 /* Mar */, 18), 1)).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 2 /* Mar */, 17), 1)).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 2 /* Mar */, 16), 1)).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 2 /* Mar */, 22), 1)).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 4 /* May */, 2), 1)).toEqual(new Date(2020, 4 /* May */, 4));
    });
    (0, vitest_1.it)("returns the following Tuesday given the Saturday before it", () => {
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 4 /* May */, 2), 2)).toEqual(new Date(2020, 4 /* May */, 5));
    });
    (0, vitest_1.it)("returns the following Wednesday given the Saturday before it", () => {
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 4 /* May */, 2), 3)).toEqual(new Date(2020, 4 /* May */, 6));
    });
    (0, vitest_1.it)("returns the following Thursday given the Saturday before it", () => {
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 4 /* May */, 2), 4)).toEqual(new Date(2020, 4 /* May */, 7));
    });
    (0, vitest_1.it)("returns the following Friday given the Saturday before it", () => {
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 4 /* May */, 2), 5)).toEqual(new Date(2020, 4 /* May */, 8));
    });
    (0, vitest_1.it)("returns the following Saturday given the Saturday before it", () => {
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 4 /* May */, 2), 6)).toEqual(new Date(2020, 4 /* May */, 9));
    });
    (0, vitest_1.it)("returns next Sunday given the day is Sunday", () => {
        (0, vitest_1.expect)((0, index_js_1.nextDay)(new Date(2020, 2 /* Mar */, 22), 0)).toEqual(new Date(2020, 2 /* Mar */, 29));
    });
});
