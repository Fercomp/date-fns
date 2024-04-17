"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.intlFormat = void 0;
const index_js_1 = require("../toDate/index.js");
function intlFormat(date, formatOrLocale, localeOptions) {
    let formatOptions;
    if (isFormatOptions(formatOrLocale)) {
        formatOptions = formatOrLocale;
    }
    else {
        localeOptions = formatOrLocale;
    }
    return new Intl.DateTimeFormat(localeOptions === null || localeOptions === void 0 ? void 0 : localeOptions.locale, formatOptions).format((0, index_js_1.toDate)(date));
}
exports.intlFormat = intlFormat;
function isFormatOptions(opts) {
    return opts !== undefined && !("locale" in opts);
}
