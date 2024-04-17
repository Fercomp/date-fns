"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ka = void 0;
const index_js_1 = require("./_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("./_lib/formatRelative/index.js");
const index_js_4 = require("./_lib/localize/index.js");
const index_js_5 = require("./_lib/match/index.js");
/**
 * @category Locales
 * @summary Georgian locale.
 * @language Georgian
 * @iso-639-2 geo
 * @author Lado Lomidze [@Landish](https://github.com/Landish)
 * @author Nick Shvelidze [@shvelo](https://github.com/shvelo)
 */
exports.ka = {
    code: "ka",
    formatDistance: index_js_1.formatDistance,
    formatLong: index_js_2.formatLong,
    formatRelative: index_js_3.formatRelative,
    localize: index_js_4.localize,
    match: index_js_5.match,
    options: {
        weekStartsOn: 1 /* Monday */,
        firstWeekContainsDate: 1,
    },
};
