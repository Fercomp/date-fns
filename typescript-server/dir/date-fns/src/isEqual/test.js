"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isEqual", () => {
    (0, vitest_1.it)("returns true if the given dates are equal", () => {
        const result = (0, index_js_1.isEqual)(new Date(1987, 1 /* Feb */, 11), new Date(1987, 1 /* Feb */, 11));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given dates are not equal", () => {
        const result = (0, index_js_1.isEqual)(new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isEqual)(new Date(1987, 1 /* Feb */, 11).getTime(), new Date(1987, 1 /* Feb */, 11).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.isEqual)(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.isEqual)(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.isEqual)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
