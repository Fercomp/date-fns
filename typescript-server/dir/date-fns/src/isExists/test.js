"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("isValid", () => {
    (0, vitest_1.it)("returns true if the given date is valid", () => {
        const result = (0, index_js_1.isExists)(2018, 0, 31);
        (0, vitest_1.expect)(result).toBe(true);
    });
    (0, vitest_1.it)("returns false if the given date is invalid", () => {
        const result = (0, index_js_1.isExists)(2018, 1 /* Feb */, 31);
        (0, vitest_1.expect)(result).toBe(false);
    });
});
