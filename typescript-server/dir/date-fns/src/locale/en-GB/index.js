"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enGB = void 0;
const index_js_1 = require("../en-US/_lib/formatDistance/index.js");
const index_js_2 = require("../en-US/_lib/formatRelative/index.js");
const index_js_3 = require("../en-US/_lib/localize/index.js");
const index_js_4 = require("../en-US/_lib/match/index.js");
const index_js_5 = require("./_lib/formatLong/index.js");
/**
 * @category Locales
 * @summary English locale (United Kingdom).
 * @language English
 * @iso-639-2 eng
 * @author Alex [@glintik](https://github.com/glintik)
 */
exports.enGB = {
    code: "en-GB",
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
