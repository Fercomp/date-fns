"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("min", () => {
    (0, vitest_1.it)("returns the earliest date", () => {
        const result = (0, index_js_1.min)([
            new Date(1989, 6 /* Jul */, 10),
            new Date(1987, 1 /* Feb */, 11),
        ]);
        (0, vitest_1.expect)(result).toEqual(new Date(1987, 1 /* Feb */, 11));
    });
    (0, vitest_1.it)("accepts array with more than 2 entries", () => {
        const result = (0, index_js_1.min)([
            new Date(1987, 1 /* Feb */, 11),
            new Date(1989, 6 /* Jul */, 10),
            new Date(1985, 6 /* Jul */, 2),
            new Date(1990, 0 /* Jan */, 1),
        ]);
        (0, vitest_1.expect)(result).toEqual(new Date(1985, 6 /* Jul */, 2));
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.min)([
            new Date(1989, 6 /* Jul */, 10).getTime(),
            new Date(1987, 1 /* Feb */, 11).getTime(),
        ]);
        (0, vitest_1.expect)(result).toEqual(new Date(1987, 1 /* Feb */, 11));
    });
    (0, vitest_1.it)("returns `Invalid Date` if any given date is invalid", () => {
        const result = (0, index_js_1.min)([
            new Date(1989, 6 /* Jul */, 10),
            new Date(NaN),
            new Date(1987, 1 /* Feb */, 11),
        ]);
        (0, vitest_1.expect)(isNaN(+result)).toBe(true);
    });
    (0, vitest_1.it)("returns `Invalid Date` for empty array", () => {
        const result = (0, index_js_1.min)([]);
        (0, vitest_1.expect)(isNaN(+result)).toBe(true);
    });
});
