"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utc_1 = require("@date-fns/utc");
const sinon_1 = __importDefault(require("sinon"));
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isThisYear", () => {
    let clock;
    (0, vitest_1.beforeEach)(() => {
        clock = sinon_1.default.useFakeTimers(new Date(2014, 0 /* Jan */, 1).getTime());
    });
    (0, vitest_1.afterEach)(() => {
        clock.restore();
    });
    (0, vitest_1.it)("returns true if the given date and the current date have the same year", () => {
        const date = new Date(2014, 6 /* Jul */, 2);
        (0, vitest_1.expect)((0, index_js_1.isThisYear)(date)).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date and the current date have different years", () => {
        const date = new Date(2015, 6 /* Jul */, 2);
        (0, vitest_1.expect)((0, index_js_1.isThisYear)(date)).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 6 /* Jul */, 2).getTime();
        (0, vitest_1.expect)((0, index_js_1.isThisYear)(date)).toBe(true);
    });
    (0, vitest_1.it)("respects date extensions", () => {
        (0, vitest_1.expect)((0, index_js_1.isThisYear)(new utc_1.UTCDate(+new Date(2014, 0 /* Jan */, 1)))).toBe(true);
    });
});
