"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frCH = void 0;
// Same as fr
const index_js_1 = require("../fr/_lib/formatDistance/index.js");
const index_js_2 = require("../fr/_lib/localize/index.js");
const index_js_3 = require("../fr/_lib/match/index.js");
// Unique for fr-CH
const index_js_4 = require("./_lib/formatLong/index.js");
const index_js_5 = require("./_lib/formatRelative/index.js");
/**
 * @category Locales
 * @summary French locale (Switzerland).
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau](https://github.com/izeau)
 * @author François B [@fbonzon](https://github.com/fbonzon)
 * @author Van Vuong Ngo [@vanvuongngo](https://github.com/vanvuongngo)
 * @author Alex Hoeing [@dcbn](https://github.com/dcbn)
 */
exports.frCH = {
    code: "fr-CH",
    formatDistance: index_js_1.formatDistance,
    formatLong: index_js_4.formatLong,
    formatRelative: index_js_5.formatRelative,
    localize: index_js_2.localize,
    match: index_js_3.match,
    options: {
        weekStartsOn: 1 /* Monday */,
        firstWeekContainsDate: 4,
    },
};
