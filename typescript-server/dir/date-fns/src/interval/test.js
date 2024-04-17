"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("Interval", () => {
    (0, vitest_1.it)("exposes start and end", () => {
        const result = (0, index_js_1.interval)(new Date(2000, 0), new Date(2023, 0));
        (0, vitest_1.expect)(result.start).toEqual(new Date(2000, 0));
        (0, vitest_1.expect)(result.end).toEqual(new Date(2023, 0));
    });
    (0, vitest_1.it)("normalizes the dates", () => {
        const result = (0, index_js_1.interval)(+new Date(2000, 0), new Date(2023, 0).toISOString());
        (0, vitest_1.expect)(result.start).toEqual(new Date(2000, 0));
        (0, vitest_1.expect)(result.end).toEqual(new Date(2023, 0));
    });
    (0, vitest_1.it)("throws an error if one of the arguments is invalid", () => {
        (0, vitest_1.expect)(() => {
            (0, index_js_1.interval)(new Date(2000, 0), new Date(NaN));
        }).toThrow(new TypeError("End date is invalid"));
        (0, vitest_1.expect)(() => {
            (0, index_js_1.interval)(new Date(NaN), new Date(2000, 0));
        }).toThrow(new TypeError("Start date is invalid"));
    });
    (0, vitest_1.it)("throws an error if the interval is not positive", () => {
        // Should be ok
        (0, index_js_1.interval)(new Date(2023, 0), new Date(2000, 0));
        (0, vitest_1.expect)(() => {
            (0, index_js_1.interval)(new Date(2023, 0), new Date(2000, 0), {
                assertPositive: true,
            });
        }).toThrow(new TypeError("End date must be after start date"));
        // Should be ok too
        (0, index_js_1.interval)(new Date(2000, 0), new Date(2000, 0), {
            assertPositive: true,
        });
    });
});
