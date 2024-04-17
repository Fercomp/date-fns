"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isBefore", () => {
    (0, vitest_1.it)("returns true if the first date is before the second one", () => {
        const result = (0, index_js_1.isBefore)(new Date(1987, 1 /* Feb */, 11), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the first date is after the second one", () => {
        const result = (0, index_js_1.isBefore)(new Date(1989, 6 /* Jul */, 10), new Date(1987, 1 /* Feb */, 11));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the first date is equal to the second one", () => {
        const result = (0, index_js_1.isBefore)(new Date(1989, 6 /* Jul */, 10), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.isBefore)(new Date(1987, 1 /* Feb */, 11).getTime(), new Date(1989, 6 /* Jul */, 10).getTime());
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the first date is `Invalid Date`", () => {
        const result = (0, index_js_1.isBefore)(new Date(NaN), new Date(1989, 6 /* Jul */, 10));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the second date is `Invalid Date`", () => {
        const result = (0, index_js_1.isBefore)(new Date(1987, 1 /* Feb */, 11), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
    (0, vitest_1.it)("returns false if the both dates are `Invalid Date`", () => {
        const result = (0, index_js_1.isBefore)(new Date(NaN), new Date(NaN));
        (0, vitest_1.expect)(result).toBe(false);
    });
});
