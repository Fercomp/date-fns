"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayPeriodParser = void 0;
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// in the morning, in the afternoon, in the evening, at night
class DayPeriodParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 80;
        this.incompatibleTokens = ["a", "b", "t", "T"];
    }
    parse(dateString, token, match) {
        switch (token) {
            case "B":
            case "BB":
            case "BBB":
                return (match.dayPeriod(dateString, {
                    width: "abbreviated",
                    context: "formatting",
                }) ||
                    match.dayPeriod(dateString, {
                        width: "narrow",
                        context: "formatting",
                    }));
            case "BBBBB":
                return match.dayPeriod(dateString, {
                    width: "narrow",
                    context: "formatting",
                });
            case "BBBB":
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
exports.DayPeriodParser = DayPeriodParser;
