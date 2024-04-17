"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sinon_1 = __importDefault(require("sinon"));
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isPast", () => {
    let clock;
    (0, vitest_1.beforeEach)(() => {
        clock = sinon_1.default.useFakeTimers(new Date(2014, 8 /* Sep */, 25).getTime());
    });
    (0, vitest_1.afterEach)(() => {
        clock.restore();
    });
    (0, vitest_1.it)("returns true if the given date is in the past", () => {
        const result = (0, index_js_1.isPast)(new Date(2014, 6 /* Jul */, 2));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is in the future", () => {
        const result = (0, index_js_1.isPast)(new Date(2014, 11 /* Dec */, 31));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the given date is now", () => {
        const result = (0, index_js_1.isPast)(new Date(2014, 8 /* Sep */, 25));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isPast)(new Date(2014, 6 /* Jul */, 2).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
});
