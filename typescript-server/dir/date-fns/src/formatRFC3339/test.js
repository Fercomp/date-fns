"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sinon_1 = __importDefault(require("sinon"));
const index_js_1 = require("./index.js");
const index_js_2 = require("../_lib/test/index.js");
(0, vitest_1.describe)("formatRFC3339", () => {
    (0, vitest_1.it)("formats RFC-3339 date string", () => {
        const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
        (0, vitest_1.expect)((0, index_js_1.formatRFC3339)(date)).toBe(`2019-03-03T19:00:52${(0, index_js_2.generateOffset)(date)}`);
        const getTimezoneOffsetStub = sinon_1.default.stub(Date.prototype, "getTimezoneOffset");
        getTimezoneOffsetStub.returns(0);
        (0, vitest_1.expect)((0, index_js_1.formatRFC3339)(date)).toBe("2019-03-03T19:00:52Z");
        getTimezoneOffsetStub.returns(480);
        (0, vitest_1.expect)((0, index_js_1.formatRFC3339)(date)).toBe("2019-03-03T19:00:52-08:00");
        getTimezoneOffsetStub.restore();
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
        const time = date.getTime();
        (0, vitest_1.expect)((0, index_js_1.formatRFC3339)(time)).toBe(`2019-10-04T12:30:13${(0, index_js_2.generateOffset)(date)}`);
    });
    (0, vitest_1.it)("allows to specify digits of second fractions", () => {
        const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);
        (0, vitest_1.expect)((0, index_js_1.formatRFC3339)(date, { fractionDigits: 3 })).toBe(`2019-12-11T01:00:00.789${(0, index_js_2.generateOffset)(date)}`);
    });
    (0, vitest_1.it)("works when ms < 100", () => {
        const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 12);
        (0, vitest_1.expect)((0, index_js_1.formatRFC3339)(date, { fractionDigits: 2 })).toBe(`2019-12-11T01:00:00.01${(0, index_js_2.generateOffset)(date)}`);
    });
    (0, vitest_1.it)("throws RangeError if the time value is invalid", () => {
        (0, vitest_1.expect)(index_js_1.formatRFC3339.bind(null, new Date(NaN))).toThrow(RangeError);
    });
});
