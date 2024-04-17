"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EraParser = void 0;
const Parser_js_1 = require("../Parser.js");
class EraParser extends Parser_js_1.Parser {
    constructor() {
        super(...arguments);
        this.priority = 140;
        this.incompatibleTokens = ["R", "u", "t", "T"];
    }
    parse(dateString, token, match) {
        switch (token) {
            // AD, BC
            case "G":
            case "GG":
            case "GGG":
                return (match.era(dateString, { width: "abbreviated" }) ||
                    match.era(dateString, { width: "narrow" }));
            // A, B
            case "GGGGG":
                return match.era(dateString, { width: "narrow" });
            // Anno Domini, Before Christ
            case "GGGG":
            default:
                return (match.era(dateString, { width: "wide" }) ||
                    match.era(dateString, { width: "abbreviated" }) ||
                    match.era(dateString, { width: "narrow" }));
        }
    }
    set(date, flags, value) {
        flags.era = value;
        date.setFullYear(value, 0, 1);
        date.setHours(0, 0, 0, 0);
        return date;
    }
}
exports.EraParser = EraParser;
