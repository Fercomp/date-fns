"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isLeapYearIndex = exports.normalizeTwoDigitYear = exports.dayPeriodEnumToHours = exports.parseNDigitsSigned = exports.parseNDigits = exports.parseAnyDigitsSigned = exports.parseTimezonePattern = exports.parseNumericPattern = exports.mapValue = void 0;
const index_js_1 = require("../../constants/index.js");
const constants_js_1 = require("./constants.js");
function mapValue(parseFnResult, mapFn) {
    if (!parseFnResult) {
        return parseFnResult;
    }
    return {
        value: mapFn(parseFnResult.value),
        rest: parseFnResult.rest,
    };
}
exports.mapValue = mapValue;
function parseNumericPattern(pattern, dateString) {
    const matchResult = dateString.match(pattern);
    if (!matchResult) {
        return null;
    }
    return {
        value: parseInt(matchResult[0], 10),
        rest: dateString.slice(matchResult[0].length),
    };
}
exports.parseNumericPattern = parseNumericPattern;
function parseTimezonePattern(pattern, dateString) {
    const matchResult = dateString.match(pattern);
    if (!matchResult) {
        return null;
    }
    // Input is 'Z'
    if (matchResult[0] === "Z") {
        return {
            value: 0,
            rest: dateString.slice(1),
        };
    }
    const sign = matchResult[1] === "+" ? 1 : -1;
    const hours = matchResult[2] ? parseInt(matchResult[2], 10) : 0;
    const minutes = matchResult[3] ? parseInt(matchResult[3], 10) : 0;
    const seconds = matchResult[5] ? parseInt(matchResult[5], 10) : 0;
    return {
        value: sign *
            (hours * index_js_1.millisecondsInHour +
                minutes * index_js_1.millisecondsInMinute +
                seconds * index_js_1.millisecondsInSecond),
        rest: dateString.slice(matchResult[0].length),
    };
}
exports.parseTimezonePattern = parseTimezonePattern;
function parseAnyDigitsSigned(dateString) {
    return parseNumericPattern(constants_js_1.numericPatterns.anyDigitsSigned, dateString);
}
exports.parseAnyDigitsSigned = parseAnyDigitsSigned;
function parseNDigits(n, dateString) {
    switch (n) {
        case 1:
            return parseNumericPattern(constants_js_1.numericPatterns.singleDigit, dateString);
        case 2:
            return parseNumericPattern(constants_js_1.numericPatterns.twoDigits, dateString);
        case 3:
            return parseNumericPattern(constants_js_1.numericPatterns.threeDigits, dateString);
        case 4:
            return parseNumericPattern(constants_js_1.numericPatterns.fourDigits, dateString);
        default:
            return parseNumericPattern(new RegExp("^\\d{1," + n + "}"), dateString);
    }
}
exports.parseNDigits = parseNDigits;
function parseNDigitsSigned(n, dateString) {
    switch (n) {
        case 1:
            return parseNumericPattern(constants_js_1.numericPatterns.singleDigitSigned, dateString);
        case 2:
            return parseNumericPattern(constants_js_1.numericPatterns.twoDigitsSigned, dateString);
        case 3:
            return parseNumericPattern(constants_js_1.numericPatterns.threeDigitsSigned, dateString);
        case 4:
            return parseNumericPattern(constants_js_1.numericPatterns.fourDigitsSigned, dateString);
        default:
            return parseNumericPattern(new RegExp("^-?\\d{1," + n + "}"), dateString);
    }
}
exports.parseNDigitsSigned = parseNDigitsSigned;
function dayPeriodEnumToHours(dayPeriod) {
    switch (dayPeriod) {
        case "morning":
            return 4;
        case "evening":
            return 17;
        case "pm":
        case "noon":
        case "afternoon":
            return 12;
        case "am":
        case "midnight":
        case "night":
        default:
            return 0;
    }
}
exports.dayPeriodEnumToHours = dayPeriodEnumToHours;
function normalizeTwoDigitYear(twoDigitYear, currentYear) {
    const isCommonEra = currentYear > 0;
    // Absolute number of the current year:
    // 1 -> 1 AC
    // 0 -> 1 BC
    // -1 -> 2 BC
    const absCurrentYear = isCommonEra ? currentYear : 1 - currentYear;
    let result;
    if (absCurrentYear <= 50) {
        result = twoDigitYear || 100;
    }
    else {
        const rangeEnd = absCurrentYear + 50;
        const rangeEndCentury = Math.trunc(rangeEnd / 100) * 100;
        const isPreviousCentury = twoDigitYear >= rangeEnd % 100;
        result = twoDigitYear + rangeEndCentury - (isPreviousCentury ? 100 : 0);
    }
    return isCommonEra ? result : 1 - result;
}
exports.normalizeTwoDigitYear = normalizeTwoDigitYear;
function isLeapYearIndex(year) {
    return year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0);
}
exports.isLeapYearIndex = isLeapYearIndex;
