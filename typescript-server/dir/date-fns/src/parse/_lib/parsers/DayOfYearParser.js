"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayOfYearParser = void 0;
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class DayOfYearParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 90;
        this.subpriority = 1;
        this.incompatibleTokens = [
            "Y",
            "R",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "I",
            "d",
            "E",
            "i",
            "e",
            "c",
            "t",
            "T",
        ];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "D":
            case "DD":
                return (0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.dayOfYear, dateString);
            case "Do":
                return match.ordinalNumber(dateString, { unit: "date" });
            default:
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
        }
    }
    validate(date, value) {
        const year = date.getFullYear();
        const isLeapYear = (0, utils_js_1.isLeapYearIndex)(year);
        if (isLeapYear) {
            return value >= 1 && value <= 366;
        }
        else {
            return value >= 1 && value <= 365;
        }
    }
    set(date, _flags, value) {
        date.setMonth(0, value);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
exports.DayOfYearParser = DayOfYearParser;
