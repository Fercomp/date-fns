"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateParser = void 0;
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const DAYS_IN_MONTH_LEAP_YEAR = [
    31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31,
];
// Day of the month
class DateParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 90;
        this.subPriority = 1;
        this.incompatibleTokens = [
            "Y",
            "R",
            "q",
            "Q",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
        ];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "d":
                return (0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.date, dateString);
            case "do":
                return match.ordinalNumber(dateString, { unit: "date" });
            default:
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
        }
    }
    validate(date, value) {
        const year = date.getFullYear();
        const isLeapYear = (0, utils_js_1.isLeapYearIndex)(year);
        const month = date.getMonth();
        if (isLeapYear) {
            return value >= 1 && value <= DAYS_IN_MONTH_LEAP_YEAR[month];
        }
        else {
            return value >= 1 && value <= DAYS_IN_MONTH[month];
        }
    }
    set(date, _flags, value) {
        date.setDate(value);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
exports.DateParser = DateParser;
