"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("nextMonday", () => {
    (0, vitest_1.it)("returns the following Monday given various dates before the same", () => {
        (0, vitest_1.expect)((0, index_js_1.nextMonday)(new Date(2020, 2 /* Mar */, 23))).toEqual(new Date(2020, 2 /* Mar */, 30));
        (0, vitest_1.expect)((0, index_js_1.nextMonday)(new Date(2020, 2 /* Mar */, 22))).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextMonday)(new Date(2020, 3 /* Apr */, 11))).toEqual(new Date(2020, 3 /* Apr */, 13));
        (0, vitest_1.expect)((0, index_js_1.nextMonday)(new Date(2020, 2 /* Mar */, 20))).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextMonday)(new Date(2020, 2 /* Mar */, 19))).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextMonday)(new Date(2020, 2 /* Mar */, 18))).toEqual(new Date(2020, 2 /* Mar */, 23));
        (0, vitest_1.expect)((0, index_js_1.nextMonday)(new Date(2020, 2 /* Mar */, 17))).toEqual(new Date(2020, 2 /* Mar */, 23));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        (0, vitest_1.expect)((0, index_js_1.nextMonday)(new Date(NaN)) instanceof Date).toBe(true);
    });
});
