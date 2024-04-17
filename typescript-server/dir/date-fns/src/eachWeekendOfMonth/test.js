"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("eachWeekendOfMonth", () => {
    (0, vitest_1.it)("returns all weekends of the given month", () => {
        const result = (0, index_js_1.eachWeekendOfMonth)(new Date(2022, 1, 20));
        (0, vitest_1.expect)(result).toEqual([
            new Date(2022, 1, 5),
            new Date(2022, 1, 6),
            new Date(2022, 1, 12),
            new Date(2022, 1, 13),
            new Date(2022, 1, 19),
            new Date(2022, 1, 20),
            new Date(2022, 1, 26),
            new Date(2022, 1, 27),
        ]);
    });
    (0, vitest_1.it)("returns an empty asrray when the expected year is an Invalid Date", () => {
        const result = (0, index_js_1.eachWeekendOfMonth)(new Date(NaN));
        (0, vitest_1.expect)(result).toEqual([]);
    });
});
