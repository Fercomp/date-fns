"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISOWeekParser = void 0;
const index_js_1 = require("../../../setISOWeek/index.js");
const index_js_2 = require("../../../startOfISOWeek/index.js");
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// ISO week of year
class ISOWeekParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 100;
        this.incompatibleTokens = [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "e",
            "c",
            "t",
            "T",
        ];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "I":
                return (0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.week, dateString);
            case "Io":
                return match.ordinalNumber(dateString, { unit: "week" });
            default:
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 53;
    }
    set(date, _flags, value) {
        return (0, index_js_2.startOfISOWeek)((0, index_js_1.setISOWeek)(date, value));
    }
}
exports.ISOWeekParser = ISOWeekParser;
