"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
// Before Node version 13.0.0, only the locale data for en-US is available by default.
const hasFullICU = () => {
    try {
        const january = new Date(9e8);
        const spanish = new Intl.DateTimeFormat("es", { month: "long" });
        return spanish.format(january) === "enero";
    }
    catch (err) {
        return false;
    }
};
const fullICUOnly = hasFullICU() ? vitest_1.it : vitest_1.it.skip;
const getOperationSystemLocale = () => {
    // https://stackoverflow.com/questions/46072248/node-js-how-to-detect-user-language/46072415
    return Intl.DateTimeFormat().resolvedOptions().locale;
};
(0, vitest_1.describe)("intlFormat", () => {
    (0, vitest_1.describe)("formats date", () => {
        fullICUOnly("should work without format's options and locale's options", () => {
            const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
            const result = (0, index_js_1.intlFormat)(date);
            const localeResult = (0, index_js_1.intlFormat)(date, {
                locale: getOperationSystemLocale(),
            });
            (0, vitest_1.expect)(result).toBe(localeResult);
        });
        fullICUOnly("should work with only format's options", () => {
            const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
            const formatOptions = {
                year: "numeric",
                month: "numeric",
                day: "numeric",
                hour: "numeric",
                minute: "numeric",
                second: "numeric",
                hour12: false,
                timeZone: "America/Los_Angeles",
            };
            const result = (0, index_js_1.intlFormat)(date, formatOptions);
            const localeResult = (0, index_js_1.intlFormat)(date, formatOptions, {
                locale: getOperationSystemLocale(),
            });
            (0, vitest_1.expect)(result).toBe(localeResult);
        });
        fullICUOnly("should work with only locale's options", () => {
            const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
            // Korean uses year-month-day order
            const localeOptions = {
                locale: "ko-KR",
            };
            const result = (0, index_js_1.intlFormat)(date, localeOptions);
            (0, vitest_1.expect)(result).toBe("2019. 10. 4.");
        });
        fullICUOnly("should work with format's options and locale's options", () => {
            const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
            const formatOptions = {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            };
            const localeOptions = {
                locale: "de-DE",
            };
            const result = (0, index_js_1.intlFormat)(date, formatOptions, localeOptions);
            (0, vitest_1.expect)(result).toBe("Freitag, 4. Oktober 2019");
        });
    });
    (0, vitest_1.it)("throws RangeError if the date value is invalid", () => {
        (0, vitest_1.expect)(() => (0, index_js_1.intlFormat)(new Date(NaN))).toThrow(RangeError);
    });
});
