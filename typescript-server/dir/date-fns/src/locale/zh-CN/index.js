"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.zhCN = void 0;
const index_js_1 = require("./_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("./_lib/formatRelative/index.js");
const index_js_4 = require("./_lib/localize/index.js");
const index_js_5 = require("./_lib/match/index.js");
/**
 * @category Locales
 * @summary Chinese Simplified locale.
 * @language Chinese Simplified
 * @iso-639-2 zho
 * @author Changyu Geng [@KingMario](https://github.com/KingMario)
 * @author Song Shuoyun [@fnlctrl](https://github.com/fnlctrl)
 * @author sabrinaM [@sabrinamiao](https://github.com/sabrinamiao)
 * @author Carney Wu [@cubicwork](https://github.com/cubicwork)
 * @author Terrence Lam [@skyuplam](https://github.com/skyuplam)
 */
exports.zhCN = {
    code: "zh-CN",
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
