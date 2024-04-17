"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const index_js_2 = require("../addMonths/index.js");
(0, vitest_1.describe)("intervalToDuration", () => {
    (0, vitest_1.it)("returns correct duration for arbitrary dates", () => {
        const start = new Date(1929, 0, 15, 12, 0, 0);
        const end = new Date(1968, 3, 4, 19, 5, 0);
        const result = (0, index_js_1.intervalToDuration)({ start, end });
        (0, vitest_1.expect)(result).toEqual({
            years: 39,
            months: 2,
            days: 20,
            hours: 7,
            minutes: 5,
        });
    });
    (0, vitest_1.it)("returns correct duration (1 of everything)", () => {
        const start = new Date(2020, 2, 1, 12, 0, 0);
        const end = new Date(2021, 3, 2, 13, 1, 1);
        const result = (0, index_js_1.intervalToDuration)({ start, end });
        (0, vitest_1.expect)(result).toEqual({
            years: 1,
            months: 1,
            days: 1,
            hours: 1,
            minutes: 1,
            seconds: 1,
        });
    });
    (0, vitest_1.it)("returns duration of 0 when the dates are the same", () => {
        const start = new Date(2020, 2, 1, 12, 0, 0);
        const end = new Date(2020, 2, 1, 12, 0, 0);
        const result = (0, index_js_1.intervalToDuration)({ start, end });
        (0, vitest_1.expect)(result).toEqual({});
    });
    (0, vitest_1.it)("returns a negative duration if interval's start date is greater than its end date", () => {
        const interval = {
            start: new Date(2020, 3, 1),
            end: new Date(2020, 2, 1),
        };
        const result = (0, index_js_1.intervalToDuration)(interval);
        (0, vitest_1.expect)(result).toEqual({ months: -1 });
    });
    (0, vitest_1.it)("returns an empty object if interval's start date invalid", () => {
        const interval = {
            start: new Date(NaN),
            end: new Date(2020, 0, 1),
        };
        const result = (0, index_js_1.intervalToDuration)(interval);
        (0, vitest_1.expect)(result).toEqual({});
    });
    (0, vitest_1.it)("returns an empty object  if interval's end date invalid", () => {
        const interval = {
            start: new Date(2020, 0, 1),
            end: new Date(NaN),
        };
        const result = (0, index_js_1.intervalToDuration)(interval);
        (0, vitest_1.expect)(result).toEqual({});
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("returns correct duration for dates in the end of Feb - issue 2255", () => {
            (0, vitest_1.expect)((0, index_js_1.intervalToDuration)({
                start: new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
                end: new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
            })).toEqual({
                days: 1,
                hours: 1,
            });
            (0, vitest_1.expect)((0, index_js_1.intervalToDuration)({
                start: new Date(2012, 1 /* Feb */, 29, 9, 0, 0),
                end: new Date(2012, 1 /* Feb */, 29, 10, 0, 0),
            })).toEqual({
                hours: 1,
            });
            (0, vitest_1.expect)((0, index_js_1.intervalToDuration)({
                start: new Date(2012, 1 /* Feb */, 28, 9, 0, 0),
                end: new Date(2012, 1 /* Feb */, 28, 10, 0, 0),
            })).toEqual({
                hours: 1,
            });
            // Issue 2261
            (0, vitest_1.expect)((0, index_js_1.intervalToDuration)({
                start: new Date(2021, 1 /* Feb */, 28, 7, 23, 7),
                end: new Date(2021, 1 /* Feb */, 28, 7, 38, 18),
            })).toEqual({
                minutes: 15,
                seconds: 11,
            });
        });
        (0, vitest_1.it)("returns correct duration for end of month start dates - issue 2611", () => {
            const start = new Date(2021, 7, 31);
            const end = (0, index_js_2.addMonths)(start, 1);
            (0, vitest_1.expect)(end).toEqual(new Date(2021, 8, 30));
            const duration = (0, index_js_1.intervalToDuration)({ start, end });
            const expectedDuration = {
                months: 1,
            };
            (0, vitest_1.expect)(duration).toEqual(expectedDuration);
        });
        (0, vitest_1.it)("returns correct duration for Feb 29 on leap year + 1 month - issue 1778", () => {
            const duration = (0, index_js_1.intervalToDuration)({
                start: new Date(2020, 1, 29),
                end: new Date(2020, 2, 29),
            });
            const expectedDuration = {
                months: 1,
            };
            (0, vitest_1.expect)(duration).toEqual(expectedDuration);
        });
        (0, vitest_1.it)("returns correct duration for Feb 28 to Apr 30 interval - issue 2910", () => {
            const duration = (0, index_js_1.intervalToDuration)({
                start: new Date(2022, 1, 28),
                end: new Date(2022, 3, 30),
            });
            const expectedDuration = {
                months: 2,
                days: 2,
            };
            (0, vitest_1.expect)(duration).toEqual(expectedDuration);
        });
        (0, vitest_1.describe)("issue 2470", () => {
            (0, vitest_1.it)("returns correct duration for Feb 28 to Aug 31 interval", () => {
                const duration = (0, index_js_1.intervalToDuration)({
                    start: new Date(2021, 1, 28),
                    end: new Date(2021, 7, 31),
                });
                const expectedDuration = {
                    months: 6,
                    days: 3,
                };
                (0, vitest_1.expect)(duration).toEqual(expectedDuration);
            });
            (0, vitest_1.it)("returns correct duration for Feb 28 to Aug 30 interval", () => {
                const duration = (0, index_js_1.intervalToDuration)({
                    start: new Date(2021, 1, 28),
                    end: new Date(2021, 7, 30),
                });
                const expectedDuration = {
                    months: 6,
                    days: 2,
                };
                (0, vitest_1.expect)(duration).toEqual(expectedDuration);
            });
            (0, vitest_1.it)("returns correct duration for Feb 28 to Aug 29 interval", () => {
                const duration = (0, index_js_1.intervalToDuration)({
                    start: new Date(2021, 1, 28),
                    end: new Date(2021, 7, 29),
                });
                const expectedDuration = {
                    months: 6,
                    days: 1,
                };
                (0, vitest_1.expect)(duration).toEqual(expectedDuration);
            });
            (0, vitest_1.it)("returns correct duration for Feb 28 to Aug 28 interval", () => {
                const duration = (0, index_js_1.intervalToDuration)({
                    start: new Date(2021, 1, 28),
                    end: new Date(2021, 7, 28),
                });
                const expectedDuration = {
                    months: 6,
                };
                (0, vitest_1.expect)(duration).toEqual(expectedDuration);
            });
            (0, vitest_1.it)("returns correct duration for Feb 28 to Aug 27 interval", () => {
                // Feb 28 to July 28 is 5 months, July 28 to Aug 27 is 30 days
                const duration = (0, index_js_1.intervalToDuration)({
                    start: new Date(2021, 1, 28),
                    end: new Date(2021, 7, 27),
                });
                const expectedDuration = {
                    months: 5,
                    days: 30,
                };
                (0, vitest_1.expect)(duration).toEqual(expectedDuration);
            });
            (0, vitest_1.it)("returns correct duration for Apr 30 to May 31 interval", () => {
                const duration = (0, index_js_1.intervalToDuration)({
                    start: new Date(2021, 3, 30),
                    end: new Date(2021, 4, 31),
                });
                const expectedDuration = {
                    months: 1,
                    days: 1,
                };
                (0, vitest_1.expect)(duration).toEqual(expectedDuration);
            });
        });
    });
});
