"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DateToSystemTimezoneSetter = exports.ValueSetter = exports.Setter = void 0;
const index_js_1 = require("../../transpose/index.js");
const index_js_2 = require("../../constructFrom/index.js");
const TIMEZONE_UNIT_PRIORITY = 10;
class Setter {
    constructor() {
        this.subPriority = 0;
    }
    validate(_utcDate, _options) {
        return true;
    }
}
exports.Setter = Setter;
class ValueSetter extends Setter {
    constructor(value, validateValue, setValue, priority, subPriority) {
        super();
        this.value = value;
        this.validateValue = validateValue;
        this.setValue = setValue;
        this.priority = priority;
        if (subPriority) {
            this.subPriority = subPriority;
        }
    }
    validate(date, options) {
        return this.validateValue(date, this.value, options);
    }
    set(date, flags, options) {
        return this.setValue(date, flags, this.value, options);
    }
}
exports.ValueSetter = ValueSetter;
class DateToSystemTimezoneSetter extends Setter {
    constructor() {
        super(...arguments);
        this.priority = TIMEZONE_UNIT_PRIORITY;
        this.subPriority = -1;
    }
    set(date, flags) {
        if (flags.timestampIsSet)
            return date;
        return (0, index_js_2.constructFrom)(date, (0, index_js_1.transpose)(date, Date));
    }
}
exports.DateToSystemTimezoneSetter = DateToSystemTimezoneSetter;
