"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const _1 = require(".");
(0, vitest_1.describe)("getRoundingMethod", () => {
    (0, vitest_1.it)("rounds with truncate by default", () => {
        (0, vitest_1.expect)((0, _1.getRoundingMethod)(undefined)(2.9)).toBe(2);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)(undefined)(1.5)).toBe(1);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)(undefined)(-3.9)).toBe(-3);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)(undefined)(-14.1)).toBe(-14);
    });
    (0, vitest_1.it)('allows to specify "trunc" rounding method', () => {
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("trunc")(2.9)).toBe(2);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("trunc")(1.5)).toBe(1);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("trunc")(-3.9)).toBe(-3);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("trunc")(-14.1)).toBe(-14);
    });
    (0, vitest_1.it)('allows to specify "ceil" rounding method', () => {
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("ceil")(2.9)).toBe(3);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("ceil")(1.5)).toBe(2);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("ceil")(-3.9)).toBe(-3);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("ceil")(-14.1)).toBe(-14);
    });
    (0, vitest_1.it)('allows to specify "floor" rounding method', () => {
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("floor")(2.9)).toBe(2);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("floor")(1.5)).toBe(1);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("floor")(-3.9)).toBe(-4);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("floor")(-14.1)).toBe(-15);
    });
    (0, vitest_1.it)('allows to specify "round" rounding method', () => {
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("round")(2.9)).toBe(3);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("round")(1.5)).toBe(2);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("round")(-3.9)).toBe(-4);
        (0, vitest_1.expect)((0, _1.getRoundingMethod)("round")(-14.1)).toBe(-14);
    });
    (0, vitest_1.it)("prevents negative zero", () => {
        (0, vitest_1.expect)(!isNegativeZero((0, _1.getRoundingMethod)("trunc")(-0.01))).toBe(true);
        (0, vitest_1.expect)(!isNegativeZero((0, _1.getRoundingMethod)("floor")(-0.0))).toBe(true);
        (0, vitest_1.expect)(!isNegativeZero((0, _1.getRoundingMethod)("ceil")(-0.9))).toBe(true);
        (0, vitest_1.expect)(!isNegativeZero((0, _1.getRoundingMethod)("round")(-0.1))).toBe(true);
    });
});
function isNegativeZero(x) {
    return x === 0 && 1 / x < 0;
}
