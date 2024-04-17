"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLong = void 0;
const index_js_1 = require("../../../_lib/buildFormatLongFn/index.js");
const dateFormats = {
    full: "EEEE, MMMM do, y",
    long: "MMMM do, y",
    medium: "MMM d, y",
    short: "MM/dd/yyyy",
};
const timeFormats = {
    full: "h:mm:ss a zzzz",
    long: "h:mm:ss a z",
    medium: "h:mm:ss a",
    short: "h:mm a",
};
const dateTimeFormats = {
    full: "{{date}} 'at' {{time}}",
    long: "{{date}} 'at' {{time}}",
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
