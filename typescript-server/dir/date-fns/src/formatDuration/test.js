"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("formatDuration", () => {
    (0, vitest_1.it)("formats full duration", () => {
        (0, vitest_1.expect)((0, index_js_1.formatDuration)({
            years: 2,
            months: 9,
            weeks: 1,
            days: 7,
            hours: 5,
            minutes: 9,
            seconds: 30,
        })).toBe("2 years 9 months 1 week 7 days 5 hours 9 minutes 30 seconds");
    });
    (0, vitest_1.it)("formats partial duration", () => {
        (0, vitest_1.expect)((0, index_js_1.formatDuration)({ months: 9, days: 2 })).toBe("9 months 2 days");
    });
    (0, vitest_1.it)("allows to customize the format", () => {
        (0, vitest_1.expect)((0, index_js_1.formatDuration)({
            years: 2,
            months: 9,
            weeks: 1,
            days: 7,
            hours: 5,
            minutes: 9,
            seconds: 30,
        }, { format: ["months", "weeks"] })).toBe("9 months 1 week");
    });
    (0, vitest_1.it)("does not include zeros by default", () => {
        (0, vitest_1.expect)((0, index_js_1.formatDuration)({
            years: 0,
            months: 0,
            weeks: 1,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        })).toBe("1 week");
    });
    (0, vitest_1.it)("allows to include zeros", () => {
        (0, vitest_1.expect)((0, index_js_1.formatDuration)({
            years: 0,
            months: 0,
            weeks: 1,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0,
        }, { zero: true })).toBe("0 years 0 months 1 week 0 days 0 hours 0 minutes 0 seconds");
    });
    (0, vitest_1.it)("allows to customize the delimiter", () => {
        (0, vitest_1.expect)((0, index_js_1.formatDuration)({ months: 9, days: 2 }, { delimiter: ", " })).toBe("9 months, 2 days");
    });
});
