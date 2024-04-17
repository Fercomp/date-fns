"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.match = void 0;
const index_js_1 = require("../../../_lib/buildMatchFn/index.js");
const index_js_2 = require("../../../_lib/buildMatchPatternFn/index.js");
const matchOrdinalNumberPattern = /^(\d+)(ನೇ|ನೆ)?/i;
const parseOrdinalNumberPattern = /\d+/i;
const matchEraPatterns = {
    narrow: /^(ಕ್ರಿ.ಪೂ|ಕ್ರಿ.ಶ)/i,
    abbreviated: /^(ಕ್ರಿ\.?\s?ಪೂ\.?|ಕ್ರಿ\.?\s?ಶ\.?|ಪ್ರ\.?\s?ಶ\.?)/i,
    wide: /^(ಕ್ರಿಸ್ತ ಪೂರ್ವ|ಕ್ರಿಸ್ತ ಶಕ|ಪ್ರಸಕ್ತ ಶಕ)/i,
};
const parseEraPatterns = {
    any: [/^ಪೂ/i, /^(ಶ|ಪ್ರ)/i],
};
const matchQuarterPatterns = {
    narrow: /^[1234]/i,
    abbreviated: /^ತ್ರೈ[1234]|ತ್ರೈ [1234]| [1234]ತ್ರೈ/i,
    wide: /^[1234](ನೇ)? ತ್ರೈಮಾಸಿಕ/i,
};
const parseQuarterPatterns = {
    any: [/1/i, /2/i, /3/i, /4/i],
};
const matchMonthPatterns = {
    narrow: /^(ಜೂ|ಜು|ಜ|ಫೆ|ಮಾ|ಏ|ಮೇ|ಆ|ಸೆ|ಅ|ನ|ಡಿ)/i,
    abbreviated: /^(ಜನ|ಫೆಬ್ರ|ಮಾರ್ಚ್|ಏಪ್ರಿ|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗ|ಸೆಪ್ಟೆಂ|ಅಕ್ಟೋ|ನವೆಂ|ಡಿಸೆಂ)/i,
    wide: /^(ಜನವರಿ|ಫೆಬ್ರವರಿ|ಮಾರ್ಚ್|ಏಪ್ರಿಲ್|ಮೇ|ಜೂನ್|ಜುಲೈ|ಆಗಸ್ಟ್|ಸೆಪ್ಟೆಂಬರ್|ಅಕ್ಟೋಬರ್|ನವೆಂಬರ್|ಡಿಸೆಂಬರ್)/i,
};
const parseMonthPatterns = {
    narrow: [
        /^ಜ$/i,
        /^ಫೆ/i,
        /^ಮಾ/i,
        /^ಏ/i,
        /^ಮೇ/i,
        /^ಜೂ/i,
        /^ಜು$/i,
        /^ಆ/i,
        /^ಸೆ/i,
        /^ಅ/i,
        /^ನ/i,
        /^ಡಿ/i,
    ],
    any: [
        /^ಜನ/i,
        /^ಫೆ/i,
        /^ಮಾ/i,
        /^ಏ/i,
        /^ಮೇ/i,
        /^ಜೂನ್/i,
        /^ಜುಲೈ/i,
        /^ಆ/i,
        /^ಸೆ/i,
        /^ಅ/i,
        /^ನ/i,
        /^ಡಿ/i,
    ],
};
const matchDayPatterns = {
    narrow: /^(ಭಾ|ಸೋ|ಮ|ಬು|ಗು|ಶು|ಶ)/i,
    short: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,
    abbreviated: /^(ಭಾನು|ಸೋಮ|ಮಂಗಳ|ಬುಧ|ಗುರು|ಶುಕ್ರ|ಶನಿ)/i,
    wide: /^(ಭಾನುವಾರ|ಸೋಮವಾರ|ಮಂಗಳವಾರ|ಬುಧವಾರ|ಗುರುವಾರ|ಶುಕ್ರವಾರ|ಶನಿವಾರ)/i,
};
const parseDayPatterns = {
    narrow: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i],
    any: [/^ಭಾ/i, /^ಸೋ/i, /^ಮ/i, /^ಬು/i, /^ಗು/i, /^ಶು/i, /^ಶ/i],
};
const matchDayPeriodPatterns = {
    narrow: /^(ಪೂ|ಅ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i,
    any: /^(ಪೂರ್ವಾಹ್ನ|ಅಪರಾಹ್ನ|ಮಧ್ಯರಾತ್ರಿ|ಮಧ್ಯಾನ್ಹ|ಬೆಳಗ್ಗೆ|ಸಂಜೆ|ರಾತ್ರಿ)/i,
};
const parseDayPeriodPatterns = {
    any: {
        am: /^ಪೂ/i,
        pm: /^ಅ/i,
        midnight: /ಮಧ್ಯರಾತ್ರಿ/i,
        noon: /ಮಧ್ಯಾನ್ಹ/i,
        morning: /ಬೆಳಗ್ಗೆ/i,
        afternoon: /ಮಧ್ಯಾನ್ಹ/i,
        evening: /ಸಂಜೆ/i,
        night: /ರಾತ್ರಿ/i,
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
