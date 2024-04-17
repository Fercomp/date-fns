"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalWeekYearParser = void 0;
const index_js_1 = require("../../../getWeekYear/index.js");
const index_js_2 = require("../../../startOfWeek/index.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// Local week-numbering year
class LocalWeekYearParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 130;
        this.incompatibleTokens = [
            "y",
            "R",
            "u",
            "Q",
            "q",
            "M",
            "L",
            "I",
            "d",
            "D",
            "i",
            "t",
            "T",
        ];
    }
    parse(dateString, token, match) {
        const valueCallback = (year) => ({
            year,
            isTwoDigitYear: token === "YY",
        });
        switch (token) {
            case "Y":
                return (0, utils_js_1.mapValue)((0, utils_js_1.parseNDigits)(4, dateString), valueCallback);
            case "Yo":
                return (0, utils_js_1.mapValue)(match.ordinalNumber(dateString, {
                    unit: "year",
                }), valueCallback);
            default:
                return (0, utils_js_1.mapValue)((0, utils_js_1.parseNDigits)(token.length, dateString), valueCallback);
        }
    }
    validate(_date, value) {
        return value.isTwoDigitYear || value.year > 0;
    }
    set(date, flags, value, options) {
        const currentYear = (0, index_js_1.getWeekYear)(date, options);
        if (value.isTwoDigitYear) {
            const normalizedTwoDigitYear = (0, utils_js_1.normalizeTwoDigitYear)(value.year, currentYear);
            date.setFullYear(normalizedTwoDigitYear, 0, options.firstWeekContainsDate);
            date.setHours(0, 0, 0, 0);
            return (0, index_js_2.startOfWeek)(date, options);
        }
        const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setFullYear(year, 0, options.firstWeekContainsDate);
        date.setHours(0, 0, 0, 0);
        return (0, index_js_2.startOfWeek)(date, options);
    }
}
exports.LocalWeekYearParser = LocalWeekYearParser;
