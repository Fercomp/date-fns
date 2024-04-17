"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalDayParser = void 0;
const index_js_1 = require("../../../setDay/index.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// Local day of week
class LocalDayParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 90;
        this.incompatibleTokens = [
            "y",
            "R",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "E",
            "i",
            "c",
            "t",
            "T",
        ];
    }
    parse(dateString, token, match, options) {
        const valueCallback = (value) => {
            // We want here floor instead of trunc, so we get -7 for value 0 instead of 0
            const wholeWeekDays = Math.floor((value - 1) / 7) * 7;
            return ((value + options.weekStartsOn + 6) % 7) + wholeWeekDays;
        };
        switch (token) {
            // 3
            case "e":
            case "ee": // 03
                return (0, utils_js_1.mapValue)((0, utils_js_1.parseNDigits)(token.length, dateString), valueCallback);
            // 3rd
            case "eo":
                return (0, utils_js_1.mapValue)(match.ordinalNumber(dateString, {
                    unit: "day",
                }), valueCallback);
            // Tue
            case "eee":
                return (match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting",
                }) ||
                    match.day(dateString, { width: "short", context: "formatting" }) ||
                    match.day(dateString, { width: "narrow", context: "formatting" }));
            // T
            case "eeeee":
                return match.day(dateString, {
                    width: "narrow",
                    context: "formatting",
                });
            // Tu
            case "eeeeee":
                return (match.day(dateString, { width: "short", context: "formatting" }) ||
                    match.day(dateString, { width: "narrow", context: "formatting" }));
            // Tuesday
            case "eeee":
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
exports.LocalDayParser = LocalDayParser;
