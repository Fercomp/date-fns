"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zhTW = void 0;
const index_js_1 = require("./_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("./_lib/formatRelative/index.js");
const index_js_4 = require("./_lib/localize/index.js");
const index_js_5 = require("./_lib/match/index.js");
/**
 * @category Locales
 * @summary Chinese Traditional locale.
 * @language Chinese Traditional
 * @iso-639-2 zho
 * @author tonypai [@tpai](https://github.com/tpai)
 * @author Jack Hsu [@jackhsu978](https://github.com/jackhsu978)
 * @author Terrence Lam [@skyuplam](https://github.com/skyuplam)
 */
exports.zhTW = {
    code: "zh-TW",
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
