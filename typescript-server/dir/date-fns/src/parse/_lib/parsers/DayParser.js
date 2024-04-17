"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DayParser = void 0;
const index_js_1 = require("../../../setDay/index.js");
const Parser_js_1 = require("../Parser.js");
// Day of week
class DayParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 90;
        this.incompatibleTokens = ["D", "i", "e", "c", "t", "T"];
    }
    parse(dateString, token, match) {
        switch (token) {
            // Tue
            case "E":
            case "EE":
            case "EEE":
                return (match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting",
                }) ||
                    match.day(dateString, { width: "short", context: "formatting" }) ||
                    match.day(dateString, { width: "narrow", context: "formatting" }));
            // T
            case "EEEEE":
                return match.day(dateString, {
                    width: "narrow",
                    context: "formatting",
                });
            // Tu
            case "EEEEEE":
                return (match.day(dateString, { width: "short", context: "formatting" }) ||
                    match.day(dateString, { width: "narrow", context: "formatting" }));
            // Tuesday
            case "EEEE":
            default:
                return (match.day(dateString, { width: "wide", context: "formatting" }) ||
                    match.day(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    match.day(dateString, { width: "short", context: "formatting" }) ||
                    match.day(dateString, { width: "narrow", context: "formatting" }));
        }
    }
    validate(_date, value) {
        return value >= 0 && value <= 6;
    }
    set(date, _flags, value, options) {
        date = (0, index_js_1.setDay)(date, value, options);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
exports.DayParser = DayParser;
