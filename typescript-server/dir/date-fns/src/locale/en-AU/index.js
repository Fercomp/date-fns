"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enAU = void 0;
const index_js_1 = require("../en-US/_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("../en-US/_lib/formatRelative/index.js");
const index_js_4 = require("../en-US/_lib/localize/index.js");
const index_js_5 = require("../en-US/_lib/match/index.js");
/**
 * @category Locales
 * @summary English locale (Australia).
 * @language English
 * @iso-639-2 eng
 * @author Julien Malige [@JulienMalige](https://github.com/JulienMalige)
 */
exports.enAU = {
    code: "en-AU",
    formatDistance: index_js_1.formatDistance,
    formatLong: index_js_2.formatLong,
    formatRelative: index_js_3.formatRelative,
    localize: index_js_4.localize,
    match: index_js_5.match,
    options: {
        weekStartsOn: 1 /* Monday */,
        firstWeekContainsDate: 4,
    },
};
