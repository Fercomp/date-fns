"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hour0to23Parser = void 0;
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class Hour0to23Parser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 70;
        this.incompatibleTokens = ["a", "b", "h", "K", "k", "t", "T"];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "H":
                return (0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.hour23h, dateString);
            case "Ho":
                return match.ordinalNumber(dateString, { unit: "hour" });
            default:
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 23;
    }
    set(date, _flags, value) {
        date.setHours(value, 0, 0, 0);
        return date;
    }
}
exports.Hour0to23Parser = Hour0to23Parser;
