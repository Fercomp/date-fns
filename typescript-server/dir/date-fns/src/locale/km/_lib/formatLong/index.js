"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLong = void 0;
const index_js_1 = require("../../../_lib/buildFormatLongFn/index.js");
const dateFormats = {
    full: "EEEE do MMMM y",
    long: "do MMMM y",
    medium: "d MMM y",
    short: "dd/MM/yyyy",
};
const timeFormats = {
    full: "h:mm:ss a",
    long: "h:mm:ss a",
    medium: "h:mm:ss a",
    short: "h:mm a",
};
const dateTimeFormats = {
    full: "{{date}} 'ម៉ោង' {{time}}",
    long: "{{date}} 'ម៉ោង' {{time}}",
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
