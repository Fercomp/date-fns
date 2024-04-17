"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("eachDayOfInterval", () => {
    (0, vitest_1.it)("returns an array with starts of days from the day of the start date to the day of the end date", () => {
        const result = (0, index_js_1.eachDayOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6),
            end: new Date(2014, 9 /* Oct */, 12),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 6),
            new Date(2014, 9 /* Oct */, 7),
            new Date(2014, 9 /* Oct */, 8),
            new Date(2014, 9 /* Oct */, 9),
            new Date(2014, 9 /* Oct */, 10),
            new Date(2014, 9 /* Oct */, 11),
            new Date(2014, 9 /* Oct */, 12),
        ]);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.eachDayOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6).getTime(),
            end: new Date(2014, 9 /* Oct */, 12).getTime(),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 6),
            new Date(2014, 9 /* Oct */, 7),
            new Date(2014, 9 /* Oct */, 8),
            new Date(2014, 9 /* Oct */, 9),
            new Date(2014, 9 /* Oct */, 10),
            new Date(2014, 9 /* Oct */, 11),
            new Date(2014, 9 /* Oct */, 12),
        ]);
    });
    (0, vitest_1.it)("handles the dates that are not starts of days", () => {
        const result = (0, index_js_1.eachDayOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 6, 35),
            end: new Date(2014, 9 /* Oct */, 12, 22, 15),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 6),
            new Date(2014, 9 /* Oct */, 7),
            new Date(2014, 9 /* Oct */, 8),
            new Date(2014, 9 /* Oct */, 9),
            new Date(2014, 9 /* Oct */, 10),
            new Date(2014, 9 /* Oct */, 11),
            new Date(2014, 9 /* Oct */, 12),
        ]);
    });
    (0, vitest_1.it)("returns one day if the both arguments are on the same day", () => {
        const result = (0, index_js_1.eachDayOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 14),
            end: new Date(2014, 9 /* Oct */, 6, 15),
        });
        (0, vitest_1.expect)(result).toEqual([new Date(2014, 9 /* Oct */, 6)]);
    });
    (0, vitest_1.it)("returns one day if the both arguments are the same", () => {
        const result = (0, index_js_1.eachDayOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 14),
            end: new Date(2014, 9 /* Oct */, 6, 14),
        });
        (0, vitest_1.expect)(result).toEqual([new Date(2014, 9 /* Oct */, 6)]);
    });
    (0, vitest_1.it)("returns reversed array if the start date is after the end date", () => {
        const result = (0, index_js_1.eachDayOfInterval)({
            start: new Date(2014, 9 /* Oct */, 12),
            end: new Date(2014, 9 /* Oct */, 6),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 12),
            new Date(2014, 9 /* Oct */, 11),
            new Date(2014, 9 /* Oct */, 10),
            new Date(2014, 9 /* Oct */, 9),
            new Date(2014, 9 /* Oct */, 8),
            new Date(2014, 9 /* Oct */, 7),
            new Date(2014, 9 /* Oct */, 6),
        ]);
    });
    (0, vitest_1.it)("returns an empty array if the start date is `Invalid Date`", () => {
        const result = (0, index_js_1.eachDayOfInterval)({
            start: new Date(NaN),
            end: new Date(2014, 9 /* Oct */, 6),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.it)("returns an empty array if the end date is `Invalid Date`", () => {
        const result = (0, index_js_1.eachDayOfInterval)({
            start: new Date(2014, 9 /* Oct */, 12),
            end: new Date(NaN),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.it)("returns an empty array if both of the properties are `Invalid Date`", () => {
        const result = (0, index_js_1.eachDayOfInterval)({
            start: new Date(NaN),
            end: new Date(NaN),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.describe)("options.step", () => {
        const interval = {
            start: new Date(2014, 9 /* Oct */, 6),
            end: new Date(2014, 9 /* Oct */, 13),
        };
        (0, vitest_1.it)("returns an array with starts of days from the day of the start date to the day of the end date with the given step", () => {
            const result = (0, index_js_1.eachDayOfInterval)(interval, { step: 3 });
            (0, vitest_1.expect)(result).toEqual([
                new Date(2014, 9 /* Oct */, 6),
                new Date(2014, 9 /* Oct */, 9),
                new Date(2014, 9 /* Oct */, 12),
            ]);
        });
        (0, vitest_1.it)("returns reversed array if `options.step` is negative", () => {
            const result = (0, index_js_1.eachDayOfInterval)({
                start: new Date(2014, 9 /* Oct */, 10),
                end: new Date(2014, 9 /* Oct */, 12),
            }, { step: -1 });
            (0, vitest_1.expect)(result).toEqual([
                new Date(2014, 9 /* Oct */, 12),
                new Date(2014, 9 /* Oct */, 11),
                new Date(2014, 9 /* Oct */, 10),
            ]);
        });
        (0, vitest_1.it)("reverses array twice if `options.step` is negative and the interval is negative too", () => {
            const result = (0, index_js_1.eachDayOfInterval)({
                start: new Date(2014, 9 /* Oct */, 12),
                end: new Date(2014, 9 /* Oct */, 10),
            }, { step: -1 });
            (0, vitest_1.expect)(result).toEqual([
                new Date(2014, 9 /* Oct */, 10),
                new Date(2014, 9 /* Oct */, 11),
                new Date(2014, 9 /* Oct */, 12),
            ]);
        });
        (0, vitest_1.it)("returns empty array if `options.step` is less than 1", () => {
            const result = (0, index_js_1.eachDayOfInterval)(interval, { step: 0 });
            (0, vitest_1.expect)(result).toEqual([]);
        });
        (0, vitest_1.it)("returns empty array if `options.step` is NaN", () => {
            const result = (0, index_js_1.eachDayOfInterval)(interval, { step: NaN });
            (0, vitest_1.expect)(result).toEqual([]);
        });
    });
});
