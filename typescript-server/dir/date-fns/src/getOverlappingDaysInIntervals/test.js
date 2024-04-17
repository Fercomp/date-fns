"use strict";
/* eslint-env mocha */
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("getOverlappingDaysInIntervals", () => {
    const initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0);
    const initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0);
    (0, vitest_1.describe)("when the time intervals don't overlap", () => {
        (0, vitest_1.it)("returns 0 for a valid non overlapping interval before another interval", () => {
            const earlierIntervalStart = new Date(2016, 9, 25);
            const earlierIntervalEnd = new Date(2016, 10, 9);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: earlierIntervalStart, end: earlierIntervalEnd });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
        (0, vitest_1.it)("returns 0 for a valid non overlapping interval after another interval", () => {
            const laterIntervalStart = new Date(2016, 11, 4);
            const laterIntervalEnd = new Date(2016, 11, 9);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: laterIntervalStart, end: laterIntervalEnd });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
        (0, vitest_1.it)("returns 0 for a non overlapping same-day interval", () => {
            const sameDayIntervalStart = new Date(2016, 11, 4, 9, 0, 0);
            const sameDayIntervalEnd = new Date(2016, 11, 4, 18, 0, 0);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: sameDayIntervalStart, end: sameDayIntervalEnd });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
        (0, vitest_1.it)("returns 0 for an interval differing by a few hours", () => {
            const oneDayOverlappingIntervalStart = new Date(2016, 11, 3, 18, 0, 0);
            const oneDayOverlappingIntervalEnd = new Date(2016, 11, 14, 13, 0, 0);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, {
                start: oneDayOverlappingIntervalStart,
                end: oneDayOverlappingIntervalEnd,
            });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
        (0, vitest_1.it)("returns 0 for an interval with the same startDateTime as the initial time intervals's endDateTime", () => {
            const oneDayOverlapIntervalStart = new Date(2016, 11, 3, 15, 0, 0);
            const oneDayOverlapIntervalEnd = new Date(2016, 11, 14, 13, 0, 0);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
        (0, vitest_1.it)("returns 0 for an interval with the same endDateTime as the initial time interval's startDateTime", () => {
            const oneDayOverlapIntervalStart = new Date(2016, 10, 3, 15, 0, 0);
            const oneDayOverlapIntervalEnd = new Date(2016, 10, 10, 13, 0, 0);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: oneDayOverlapIntervalStart, end: oneDayOverlapIntervalEnd });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
    });
    (0, vitest_1.describe)("when the time intervals overlap", () => {
        (0, vitest_1.it)("rounds up the result to include each started overlapping day", () => {
            const includedIntervalStart = new Date(2016, 10, 14, 9, 0, 0);
            const includedIntervalEnd = new Date(2016, 10, 15, 18, 0, 0);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: includedIntervalStart, end: includedIntervalEnd });
            (0, vitest_1.expect)(numOverlappingDays).toBe(2);
        });
        (0, vitest_1.it)("returns the correct value for an interval included within another interval", () => {
            const includedIntervalStart = new Date(2016, 10, 14);
            const includedIntervalEnd = new Date(2016, 10, 15);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: includedIntervalStart, end: includedIntervalEnd });
            (0, vitest_1.expect)(numOverlappingDays).toBe(1);
        });
        (0, vitest_1.it)("returns the correct value for an interval overlapping at the end", () => {
            const endOverlappingIntervalStart = new Date(2016, 10, 5);
            const endOverlappingIntervalEnd = new Date(2016, 10, 14);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd });
            (0, vitest_1.expect)(numOverlappingDays).toBe(4);
        });
        (0, vitest_1.it)("returns the correct value for an interval overlapping at the beginning", () => {
            const startOverlappingIntervalStart = new Date(2016, 10, 20);
            const startOverlappingIntervalEnd = new Date(2016, 11, 14);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, {
                start: startOverlappingIntervalStart,
                end: startOverlappingIntervalEnd,
            });
            (0, vitest_1.expect)(numOverlappingDays).toBe(14);
        });
        (0, vitest_1.it)("returns the correct value for an interval including another interval", () => {
            const includingIntervalStart = new Date(2016, 10, 5);
            const includingIntervalEnd = new Date(2016, 11, 15);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: includingIntervalStart, end: includingIntervalEnd });
            (0, vitest_1.expect)(numOverlappingDays).toBe(24);
        });
        (0, vitest_1.it)("considers equal 0-lenght intervals not overlapping", () => {
            const date = new Date(2016, 10, 15);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: date, end: date }, { start: date, end: date });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
        (0, vitest_1.it)("considers equal 1ms-length intervals overlapping", () => {
            const start = new Date(2016, 10, 15);
            const end = new Date(2016, 10, 15, 0, 0, 0, 1);
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start, end }, { start, end });
            (0, vitest_1.expect)(numOverlappingDays).toBe(1);
        });
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0).getTime();
        const initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0).getTime();
        const endOverlappingIntervalStart = new Date(2016, 10, 5).getTime();
        const endOverlappingIntervalEnd = new Date(2016, 10, 14).getTime();
        const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd });
        (0, vitest_1.expect)(numOverlappingDays).toBe(4);
    });
    (0, vitest_1.it)("normalizes the left interval if its start date is after the end date", () => {
        const initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0);
        const initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0);
        const endOverlappingIntervalStart = new Date(2016, 10, 5);
        const endOverlappingIntervalEnd = new Date(2016, 10, 14);
        const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalEnd, end: initialIntervalStart }, { start: endOverlappingIntervalStart, end: endOverlappingIntervalEnd });
        (0, vitest_1.expect)(numOverlappingDays).toBe(4);
    });
    (0, vitest_1.it)("normalizes the right interval if its start date is after the end date", () => {
        const initialIntervalStart = new Date(2016, 10, 10, 13, 0, 0);
        const initialIntervalEnd = new Date(2016, 11, 3, 15, 0, 0);
        const endOverlappingIntervalStart = new Date(2016, 10, 5);
        const endOverlappingIntervalEnd = new Date(2016, 10, 14);
        const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: initialIntervalStart, end: initialIntervalEnd }, { start: endOverlappingIntervalEnd, end: endOverlappingIntervalStart });
        (0, vitest_1.expect)(numOverlappingDays).toBe(4);
    });
    (0, vitest_1.describe)("one of the dates is `Invalid Date`", () => {
        (0, vitest_1.it)("returns 0 if the start date of the initial time interval is `Invalid Date`", () => {
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: new Date(NaN), end: new Date(2016, 10, 3) }, { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
        (0, vitest_1.it)("throws an exception if the end date of the initial time interval is `Invalid Date`", () => {
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: new Date(2016, 10, 3), end: new Date(NaN) }, { start: new Date(2016, 10, 5), end: new Date(2016, 10, 15) });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
        (0, vitest_1.it)("returns 0 if the start date of the compared time interval is `Invalid Date`", () => {
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) }, { start: new Date(NaN), end: new Date(2016, 10, 5) });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
        (0, vitest_1.it)("returns 0 if the end date of the compared time interval is `Invalid Date`", () => {
            const numOverlappingDays = (0, index_js_1.getOverlappingDaysInIntervals)({ start: new Date(2016, 10, 3), end: new Date(2016, 10, 7) }, { start: new Date(2016, 10, 5), end: new Date(NaN) });
            (0, vitest_1.expect)(numOverlappingDays).toBe(0);
        });
    });
    (0, vitest_1.it)("properly sorts the dates", () => {
        const result = (0, index_js_1.getOverlappingDaysInIntervals)({
            start: new Date(2001, 8 /* Sep */, 1, 16),
            end: new Date(2023, 11 /* Dec */, 20, 16),
        }, {
            start: new Date(2023, 11 /* Dec */, 21, 16),
            end: new Date(2001, 8 /* Sep */, 9, 16),
        });
        (0, vitest_1.expect)(result).toBe(8137);
    });
});
