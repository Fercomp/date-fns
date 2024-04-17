"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hour1to12Parser = void 0;
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class Hour1to12Parser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 70;
        this.incompatibleTokens = ["H", "K", "k", "t", "T"];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "h":
                return (0, utils_js_1.parseNumericPattern)(constants_js_1.numericPatterns.hour12h, dateString);
            case "ho":
                return match.ordinalNumber(dateString, { unit: "hour" });
            default:
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 12;
    }
    set(date, _flags, value) {
        const isPM = date.getHours() >= 12;
        if (isPM && value < 12) {
            date.setHours(value + 12, 0, 0, 0);
        }
        else if (!isPM && value === 12) {
            date.setHours(0, 0, 0, 0);
        }
        else {
            date.setHours(value, 0, 0, 0);
        }
        return date;
    }
}
exports.Hour1to12Parser = Hour1to12Parser;
