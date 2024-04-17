"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const tzOffsetTransitions_js_1 = require("../../test/dst/tzOffsetTransitions.js");
(0, vitest_1.describe)("differenceInDays", () => {
    (0, vitest_1.it)("returns the number of full days between the given dates", () => {
        const result = (0, index_js_1.differenceInDays)(new Date(2012, 6 /* Jul */, 2, 18, 0), new Date(2011, 6 /* Jul */, 2, 6, 0));
        (0, vitest_1.expect)(result).toBe(366);
    });
    (0, vitest_1.it)("returns a negative number if the time value of the first date is smaller", () => {
        const result = (0, index_js_1.differenceInDays)(new Date(2011, 6 /* Jul */, 2, 6, 0), new Date(2012, 6 /* Jul */, 2, 18, 0));
        (0, vitest_1.expect)(result).toBe(-366);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.differenceInDays)(new Date(2014, 8 /* Sep */, 5, 18, 0).getTime(), new Date(2014, 8 /* Sep */, 4, 6, 0).getTime());
        (0, vitest_1.expect)(result).toBe(1);
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("the difference is less than a day, but the given dates are in different calendar days", () => {
            const result = (0, index_js_1.differenceInDays)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 4, 23, 59));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("the same for the swapped dates", () => {
            const result = (0, index_js_1.differenceInDays)(new Date(2014, 8 /* Sep */, 4, 23, 59), new Date(2014, 8 /* Sep */, 5, 0, 0));
            (0, vitest_1.expect)(result).toBe(0);
        });
        (0, vitest_1.it)("the time values of the given dates are the same", () => {
            const result = (0, index_js_1.differenceInDays)(new Date(2014, 8 /* Sep */, 6, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            (0, vitest_1.expect)(result).toBe(1);
        });
        (0, vitest_1.it)("the given dates are the same", () => {
            const result = (0, index_js_1.differenceInDays)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            (0, vitest_1.expect)(result).toBe(0);
        });
        const dstTransitions = (0, tzOffsetTransitions_js_1.getDstTransitions)(2017);
        const dstOnly = dstTransitions.start && dstTransitions.end ? vitest_1.it : vitest_1.it.skip;
        const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || process.env.tz;
        dstOnly(`works across DST start & end in local timezone: ${tz || "(unknown)"}`, () => {
            const { start, end } = dstTransitions;
            const HOUR = 1000 * 60 * 60;
            const MINUTE = 1000 * 60;
            function sameTime(t1, t2) {
                return (t1.getHours() === t2.getHours() &&
                    t1.getMinutes() === t2.getMinutes() &&
                    t1.getSeconds() === t2.getSeconds() &&
                    t1.getMilliseconds() === t2.getMilliseconds());
            }
            (0, vitest_1.expect)(start).not.toBe(undefined);
            (0, vitest_1.expect)(end).not.toBe(undefined);
            if (start === undefined || end === undefined) {
                return;
            }
            // It's usually 1 hour, but for some timezones, e.g. Australia/Lord_Howe, it is 30 minutes
            const dstOffset = (end.getTimezoneOffset() - start.getTimezoneOffset()) * MINUTE;
            // TEST DST START (SPRING)
            // anchor to one hour before the boundary
            {
                const a = new Date(start.getTime() - HOUR); // 1 hour before DST
                const b = new Date(a.getTime() + 24 * HOUR - dstOffset); // 1 day later, same local time
                const c = new Date(a.getTime() + 48 * HOUR - dstOffset); // 2 days later, same local time
                (0, vitest_1.expect)(sameTime(a, b)).toBe(true);
                (0, vitest_1.expect)(sameTime(a, c)).toBe(true);
                (0, vitest_1.expect)(sameTime(b, c)).toBe(true);
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, b)).toBe(1); // normal 24-hour day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(b, a)).toBe(1); // 23 hours -> 1 day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, a)).toBe(2); // 47 hours -> 2 days
            }
            // anchor exactly, the boundary
            {
                const a = start; // exactly when DST starts
                const b = new Date(a.getTime() + 24 * HOUR); // 1 day later, same local time
                const c = new Date(a.getTime() + 48 * HOUR); // 2 days later, same local time
                (0, vitest_1.expect)(sameTime(a, b)).toBe(true);
                (0, vitest_1.expect)(sameTime(a, c)).toBe(true);
                (0, vitest_1.expect)(sameTime(b, c)).toBe(true);
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, b)).toBe(1); // normal 24-hour day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(b, a)).toBe(1); // normal 24-hour day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, a)).toBe(2); // 2 normal 24-hour days
            }
            // TEST DST END (FALL)
            // make sure that diffs across a "fall back" DST boundary won't report a full day
            // until 25 hours have elapsed.
            {
                const a = new Date(end.getTime() - HOUR / 2); // 1 hour before Standard Time starts
                const b = new Date(a.getTime() + 24 * HOUR + dstOffset - 15 * MINUTE); // 1 day later, 15 mins earlier local time
                const c = new Date(a.getTime() + 48 * HOUR + dstOffset - 15 * MINUTE); // 2 days later, 15 mins earlier local time
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, b)).toBe(1); // normal 24-hour day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(b, a)).toBe(0); // 24.75 hours -> 0 full days (because hour lost to DST)
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, a)).toBe(1); // 48.75 hours -> 1 full day (because hour lost to DST)
            }
            // anchor to one hour before the boundary
            {
                const a = new Date(end.getTime() - HOUR); // 1 hour before Standard Time start
                const b = new Date(a.getTime() + 24 * HOUR + dstOffset); // 1 day later, same local time
                const c = new Date(a.getTime() + 48 * HOUR + dstOffset); // 2 days later, same local time
                (0, vitest_1.expect)(sameTime(a, b)).toBe(true);
                (0, vitest_1.expect)(sameTime(a, c)).toBe(true);
                (0, vitest_1.expect)(sameTime(b, c)).toBe(true);
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, b)).toBe(1); // normal 24-hour day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(b, a)).toBe(1); // 25 hours -> 1 day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, a)).toBe(2); // 49 hours -> 2 days
            }
            // anchor to one hour after the boundary
            {
                const a = new Date(end.getTime() + HOUR); // 1 hour after Standard Time start
                const b = new Date(a.getTime() + 24 * HOUR); // 1 day later, same local time
                const c = new Date(a.getTime() + 48 * HOUR); // 2 days later, same local time
                (0, vitest_1.expect)(sameTime(a, b)).toBe(true);
                (0, vitest_1.expect)(sameTime(a, c)).toBe(true);
                (0, vitest_1.expect)(sameTime(b, c)).toBe(true);
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, b)).toBe(1); // normal 24-hour day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(b, a)).toBe(1); // normal 24-hour day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, a)).toBe(2); // 2 normal 24-hour days
            }
            // anchor exactly at the boundary
            {
                const a = end; // exactly when Standard Time starts
                const b = new Date(a.getTime() + 24 * HOUR); // 1 day later, same local time
                const c = new Date(a.getTime() + 48 * HOUR); // 2 days later, same local time
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(b, a)).toBe(1); // normal 24-hour day
                (0, vitest_1.expect)((0, index_js_1.differenceInDays)(c, a)).toBe(2); // 2 normal 24-hour days
            }
        });
        (0, vitest_1.it)("does not return -0 when the given dates are the same", () => {
            function isNegativeZero(x) {
                return x === 0 && 1 / x < 0;
            }
            const result = (0, index_js_1.differenceInDays)(new Date(2014, 8 /* Sep */, 5, 0, 0), new Date(2014, 8 /* Sep */, 5, 0, 0));
            const resultIsNegative = isNegativeZero(result);
            (0, vitest_1.expect)(resultIsNegative).toBe(false);
        });
    });
    (0, vitest_1.it)("returns NaN if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInDays)(new Date(NaN), new Date(2017, 0 /* Jan */, 1));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInDays)(new Date(2017, 0 /* Jan */, 1), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
    (0, vitest_1.it)("returns NaN if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.differenceInDays)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(isNaN(result)).toBe(true);
    });
});
