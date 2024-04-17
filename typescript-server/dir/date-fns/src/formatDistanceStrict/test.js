"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("formatDistanceStrict", () => {
    (0, vitest_1.describe)("seconds", () => {
        (0, vitest_1.describe)("when no unit is set", () => {
            (0, vitest_1.it)("0 seconds", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 5), new Date(1986, 3, 4, 10, 32, 5));
                (0, vitest_1.expect)(result).toBe("0 seconds");
            });
            (0, vitest_1.it)("5 seconds", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 5));
                (0, vitest_1.expect)(result).toBe("5 seconds");
            });
        });
    });
    (0, vitest_1.describe)("minutes", () => {
        (0, vitest_1.it)("1 minute", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 33, 0));
            (0, vitest_1.expect)(result).toBe("1 minute");
        });
        (0, vitest_1.it)("n minutes", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 35, 0));
            (0, vitest_1.expect)(result).toBe("3 minutes");
        });
    });
    (0, vitest_1.describe)("hours", () => {
        (0, vitest_1.it)("1 hour", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 11, 32, 0));
            (0, vitest_1.expect)(result).toBe("1 hour");
        });
        (0, vitest_1.it)("n hours", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 13, 32, 0));
            (0, vitest_1.expect)(result).toBe("3 hours");
        });
    });
    (0, vitest_1.describe)("days", () => {
        (0, vitest_1.it)("1 day", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 5, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("1 day");
        });
        (0, vitest_1.it)("n days", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 7, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("3 days");
        });
    });
    (0, vitest_1.describe)("months", () => {
        (0, vitest_1.it)("1 month", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 4, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("1 month");
        });
        (0, vitest_1.it)("n months", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 6, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("3 months");
        });
    });
    (0, vitest_1.describe)("years", () => {
        (0, vitest_1.it)("returns `1 year` - see issue 2388", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(2015, 0, 2), new Date(2016, 0, 1));
            (0, vitest_1.expect)(result).toBe("1 year");
        });
        (0, vitest_1.it)("returns `2 years` - see issue 2388", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(2014, 0, 2), new Date(2016, 0, 1));
            (0, vitest_1.expect)(result).toBe("2 years");
        });
        (0, vitest_1.it)("1 year", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1987, 3, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("1 year");
        });
        (0, vitest_1.it)("n years", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1991, 3, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("5 years");
        });
    });
    (0, vitest_1.describe)("when the unit option is supplied", () => {
        (0, vitest_1.describe)("second", () => {
            (0, vitest_1.it)("0 seconds", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 0), { unit: "second" });
                (0, vitest_1.expect)(result).toBe("0 seconds");
            });
            (0, vitest_1.it)("5 seconds", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 5), { unit: "second" });
                (0, vitest_1.expect)(result).toBe("5 seconds");
            });
            (0, vitest_1.it)("120 seconds", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 34, 0), { unit: "second" });
                (0, vitest_1.expect)(result).toBe("120 seconds");
            });
        });
        (0, vitest_1.describe)("minute", () => {
            (0, vitest_1.it)("0 minutes", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 0), { unit: "minute" });
                (0, vitest_1.expect)(result).toBe("0 minutes");
            });
            (0, vitest_1.it)("5 minutes", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 37, 0), { unit: "minute" });
                (0, vitest_1.expect)(result).toBe("5 minutes");
            });
            (0, vitest_1.it)("120 minutes", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 12, 32, 0), { unit: "minute" });
                (0, vitest_1.expect)(result).toBe("120 minutes");
            });
        });
        (0, vitest_1.describe)("hour", () => {
            (0, vitest_1.it)("0 hours", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 0), { unit: "hour" });
                (0, vitest_1.expect)(result).toBe("0 hours");
            });
            (0, vitest_1.it)("5 hours", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 15, 32, 0), { unit: "hour" });
                (0, vitest_1.expect)(result).toBe("5 hours");
            });
            (0, vitest_1.it)("48 hours", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 6, 10, 32, 0), { unit: "hour" });
                (0, vitest_1.expect)(result).toBe("48 hours");
            });
        });
        (0, vitest_1.describe)("day", () => {
            (0, vitest_1.it)("0 days", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 0), { unit: "day" });
                (0, vitest_1.expect)(result).toBe("0 days");
            });
            (0, vitest_1.it)("5 days", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 9, 10, 32, 0), { unit: "day" });
                (0, vitest_1.expect)(result).toBe("5 days");
            });
            (0, vitest_1.it)("60 days", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 5, 3, 10, 32, 0), { unit: "day" });
                (0, vitest_1.expect)(result).toBe("60 days");
            });
        });
        (0, vitest_1.describe)("month", () => {
            (0, vitest_1.it)("0 months", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 0), { unit: "month" });
                (0, vitest_1.expect)(result).toBe("0 months");
            });
            (0, vitest_1.it)("5 months", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 7, 4, 10, 32, 0), { unit: "month" });
                (0, vitest_1.expect)(result).toBe("4 months");
            });
            (0, vitest_1.it)("12 months - see issue 2388", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 7, 4, 10, 32, 0), new Date(1985, 7, 4, 10, 32, 0), { unit: "month" });
                (0, vitest_1.expect)(result).toBe("12 months");
            });
            (0, vitest_1.it)("24 months", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1988, 3, 4, 10, 32, 0), { unit: "month" });
                (0, vitest_1.expect)(result).toBe("24 months");
            });
        });
        (0, vitest_1.describe)("year", () => {
            (0, vitest_1.it)("0 years", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 0), { unit: "year" });
                (0, vitest_1.expect)(result).toBe("0 years");
            });
            (0, vitest_1.it)("5 years", () => {
                const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1991, 3, 4, 15, 32, 0), { unit: "year" });
                (0, vitest_1.expect)(result).toBe("5 years");
            });
        });
    });
    (0, vitest_1.it)("accepts timestamps", () => {
        const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0).getTime(), new Date(1986, 3, 4, 11, 32, 0).getTime());
        (0, vitest_1.expect)(result).toBe("1 hour");
    });
    (0, vitest_1.describe)("when the addSuffix option is true", () => {
        (0, vitest_1.it)("adds a past suffix", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 25), { addSuffix: true });
            (0, vitest_1.expect)(result).toBe("25 seconds ago");
        });
        (0, vitest_1.it)("adds a future suffix", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 11, 32, 0), new Date(1986, 3, 4, 10, 32, 0), { addSuffix: true });
            (0, vitest_1.expect)(result).toBe("in 1 hour");
        });
    });
    (0, vitest_1.describe)("when the roundingMethod option is supplied", () => {
        (0, vitest_1.it)('default is "round"', () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 33, 59));
            (0, vitest_1.expect)(result).toBe("2 minutes");
        });
        (0, vitest_1.it)('"floor"', () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 33, 59), { roundingMethod: "floor" });
            (0, vitest_1.expect)(result).toBe("1 minute");
        });
        (0, vitest_1.it)('"ceil"', () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 33, 1), { roundingMethod: "ceil" });
            (0, vitest_1.expect)(result).toBe("2 minutes");
        });
        (0, vitest_1.it)('"round" (down)', () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 33, 29), { roundingMethod: "round" });
            (0, vitest_1.expect)(result).toBe("1 minute");
        });
        (0, vitest_1.it)('"round" (up)', () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 33, 30), { roundingMethod: "round" });
            (0, vitest_1.expect)(result).toBe("2 minutes");
        });
    });
    (0, vitest_1.describe)("custom locale", () => {
        (0, vitest_1.it)("can be passed to the function", () => {
            const formatDistance = (token, count, options) => {
                (0, vitest_1.expect)(token).toBe("xSeconds");
                (0, vitest_1.expect)(count).toBe(25);
                (0, vitest_1.expect)(options.addSuffix).toBe(true);
                (0, vitest_1.expect)(options.comparison).toBeLessThan(0);
                return "It works!";
            };
            const customLocale = {
                formatDistance,
            };
            const result = (0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 3, 4, 10, 32, 25), {
                addSuffix: true,
                locale: customLocale,
            });
            (0, vitest_1.expect)(result).toBe("It works!");
        });
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("detects unit correctly for short months", () => {
            const result = (0, index_js_1.formatDistanceStrict)(new Date(2018, 1 /* Feb */, 1), new Date(2018, 2 /* Mar */, 1));
            (0, vitest_1.expect)(result).toBe("28 days");
        });
    });
    (0, vitest_1.it)("throws `RangeError` if the first date is `Invalid Date`", () => {
        (0, vitest_1.expect)(index_js_1.formatDistanceStrict.bind(null, new Date(NaN), new Date(1986, 3, 7, 10, 32, 0))).toThrow(RangeError);
    });
    (0, vitest_1.it)("throws `RangeError` if the second date is `Invalid Date`", () => {
        (0, vitest_1.expect)(index_js_1.formatDistanceStrict.bind(null, new Date(1986, 3, 4, 10, 32, 0), new Date(NaN))).toThrow(RangeError);
    });
    (0, vitest_1.it)("throws `RangeError` if the both dates are `Invalid Date`", () => {
        (0, vitest_1.expect)(index_js_1.formatDistanceStrict.bind(null, new Date(NaN), new Date(NaN))).toThrow(RangeError);
    });
});
