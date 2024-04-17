"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("eachHourOfInterval", () => {
    (0, vitest_1.it)("returns an array with starts of hours from the hour of the start date to the hour of the end date", () => {
        const result = (0, index_js_1.eachHourOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 12),
            end: new Date(2014, 9 /* Oct */, 6, 15),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 6, 12),
            new Date(2014, 9 /* Oct */, 6, 13),
            new Date(2014, 9 /* Oct */, 6, 14),
            new Date(2014, 9 /* Oct */, 6, 15),
        ]);
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.eachHourOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 12).getTime(),
            end: new Date(2014, 9 /* Oct */, 6, 15).getTime(),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 6, 12),
            new Date(2014, 9 /* Oct */, 6, 13),
            new Date(2014, 9 /* Oct */, 6, 14),
            new Date(2014, 9 /* Oct */, 6, 15),
        ]);
    });
    (0, vitest_1.it)("handles the hours that are not starts of hours", () => {
        const result = (0, index_js_1.eachHourOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 12, 59, 59, 999),
            end: new Date(2014, 9 /* Oct */, 6, 15, 59, 59, 999),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 6, 12),
            new Date(2014, 9 /* Oct */, 6, 13),
            new Date(2014, 9 /* Oct */, 6, 14),
            new Date(2014, 9 /* Oct */, 6, 15),
        ]);
    });
    (0, vitest_1.it)("returns one hour if the both arguments are on the same hour", () => {
        const result = (0, index_js_1.eachHourOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 12, 35),
            end: new Date(2014, 9 /* Oct */, 6, 12, 47),
        });
        (0, vitest_1.expect)(result).toEqual([new Date(2014, 9 /* Oct */, 6, 12)]);
    });
    (0, vitest_1.it)("returns one hour if the both arguments are the same", () => {
        const result = (0, index_js_1.eachHourOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 12, 35),
            end: new Date(2014, 9 /* Oct */, 6, 12, 35),
        });
        (0, vitest_1.expect)(result).toEqual([new Date(2014, 9 /* Oct */, 6, 12)]);
    });
    (0, vitest_1.it)("returns reversed array if the start date is after the end date", () => {
        const result = (0, index_js_1.eachHourOfInterval)({
            start: new Date(2014, 9 /* Oct */, 6, 15),
            end: new Date(2014, 9 /* Oct */, 6, 12),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2014, 9 /* Oct */, 6, 15),
            new Date(2014, 9 /* Oct */, 6, 14),
            new Date(2014, 9 /* Oct */, 6, 13),
            new Date(2014, 9 /* Oct */, 6, 12),
        ]);
    });
    (0, vitest_1.it)("returns an empty array if the start date is `Invalid Date`", () => {
        const result = (0, index_js_1.eachHourOfInterval)({
            start: new Date(NaN),
            end: new Date(2014, 9 /* Oct */, 6, 12),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.it)("returns an empty array if the end date is `Invalid Date`", () => {
        const result = (0, index_js_1.eachHourOfInterval)({
            start: new Date(2014, 9 /* Oct */, 12, 12),
            end: new Date(NaN),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.it)("returns an empty array if both of the properties are `Invalid Date`", () => {
        const result = (0, index_js_1.eachHourOfInterval)({
            start: new Date(NaN),
            end: new Date(NaN),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.describe)("options.step", () => {
        const interval = {
            start: new Date(2014, 9 /* Oct */, 6, 12),
            end: new Date(2014, 9 /* Oct */, 6, 18),
        };
        (0, vitest_1.it)("returns an array with starts of hours from the hour of the start date to the hour of the end date with the given step", () => {
            const result = (0, index_js_1.eachHourOfInterval)(interval, { step: 3 });
            (0, vitest_1.expect)(result).toEqual([
                new Date(2014, 9 /* Oct */, 6, 12),
                new Date(2014, 9 /* Oct */, 6, 15),
                new Date(2014, 9 /* Oct */, 6, 18),
            ]);
        });
        (0, vitest_1.it)("returns reversed array if `options.step` is negative", () => {
            const result = (0, index_js_1.eachHourOfInterval)({
                start: new Date(2014, 9 /* Oct */, 6, 12),
                end: new Date(2014, 9 /* Oct */, 6, 15),
            }, { step: -1 });
            (0, vitest_1.expect)(result).toEqual([
                new Date(2014, 9 /* Oct */, 6, 15),
                new Date(2014, 9 /* Oct */, 6, 14),
                new Date(2014, 9 /* Oct */, 6, 13),
                new Date(2014, 9 /* Oct */, 6, 12),
            ]);
        });
        (0, vitest_1.it)("reverses array twice if `options.step` is negative and the interval is negative too", () => {
            const result = (0, index_js_1.eachHourOfInterval)({
                start: new Date(2014, 9 /* Oct */, 6, 15),
                end: new Date(2014, 9 /* Oct */, 6, 12),
            }, { step: -1 });
            (0, vitest_1.expect)(result).toEqual([
                new Date(2014, 9 /* Oct */, 6, 12),
                new Date(2014, 9 /* Oct */, 6, 13),
                new Date(2014, 9 /* Oct */, 6, 14),
                new Date(2014, 9 /* Oct */, 6, 15),
            ]);
        });
        (0, vitest_1.it)("returns empty array if `options.step` is less than 1", () => {
            const result = (0, index_js_1.eachHourOfInterval)(interval, { step: 0 });
            (0, vitest_1.expect)(result).toEqual([]);
        });
        (0, vitest_1.it)("returns empty array if `options.step` is NaN", () => {
            const result = (0, index_js_1.eachHourOfInterval)(interval, { step: NaN });
            (0, vitest_1.expect)(result).toEqual([]);
        });
    });
});
