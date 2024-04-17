"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISODayParser = void 0;
const index_js_1 = require("../../../setISODay/index.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// ISO day of week
class ISODayParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 90;
        this.incompatibleTokens = [
            "y",
            "Y",
            "u",
            "q",
            "Q",
            "M",
            "L",
            "w",
            "d",
            "D",
            "E",
            "e",
            "c",
            "t",
            "T",
        ];
    }
    parse(dateString, token, match) {
        const valueCallback = (value) => {
            if (value === 0) {
                return 7;
            }
            return value;
        };
        switch (token) {
            // 2
            case "i":
            case "ii": // 02
                return (0, utils_js_1.parseNDigits)(token.length, dateString);
            // 2nd
            case "io":
                return match.ordinalNumber(dateString, { unit: "day" });
            // Tue
            case "iii":
                return (0, utils_js_1.mapValue)(match.day(dateString, {
                    width: "abbreviated",
                    context: "formatting",
                }) ||
                    match.day(dateString, {
                        width: "short",
                        context: "formatting",
                    }) ||
                    match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                    }), valueCallback);
            // T
            case "iiiii":
                return (0, utils_js_1.mapValue)(match.day(dateString, {
                    width: "narrow",
                    context: "formatting",
                }), valueCallback);
            // Tu
            case "iiiiii":
                return (0, utils_js_1.mapValue)(match.day(dateString, {
                    width: "short",
                    context: "formatting",
                }) ||
                    match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                    }), valueCallback);
            // Tuesday
            case "iiii":
            default:
                return (0, utils_js_1.mapValue)(match.day(dateString, {
                    width: "wide",
                    context: "formatting",
                }) ||
                    match.day(dateString, {
                        width: "abbreviated",
                        context: "formatting",
                    }) ||
                    match.day(dateString, {
                        width: "short",
                        context: "formatting",
                    }) ||
                    match.day(dateString, {
                        width: "narrow",
                        context: "formatting",
                    }), valueCallback);
        }
    }
    validate(_date, value) {
        return value >= 1 && value <= 7;
    }
    set(date, _flags, value) {
        date = (0, index_js_1.setISODay)(date, value);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
exports.ISODayParser = ISODayParser;
