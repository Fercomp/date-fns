"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampMillisecondsParser = void 0;
const index_js_1 = require("../../../constructFrom/index.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class TimestampMillisecondsParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 20;
        this.incompatibleTokens = "*";
    }
    parse(dateString) {
        return (0, utils_js_1.parseAnyDigitsSigned)(dateString);
    }
    set(date, _flags, value) {
        return [(0, index_js_1.constructFrom)(date, value), { timestampIsSet: true }];
    }
}
exports.TimestampMillisecondsParser = TimestampMillisecondsParser;
