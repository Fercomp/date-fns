"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Parser = void 0;
const Setter_js_1 = require("./Setter.js");
class Parser {
    run(dateString, token, match, options) {
        const result = this.parse(dateString, token, match, options);
        if (!result) {
            return null;
        }
        return {
            setter: new Setter_js_1.ValueSetter(result.value, this.validate, this.set, this.priority, this.subPriority),
            rest: result.rest,
        };
    }
    validate(_utcDate, _value, _options) {
        return true;
    }
}
exports.Parser = Parser;
