"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISOWeekYearParser = void 0;
const index_js_1 = require("../../../startOfISOWeek/index.js");
const index_js_2 = require("../../../constructFrom/index.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// ISO week-numbering year
class ISOWeekYearParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 130;
        this.incompatibleTokens = [
            "G",
            "y",
            "Y",
            "u",
            "Q",
            "q",
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
    parse(dateString, token) {
        if (token === "R") {
            return (0, utils_js_1.parseNDigitsSigned)(4, dateString);
        }
        return (0, utils_js_1.parseNDigitsSigned)(token.length, dateString);
    }
    set(date, _flags, value) {
        const firstWeekOfYear = (0, index_js_2.constructFrom)(date, 0);
        firstWeekOfYear.setFullYear(value, 0, 4);
        firstWeekOfYear.setHours(0, 0, 0, 0);
        return (0, index_js_1.startOfISOWeek)(firstWeekOfYear);
    }
}
exports.ISOWeekYearParser = ISOWeekYearParser;
