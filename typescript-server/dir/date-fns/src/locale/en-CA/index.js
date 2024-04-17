"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enCA = void 0;
const index_js_1 = require("../en-US/_lib/formatRelative/index.js");
const index_js_2 = require("../en-US/_lib/localize/index.js");
const index_js_3 = require("../en-US/_lib/match/index.js");
const index_js_4 = require("./_lib/formatDistance/index.js");
const index_js_5 = require("./_lib/formatLong/index.js");
/**
 * @category Locales
 * @summary English locale (Canada).
 * @language English
 * @iso-639-2 eng
 * @author Mark Owsiak [@markowsiak](https://github.com/markowsiak)
 * @author Marco Imperatore [@mimperatore](https://github.com/mimperatore)
 */
exports.enCA = {
    code: "en-CA",
    formatDistance: index_js_4.formatDistance,
    formatLong: index_js_5.formatLong,
    formatRelative: index_js_1.formatRelative,
    localize: index_js_2.localize,
    match: index_js_3.match,
    options: {
        weekStartsOn: 0 /* Sunday */,
        firstWeekContainsDate: 1,
    },
};
