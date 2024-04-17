"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frCA = void 0;
// Same as fr
const index_js_1 = require("../fr/_lib/formatDistance/index.js");
const index_js_2 = require("../fr/_lib/formatRelative/index.js");
const index_js_3 = require("../fr/_lib/localize/index.js");
const index_js_4 = require("../fr/_lib/match/index.js");
// Unique for fr-CA
const index_js_5 = require("./_lib/formatLong/index.js");
/**
 * @category Locales
 * @summary French locale (Canada).
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau](https://github.com/izeau)
 * @author François B [@fbonzon](https://github.com/fbonzon)
 * @author Gabriele Petrioli [@gpetrioli](https://github.com/gpetrioli)
 */
exports.frCA = {
    code: "fr-CA",
    formatDistance: index_js_1.formatDistance,
    formatLong: index_js_5.formatLong,
    formatRelative: index_js_2.formatRelative,
    localize: index_js_3.localize,
    match: index_js_4.match,
    // Unique for fr-CA
    options: {
        weekStartsOn: 0 /* Sunday */,
        firstWeekContainsDate: 1,
    },
};
