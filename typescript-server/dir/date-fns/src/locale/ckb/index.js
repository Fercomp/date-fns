"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ckb = void 0;
const index_js_1 = require("./_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("./_lib/formatRelative/index.js");
const index_js_4 = require("./_lib/localize/index.js");
const index_js_5 = require("./_lib/match/index.js");
/**
 * @type {Locale}
 * @category Locales
 * @summary Central Kurdish locale.
 * @language Central Kurdish
 * @iso-639-2 kur
 * @author Revan Sarbast [@Revan99]{@link https://github.com/Revan99}
 */
exports.ckb = {
    code: "ckb",
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
