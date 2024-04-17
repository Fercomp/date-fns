"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sinon_1 = __importDefault(require("sinon"));
const index_js_1 = require("./index.js");
const index_js_2 = require("../_lib/test/index.js");
(0, vitest_1.describe)("formatISO", () => {
    (0, vitest_1.it)("formats ISO-8601 extended format", () => {
        const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
        const tzOffsetExtended = (0, index_js_2.generateOffset)(date);
        (0, vitest_1.expect)((0, index_js_1.formatISO)(date)).toBe(`2019-03-03T19:00:52${tzOffsetExtended}`);
        const getTimezoneOffsetStub = sinon_1.default.stub(Date.prototype, "getTimezoneOffset");
        getTimezoneOffsetStub.returns(480);
        const tzNegativeOffsetExtended = (0, index_js_2.generateOffset)(date);
        (0, vitest_1.expect)((0, index_js_1.formatISO)(date)).toBe(`2019-03-03T19:00:52${tzNegativeOffsetExtended}`);
        getTimezoneOffsetStub.returns(0);
        const tzZOffsetExtended = (0, index_js_2.generateOffset)(date);
        (0, vitest_1.expect)((0, index_js_1.formatISO)(date)).toBe(`2019-03-03T19:00:52${tzZOffsetExtended}`);
        getTimezoneOffsetStub.restore();
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime();
        const tzOffsetExtended = (0, index_js_2.generateOffset)(new Date(date));
        (0, vitest_1.expect)((0, index_js_1.formatISO)(date)).toBe(`2019-03-03T19:00:52${tzOffsetExtended}`);
    });
    (0, vitest_1.it)("formats ISO-8601 basic format", () => {
        const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
        const tzOffsetBasic = (0, index_js_2.generateOffset)(date);
        (0, vitest_1.expect)((0, index_js_1.formatISO)(date, { format: "basic" })).toBe(`20191004T123013${tzOffsetBasic}`);
    });
    (0, vitest_1.it)("formats only date", () => {
        const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);
        (0, vitest_1.expect)((0, index_js_1.formatISO)(date, { representation: "date", format: "extended" })).toBe("2019-12-11");
        (0, vitest_1.expect)((0, index_js_1.formatISO)(date, { representation: "date", format: "basic" })).toBe("20191211");
    });
    (0, vitest_1.it)("formats only time", () => {
        const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
        const tzOffset = (0, index_js_2.generateOffset)(date);
        (0, vitest_1.expect)((0, index_js_1.formatISO)(date, { representation: "time", format: "extended" })).toBe(`19:00:52${tzOffset}`);
        (0, vitest_1.expect)((0, index_js_1.formatISO)(date, { representation: "time", format: "basic" })).toBe(`190052${tzOffset}`);
    });
    (0, vitest_1.it)("throws RangeError if the time value is invalid", () => {
        (0, vitest_1.expect)(index_js_1.formatISO.bind(null, new Date(NaN))).toThrow(RangeError);
    });
});
