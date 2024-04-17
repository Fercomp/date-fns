"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtendedYearParser = void 0;
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class ExtendedYearParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 130;
        this.incompatibleTokens = ["G", "y", "Y", "R", "w", "I", "i", "e", "c", "t", "T"];
    }
    parse(dateString, token) {
        if (token === "u") {
            return (0, utils_js_1.parseNDigitsSigned)(4, dateString);
        }
        return (0, utils_js_1.parseNDigitsSigned)(token.length, dateString);
    }
    set(date, _flags, value) {
        date.setFullYear(value, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
exports.ExtendedYearParser = ExtendedYearParser;
