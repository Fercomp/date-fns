"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("intlFormatDistance", () => {
    (0, vitest_1.describe)("with default values", () => {
        (0, vitest_1.describe)("works with same dates", () => {
            (0, vitest_1.it)("outputs `now`", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 5, 10, 30, 0));
                (0, vitest_1.expect)(result).toBe("now");
            });
        });
        (0, vitest_1.describe)("works with single second", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30, 1), new Date(1986, 3, 5, 10, 30, 0));
                (0, vitest_1.expect)(result).toBe("in 1 second");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 5, 10, 30, 1));
                (0, vitest_1.expect)(result).toBe("1 second ago");
            });
        });
        (0, vitest_1.describe)("works with multiple seconds", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30, 59), new Date(1986, 3, 5, 10, 30, 0));
                (0, vitest_1.expect)(result).toBe("in 59 seconds");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 5, 10, 30, 59));
                (0, vitest_1.expect)(result).toBe("59 seconds ago");
            });
        });
        (0, vitest_1.describe)("works with single minute", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30, 59), new Date(1986, 3, 5, 10, 29, 59));
                (0, vitest_1.expect)(result).toBe("in 1 minute");
            });
            (0, vitest_1.it)("works with future with over a minute", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30), new Date(1986, 3, 5, 10, 28, 10));
                (0, vitest_1.expect)(result).toBe("in 1 minute");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 29, 59), new Date(1986, 3, 5, 10, 30, 59));
                (0, vitest_1.expect)(result).toBe("1 minute ago");
            });
            (0, vitest_1.it)("works with past with over a minute", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 28, 10), new Date(1986, 3, 5, 10, 30));
                (0, vitest_1.expect)(result).toBe("1 minute ago");
            });
        });
        (0, vitest_1.describe)("works with multiple minutes", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30), new Date(1986, 3, 5, 10, 28));
                (0, vitest_1.expect)(result).toBe("in 2 minutes");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 28), new Date(1986, 3, 5, 10, 30));
                (0, vitest_1.expect)(result).toBe("2 minutes ago");
            });
        });
        (0, vitest_1.describe)("works with 60 seconds", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 4, 11, 30, 0), new Date(1986, 3, 4, 10, 30, 0));
                (0, vitest_1.expect)(result).toBe("in 1 hour");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 11, 30, 0));
                (0, vitest_1.expect)(result).toBe("1 hour ago");
            });
        });
        (0, vitest_1.describe)("works with single hour", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10), new Date(1986, 3, 5, 9));
                (0, vitest_1.expect)(result).toBe("in 1 hour");
            });
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30), new Date(1986, 3, 5, 9));
                (0, vitest_1.expect)(result).toBe("in 1 hour");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 9), new Date(1986, 3, 5, 10));
                (0, vitest_1.expect)(result).toBe("1 hour ago");
            });
            (0, vitest_1.it)("works with past with over an hour", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 9), new Date(1986, 3, 5, 10, 30));
                (0, vitest_1.expect)(result).toBe("1 hour ago");
            });
        });
        (0, vitest_1.describe)("works with multiple hours", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10), new Date(1986, 3, 5, 8));
                (0, vitest_1.expect)(result).toBe("in 2 hours");
            });
            (0, vitest_1.it)("works with future with extra minutes", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30), new Date(1986, 3, 5, 8));
                (0, vitest_1.expect)(result).toBe("in 2 hours");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 8), new Date(1986, 3, 5, 10));
                (0, vitest_1.expect)(result).toBe("2 hours ago");
            });
            (0, vitest_1.it)("works with past with extra minutes", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 8), new Date(1986, 3, 5, 10));
                (0, vitest_1.expect)(result).toBe("2 hours ago");
            });
        });
        (0, vitest_1.describe)("works with single day", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 6, 22), new Date(1986, 3, 5, 22));
                (0, vitest_1.expect)(result).toBe("tomorrow");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 22), new Date(1986, 3, 6, 22));
                (0, vitest_1.expect)(result).toBe("yesterday");
            });
            (0, vitest_1.it)("works with past with an extra hour", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 22), new Date(1986, 3, 6, 22, 5));
                (0, vitest_1.expect)(result).toBe("yesterday");
            });
        });
        (0, vitest_1.describe)("works with multiple days", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 6, 22), new Date(1986, 3, 4, 22));
                (0, vitest_1.expect)(result).toBe("in 2 days");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 4, 22), new Date(1986, 3, 6, 22));
                (0, vitest_1.expect)(result).toBe("2 days ago");
            });
        });
        (0, vitest_1.describe)("works with single week", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 10, 22), new Date(1986, 3, 3, 22));
                (0, vitest_1.expect)(result).toBe("next week");
            });
            (0, vitest_1.it)("works with future with more than a week", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 11, 22), new Date(1986, 3, 3, 22));
                (0, vitest_1.expect)(result).toBe("next week");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 3, 22), new Date(1986, 3, 10, 22));
                (0, vitest_1.expect)(result).toBe("last week");
            });
            (0, vitest_1.it)("works with past with more than a week", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 3, 22), new Date(1986, 3, 11, 22));
                (0, vitest_1.expect)(result).toBe("last week");
            });
        });
        (0, vitest_1.describe)("works with multiple weeks", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 15), new Date(1986, 3, 1));
                (0, vitest_1.expect)(result).toBe("in 2 weeks");
            });
            (0, vitest_1.it)("works with future with more than 2 weeks", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 17), new Date(1986, 3, 1));
                (0, vitest_1.expect)(result).toBe("in 2 weeks");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 1), new Date(1986, 3, 15));
                (0, vitest_1.expect)(result).toBe("2 weeks ago");
            });
            (0, vitest_1.it)("works with past with more than 2 weeks", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 1), new Date(1986, 3, 17));
                (0, vitest_1.expect)(result).toBe("2 weeks ago");
            });
        });
        (0, vitest_1.describe)("works with single month", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 4, 2), new Date(1986, 3, 1));
                (0, vitest_1.expect)(result).toBe("next month");
            });
            (0, vitest_1.it)("works with future with more than a month", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 4, 22), new Date(1986, 3, 1));
                (0, vitest_1.expect)(result).toBe("next month");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 1), new Date(1986, 4, 2));
                (0, vitest_1.expect)(result).toBe("last month");
            });
            (0, vitest_1.it)("works with past with more than a month", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 1), new Date(1986, 4, 22));
                (0, vitest_1.expect)(result).toBe("last month");
            });
        });
        (0, vitest_1.describe)("works with single quarter", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 5, 2), new Date(1986, 1, 1));
                (0, vitest_1.expect)(result).toBe("next quarter");
            });
            (0, vitest_1.it)("works with future with more than a quarter", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 5, 22), new Date(1986, 1, 1));
                (0, vitest_1.expect)(result).toBe("next quarter");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 1, 1), new Date(1986, 5, 2));
                (0, vitest_1.expect)(result).toBe("last quarter");
            });
            (0, vitest_1.it)("works with past with more than a quarter", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 1, 1), new Date(1986, 5, 22));
                (0, vitest_1.expect)(result).toBe("last quarter");
            });
        });
        (0, vitest_1.describe)("works with multiple quarters", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 6, 2), new Date(1986, 1, 1));
                (0, vitest_1.expect)(result).toBe("in 2 quarters");
            });
            (0, vitest_1.it)("works with future with more that X quarters", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 6, 22), new Date(1986, 1, 1));
                (0, vitest_1.expect)(result).toBe("in 2 quarters");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 1, 1), new Date(1986, 6, 2));
                (0, vitest_1.expect)(result).toBe("2 quarters ago");
            });
            (0, vitest_1.it)("works with past with more that X quarters", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 1, 1), new Date(1986, 6, 22));
                (0, vitest_1.expect)(result).toBe("2 quarters ago");
            });
        });
        (0, vitest_1.describe)("works with single year", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 1, 2), new Date(1986, 1, 1));
                (0, vitest_1.expect)(result).toBe("next year");
            });
            (0, vitest_1.it)("works with future with more that a year", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 10, 2), new Date(1986, 1, 1));
                (0, vitest_1.expect)(result).toBe("next year");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 1, 1), new Date(1987, 1, 2));
                (0, vitest_1.expect)(result).toBe("last year");
            });
            (0, vitest_1.it)("works with past with more than a year", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 1, 1), new Date(1987, 10, 2));
                (0, vitest_1.expect)(result).toBe("last year");
            });
        });
        (0, vitest_1.describe)("works with multiple years", () => {
            (0, vitest_1.it)("works with future", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1988, 1, 1), new Date(1986, 1, 1));
                (0, vitest_1.expect)(result).toBe("in 2 years");
            });
            (0, vitest_1.it)("works with future with x years", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(2088, 1, 1), new Date(1986, 1, 1));
                (0, vitest_1.expect)(result).toBe("in 102 years");
            });
            (0, vitest_1.it)("works with past", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 1, 1), new Date(1988, 1, 1));
                (0, vitest_1.expect)(result).toBe("2 years ago");
            });
            (0, vitest_1.it)("works with past with x years", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1988, 1, 1), new Date(2086, 1, 1));
                (0, vitest_1.expect)(result).toBe("98 years ago");
            });
        });
    });
    (0, vitest_1.describe)("with options", () => {
        (0, vitest_1.describe)("unit option", () => {
            (0, vitest_1.describe)("seconds", () => {
                (0, vitest_1.it)("works with future with seconds", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 3, 4, 10, 31, 30), new Date(1987, 3, 4, 10, 30, 0), { unit: "second" });
                    (0, vitest_1.expect)(result).toBe("in 90 seconds");
                });
                (0, vitest_1.it)("works with past with seconds", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 3, 4, 10, 30, 0), new Date(1987, 3, 4, 10, 31, 30), { unit: "second" });
                    (0, vitest_1.expect)(result).toBe("90 seconds ago");
                });
                (0, vitest_1.it)("works with future with quarters", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 6, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), { unit: "quarter" });
                    (0, vitest_1.expect)(result).toBe("in 5 quarters");
                });
            });
            (0, vitest_1.describe)("minutes", () => {
                (0, vitest_1.it)("works with future", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 4, 11, 30, 0), new Date(1986, 3, 4, 10, 30, 0), { unit: "minute" });
                    (0, vitest_1.expect)(result).toBe("in 60 minutes");
                });
                (0, vitest_1.it)("works with the past", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 11, 30, 0), { unit: "minute" });
                    (0, vitest_1.expect)(result).toBe("60 minutes ago");
                });
            });
            (0, vitest_1.describe)("hours", () => {
                (0, vitest_1.it)("works the future", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 4, 11, 30, 0), new Date(1986, 3, 4, 10, 30, 0), { unit: "hour" });
                    (0, vitest_1.expect)(result).toBe("in 1 hour");
                });
                (0, vitest_1.it)("works with the past", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 11, 30, 0), { unit: "hour" });
                    (0, vitest_1.expect)(result).toBe("1 hour ago");
                });
            });
            (0, vitest_1.describe)("single day", () => {
                (0, vitest_1.it)("works with the future", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 3, 4, 11, 30, 0), new Date(1987, 3, 4, 10, 30, 0), { unit: "day" });
                    (0, vitest_1.expect)(result).toBe("today");
                });
                (0, vitest_1.it)("works with the past", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0));
                    (0, vitest_1.expect)(result).toBe("tomorrow");
                });
            });
            (0, vitest_1.describe)("multiple days", () => {
                (0, vitest_1.it)("works with the future", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 3, 5, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), { unit: "day" });
                    (0, vitest_1.expect)(result).toBe("in 366 days");
                });
                (0, vitest_1.it)("works with the past", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 4, 10, 30, 0), new Date(1987, 3, 5, 10, 30, 0), { unit: "day" });
                    (0, vitest_1.expect)(result).toBe("366 days ago");
                });
            });
            (0, vitest_1.describe)("single weeks", () => {
                (0, vitest_1.it)("works with the future", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 3, 11, 10, 30, 0), new Date(1987, 3, 4, 10, 30, 0), { unit: "week" });
                    (0, vitest_1.expect)(result).toBe("next week");
                });
                (0, vitest_1.it)("works with the past", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 3, 4, 10, 30, 0), new Date(1987, 3, 11, 10, 30, 0), { unit: "week" });
                    (0, vitest_1.expect)(result).toBe("last week");
                });
            });
            (0, vitest_1.describe)("multiple weeks", () => {
                (0, vitest_1.it)("works with the future", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1987, 3, 6, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), { unit: "week" });
                    (0, vitest_1.expect)(result).toBe("in 53 weeks");
                });
                (0, vitest_1.it)("works with the past", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 4, 10, 30, 0), new Date(1987, 3, 6, 10, 30, 0), { unit: "week" });
                    (0, vitest_1.expect)(result).toBe("53 weeks ago");
                });
            });
        });
        (0, vitest_1.describe)("numeric option", () => {
            (0, vitest_1.describe)("works with weeks", () => {
                (0, vitest_1.it)("works with past", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 3, 22), new Date(1986, 3, 10, 22), { numeric: "always" });
                    (0, vitest_1.expect)(result).toBe("1 week ago");
                });
                (0, vitest_1.it)("works with future", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 10, 22), new Date(1986, 3, 3, 22), { numeric: "always" });
                    (0, vitest_1.expect)(result).toBe("in 1 week");
                });
            });
            (0, vitest_1.it)("works with days", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), { numeric: "always" });
                (0, vitest_1.expect)(result).toBe("in 1 day");
            });
            (0, vitest_1.it)("works with the same dates", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 10, 30, 0), new Date(1986, 3, 5, 10, 30, 0), { numeric: "auto" });
                (0, vitest_1.expect)(result).toBe("now");
            });
        });
        (0, vitest_1.describe)("locale option", () => {
            (0, vitest_1.describe)("locale", () => {
                (0, vitest_1.it)("allows to set Spanish locale", () => {
                    const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 4, 4, 10, 30, 0), new Date(1985, 4, 4, 10, 30, 0), { locale: "es" });
                    (0, vitest_1.expect)(result).toBe("el próximo año");
                });
            });
        });
        (0, vitest_1.describe)("style option", () => {
            (0, vitest_1.it)("works with years", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 4, 4, 10, 30, 0), new Date(1985, 4, 4, 10, 30, 0), { style: "long" });
                (0, vitest_1.expect)(result).toBe("next year");
            });
        });
        (0, vitest_1.describe)("unit and locale options", () => {
            (0, vitest_1.it)("works with multiple options", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1986, 3, 5, 11, 30, 0), new Date(1986, 3, 5, 10, 30, 0), { unit: "minute", locale: "de" });
                (0, vitest_1.expect)(result).toBe("in 60 Minuten");
            });
        });
        (0, vitest_1.describe)("edge cases", () => {
            (0, vitest_1.it)("falls back to { numeric: always }", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1985, 4, 5, 10, 30, 0), new Date(1985, 4, 4, 10, 30, 0), { style: "long", numeric: "auto" });
                (0, vitest_1.expect)(result).toBe("tomorrow");
            });
            (0, vitest_1.it)("handles dates before 100 AD", () => {
                const result = (0, index_js_1.intlFormatDistance)(new Date(1, 3, 4, 11, 30, 0), new Date(1, 3, 4, 10, 30, 0), { unit: "minute" });
                (0, vitest_1.expect)(result).toBe("in 60 minutes");
            });
        });
        (0, vitest_1.describe)("errors", () => {
            (0, vitest_1.it)("checks the first date", () => {
                (0, vitest_1.expect)(index_js_1.intlFormatDistance.bind(null, new Date(NaN), new Date(1986, 3, 4, 10, 30, 0))).toThrow(RangeError);
            });
            (0, vitest_1.it)("checks the second date", () => {
                (0, vitest_1.expect)(index_js_1.intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(NaN))).toThrow(RangeError);
            });
            (0, vitest_1.it)("checks both dates", () => {
                (0, vitest_1.expect)(index_js_1.intlFormatDistance.bind(null, new Date(NaN), new Date(NaN))).toThrow(RangeError);
            });
            (0, vitest_1.it)("checks unit", () => {
                (0, vitest_1.expect)(index_js_1.intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), 
                // @ts-expect-error - We're testing wrong value
                { unit: "wrongValue" })).toThrow(RangeError);
            });
            (0, vitest_1.it)("checks locale", () => {
                (0, vitest_1.expect)(index_js_1.intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), { locale: "wrongValue" })).toThrow(RangeError);
            });
            (0, vitest_1.it)("checks localeMatcher", () => {
                (0, vitest_1.expect)(index_js_1.intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), 
                // @ts-expect-error - We're testing wrong value
                { localeMatcher: "wrongValue" })).toThrow(RangeError);
            });
            (0, vitest_1.it)("checks numeric", () => {
                (0, vitest_1.expect)(index_js_1.intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), 
                // @ts-expect-error - We're testing wrong value
                { numeric: "wrongValue" })).toThrow(RangeError);
            });
            (0, vitest_1.it)("checks style", () => {
                (0, vitest_1.expect)(index_js_1.intlFormatDistance.bind(null, new Date(1986, 3, 4, 10, 30, 0), new Date(1986, 3, 4, 10, 30, 0), 
                // @ts-expect-error - We're testing wrong value
                { style: "wrongValue" })).toThrow(RangeError);
            });
        });
    });
});
