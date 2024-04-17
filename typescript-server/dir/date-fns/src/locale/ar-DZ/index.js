"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.arDZ = void 0;
const index_js_1 = require("./_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("./_lib/formatRelative/index.js");
const index_js_4 = require("./_lib/localize/index.js");
const index_js_5 = require("./_lib/match/index.js");
/**
 * @category Locales
 * @summary Arabic locale (Algerian Arabic).
 * @language Algerian Arabic
 * @iso-639-2 ara
 * @author Badreddine Boumaza [@badre429](https://github.com/badre429)
 * @author Ahmed ElShahat [@elshahat](https://github.com/elshahat)
 */
exports.arDZ = {
    code: "ar-DZ",
    formatDistance: index_js_1.formatDistance,
    formatLong: index_js_2.formatLong,
    formatRelative: index_js_3.formatRelative,
    localize: index_js_4.localize,
    match: index_js_5.match,
    options: {
        weekStartsOn: 0 /* Sunday */,
        firstWeekContainsDate: 1,
    },
};
