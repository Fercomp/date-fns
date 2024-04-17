"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLong = void 0;
const index_js_1 = require("../../../_lib/buildFormatLongFn/index.js");
// Ref: https://www.unicode.org/cldr/charts/32/summary/ta.html
// CLDR #1846 - #1849
const dateFormats = {
    full: "EEEE, d MMMM, y",
    long: "d MMMM, y",
    medium: "d MMM, y",
    short: "d/M/yy",
};
// CLDR #1850 - #1853
const timeFormats = {
    full: "a h:mm:ss zzzz",
    long: "a h:mm:ss z",
    medium: "a h:mm:ss",
    short: "a h:mm",
};
const dateTimeFormats = {
    full: "{{date}} {{time}}",
    long: "{{date}} {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}}, {{time}}",
};
exports.formatLong = {
    date: (0, index_js_1.buildFormatLongFn)({
        formats: dateFormats,
        defaultWidth: "full",
    }),
    time: (0, index_js_1.buildFormatLongFn)({
        formats: timeFormats,
        defaultWidth: "full",
    }),
    dateTime: (0, index_js_1.buildFormatLongFn)({
        formats: dateTimeFormats,
        defaultWidth: "full",
    }),
};
