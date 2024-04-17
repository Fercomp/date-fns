"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLong = void 0;
const index_js_1 = require("../../../_lib/buildFormatLongFn/index.js");
const dateFormats = {
    full: "EEEE, d MMMM yyyy",
    long: "d MMMM yyyy",
    medium: "d MMM yyyy",
    short: "d/M/yyyy",
};
const timeFormats = {
    full: "HH.mm.ss",
    long: "HH.mm.ss",
    medium: "HH.mm",
    short: "HH.mm",
};
const dateTimeFormats = {
    full: "{{date}} 'pukul' {{time}}",
    long: "{{date}} 'pukul' {{time}}",
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
