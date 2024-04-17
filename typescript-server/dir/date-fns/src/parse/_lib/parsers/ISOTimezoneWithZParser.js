"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISOTimezoneWithZParser = void 0;
const index_js_1 = require("../../../constructFrom/index.js");
const index_js_2 = require("../../../_lib/getTimezoneOffsetInMilliseconds/index.js");
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// Timezone (ISO-8601. +00:00 is `'Z'`)
class ISOTimezoneWithZParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 10;
        this.incompatibleTokens = ["t", "T", "x"];
    }
    parse(dateString, token) {
        switch (token) {
            case "X":
                return (0, utils_js_1.parseTimezonePattern)(constants_js_1.timezonePatterns.basicOptionalMinutes, dateString);
            case "XX":
                return (0, utils_js_1.parseTimezonePattern)(constants_js_1.timezonePatterns.basic, dateString);
            case "XXXX":
                return (0, utils_js_1.parseTimezonePattern)(constants_js_1.timezonePatterns.basicOptionalSeconds, dateString);
            case "XXXXX":
                return (0, utils_js_1.parseTimezonePattern)(constants_js_1.timezonePatterns.extendedOptionalSeconds, dateString);
            case "XXX":
            default:
                return (0, utils_js_1.parseTimezonePattern)(constants_js_1.timezonePatterns.extended, dateString);
        }
    }
    set(date, flags, value) {
        if (flags.timestampIsSet)
            return date;
        return (0, index_js_1.constructFrom)(date, date.getTime() - (0, index_js_2.getTimezoneOffsetInMilliseconds)(date) - value);
    }
}
exports.ISOTimezoneWithZParser = ISOTimezoneWithZParser;
