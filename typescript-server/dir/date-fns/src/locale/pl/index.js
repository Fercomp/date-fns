"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pl = void 0;
const index_js_1 = require("./_lib/formatDistance/index.js");
const index_js_2 = require("./_lib/formatLong/index.js");
const index_js_3 = require("./_lib/formatRelative/index.js");
const index_js_4 = require("./_lib/localize/index.js");
const index_js_5 = require("./_lib/match/index.js");
/**
 * @category Locales
 * @summary Polish locale.
 * @language Polish
 * @iso-639-2 pol
 * @author Mateusz Derks [@ertrzyiks](https://github.com/ertrzyiks)
 * @author Just RAG [@justrag](https://github.com/justrag)
 * @author Mikolaj Grzyb [@mikolajgrzyb](https://github.com/mikolajgrzyb)
 * @author Mateusz Tokarski [@mutisz](https://github.com/mutisz)
 */
exports.pl = {
    code: "pl",
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
