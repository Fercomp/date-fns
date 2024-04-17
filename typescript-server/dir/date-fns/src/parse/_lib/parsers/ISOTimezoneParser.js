"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISOTimezoneParser = void 0;
const index_js_1 = require("../../../constructFrom/index.js");
const index_js_2 = require("../../../_lib/getTimezoneOffsetInMilliseconds/index.js");
const constants_js_1 = require("../constants.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
// Timezone (ISO-8601)
class ISOTimezoneParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 10;
        this.incompatibleTokens = ["t", "T", "X"];
    }
    parse(dateString, token) {
        switch (token) {
            case "x":
                return (0, utils_js_1.parseTimezonePattern)(constants_js_1.timezonePatterns.basicOptionalMinutes, dateString);
            case "xx":
                return (0, utils_js_1.parseTimezonePattern)(constants_js_1.timezonePatterns.basic, dateString);
            case "xxxx":
                return (0, utils_js_1.parseTimezonePattern)(constants_js_1.timezonePatterns.basicOptionalSeconds, dateString);
            case "xxxxx":
                return (0, utils_js_1.parseTimezonePattern)(constants_js_1.timezonePatterns.extendedOptionalSeconds, dateString);
            case "xxx":
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
exports.ISOTimezoneParser = ISOTimezoneParser;
