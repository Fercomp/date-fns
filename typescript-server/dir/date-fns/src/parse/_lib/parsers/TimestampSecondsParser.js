"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimestampSecondsParser = void 0;
const index_js_1 = require("../../../constructFrom/index.js");
const Parser_js_1 = require("../Parser.js");
const utils_js_1 = require("../utils.js");
class TimestampSecondsParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 40;
        this.incompatibleTokens = "*";
    }
    parse(dateString) {
        return (0, utils_js_1.parseAnyDigitsSigned)(dateString);
    }
    set(date, _flags, value) {
        return [(0, index_js_1.constructFrom)(date, value * 1000), { timestampIsSet: true }];
    }
}
exports.TimestampSecondsParser = TimestampSecondsParser;
