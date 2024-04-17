"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StandAloneLocalDayParser = void 0;
const index_js_1 = require("../../../setDay/index.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// Stand-alone local day of week
class StandAloneLocalDayParser extends Parser_js_1.Parser {
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
            "e",
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
            case "c":
            case "cc": // 03
                return (0, utils_js_1.mapValue)((0, utils_js_1.parseNDigits)(token.length, dateString), valueCallback);
            // 3rd
            case "co":
                return (0, utils_js_1.mapValue)(match.ordinalNumber(dateString, {
                    unit: "day",
                }), valueCallback);
            // Tue
            case "ccc":
                return (match.day(dateString, {
                    width: "abbreviated",
                    context: "standalone",
                }) ||
                    match.day(dateString, { width: "short", context: "standalone" }) ||
                    match.day(dateString, { width: "narrow", context: "standalone" }));
            // T
            case "ccccc":
                return match.day(dateString, {
                    width: "narrow",
                    context: "standalone",
                });
            // Tu
            case "cccccc":
                return (match.day(dateString, { width: "short", context: "standalone" }) ||
                    match.day(dateString, { width: "narrow", context: "standalone" }));
            // Tuesday
            case "cccc":
            default:
                return (match.day(dateString, { width: "wide", context: "standalone" }) ||
                    match.day(dateString, {
                        width: "abbreviated",
                        context: "standalone",
                    }) ||
                    match.day(dateString, { width: "short", context: "standalone" }) ||
                    match.day(dateString, { width: "narrow", context: "standalone" }));
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
exports.StandAloneLocalDayParser = StandAloneLocalDayParser;
