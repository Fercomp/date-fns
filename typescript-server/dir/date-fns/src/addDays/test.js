"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const tzOffsetTransitions_js_1 = require("../../test/dst/tzOffsetTransitions.js");
(0, vitest_1.describe)("addDays", () => {
    (0, vitest_1.it)("adds the given number of days", () => {
        const result = (0, index_js_1.addDays)(new Date(2014, 8 /* Sep */, 1), 10);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 11));
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.addDays)(new Date(2014, 8 /* Sep */, 1).getTime(), 10);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 8 /* Sep */, 11));
    });
    (0, vitest_1.it)("does not mutate the original date", () => {
        const date = new Date(2014, 8 /* Sep */, 1);
        (0, index_js_1.addDays)(date, 11);
        (0, vitest_1.expect)(date).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given date is invalid", () => {
        const result = (0, index_js_1.addDays)(new Date(NaN), 10);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` if the given amount is NaN", () => {
        const result = (0, index_js_1.addDays)(new Date(2014, 8 /* Sep */, 1), NaN);
        (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
    });
    const dstTransitions = (0, tzOffsetTransitions_js_1.getDstTransitions)(2017);
    const dstOnly = dstTransitions.start && dstTransitions.end ? vitest_1.it : vitest_1.it.skip;
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
    const HOUR = 1000 * 60 * 60;
    const MINUTE = 1000 * 60;
    // It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes
    const dstOffset = dstTransitions.start && dstTransitions.end
        ? (dstTransitions.end.getTimezoneOffset() -
            dstTransitions.start.getTimezoneOffset()) *
            MINUTE
        : NaN;
    dstOnly(`works at DST-start boundary in local timezone: ${tz || "(unknown)"}`, () => {
        const date = dstTransitions.start;
        const result = (0, index_js_1.addDays)(date, 1);
        (0, vitest_1.expect)(result).toEqual(new Date(date.getTime() + 24 * HOUR));
    });
    dstOnly(`works at DST-start - 30 mins in local timezone: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.start.getTime() - 0.5 * HOUR);
        const result = (0, index_js_1.addDays)(date, 1);
        // started before the transition so will only be 23 hours later in local time
        (0, vitest_1.expect)(result).toEqual(new Date(date.getTime() + 24 * HOUR - dstOffset));
    });
    dstOnly(`works at DST-start - 60 mins in local timezone: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.start.getTime() - 1 * HOUR);
        const result = (0, index_js_1.addDays)(date, 1);
        // started before the transition so will only be 23 hours later in local time
        (0, vitest_1.expect)(result).toEqual(new Date(date.getTime() + 24 * HOUR - dstOffset));
    });
    dstOnly(`works at DST-end boundary in local timezone: ${tz || "(unknown)"}`, () => {
        const date = dstTransitions.end;
        const result = (0, index_js_1.addDays)(date, 1);
        (0, vitest_1.expect)(result).toEqual(new Date(date.getTime() + 24 * HOUR));
    });
    dstOnly(`works at DST-end - 30 mins in local timezone: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.end.getTime() - 0.5 * HOUR);
        const result = (0, index_js_1.addDays)(date, 1);
        // started before the transition so will be 25 hours later in local
        // time because one hour repeats after DST ends.
        (0, vitest_1.expect)(result).toEqual(new Date(date.getTime() + 24 * HOUR + dstOffset));
    });
    dstOnly(`works at DST-end - 60 mins in local timezone: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.end.getTime() - 1 * HOUR);
        const result = (0, index_js_1.addDays)(date, 1);
        // started before the transition so will be 25 hours later in local
        // time because one hour repeats after DST ends.
        (0, vitest_1.expect)(result).toEqual(new Date(date.getTime() + 24 * HOUR + dstOffset));
    });
    dstOnly(`doesn't mutate if zero increment is used: ${tz || "(unknown)"}`, () => {
        const date = new Date(dstTransitions.end);
        const result = (0, index_js_1.addDays)(date, 0);
        (0, vitest_1.expect)(result).toEqual(date);
    });
});
