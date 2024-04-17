"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QuarterParser = void 0;
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class QuarterParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 120;
        this.incompatibleTokens = [
            "Y",
            "R",
            "q",
            "M",
            "L",
            "w",
            "I",
            "d",
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
            // 1, 2, 3, 4
            case "Q":
            case "QQ": // 01, 02, 03, 04
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
            // 1st, 2nd, 3rd, 4th
            case "Qo":
                return match.ordinalNumber(dateString, { unit: "quarter" });
            // Q1, Q2, Q3, Q4
            case "QQQ":
                return (match.quarter(dateString, {
                    width: "abbreviated",
                    context: "formatting",
                }) ||
                    match.quarter(dateString, {
                        width: "narrow",
                        context: "formatting",
                    }));
            // 1, 2, 3, 4 (narrow quarter; could be not numerical)
            case "QQQQQ":
                return match.quarter(dateString, {
                    width: "narrow",
                    context: "formatting",
                });
            // 1st quarter, 2nd quarter, ...
            case "QQQQ":
            default:
                return (match.quarter(dateString, {
                    width: "wide",
                    context: "formatting",
                }) ||
                    match.quarter(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    match.quarter(dateString, {
                        width: "narrow",
                        context: "formatting",
                    }));
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 4;
    }
    set(date, _flags, value) {
        date.setMonth((value - 1) * 3, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
exports.QuarterParser = QuarterParser;
