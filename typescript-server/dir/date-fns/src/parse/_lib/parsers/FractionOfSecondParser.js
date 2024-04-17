"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FractionOfSecondParser = void 0;
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class FractionOfSecondParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 30;
        this.incompatibleTokens = ["t", "T"];
    }
    parse(dateString, token) {
        const valueCallback = (value) => Math.trunc(value * Math.pow(10, -token.length + 3));
        return (0, utils_js_1.mapValue)((0, utils_js_1.parseNDigits)(token.length, dateString), valueCallback);
    }
    set(date, _flags, value) {
        date.setMilliseconds(value);
        return date;
    }
}
exports.FractionOfSecondParser = FractionOfSecondParser;
