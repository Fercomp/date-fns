"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("formatRelative", () => {
    const baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900);
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 3 /* Apr */, 4);
        (0, vitest_1.expect)((0, index_js_1.formatRelative)(date.getTime(), baseDate.getTime())).toBe("04/04/2014");
    });
    (0, vitest_1.it)("before the last week", () => {
        const result = (0, index_js_1.formatRelative)(new Date(1986, 2 /* Mar */, 28, 16, 50), baseDate);
        (0, vitest_1.expect)(result).toBe("03/28/1986");
    });
    (0, vitest_1.it)("last week", () => {
        const result = (0, index_js_1.formatRelative)(new Date(1986, 3 /* Apr */, 1), baseDate);
        (0, vitest_1.expect)(result).toBe("last Tuesday at 12:00 AM");
    });
    (0, vitest_1.it)("yesterday", () => {
        const result = (0, index_js_1.formatRelative)(new Date(1986, 3 /* Apr */, 3, 22, 22), baseDate);
        (0, vitest_1.expect)(result).toBe("yesterday at 10:22 PM");
    });
    (0, vitest_1.it)("today", () => {
        const result = (0, index_js_1.formatRelative)(new Date(1986, 3 /* Apr */, 4, 16, 50), baseDate);
        (0, vitest_1.expect)(result).toBe("today at 4:50 PM");
    });
    (0, vitest_1.it)("tomorrow", () => {
        const result = (0, index_js_1.formatRelative)(new Date(1986, 3 /* Apr */, 5, 7, 30), baseDate);
        (0, vitest_1.expect)(result).toBe("tomorrow at 7:30 AM");
    });
    (0, vitest_1.it)("next week", () => {
        const result = (0, index_js_1.formatRelative)(new Date(1986, 3 /* Apr */, 6, 12, 0), baseDate);
        (0, vitest_1.expect)(result).toBe("Sunday at 12:00 PM");
    });
    (0, vitest_1.it)("after the next week", () => {
        const result = (0, index_js_1.formatRelative)(new Date(1986, 3 /* Apr */, 11, 16, 50), baseDate);
        (0, vitest_1.expect)(result).toBe("04/11/1986");
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("throws RangeError if the date isn't valid", () => {
            (0, vitest_1.expect)(index_js_1.formatRelative.bind(null, new Date(NaN), baseDate)).toThrow(RangeError);
        });
        (0, vitest_1.it)("throws RangeError if the base date isn't valid", () => {
            (0, vitest_1.expect)(index_js_1.formatRelative.bind(null, new Date(2017, 0 /* Jan */, 1), new Date(NaN))).toThrow(RangeError);
        });
        (0, vitest_1.it)("throws RangeError if both dates aren't valid", () => {
            (0, vitest_1.expect)(index_js_1.formatRelative.bind(null, new Date(NaN), new Date(NaN))).toThrow(RangeError);
        });
        (0, vitest_1.it)("handles dates before 100 AD", () => {
            const date = new Date(0);
            date.setFullYear(7, 11 /* Dec */, 31);
            date.setHours(0, 0, 0, 0);
            (0, vitest_1.expect)((0, index_js_1.formatRelative)(date, baseDate)).toBe("12/31/0007");
        });
    });
    (0, vitest_1.describe)("custom locale", () => {
        (0, vitest_1.it)("allows to pass a custom locale", () => {
            const customLocale = {
                localize: {
                    month: () => {
                        return "works";
                    },
                },
                formatLong: {
                    date: () => {
                        return "'It' MMMM";
                    },
                },
                formatRelative: () => {
                    return "P 'perfectly!'";
                },
            };
            const result = (0, index_js_1.formatRelative)(new Date(1986, 2 /* Mar */, 28, 16, 50), baseDate, {
                // @ts-expect-error - It's ok to have incomplete locale
                locale: customLocale,
            });
            (0, vitest_1.expect)(result).toBe("It works perfectly!");
        });
    });
});
