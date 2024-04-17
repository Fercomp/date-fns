"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("areIntervalsOverlapping", () => {
    const initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0);
    const initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0);
    (0, vitest_1.describe)("when the time intervals don't overlap", () => {
        (0, vitest_1.it)("returns false for a valid non overlapping interval before another interval", () => {
            const earlierIntervalStart = new Date(2016, 9, 25);
            const earlierIntervalEnd = new Date(2016, 10, 9);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: earlierIntervalStart, end: earlierIntervalEnd });
            (0, vitest_1.expect)(!isOverlapping).toBe(true);
        });
        (0, vitest_1.it)("returns false for a valid non overlapping interval after another interval", () => {
            const laterIntervalStart = new Date(2016, 11, 4);
            const laterIntervalEnd = new Date(2016, 11, 9);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: laterIntervalStart, end: laterIntervalEnd });
            (0, vitest_1.expect)(!isOverlapping).toBe(true);
        });
        (0, vitest_1.it)("returns false for a non overlapping same-day interval", () => {
            const sameDayIntervalStart = new Date(2016, 11, 4, 9, 0, 0);
            const sameDayIntervalEnd = new Date(2016, 11, 4, 18, 0, 0);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: sameDayIntervalStart, end: sameDayIntervalEnd });
            (0, vitest_1.expect)(!isOverlapping).toBe(true);
        });
        (0, vitest_1.it)("returns false for an interval differing by a few hours", () => {
            const oneDayOverlappingIntervalStart = new Date(2016, 11, 3, 18, 0, 0);
            const oneDayOverlappingIntervalEnd = new Date(2016, 11, 14, 13, 0, 0);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, {
                start: oneDayOverlappingIntervalStart,
                end: oneDayOverlappingIntervalEnd,
            });
            (0, vitest_1.expect)(!isOverlapping).toBe(true);
        });
        (0, vitest_1.it)("returns false for an interval with the same startDateTime as the initial time intervals's endDateTime", () => {
            const oneDayOverlapIntervalStart = new Date(2016, 11, 3, 15, 0, 0);
            const oneDayOverlapIntervalEnd = new Date(2016, 11, 14, 13, 0, 0);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd });
            (0, vitest_1.expect)(!isOverlapping).toBe(true);
        });
        (0, vitest_1.it)("returns false for an interval with the same endDateTime as the initial time interval's startDateTime", () => {
            const oneDayOverlapIntervalStart = new Date(2016, 10, 3, 15, 0, 0);
            const oneDayOverlapIntervalEnd = new Date(2016, 10, 10, 13, 0, 0);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd });
            (0, vitest_1.expect)(!isOverlapping).toBe(true);
        });
    });
    (0, vitest_1.describe)("when the time intervals overlap", () => {
        (0, vitest_1.it)("returns true for an interval included within another interval", () => {
            const includedIntervalStart = new Date(2016, 10, 14);
            const includedIntervalEnd = new Date(2016, 10, 14);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: includedIntervalStart, end: includedIntervalEnd });
            (0, vitest_1.expect)(isOverlapping).toBe(true);
        });
        (0, vitest_1.it)("returns true for an interval overlapping at the end", () => {
            const endOverlappingIntervalStart = new Date(2016, 10, 5);
            const endOverlappingIntervalEnd = new Date(2016, 10, 14);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd });
            (0, vitest_1.expect)(isOverlapping).toBe(true);
        });
        (0, vitest_1.it)("returns true for an interval overlapping at the beginning", () => {
            const startOverlappingIntervalStart = new Date(2016, 10, 20);
            const startOverlappingIntervalEnd = new Date(2016, 11, 14);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, {
                start: startOverlappingIntervalStart,
                end: startOverlappingIntervalEnd,
            });
            (0, vitest_1.expect)(isOverlapping).toBe(true);
        });
        (0, vitest_1.it)("returns true for an interval including another interval", () => {
            const includingIntervalStart = new Date(2016, 10, 5);
            const includingIntervalEnd = new Date(2016, 11, 15);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: includingIntervalStart, end: includingIntervalEnd });
            (0, vitest_1.expect)(isOverlapping).toBe(true);
        });
    });
    (0, vitest_1.it)("accepts timestamp", () => {
        const initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0).getTime();
        const initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0).getTime();
        const endOverlappingIntervalStart = new Date(2016, 10, 5).getTime();
        const endOverlappingIntervalEnd = new Date(2016, 10, 14).getTime();
        const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd });
        (0, vitest_1.expect)(isOverlapping).toBe(true);
    });
    (0, vitest_1.it)("sort timestamp", () => {
        const result = (0, index_js_1.areIntervalsOverlapping)({ start: "1970-01-01T02:00:00.000Z", end: "1970-01-01T03:00:00.000Z" }, { start: "1969-12-31T23:30:00.000Z", end: "1970-01-01T02:30:00.000Z" });
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns result for the normalized intervals if the start date of the initial time interval is after the end date", () => {
        const includedIntervalStart = new Date(2016, 10, 14);
        const includedIntervalEnd = new Date(2016, 10, 14);
        const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalEnd, end: initialIntervalStart }, { start: includedIntervalStart, end: includedIntervalEnd });
        (0, vitest_1.expect)(isOverlapping).toBe(true);
    });
    (0, vitest_1.it)("returns result for the normalized intervals if the start date of the compared time interval is after the end date", () => {
        const includedIntervalStart = new Date(2016, 10, 14);
        const includedIntervalEnd = new Date(2016, 10, 14);
        const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: includedIntervalEnd, end: includedIntervalStart });
        (0, vitest_1.expect)(isOverlapping).toBe(true);
    });
    (0, vitest_1.describe)("when the inclusive option is true", () => {
        (0, vitest_1.it)("returns true for an interval with the same startDateTime as the initial time interval's endDateTime", () => {
            const oneDayOverlapIntervalStart = new Date(2016, 11, 3, 15, 0, 0);
            const oneDayOverlapIntervalEnd = new Date(2016, 11, 14, 13, 0, 0);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd }, { inclusive: true });
            (0, vitest_1.expect)(isOverlapping).toBe(true);
        });
        (0, vitest_1.it)("returns true for an interval with the same endDateTime as the initial time interval's startDateTime", () => {
            const oneDayOverlapIntervalStart = new Date(2016, 10, 3, 15, 0, 0);
            const oneDayOverlapIntervalEnd = new Date(2016, 10, 10, 13, 0, 0);
            const isOverlapping = (0, index_js_1.areIntervalsOverlapping)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd }, { inclusive: true });
            (0, vitest_1.expect)(isOverlapping).toBe(true);
        });
    });
    (0, vitest_1.describe)("one of the dates is `Invalid Date`", () => {
        (0, vitest_1.it)("returns false if the start date of the initial time interval is `Invalid Date`", () => {
            const result = (0, index_js_1.areIntervalsOverlapping)({ start: new Date(NaN), end: new Date(2016, 10, 3) }, { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) });
            (0, vitest_1.expect)(!result).toBe(true);
        });
        (0, vitest_1.it)("returns false if the end date of the initial time interval is `Invalid Date`", () => {
            const result = (0, index_js_1.areIntervalsOverlapping)({ start: new Date(2016, 10, 3), end: new Date(NaN) }, { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) });
            (0, vitest_1.expect)(!result).toBe(true);
        });
        (0, vitest_1.it)("returns false if the start date of the compared time interval is `Invalid Date`", () => {
            const result = (0, index_js_1.areIntervalsOverlapping)({ start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) }, { start: new Date(NaN), end: new Date(2016, 10, 5) });
            (0, vitest_1.expect)(!result).toBe(true);
        });
        (0, vitest_1.it)("returns false if the end date of the compared time interval is `Invalid Date`", () => {
            const result = (0, index_js_1.areIntervalsOverlapping)({ start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) }, { start: new Date(2016, 10, 5), end: new Date(NaN) });
            (0, vitest_1.expect)(!result).toBe(true);
        });
    });
});
