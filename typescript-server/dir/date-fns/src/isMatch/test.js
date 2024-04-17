"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const index_js_2 = require("../locale/eo/index.js");
(0, vitest_1.describe)("isMatch", () => {
    (0, vitest_1.it)("accepts a dd-MM-yyyy format against 22-02-1998", () => {
        (0, vitest_1.expect)((0, index_js_1.isMatch)("22-02-1998", "dd-MM-yyyy")).toBe(true);
    });
    (0, vitest_1.it)("reject a yyyy-dd-MM format against 22-02-1998", () => {
        (0, vitest_1.expect)(!(0, index_js_1.isMatch)("22-02-1998", "yyyy-dd-MM")).toBe(true);
    });
    (0, vitest_1.it)("accepts a date & format with locale", () => {
        (0, vitest_1.expect)((0, index_js_1.isMatch)("28-a de februaro", "do 'de' MMMM", {
            locale: index_js_2.eo,
        })).toBe(true);
    });
});
