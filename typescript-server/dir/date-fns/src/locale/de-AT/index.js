"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deAT = void 0;
const index_js_1 = require("../de/_lib/formatDistance/index.js");
const index_js_2 = require("../de/_lib/formatLong/index.js");
const index_js_3 = require("../de/_lib/formatRelative/index.js");
const index_js_4 = require("../de/_lib/match/index.js");
// difference to 'de' locale
const index_js_5 = require("./_lib/localize/index.js");
/**
 * @category Locales
 * @summary German locale (Austria).
 * @language German
 * @iso-639-2 deu
 * @author Christoph Tobias Stenglein [@cstenglein](https://github.com/cstenglein)
 */
exports.deAT = {
    code: "de-AT",
    formatDistance: index_js_1.formatDistance,
    formatLong: index_js_2.formatLong,
    formatRelative: index_js_3.formatRelative,
    localize: index_js_5.localize,
    match: index_js_4.match,
    options: {
        weekStartsOn: 1 /* Monday */,
        firstWeekContainsDate: 4,
    },
};
