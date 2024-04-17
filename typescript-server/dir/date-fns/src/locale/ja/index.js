"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ja = void 0;
const index_js_1 = require("./_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("./_lib/formatRelative/index.js");
const index_js_4 = require("./_lib/localize/index.js");
const index_js_5 = require("./_lib/match/index.js");
/**
 * @category Locales
 * @summary Japanese locale.
 * @language Japanese
 * @iso-639-2 jpn
 * @author Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu)
 * @author Yamagishi Kazutoshi [@ykzts](https://github.com/ykzts)
 * @author Luca Ban [@mesqueeb](https://github.com/mesqueeb)
 * @author Terrence Lam [@skyuplam](https://github.com/skyuplam)
 * @author Taiki IKeda [@so99ynoodles](https://github.com/so99ynoodles)
 */
exports.ja = {
    code: "ja",
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
