"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLong = void 0;
const index_js_1 = require("../../../_lib/buildFormatLongFn/index.js");
const dateFormats = {
    full: "EEEE, do MMMM y 'р.'",
    long: "do MMMM y 'р.'",
    medium: "d MMM y 'р.'",
    short: "dd.MM.y",
};
const timeFormats = {
    full: "H:mm:ss zzzz",
    long: "H:mm:ss z",
    medium: "H:mm:ss",
    short: "H:mm",
};
const dateTimeFormats = {
    full: "{{date}} 'о' {{time}}",
    long: "{{date}} 'о' {{time}}",
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
