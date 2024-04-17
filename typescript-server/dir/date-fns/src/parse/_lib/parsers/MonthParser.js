"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MonthParser = void 0;
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class MonthParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.incompatibleTokens = [
            "Y",
            "R",
            "q",
            "Q",
            "L",
            "w",
            "I",
            "D",
            "i",
            "e",
            "c",
            "t",
            "T",
        ];
        this.priority = 110;
    }
    parse(dateString, token, match) {
        const valueCallback = (value) => value - 1;
        switch (token) {
            // 1, 2, ..., 12
            case "M":
                return (0, utils_js_1.mapValue)((0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.month, dateString), valueCallback);
            // 01, 02, ..., 12
            case "MM":
                return (0, utils_js_1.mapValue)((0, utils_js_1.parseNDigits)(2, dateString), valueCallback);
            // 1st, 2nd, ..., 12th
            case "Mo":
                return (0, utils_js_1.mapValue)(match.ordinalNumber(dateString, {
                    unit: "month",
                }), valueCallback);
            // Jan, Feb, ..., Dec
            case "MMM":
                return (match.month(dateString, {
                    width: "abbreviated",
                    context: "formatting",
                }) ||
                    match.month(dateString, { width: "narrow", context: "formatting" }));
            // J, F, ..., D
            case "MMMMM":
                return match.month(dateString, {
                    width: "narrow",
                    context: "formatting",
                });
            // January, February, ..., December
            case "MMMM":
            default:
                return (match.month(dateString, { width: "wide", context: "formatting" }) ||
                    match.month(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    match.month(dateString, { width: "narrow", context: "formatting" }));
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 11;
    }
    set(date, _flags, value) {
        date.setMonth(value, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
exports.MonthParser = MonthParser;
