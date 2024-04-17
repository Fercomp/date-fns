"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AMPMParser = void 0;
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class AMPMParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 80;
        this.incompatibleTokens = ["b", "B", "H", "k", "t", "T"];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "a":
            case "aa":
            case "aaa":
                return (match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting",
                }) ||
                    match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                    }));
            case "aaaaa":
                return match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting",
                });
            case "aaaa":
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
exports.AMPMParser = AMPMParser;
