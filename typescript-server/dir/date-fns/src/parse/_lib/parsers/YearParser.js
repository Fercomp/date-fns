"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YearParser = void 0;
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_Patterns
// | Year     |     y | yy |   yyy |  yyyy | yyyyy |
// |----------|-------|----|-------|-------|-------|
// | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
// | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
// | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
// | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
// | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |
class YearParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 130;
        this.incompatibleTokens = ["Y", "R", "u", "w", "I", "i", "e", "c", "t", "T"];
    }
    parse(dateString, token, match) {
        const valueCallback = (year) => ({
            year,
            isTwoDigitYear: token === "yy",
        });
        switch (token) {
            case "y":
                return (0, utils_js_1.mapValue)((0, utils_js_1.parseNDigits)(4, dateString), valueCallback);
            case "yo":
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
    set(date, flags, value) {
        const currentYear = date.getFullYear();
        if (value.isTwoDigitYear) {
            const normalizedTwoDigitYear = (0, utils_js_1.normalizeTwoDigitYear)(value.year, currentYear);
            date.setFullYear(normalizedTwoDigitYear, 0, 1);
            date.setHours(0, 0, 0, 0);
            return date;
        }
        const year = !("era" in flags) || flags.era === 1 ? value.year : 1 - value.year;
        date.setFullYear(year, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
exports.YearParser = YearParser;
