"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("previousDay", () => {
    (0, vitest_1.it)("returns the previous Monday given various dates after the same", () => {
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 18), 1)).toEqual(new Date(2021, 5 /* Jun */, 14));
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 17), 1)).toEqual(new Date(2021, 5 /* Jun */, 14));
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 14), 1)).toEqual(new Date(2021, 5 /* Jun */, 7));
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 9), 1)).toEqual(new Date(2021, 5 /* Jun */, 7));
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 8), 1)).toEqual(new Date(2021, 5 /* Jun */, 7));
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 7), 1)).toEqual(new Date(2021, 4 /* May */, 31));
    });
    (0, vitest_1.it)("returns the previous Tuesday given the Saturday after it", () => {
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 26), 2)).toEqual(new Date(2021, 5 /* Jun */, 22));
    });
    (0, vitest_1.it)("returns the previous Wednesday given the Saturday after it", () => {
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 26), 3)).toEqual(new Date(2021, 5 /* Jun */, 23));
    });
    (0, vitest_1.it)("returns the previous Thursday given the Saturday after it", () => {
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 26), 4)).toEqual(new Date(2021, 5 /* Jun */, 24));
    });
    (0, vitest_1.it)("returns the previous Friday given the Saturday after it", () => {
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 26), 5)).toEqual(new Date(2021, 5 /* Jun */, 25));
    });
    (0, vitest_1.it)("returns the previous Saturday given the Saturday after it", () => {
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 26), 6)).toEqual(new Date(2021, 5 /* Jun */, 19));
    });
    (0, vitest_1.it)("returns the previous Sunday given the day is Sunday", () => {
        (0, vitest_1.expect)((0, index_js_1.previousDay)(new Date(2021, 5 /* Jun */, 27), 0)).toEqual(new Date(2021, 5 /* Jun */, 20));
    });
});
