"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalWeekParser = void 0;
const index_js_1 = require("../../../setWeek/index.js");
const index_js_2 = require("../../../startOfWeek/index.js");
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// Local week of year
class LocalWeekParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 100;
        this.incompatibleTokens = [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
        ];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "w":
                return (0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.week, dateString);
            case "wo":
                return match.ordinalNumber(dateString, { unit: "week" });
            default:
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 53;
    }
    set(date, _flags, value, options) {
        return (0, index_js_2.startOfWeek)((0, index_js_1.setWeek)(date, value, options), options);
    }
}
exports.LocalWeekParser = LocalWeekParser;
