"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandAloneMonthParser = void 0;
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class StandAloneMonthParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 110;
        this.incompatibleTokens = [
            "Y",
            "R",
            "q",
            "Q",
            "M",
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
        const valueCallback = (value) => value - 1;
        switch (token) {
            // 1, 2, ..., 12
            case "L":
                return (0, utils_js_1.mapValue)((0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.month, dateString), valueCallback);
            // 01, 02, ..., 12
            case "LL":
                return (0, utils_js_1.mapValue)((0, utils_js_1.parseNDigits)(2, dateString), valueCallback);
            // 1st, 2nd, ..., 12th
            case "Lo":
                return (0, utils_js_1.mapValue)(match.ordinalNumber(dateString, {
                    unit: "month",
                }), valueCallback);
            // Jan, Feb, ..., Dec
            case "LLL":
                return (match.month(dateString, {
                    width: "abbreviated",
                    context: "standalone",
                }) ||
                    match.month(dateString, { width: "narrow", context: "standalone" }));
            // J, F, ..., D
            case "LLLLL":
                return match.month(dateString, {
                    width: "narrow",
                    context: "standalone",
                });
            // January, February, ..., December
            case "LLLL":
            default:
                return (match.month(dateString, { width: "wide", context: "standalone" }) ||
                    match.month(dateString, {
                        width: "abbreviated",
                        context: "standalone",
                    }) ||
                    match.month(dateString, { width: "narrow", context: "standalone" }));
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
exports.StandAloneMonthParser = StandAloneMonthParser;
