"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatLong = void 0;
const index_js_1 = require("../../../_lib/buildFormatLongFn/index.js");
const dateFormats = {
    full: "วันEEEEที่ do MMMM y",
    long: "do MMMM y",
    medium: "d MMM y",
    short: "dd/MM/yyyy",
};
const timeFormats = {
    full: "H:mm:ss น. zzzz",
    long: "H:mm:ss น. z",
    medium: "H:mm:ss น.",
    short: "H:mm น.",
};
const dateTimeFormats = {
    full: "{{date}} 'เวลา' {{time}}",
    long: "{{date}} 'เวลา' {{time}}",
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
        defaultWidth: "medium",
    }),
    dateTime: (0, index_js_1.buildFormatLongFn)({
        formats: dateTimeFormats,
        defaultWidth: "full",
    }),
};
