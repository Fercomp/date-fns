"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const index_js_2 = require("../format/index.js");
(0, vitest_1.describe)("parseJSON", () => {
    (0, vitest_1.it)("parses a formatted new Date() back to UTC - issue 2149", () => {
        const date = new Date();
        const jsonFormat = (0, index_js_2.format)(date, "yyyy-MM-dd'T'HH:mm:ss.SSSxxx");
        const parsedDate = (0, index_js_1.parseJSON)(jsonFormat);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(date.toISOString());
    });
    (0, vitest_1.it)("parses a formatted date with an hour of offset back to UTC - issue 2149", () => {
        const date = "2021-01-09T13:18:10.873+01:00";
        const expectedDate = new Date("2021-01-09T12:18:10.873Z");
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate.toISOString());
    });
    (0, vitest_1.it)("parses a formatted date with 2 hours of offset back to UTC - issue 2149", () => {
        const date = "2021-01-09T13:18:10.873+02:00";
        const expectedDate = new Date("2021-01-09T11:18:10.873Z");
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate.toISOString());
    });
    (0, vitest_1.it)("parses a formatted date with -2 hours of offset back to UTC - issue 2149", () => {
        const date = "2021-01-09T13:18:10.873-02:00";
        const expectedDate = new Date("2021-01-09T15:18:10.873Z");
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate.toISOString());
    });
    (0, vitest_1.it)("parses a formatted Indian Standart Time in Asia/Kolkata with +5:30 hours of offset back to UTC - issue 2149", () => {
        const date = "2021-02-15T02:56:04.678+05:30";
        const expectedDate = new Date("2021-02-14T21:26:04.678Z");
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate.toISOString());
    });
    (0, vitest_1.it)("parses a formatted time in Asia/Kathmandu with +5:45 hours of offset back to UTC - issue 2149", () => {
        const date = "2021-02-15T17:45:00.900+05:45";
        const expectedDate = new Date("2021-02-15T12:00:00.900Z");
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate.toISOString());
    });
    (0, vitest_1.it)("parses a fully formed ISO date with Z", () => {
        const date = "2000-03-15T05:20:10.123Z";
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(date);
    });
    (0, vitest_1.it)("parses a fully formed ISO date with Z without ms", () => {
        const date = "2000-03-15T05:20:10Z";
        const expectedDate = "2000-03-15T05:20:10.000Z";
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("parses a fully formed ISO date with zero offset", () => {
        const zeroOffset = "2000-03-15T05:20:10+00:00";
        const expectedDate = "2000-03-15T05:20:10.000Z";
        const parsedDate = (0, index_js_1.parseJSON)(zeroOffset);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("parses a fully formed ISO date with zero offset without colon", () => {
        const zeroOffset = "2000-03-15T05:20:10+0000";
        const expectedDate = "2000-03-15T05:20:10.000Z";
        const parsedDate = (0, index_js_1.parseJSON)(zeroOffset);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("parses a fully formed ISO date without Z", () => {
        const date = "2000-03-15T05:20:10.123";
        const expectedDate = "2000-03-15T05:20:10.123Z";
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("parses a fully formed ISO date without Z and with 6-digit millisecond part", () => {
        const date = "2000-03-15T05:20:10.123456";
        const expectedDate = "2000-03-15T05:20:10.123Z";
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("parses a fully formed ISO with 1-digit millisecond part", () => {
        const date = "2000-03-15T05:20:10.1Z";
        const expectedDate = "2000-03-15T05:20:10.100Z";
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("parses a fully formed ISO with 2-digit millisecond part", () => {
        const date = "2000-03-15T05:20:10.12Z";
        const expectedDate = "2000-03-15T05:20:10.120Z";
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("parses supported formats with a space time separator instead of a T", () => {
        const date = "2000-03-15 05:20:10.123Z";
        const expectedDate = "2000-03-15T05:20:10.123Z";
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("parses the SQL datetime format without milliseconds", () => {
        const date = "2000-03-15 05:20:10";
        const expectedDate = "2000-03-15T05:20:10.000Z";
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("parses the SQL datetime format with up to 7 millisecond digits", () => {
        const date = "2000-03-15 05:20:10.1234567";
        const expectedDate = "2000-03-15T05:20:10.123Z";
        const parsedDate = (0, index_js_1.parseJSON)(date);
        (0, vitest_1.expect)(parsedDate.toISOString()).toBe(expectedDate);
    });
    (0, vitest_1.it)("returns an invalid date for anything else", () => {
        (0, vitest_1.expect)((0, index_js_1.parseJSON)("").toString()).toBe("Invalid Date");
        (0, vitest_1.expect)((0, index_js_1.parseJSON)("invalid").toString()).toBe("Invalid Date");
        (0, vitest_1.expect)((0, index_js_1.parseJSON)("2020-10-10").toString()).toBe("Invalid Date");
    });
});
