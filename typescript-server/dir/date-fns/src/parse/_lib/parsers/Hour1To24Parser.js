"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hour1To24Parser = void 0;
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class Hour1To24Parser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 70;
        this.incompatibleTokens = ["a", "b", "h", "H", "K", "t", "T"];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "k":
                return (0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.hour24h, dateString);
            case "ko":
                return match.ordinalNumber(dateString, { unit: "hour" });
            default:
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 24;
    }
    set(date, _flags, value) {
        const hours = value <= 24 ? value % 24 : value;
        date.setHours(hours, 0, 0, 0);
        return date;
    }
}
exports.Hour1To24Parser = Hour1To24Parser;
