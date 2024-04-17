"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("formatRFC7231", () => {
    (0, vitest_1.it)("formats RFC-7231 date string", () => {
        const date = new Date(Date.UTC(2019, 2, 3, 19, 0, 52));
        (0, vitest_1.expect)((0, index_js_1.formatRFC7231)(date)).toBe("Sun, 03 Mar 2019 19:00:52 GMT");
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = Date.UTC(2019, 9, 4, 12, 30, 13);
        (0, vitest_1.expect)((0, index_js_1.formatRFC7231)(date)).toBe("Fri, 04 Oct 2019 12:30:13 GMT");
    });
    (0, vitest_1.it)("throws RangeError if the time value is invalid", () => {
        (0, vitest_1.expect)(index_js_1.formatRFC7231.bind(null, new Date(NaN))).toThrow(RangeError);
    });
});
