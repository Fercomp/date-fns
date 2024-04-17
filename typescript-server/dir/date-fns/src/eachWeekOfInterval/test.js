"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("eachWeekOfInterval", () => {
    (0, vitest_1.it)("returns an array with starts of weeks from the week of the start date to the week of the end date", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6),
            end: new Date(2014, 10 /* Nov */, 23),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 5),
            new Date(2014, 9 /* Oct */, 12),
            new Date(2014, 9 /* Oct */, 19),
            new Date(2014, 9 /* Oct */, 26),
            new Date(2014, 10 /* Nov */, 2),
            new Date(2014, 10 /* Nov */, 9),
            new Date(2014, 10 /* Nov */, 16),
            new Date(2014, 10 /* Nov */, 23),
        ]);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6).getTime(),
            end: new Date(2014, 10 /* Nov */, 23).getTime(),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 5),
            new Date(2014, 9 /* Oct */, 12),
            new Date(2014, 9 /* Oct */, 19),
            new Date(2014, 9 /* Oct */, 26),
            new Date(2014, 10 /* Nov */, 2),
            new Date(2014, 10 /* Nov */, 9),
            new Date(2014, 10 /* Nov */, 16),
            new Date(2014, 10 /* Nov */, 23),
        ]);
    });
    (0, vitest_1.it)("handles the dates that are not starts/ends of days and weeks", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 6, 35),
            end: new Date(2014, 10 /* Nov */, 25, 22, 16),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 5),
            new Date(2014, 9 /* Oct */, 12),
            new Date(2014, 9 /* Oct */, 19),
            new Date(2014, 9 /* Oct */, 26),
            new Date(2014, 10 /* Nov */, 2),
            new Date(2014, 10 /* Nov */, 9),
            new Date(2014, 10 /* Nov */, 16),
            new Date(2014, 10 /* Nov */, 23),
        ]);
    });
    (0, vitest_1.it)("considers the weekStartsOn option", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 6, 35),
            end: new Date(2014, 10 /* Nov */, 25, 22, 15),
        }, { weekStartsOn: 2 });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 8 /* Sep */, 30),
            new Date(2014, 9 /* Oct */, 7),
            new Date(2014, 9 /* Oct */, 14),
            new Date(2014, 9 /* Oct */, 21),
            new Date(2014, 9 /* Oct */, 28),
            new Date(2014, 10 /* Nov */, 4),
            new Date(2014, 10 /* Nov */, 11),
            new Date(2014, 10 /* Nov */, 18),
            new Date(2014, 10 /* Nov */, 25),
        ]);
    });
    (0, vitest_1.it)("returns one week if the both arguments are on the same week", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 14),
            end: new Date(2014, 9 /* Oct */, 8, 15),
        });
        (0, vitest_1.expect)(result).toEqual([new Date(2014, 9 /* Oct */, 5)]);
    });
    (0, vitest_1.it)("returns one day if the both arguments are the same", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 14),
            end: new Date(2014, 9 /* Oct */, 6, 14),
        });
        (0, vitest_1.expect)(result).toEqual([new Date(2014, 9 /* Oct */, 5)]);
    });
    (0, vitest_1.it)("returns reversed array if the start date is after the end date", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(2014, 10 /* Nov */, 23),
            end: new Date(2014, 9 /* Oct */, 6),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 10 /* Nov */, 23),
            new Date(2014, 10 /* Nov */, 16),
            new Date(2014, 10 /* Nov */, 9),
            new Date(2014, 10 /* Nov */, 2),
            new Date(2014, 9 /* Oct */, 26),
            new Date(2014, 9 /* Oct */, 19),
            new Date(2014, 9 /* Oct */, 12),
            new Date(2014, 9 /* Oct */, 5),
        ]);
    });
    (0, vitest_1.it)("returns an empty array if the start date is `Invalid Date`", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(NaN),
            end: new Date(2014, 9 /* Oct */, 6),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.it)("returns an empty array if the end date is `Invalid Date`", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(2014, 9 /* Oct */, 12),
            end: new Date(NaN),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.it)("returns an empty array if both of the properties are `Invalid Date`", () => {
        const result = (0, index_js_1.eachWeekOfInterval)({
            start: new Date(NaN),
            end: new Date(NaN),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.describe)("options.step", () => {
        const interval = {
            start: new Date(2014, 9 /* Oct */, 6),
            end: new Date(2014, 10 /* Nov */, 23),
        };
        (0, vitest_1.it)("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
            const result = (0, index_js_1.eachWeekOfInterval)(interval, { step: 3 });
            (0, vitest_1.expect)(result).toEqual([
                new Date(2014, 9 /* Oct */, 5),
                new Date(2014, 9 /* Oct */, 26),
                new Date(2014, 10 /* Nov */, 16),
            ]);
        });
        (0, vitest_1.it)("returns reversed array if `options.step` is negative", () => {
            const result = (0, index_js_1.eachWeekOfInterval)(interval, { step: -3 });
            (0, vitest_1.expect)(result).toEqual([
                new Date(2014, 10 /* Nov */, 16),
                new Date(2014, 9 /* Oct */, 26),
                new Date(2014, 9 /* Oct */, 5),
            ]);
        });
        (0, vitest_1.it)("reverses array twice if `options.step` is negative and the interval is negative too", () => {
            const result = (0, index_js_1.eachWeekOfInterval)({ start: interval.end, end: interval.start }, { step: -3 });
            (0, vitest_1.expect)(result).toEqual([
                new Date(2014, 9 /* Oct */, 5),
                new Date(2014, 9 /* Oct */, 26),
                new Date(2014, 10 /* Nov */, 16),
            ]);
        });
        (0, vitest_1.it)("returns empty array if `options.step` is less than 1", () => {
            const result = (0, index_js_1.eachWeekOfInterval)(interval, { step: 0 });
            (0, vitest_1.expect)(result).toEqual([]);
        });
        (0, vitest_1.it)("returns empty array if `options.step` is NaN", () => {
            const result = (0, index_js_1.eachWeekOfInterval)(interval, { step: NaN });
            (0, vitest_1.expect)(result).toEqual([]);
        });
    });
});
