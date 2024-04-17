"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const format_1 = require("../../format");
const index_1 = require("./index");
(0, vitest_1.describe)("fr locale", () => {
    (0, vitest_1.describe)("format edge case with day ordinal and long month format", () => {
        // see https://github.com/date-fns/date-fns/issues/1391
        (0, vitest_1.it)("returns ordinal for the first day of the month", function () {
            [
                ["do", "1er"],
                ["do M", "1er 1"],
                ["do MMM", "1er janv."],
                ["do MMMM", "1er janvier"],
            ].forEach(([formatString, expectedResult]) => {
                const result = (0, format_1.format)(new Date(2017, 0 /* Jan */, 1), formatString, {
                    locale: index_1.fr,
                });
                (0, vitest_1.expect)(result).toBe(expectedResult);
            });
        });
        (0, vitest_1.it)("returns cardinal for days of the month greater than one", function () {
            [
                ["do", "2ème"],
                ["do M", "2ème 1"],
                ["do MMM", "2 janv."],
                ["do MMMM", "2 janvier"],
            ].forEach(([formatString, expectedResult]) => {
                const result = (0, format_1.format)(new Date(2017, 0 /* Jan */, 2), formatString, {
                    locale: index_1.fr,
                });
                (0, vitest_1.expect)(result).toBe(expectedResult);
            });
        });
    });
});
