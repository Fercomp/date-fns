"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mt = void 0;
const index_js_1 = require("./_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("./_lib/formatRelative/index.js");
const index_js_4 = require("./_lib/localize/index.js");
const index_js_5 = require("./_lib/match/index.js");
/**
 * @category Locales
 * @summary Maltese locale.
 * @language Maltese
 * @iso-639-2 mlt
 * @author Andras Matzon [@amatzon](@link https://github.com/amatzon)
 * @author Bryan Borg [@bryanMt](@link https://github.com/bryanMt)
 */
exports.mt = {
    code: "mt",
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
