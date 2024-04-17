"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.es = void 0;
const index_js_1 = require("./_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("./_lib/formatRelative/index.js");
const index_js_4 = require("./_lib/localize/index.js");
const index_js_5 = require("./_lib/match/index.js");
/**
 * @category Locales
 * @summary Spanish locale.
 * @language Spanish
 * @iso-639-2 spa
 * @author Juan Angosto [@juanangosto](https://github.com/juanangosto)
 * @author Guillermo Grau [@guigrpa](https://github.com/guigrpa)
 * @author Fernando Agüero [@fjaguero](https://github.com/fjaguero)
 * @author Gastón Haro [@harogaston](https://github.com/harogaston)
 * @author Yago Carballo [@YagoCarballo](https://github.com/YagoCarballo)
 */
exports.es = {
    code: "es",
    formatDistance: index_js_1.formatDistance,
    formatLong: index_js_2.formatLong,
    formatRelative: index_js_3.formatRelative,
    localize: index_js_4.localize,
    match: index_js_5.match,
    options: {
        weekStartsOn: 1 /* Monday */,
        firstWeekContainsDate: 1,
    },
};
