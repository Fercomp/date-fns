"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("eachWeekendOfInterval", () => {
    (0, vitest_1.it)("returns all weekends within the interval", () => {
        const result = (0, index_js_1.eachWeekendOfInterval)({
            start: new Date(2018, 8 /* Sept */, 17),
            end: new Date(2018, 8 /* Sept */, 30),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2018, 8 /* Sept */, 22),
            new Date(2018, 8 /* Sept */, 23),
            new Date(2018, 8 /* Sept */, 29),
            new Date(2018, 8 /* Sept */, 30),
        ]);
    });
    (0, vitest_1.it)("returns all weekends within the interval when starting on a weekend", () => {
        const result = (0, index_js_1.eachWeekendOfInterval)({
            start: new Date(2018, 8 /* Sept */, 22),
            end: new Date(2018, 8 /* Sept */, 30),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2018, 8 /* Sept */, 22),
            new Date(2018, 8 /* Sept */, 23),
            new Date(2018, 8 /* Sept */, 29),
            new Date(2018, 8 /* Sept */, 30),
        ]);
    });
    (0, vitest_1.it)("returns reversed array if the start date is after the end date", () => {
        const result = (0, index_js_1.eachWeekendOfInterval)({
            start: new Date(2018, 8 /* Sept */, 30),
            end: new Date(2018, 8 /* Sept */, 17),
        });
        (0, vitest_1.expect)(result).toEqual([
            new Date(2018, 8 /* Sept */, 30),
            new Date(2018, 8 /* Sept */, 29),
            new Date(2018, 8 /* Sept */, 23),
            new Date(2018, 8 /* Sept */, 22),
        ]);
    });
    (0, vitest_1.it)("returns an empty array if the start date is `Invalid Date`", () => {
        const result = (0, index_js_1.eachWeekendOfInterval)({
            start: new Date(NaN),
            end: new Date(2019, 11 /* Dec */, 31),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.it)("returns an empty array if the end date is `Invalid Date`", () => {
        const result = (0, index_js_1.eachWeekendOfInterval)({
            start: new Date(2019, 0 /* Jan */, 1),
            end: new Date(NaN),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
    (0, vitest_1.it)("returns an empty array if both of the properties are `Invalid Date`", () => {
        const result = (0, index_js_1.eachWeekendOfInterval)({
            start: new Date(NaN),
            end: new Date(NaN),
        });
        (0, vitest_1.expect)(result).toEqual([]);
    });
});
