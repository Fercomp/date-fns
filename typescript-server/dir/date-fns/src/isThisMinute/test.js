"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utc_1 = require("@date-fns/utc");
const sinon_1 = __importDefault(require("sinon"));
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isThisMinute", () => {
    let clock;
    (0, vitest_1.beforeEach)(() => {
        clock = sinon_1.default.useFakeTimers(new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500).getTime());
    });
    (0, vitest_1.afterEach)(() => {
        clock.restore();
    });
    (0, vitest_1.it)("returns true if the given date and the current date have the same minute", () => {
        const date = new Date(2014, 8 /* Sep */, 25, 18, 30);
        (0, vitest_1.expect)((0, index_js_1.isThisMinute)(date)).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date and the current date have different minutes", () => {
        const date = new Date(2014, 8 /* Sep */, 25, 18, 31);
        (0, vitest_1.expect)((0, index_js_1.isThisMinute)(date)).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 8 /* Sep */, 25, 18, 30, 30).getTime();
        (0, vitest_1.expect)((0, index_js_1.isThisMinute)(date)).toBe(true);
    });
    (0, vitest_1.it)("respects date extensions", () => {
        (0, vitest_1.expect)((0, index_js_1.isThisMinute)(new utc_1.UTCDate(+new Date(2014, 8 /* Sep */, 25, 18, 30, 15, 500)))).toBe(true);
    });
});
