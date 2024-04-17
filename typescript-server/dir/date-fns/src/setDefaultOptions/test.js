"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const index_js_2 = require("../_lib/defaultOptions/index.js");
const index_js_3 = require("../locale/en-US/index.js");
const index_js_4 = require("../locale/eo/index.js");
const index_js_5 = require("../differenceInCalendarWeeks/index.js");
const index_js_6 = require("../eachWeekOfInterval/index.js");
const index_js_7 = require("../endOfWeek/index.js");
const index_js_8 = require("../format/index.js");
const index_js_9 = require("../formatDistance/index.js");
const index_js_10 = require("../formatDistanceStrict/index.js");
const index_js_11 = require("../formatDuration/index.js");
const index_js_12 = require("../formatRelative/index.js");
const index_js_13 = require("../getWeek/index.js");
const index_js_14 = require("../getWeekOfMonth/index.js");
const index_js_15 = require("../getWeeksInMonth/index.js");
const index_js_16 = require("../getWeekYear/index.js");
const index_js_17 = require("../isMatch/index.js");
const index_js_18 = require("../isSameWeek/index.js");
const index_js_19 = require("../lastDayOfWeek/index.js");
const index_js_20 = require("../parse/index.js");
const index_js_21 = require("../setDay/index.js");
const index_js_22 = require("../setWeek/index.js");
const index_js_23 = require("../setWeekYear/index.js");
const index_js_24 = require("../startOfWeek/index.js");
const index_js_25 = require("../startOfWeekYear/index.js");
const index_js_26 = require("../_lib/test/index.js");
(0, vitest_1.describe)("setDefaultOptions", () => {
    (0, vitest_1.afterEach)(index_js_26.resetDefaultOptions);
    (0, vitest_1.it)("changes the internal `defaultOptions` object", () => {
        (0, index_js_1.setDefaultOptions)({
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: index_js_4.eo,
        });
        (0, vitest_1.expect)((0, index_js_2.getDefaultOptions)()).toEqual({
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: index_js_4.eo,
        });
    });
    (0, vitest_1.it)("merges with previous `defaultOptions` calls", () => {
        (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
        (0, index_js_1.setDefaultOptions)({ firstWeekContainsDate: 4 });
        (0, index_js_1.setDefaultOptions)({ locale: index_js_4.eo });
        (0, vitest_1.expect)((0, index_js_2.getDefaultOptions)()).toEqual({
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: index_js_4.eo,
        });
    });
    (0, vitest_1.it)("setting an option to `undefined` deletes it", () => {
        (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1, firstWeekContainsDate: 4 });
        (0, index_js_1.setDefaultOptions)({ weekStartsOn: undefined });
        (0, vitest_1.expect)((0, index_js_2.getDefaultOptions)()).toEqual({
            firstWeekContainsDate: 4,
        });
    });
    (0, vitest_1.it)("does not mutate the argument", () => {
        const argument = { weekStartsOn: 1 };
        (0, index_js_1.setDefaultOptions)(argument);
        (0, vitest_1.expect)(argument).toEqual({ weekStartsOn: 1 });
    });
    (0, vitest_1.describe)("locale", () => {
        (0, vitest_1.it)("format", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_8.format)(new Date(2014, 0, 1), "PPPpp")).toEqual("January 1st, 2014 at 12:00:00 AM");
            (0, index_js_1.setDefaultOptions)({ locale: index_js_4.eo });
            (0, vitest_1.expect)((0, index_js_8.format)(new Date(2014, 0, 1), "PPPpp")).toEqual("2014-januaro-01 00:00:00");
            // Manually set `locale` take priority over `defaultOptions.locale`
            (0, vitest_1.expect)((0, index_js_8.format)(new Date(2014, 0, 1), "PPPpp", { locale: index_js_3.enUS })).toEqual("January 1st, 2014 at 12:00:00 AM");
        });
        (0, vitest_1.it)("formatDistance", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_9.formatDistance)(new Date(2014, 0, 1), new Date(2015, 0, 1))).toEqual("about 1 year");
            (0, index_js_1.setDefaultOptions)({ locale: index_js_4.eo });
            (0, vitest_1.expect)((0, index_js_9.formatDistance)(new Date(2014, 0, 1), new Date(2015, 0, 1))).toEqual("proksimume 1 jaro");
            // Manually set `locale` take priority over `defaultOptions.locale`
            (0, vitest_1.expect)((0, index_js_9.formatDistance)(new Date(2014, 0, 1), new Date(2015, 0, 1), {
                locale: index_js_3.enUS,
            })).toEqual("about 1 year");
        });
        (0, vitest_1.it)("formatDistanceStrict", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_10.formatDistanceStrict)(new Date(2014, 0, 1), new Date(2015, 0, 1))).toEqual("1 year");
            (0, index_js_1.setDefaultOptions)({ locale: index_js_4.eo });
            (0, vitest_1.expect)((0, index_js_10.formatDistanceStrict)(new Date(2014, 0, 1), new Date(2015, 0, 1))).toEqual("1 jaro");
            // Manually set `locale` take priority over `defaultOptions.locale`
            (0, vitest_1.expect)((0, index_js_10.formatDistanceStrict)(new Date(2014, 0, 1), new Date(2015, 0, 1), {
                locale: index_js_3.enUS,
            })).toEqual("1 year");
        });
        (0, vitest_1.it)("formatDuration", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_11.formatDuration)({ years: 1 })).toEqual("1 year");
            (0, index_js_1.setDefaultOptions)({ locale: index_js_4.eo });
            (0, vitest_1.expect)((0, index_js_11.formatDuration)({ years: 1 })).toEqual("1 jaro");
            // Manually set `locale` take priority over `defaultOptions.locale`
            (0, vitest_1.expect)((0, index_js_11.formatDuration)({ years: 1 }, { locale: index_js_3.enUS })).toEqual("1 year");
        });
        (0, vitest_1.it)("formatRelative", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_12.formatRelative)(new Date(2014, 0, 1), new Date(2014, 0, 2))).toEqual("yesterday at 12:00 AM");
            (0, index_js_1.setDefaultOptions)({ locale: index_js_4.eo });
            (0, vitest_1.expect)((0, index_js_12.formatRelative)(new Date(2014, 0, 1), new Date(2014, 0, 2))).toEqual("hieraŭ je 00:00");
            // Manually set `locale` take priority over `defaultOptions.locale`
            (0, vitest_1.expect)((0, index_js_12.formatRelative)(new Date(2014, 0, 1), new Date(2014, 0, 2), {
                locale: index_js_3.enUS,
            })).toEqual("yesterday at 12:00 AM");
        });
        (0, vitest_1.it)("isMatch", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_17.isMatch)("January 1st, 2014 at 12:00:00 AM", "PPPpp")).toBe(true);
            (0, index_js_1.setDefaultOptions)({ locale: index_js_4.eo });
            (0, vitest_1.expect)((0, index_js_17.isMatch)("2014-januaro-01 00:00:00", "PPPpp")).toBe(true);
            // Manually set `locale` take priority over `defaultOptions.locale`
            (0, vitest_1.expect)((0, index_js_17.isMatch)("January 1st, 2014 at 12:00:00 AM", "PPPpp", { locale: index_js_3.enUS })).toBe(true);
        });
        (0, vitest_1.it)("parse", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_20.parse)("January 1st, 2014 at 12:00:00 AM", "PPPpp", new Date())).toEqual(new Date(2014, 0, 1));
            (0, index_js_1.setDefaultOptions)({ locale: index_js_4.eo });
            (0, vitest_1.expect)((0, index_js_20.parse)("2014-januaro-01 00:00:00", "PPPpp", new Date())).toEqual(new Date(2014, 0, 1));
            // Manually set `locale` take priority over `defaultOptions.locale`
            (0, vitest_1.expect)((0, index_js_20.parse)("January 1st, 2014 at 12:00:00 AM", "PPPpp", new Date(), {
                locale: index_js_3.enUS,
            })).toEqual(new Date(2014, 0, 1));
        });
    });
    (0, vitest_1.describe)("weekStartsOn", () => {
        (0, vitest_1.it)("differenceInCalendarWeeks", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_5.differenceInCalendarWeeks)(new Date(2014, 6 /* Jul */, 8, 18, 0), new Date(2014, 5 /* Jun */, 29, 6, 0))).toBe(1);
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
            (0, vitest_1.expect)((0, index_js_5.differenceInCalendarWeeks)(new Date(2014, 6 /* Jul */, 8, 18, 0), new Date(2014, 5 /* Jun */, 29, 6, 0))).toBe(2);
            // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
            (0, vitest_1.expect)((0, index_js_5.differenceInCalendarWeeks)(new Date(2014, 6 /* Jul */, 8, 18, 0), new Date(2014, 5 /* Jun */, 29, 6, 0), {
                weekStartsOn: 0,
            })).toBe(1);
        });
        (0, vitest_1.it)("eachWeekOfInterval", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_6.eachWeekOfInterval)({
                start: new Date(2014, 9 /* Oct */, 6),
                end: new Date(2014, 10 /* Nov */, 23),
            })).toEqual([
                new Date(2014, 9 /* Oct */, 5),
                new Date(2014, 9 /* Oct */, 12),
                new Date(2014, 9 /* Oct */, 19),
                new Date(2014, 9 /* Oct */, 26),
                new Date(2014, 10 /* Nov */, 2),
                new Date(2014, 10 /* Nov */, 9),
                new Date(2014, 10 /* Nov */, 16),
                new Date(2014, 10 /* Nov */, 23),
            ]);
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
            (0, vitest_1.expect)((0, index_js_6.eachWeekOfInterval)({
                start: new Date(2014, 9 /* Oct */, 6, 6, 35),
                end: new Date(2014, 10 /* Nov */, 25, 22, 15),
            })).toEqual([
                new Date(2014, 9 /* Oct */, 6),
                new Date(2014, 9 /* Oct */, 13),
                new Date(2014, 9 /* Oct */, 20),
                new Date(2014, 9 /* Oct */, 27),
                new Date(2014, 10 /* Nov */, 3),
                new Date(2014, 10 /* Nov */, 10),
                new Date(2014, 10 /* Nov */, 17),
                new Date(2014, 10 /* Nov */, 24),
            ]);
            // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
            (0, vitest_1.expect)((0, index_js_6.eachWeekOfInterval)({
                start: new Date(2014, 9 /* Oct */, 6),
                end: new Date(2014, 10 /* Nov */, 23),
            }, {
                weekStartsOn: 0,
            })).toEqual([
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
        (0, vitest_1.it)("endOfWeek", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_7.endOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999));
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
            (0, vitest_1.expect)((0, index_js_7.endOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999));
            // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
            (0, vitest_1.expect)((0, index_js_7.endOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
                weekStartsOn: 0,
            })).toEqual(new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999));
        });
        (0, vitest_1.it)("getWeekOfMonth", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_14.getWeekOfMonth)(new Date(2017, 10 /* Nov */, 15))).toBe(3);
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
            (0, vitest_1.expect)((0, index_js_14.getWeekOfMonth)(new Date(2017, 9 /* Oct */, 31))).toBe(6);
            // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
            (0, vitest_1.expect)((0, index_js_14.getWeekOfMonth)(new Date(2017, 10 /* Nov */, 15), {
                weekStartsOn: 0,
            })).toBe(3);
        });
        (0, vitest_1.it)("getWeeksInMonth", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_15.getWeeksInMonth)(new Date(2015, 1 /* Feb */, 8, 18, 0))).toBe(4);
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
            (0, vitest_1.expect)((0, index_js_15.getWeeksInMonth)(new Date(2015, 1 /* Feb */, 8, 18, 0))).toBe(5);
            // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
            (0, vitest_1.expect)((0, index_js_15.getWeeksInMonth)(new Date(2015, 1 /* Feb */, 8, 18, 0), {
                weekStartsOn: 0,
            })).toBe(4);
        });
        (0, vitest_1.it)("isSameWeek", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_18.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4))).toBe(true);
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
            (0, vitest_1.expect)((0, index_js_18.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4))).toBe(false);
            // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
            (0, vitest_1.expect)((0, index_js_18.isSameWeek)(new Date(2014, 7 /* Aug */, 31), new Date(2014, 8 /* Sep */, 4), {
                weekStartsOn: 0,
            })).toBe(true);
        });
        (0, vitest_1.it)("lastDayOfWeek", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_19.lastDayOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 6));
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
            (0, vitest_1.expect)((0, index_js_19.lastDayOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 7));
            // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
            (0, vitest_1.expect)((0, index_js_19.lastDayOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
                weekStartsOn: 0,
            })).toEqual(new Date(2014, 8 /* Sep */, 6));
        });
        (0, vitest_1.it)("setDay", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_21.setDay)(new Date(2014, 8 /* Sep */, 1), 0)).toEqual(new Date(2014, 7 /* Aug */, 31));
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
            (0, vitest_1.expect)((0, index_js_21.setDay)(new Date(2014, 8 /* Sep */, 1), 0)).toEqual(new Date(2014, 8 /* Sep */, 7));
            // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
            (0, vitest_1.expect)((0, index_js_21.setDay)(new Date(2014, 8 /* Sep */, 1), 0, {
                weekStartsOn: 0,
            })).toEqual(new Date(2014, 7 /* Aug */, 31));
        });
        (0, vitest_1.it)("startOfWeek", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_24.startOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 7 /* Aug */, 31));
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1 });
            (0, vitest_1.expect)((0, index_js_24.startOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 1));
            // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
            (0, vitest_1.expect)((0, index_js_24.startOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
                weekStartsOn: 0,
            })).toEqual(new Date(2014, 7 /* Aug */, 31));
        });
    });
    (0, vitest_1.describe)("firstWeekContainsDate", () => {
        (0, vitest_1.it)("format", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_8.format)(new Date(1986, 3 /* Apr */, 6), "w wo ww")).toBe("15 15th 15");
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1, firstWeekContainsDate: 4 });
            (0, vitest_1.expect)((0, index_js_8.format)(new Date(1986, 3 /* Apr */, 6), "w wo ww")).toBe("14 14th 14");
            // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
            (0, vitest_1.expect)((0, index_js_8.format)(new Date(1986, 3 /* Apr */, 6), "w wo ww", {
                weekStartsOn: 0,
                firstWeekContainsDate: 1,
            })).toBe("15 15th 15");
        });
        (0, vitest_1.it)("getWeek", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_13.getWeek)(new Date(2005, 0 /* Jan */, 2))).toBe(2);
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1, firstWeekContainsDate: 4 });
            (0, vitest_1.expect)((0, index_js_13.getWeek)(new Date(2005, 0 /* Jan */, 2))).toBe(53);
            // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
            (0, vitest_1.expect)((0, index_js_13.getWeek)(new Date(2005, 0 /* Jan */, 2), {
                weekStartsOn: 0,
                firstWeekContainsDate: 1,
            })).toBe(2);
        });
        (0, vitest_1.it)("getWeekYear", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_16.getWeekYear)(new Date(2004, 11 /* Dec */, 26))).toBe(2005);
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1, firstWeekContainsDate: 4 });
            (0, vitest_1.expect)((0, index_js_16.getWeekYear)(new Date(2004, 11 /* Dec */, 26))).toBe(2004);
            // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
            (0, vitest_1.expect)((0, index_js_16.getWeekYear)(new Date(2004, 11 /* Dec */, 26), {
                weekStartsOn: 0,
                firstWeekContainsDate: 1,
            })).toBe(2005);
        });
        (0, vitest_1.it)("parse", () => {
            const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900);
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_20.parse)("2018", "Y", referenceDate)).toEqual(new Date(2017, 11 /* Dec */, 31));
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1, firstWeekContainsDate: 4 });
            (0, vitest_1.expect)((0, index_js_20.parse)("2018", "Y", referenceDate)).toEqual(new Date(2018, 0 /* Jan */, 1));
            // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
            (0, vitest_1.expect)((0, index_js_20.parse)("2018", "Y", referenceDate, {
                weekStartsOn: 0,
                firstWeekContainsDate: 1,
            })).toEqual(new Date(2017, 11 /* Dec */, 31));
        });
        (0, vitest_1.it)("setWeek", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_22.setWeek)(new Date(2005, 0 /* Jan */, 2), 1)).toEqual(new Date(2004, 11 /* Dec */, 26));
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1, firstWeekContainsDate: 4 });
            (0, vitest_1.expect)((0, index_js_22.setWeek)(new Date(2005, 0 /* Jan */, 2), 1)).toEqual(new Date(2004, 0 /* Jan */, 4));
            // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
            (0, vitest_1.expect)((0, index_js_22.setWeek)(new Date(2005, 0 /* Jan */, 2), 1, {
                weekStartsOn: 0,
                firstWeekContainsDate: 1,
            })).toEqual(new Date(2004, 11 /* Dec */, 26));
        });
        (0, vitest_1.it)("setWeekYear", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_23.setWeekYear)(new Date(2010, 0 /* Jan */, 2), 2004)).toEqual(new Date(2004, 0 /* Jan */, 3));
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1, firstWeekContainsDate: 4 });
            (0, vitest_1.expect)((0, index_js_23.setWeekYear)(new Date(2010, 0 /* Jan */, 2), 2004)).toEqual(new Date(2005, 0 /* Jan */, 1));
            // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
            (0, vitest_1.expect)((0, index_js_23.setWeekYear)(new Date(2010, 0 /* Jan */, 2), 2004, {
                weekStartsOn: 0,
                firstWeekContainsDate: 1,
            })).toEqual(new Date(2004, 0 /* Jan */, 3));
        });
        (0, vitest_1.it)("startOfWeekYear", () => {
            // For reference: not setting any options
            (0, vitest_1.expect)((0, index_js_25.startOfWeekYear)(new Date(2005, 6 /* Jul */, 2))).toEqual(new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0));
            (0, index_js_1.setDefaultOptions)({ weekStartsOn: 1, firstWeekContainsDate: 4 });
            (0, vitest_1.expect)((0, index_js_25.startOfWeekYear)(new Date(2005, 6 /* Jul */, 2))).toEqual(new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0));
            // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
            (0, vitest_1.expect)((0, index_js_25.startOfWeekYear)(new Date(2005, 6 /* Jul */, 2), {
                weekStartsOn: 0,
                firstWeekContainsDate: 1,
            })).toEqual(new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0));
        });
    });
});
