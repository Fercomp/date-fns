"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
const index_js_1 = require("../../../_lib/buildMatchFn/index.js");
const index_js_2 = require("../../../_lib/buildMatchPatternFn/index.js");
const matchOrdinalNumberPattern = /^\d+\./i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
    abbreviated: /^(e\.m\.a|m\.a\.j|eKr|pKr)/i,
    wide: /^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i,
};
const parseEraPatterns = {
    any: [/^e/i, /^(m|p)/i],
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^K[1234]/i,
    wide: /^[1234](\.)? kvartal/i,
};
const parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i],
};
const matchMonthPatterns = {
    narrow: /^[jvmasond]/i,
    abbreviated: /^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i,
    wide: /^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i,
};
const parseMonthPatterns = {
    narrow: [
        /^j/i,
        /^v/i,
        /^m/i,
        /^a/i,
        /^m/i,
        /^j/i,
        /^j/i,
        /^a/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i,
    ],
    any: [
        /^ja/i,
        /^v/i,
        /^mär/i,
        /^ap/i,
        /^mai/i,
        /^juun/i,
        /^juul/i,
        /^au/i,
        /^s/i,
        /^o/i,
        /^n/i,
        /^d/i,
    ],
};
const matchDayPatterns = {
    narrow: /^[petknrl]/i,
    short: /^[petknrl]/i,
    abbreviated: /^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,
    wide: /^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i,
};
const parseDayPatterns = {
    any: [/^p/i, /^e/i, /^t/i, /^k/i, /^n/i, /^r/i, /^l/i],
};
const matchDayPeriodPatterns = {
    any: /^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i,
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^keskö/i,
        noon: /^keskp/i,
        morning: /hommik/i,
        afternoon: /pärastlõuna/i,
        evening: /õhtu/i,
        night: /öö/i,
    },
};
exports.match = {
    ordinalNumber: (0, index_js_2.buildMatchPatternFn)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: (value) => parseInt(value, 10),
    }),
    era: (0, index_js_1.buildMatchFn)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any",
    }),
    quarter: (0, index_js_1.buildMatchFn)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: (index) => (index + 1),
    }),
    month: (0, index_js_1.buildMatchFn)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any",
    }),
    day: (0, index_js_1.buildMatchFn)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any",
    }),
    dayPeriod: (0, index_js_1.buildMatchFn)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any",
    }),
};
