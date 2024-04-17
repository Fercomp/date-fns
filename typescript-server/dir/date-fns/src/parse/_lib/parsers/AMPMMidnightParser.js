"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AMPMMidnightParser = void 0;
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class AMPMMidnightParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 80;
        this.incompatibleTokens = ["a", "B", "H", "k", "t", "T"];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "b":
            case "bb":
            case "bbb":
                return (match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting",
                }) ||
                    match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                    }));
            case "bbbbb":
                return match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting",
                });
            case "bbbb":
            default:
                return (match.dayPeriod(dateString, {
                    width: "wide",
                    context: "formatting",
                }) ||
                    match.dayPeriod(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                    }));
        }
    }
    set(date, _flags, value) {
        date.setHours((0, utils_js_1.dayPeriodEnumToHours)(value), 0, 0, 0);
        return date;
    }
}
exports.AMPMMidnightParser = AMPMMidnightParser;
