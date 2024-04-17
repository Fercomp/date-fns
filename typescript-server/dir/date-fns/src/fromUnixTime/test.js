"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("fromUnixTime", () => {
    (0, vitest_1.it)("returns the date derived from the given UNIX timestamp", () => {
        const result = (0, index_js_1.fromUnixTime)(1330515499);
        (0, vitest_1.expect)(result.getTime()).toBe(1330515499000);
    });
    (0, vitest_1.it)("returns invalid if the given timestamp is invalid", () => {
        const result = (0, index_js_1.fromUnixTime)(NaN);
        (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
    });
});
