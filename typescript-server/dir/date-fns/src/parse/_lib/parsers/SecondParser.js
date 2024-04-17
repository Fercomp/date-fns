"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SecondParser = void 0;
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class SecondParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 50;
        this.incompatibleTokens = ["t", "T"];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "s":
                return (0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.second, dateString);
            case "so":
                return match.ordinalNumber(dateString, { unit: "second" });
            default:
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 59;
    }
    set(date, _flags, value) {
        date.setSeconds(value, 0);
        return date;
    }
}
exports.SecondParser = SecondParser;
