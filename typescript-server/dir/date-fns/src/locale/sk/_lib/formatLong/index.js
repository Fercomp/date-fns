"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLong = void 0;
const index_js_1 = require("../../../_lib/buildFormatLongFn/index.js");
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1986
const dateFormats = {
    full: "EEEE d. MMMM y",
    long: "d. MMMM y",
    medium: "d. M. y",
    short: "d. M. y",
};
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#2149
const timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm",
};
// https://www.unicode.org/cldr/charts/32/summary/sk.html?hide#1994
const dateTimeFormats = {
    full: "{{date}}, {{time}}",
    long: "{{date}}, {{time}}",
    medium: "{{date}}, {{time}}",
    short: "{{date}} {{time}}",
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
