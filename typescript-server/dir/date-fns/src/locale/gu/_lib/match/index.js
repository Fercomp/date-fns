"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
const index_js_1 = require("../../../_lib/buildMatchFn/index.js");
const index_js_2 = require("../../../_lib/buildMatchPatternFn/index.js");
const matchOrdinalNumberPattern = /^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(ઈસપૂ|ઈસ)/i,
    abbreviated: /^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,
    wide: /^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i,
};
const parseEraPatterns = {
    any: [/^ઈસપૂ/i, /^ઈસ/i],
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^q[1234]/i,
    wide: /^[1234](લો|જો|થો)? ત્રિમાસ/i,
};
const parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i],
};
const matchMonthPatterns = {
    // eslint-disable-next-line no-misleading-character-class
    narrow: /^[જાફેમાએમેજૂજુઓસઓનડિ]/i,
    abbreviated: /^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,
    wide: /^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i,
};
const parseMonthPatterns = {
    narrow: [
        /^જા/i,
        /^ફે/i,
        /^મા/i,
        /^એ/i,
        /^મે/i,
        /^જૂ/i,
        /^જુ/i,
        /^ઑગ/i,
        /^સ/i,
        /^ઓક્ટો/i,
        /^ન/i,
        /^ડિ/i,
    ],
    any: [
        /^જા/i,
        /^ફે/i,
        /^મા/i,
        /^એ/i,
        /^મે/i,
        /^જૂ/i,
        /^જુ/i,
        /^ઑગ/i,
        /^સ/i,
        /^ઓક્ટો/i,
        /^ન/i,
        /^ડિ/i,
    ],
};
const matchDayPatterns = {
    narrow: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
    short: /^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,
    abbreviated: /^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,
    wide: /^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i,
};
const parseDayPatterns = {
    narrow: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i],
    any: [/^ર/i, /^સો/i, /^મં/i, /^બુ/i, /^ગુ/i, /^શુ/i, /^શ/i],
};
const matchDayPeriodPatterns = {
    narrow: /^(a|p|મ\.?|સ|બ|સાં|રા)/i,
    any: /^(a|p|મ\.?|સ|બ|સાં|રા)/i,
};
const parseDayPeriodPatterns = {
    any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^મ\.?/i,
        noon: /^બ/i,
        morning: /સ/i,
        afternoon: /બ/i,
        evening: /સાં/i,
        night: /રા/i,
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
