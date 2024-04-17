"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
const index_js_1 = require("../../../_lib/buildMatchFn/index.js");
const index_js_2 = require("../../../_lib/buildMatchPatternFn/index.js");
const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(ب|ك)/i,
    wide: /^(مىيلادىدىن بۇرۇن|مىيلادىدىن كىيىن)/i,
};
const parseEraPatterns = {
    any: [/^بۇرۇن/i, /^كىيىن/i],
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^چ[1234]/i,
    wide: /^چارەك [1234]/i,
};
const parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i],
};
const matchMonthPatterns = {
    // eslint-disable-next-line no-misleading-character-class
    narrow: /^[يفمئامئ‍ئاسۆند]/i,
    abbreviated: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,
    wide: /^(يانۋار|فېۋىرال|مارت|ئاپرىل|ماي|ئىيۇن|ئىيول|ئاۋغۇست|سىنتەبىر|ئۆكتەبىر|نويابىر|دىكابىر)/i,
};
const parseMonthPatterns = {
    narrow: [
        /^ي/i,
        /^ف/i,
        /^م/i,
        /^ا/i,
        /^م/i,
        /^ى‍/i,
        /^ى‍/i,
        /^ا‍/i,
        /^س/i,
        /^ۆ/i,
        /^ن/i,
        /^د/i,
    ],
    any: [
        /^يان/i,
        /^فېۋ/i,
        /^مار/i,
        /^ئاپ/i,
        /^ماي/i,
        /^ئىيۇن/i,
        /^ئىيول/i,
        /^ئاۋ/i,
        /^سىن/i,
        /^ئۆك/i,
        /^نوي/i,
        /^دىك/i,
    ],
};
const matchDayPatterns = {
    narrow: /^[دسچپجشي]/i,
    short: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
    abbreviated: /^(يە|دۈ|سە|چا|پە|جۈ|شە)/i,
    wide: /^(يەكشەنبە|دۈشەنبە|سەيشەنبە|چارشەنبە|پەيشەنبە|جۈمە|شەنبە)/i,
};
const parseDayPatterns = {
    narrow: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
    any: [/^ي/i, /^د/i, /^س/i, /^چ/i, /^پ/i, /^ج/i, /^ش/i],
};
const matchDayPeriodPatterns = {
    narrow: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,
    any: /^(ئە|چ|ك|چ|(دە|ئەتىگەن) ( ئە‍|چۈشتىن كىيىن|ئاخشىم|كىچە))/i,
};
const parseDayPeriodPatterns = {
    any: {
        am: /^ئە/i,
        pm: /^چ/i,
        midnight: /^ك/i,
        noon: /^چ/i,
        morning: /ئەتىگەن/i,
        afternoon: /چۈشتىن كىيىن/i,
        evening: /ئاخشىم/i,
        night: /كىچە/i,
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
