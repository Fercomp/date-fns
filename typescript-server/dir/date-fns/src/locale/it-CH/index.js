"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.itCH = void 0;
const index_js_1 = require("../it/_lib/formatDistance/index.js");
const index_js_2 = require("../it/_lib/formatRelative/index.js");
const index_js_3 = require("../it/_lib/localize/index.js");
const index_js_4 = require("../it/_lib/match/index.js");
const index_js_5 = require("./_lib/formatLong/index.js");
/**
 * @category Locales
 * @summary Italian locale (Switzerland).
 * @language Italian
 * @iso-639-2 ita
 * @author Mike Peyer [@maic66](https://github.com/maic66)
 */
exports.itCH = {
    code: "it-CH",
    formatDistance: index_js_1.formatDistance,
    formatLong: index_js_5.formatLong,
    formatRelative: index_js_2.formatRelative,
    localize: index_js_3.localize,
    match: index_js_4.match,
    options: {
        weekStartsOn: 1 /* Monday */,
        firstWeekContainsDate: 4,
    },
};
