"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("formatISO9075", () => {
    (0, vitest_1.it)("formats ISO-9075 extended date format", () => {
        const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
        (0, vitest_1.expect)((0, index_js_1.formatISO9075)(date)).toBe("2019-03-03 19:00:52");
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime();
        (0, vitest_1.expect)((0, index_js_1.formatISO9075)(date)).toBe("2019-03-03 19:00:52");
    });
    (0, vitest_1.it)("formats ISO-8601 basic date format", () => {
        const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
        (0, vitest_1.expect)((0, index_js_1.formatISO9075)(date, { format: "basic" })).toBe("20191004 123013");
    });
    (0, vitest_1.it)("formats only date", () => {
        const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);
        (0, vitest_1.expect)((0, index_js_1.formatISO9075)(date, { representation: "date", format: "extended" })).toBe("2019-12-11");
        (0, vitest_1.expect)((0, index_js_1.formatISO9075)(date, { representation: "date", format: "basic" })).toBe("20191211");
    });
    (0, vitest_1.it)("formats only time", () => {
        const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
        (0, vitest_1.expect)((0, index_js_1.formatISO9075)(date, { representation: "time", format: "extended" })).toBe("19:00:52");
        (0, vitest_1.expect)((0, index_js_1.formatISO9075)(date, { representation: "time", format: "basic" })).toBe("190052");
    });
    (0, vitest_1.it)("throws RangeError if the time value is invalid", () => {
        (0, vitest_1.expect)(index_js_1.formatISO9075.bind(null, new Date(NaN))).toThrow(RangeError);
    });
});
