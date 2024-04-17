"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("parseISO", () => {
    (0, vitest_1.describe)("string argument", () => {
        (0, vitest_1.describe)("centuries", () => {
            (0, vitest_1.it)("parses YY", () => {
                const result = (0, index_js_1.parseISO)("20");
                (0, vitest_1.expect)(result).toEqual(new Date(2000, 0 /* Jan */, 1));
            });
        });
        (0, vitest_1.describe)("years", () => {
            (0, vitest_1.it)("parses YYYY", () => {
                const result = (0, index_js_1.parseISO)("2014");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 1));
            });
        });
        (0, vitest_1.describe)("months", () => {
            (0, vitest_1.it)("parses YYYY-MM", () => {
                const result = (0, index_js_1.parseISO)("2014-02");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 1));
            });
        });
        (0, vitest_1.describe)("weeks", () => {
            (0, vitest_1.it)("parses YYYY-Www", () => {
                const result = (0, index_js_1.parseISO)("2014-W02");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 6));
            });
            (0, vitest_1.it)("parses YYYYWww", () => {
                const result = (0, index_js_1.parseISO)("2014W02");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 6));
            });
        });
        (0, vitest_1.describe)("calendar dates", () => {
            (0, vitest_1.it)("parses YYYY-MM-DD", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1, /* Feb */ 11));
            });
            (0, vitest_1.it)("parses YYYYMMDD", () => {
                const result = (0, index_js_1.parseISO)("20140211");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 11));
            });
        });
        (0, vitest_1.describe)("week dates", () => {
            (0, vitest_1.it)("parses YYYY-Www-D", () => {
                const result = (0, index_js_1.parseISO)("2014-W02-7");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 12));
            });
            (0, vitest_1.it)("parses YYYYWwwD", () => {
                const result = (0, index_js_1.parseISO)("2014W027");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 12));
            });
            (0, vitest_1.it)("correctly handles years in which 4 January is Sunday", () => {
                const result = (0, index_js_1.parseISO)("2009-W01-1");
                (0, vitest_1.expect)(result).toEqual(new Date(2008, 11 /* Dec */, 29));
            });
        });
        (0, vitest_1.describe)("ordinal dates", () => {
            (0, vitest_1.it)("parses YYYY-DDD", () => {
                const result = (0, index_js_1.parseISO)("2014-026");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 26));
            });
            (0, vitest_1.it)("parses YYYYDDD", () => {
                const result = (0, index_js_1.parseISO)("2014026");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 0 /* Jan */, 26));
            });
        });
        (0, vitest_1.describe)("date and time combined", () => {
            (0, vitest_1.it)("parses YYYY-MM-DDThh:mm", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T11:30");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30));
            });
            (0, vitest_1.it)("parses YYYY-MM-DDThhmm", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T1130");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30));
            });
        });
        (0, vitest_1.describe)("extended century representation", () => {
            (0, vitest_1.it)("parses century 101 BC - 2 BC", () => {
                const result = (0, index_js_1.parseISO)("-0001");
                const date = new Date(0);
                date.setFullYear(-100, 0 /* Jan */, 1);
                date.setHours(0, 0, 0, 0);
                (0, vitest_1.expect)(result).toEqual(date);
            });
            (0, vitest_1.it)("parses century 1 BC - 99 AD", () => {
                const result = (0, index_js_1.parseISO)("00");
                const date = new Date(0);
                date.setFullYear(0, 0 /* Jan */, 1);
                date.setHours(0, 0, 0, 0);
                (0, vitest_1.expect)(result).toEqual(date);
            });
            (0, vitest_1.it)("parses centuries after 9999 AD", () => {
                const result = (0, index_js_1.parseISO)("+0123");
                (0, vitest_1.expect)(result).toEqual(new Date(12300, 0 /* Jan */, 1));
            });
            (0, vitest_1.it)("allows to specify the number of additional digits", () => {
                const result = (0, index_js_1.parseISO)("-20", { additionalDigits: 0 });
                const date = new Date(0);
                date.setFullYear(-2000, 0 /* Jan */, 1);
                date.setHours(0, 0, 0, 0);
                (0, vitest_1.expect)(result).toEqual(date);
            });
        });
        (0, vitest_1.describe)("extended year representation", () => {
            (0, vitest_1.it)("correctly parses years from 1 AD to 99 AD", () => {
                const result = (0, index_js_1.parseISO)("0095-07-02");
                const date = new Date(0);
                date.setFullYear(95, 6 /* Jul */, 2);
                date.setHours(0, 0, 0, 0);
                (0, vitest_1.expect)(result).toEqual(date);
            });
            (0, vitest_1.it)("parses years after 9999 AD", () => {
                const result = (0, index_js_1.parseISO)("+012345-07-02");
                (0, vitest_1.expect)(result).toEqual(new Date(12345, 6 /* Jul */, 2));
            });
            (0, vitest_1.it)("allows to specify the number of additional digits", () => {
                const result = (0, index_js_1.parseISO)("+12340702", { additionalDigits: 0 });
                (0, vitest_1.expect)(result).toEqual(new Date(1234, 6 /* Jul */, 2));
            });
            (0, vitest_1.it)("parses year 1 BC", () => {
                const result = (0, index_js_1.parseISO)("0000-07-02");
                const date = new Date(0);
                date.setFullYear(0, 6 /* Jul */, 2);
                date.setHours(0, 0, 0, 0);
                (0, vitest_1.expect)(result).toEqual(date);
            });
            (0, vitest_1.it)("parses years less than 1 BC", () => {
                const result = (0, index_js_1.parseISO)("-000001-07-02");
                const date = new Date(0);
                date.setFullYear(-1, 6 /* Jul */, 2);
                date.setHours(0, 0, 0, 0);
                (0, vitest_1.expect)(result).toEqual(date);
            });
        });
        (0, vitest_1.describe)("float time", () => {
            (0, vitest_1.it)("parses float hours", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T11.5");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30));
            });
            (0, vitest_1.it)("parses float minutes", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T11:30.5");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30, 30));
            });
            (0, vitest_1.it)("parses float seconds", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T11:30:30.768");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30, 30, 768));
            });
            (0, vitest_1.it)("parses , as decimal mark", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T11,5");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 11, 11, 30));
            });
        });
        (0, vitest_1.describe)("timezones", () => {
            (0, vitest_1.describe)("when the date and the time are specified", () => {
                (0, vitest_1.it)("parses Z", () => {
                    const result = (0, index_js_1.parseISO)("2014-10-25T06:46:20Z");
                    (0, vitest_1.expect)(result).toEqual(new Date("2014-10-25T13:46:20+07:00"));
                });
                (0, vitest_1.it)("parses ±hh:mm", () => {
                    const result = (0, index_js_1.parseISO)("2014-10-25T13:46:20+07:00");
                    (0, vitest_1.expect)(result).toEqual(new Date("2014-10-25T13:46:20+07:00"));
                });
                (0, vitest_1.it)("parses ±hhmm", () => {
                    const result = (0, index_js_1.parseISO)("2014-10-25T03:46:20-0300");
                    (0, vitest_1.expect)(result).toEqual(new Date("2014-10-25T13:46:20+07:00"));
                });
                (0, vitest_1.it)("parses ±hh", () => {
                    const result = (0, index_js_1.parseISO)("2014-10-25T13:46:20+07");
                    (0, vitest_1.expect)(result).toEqual(new Date("2014-10-25T13:46:20+07:00"));
                });
            });
            (0, vitest_1.describe)("when the year and the month are specified", () => {
                (0, vitest_1.it)("sets timezone correctly on yyyy-MMZ format", () => {
                    const result = (0, index_js_1.parseISO)("2012-01Z");
                    (0, vitest_1.expect)(result).toEqual(new Date("2012-01-01T00:00:00+00:00"));
                });
            });
        });
        (0, vitest_1.describe)("failure", () => {
            (0, vitest_1.it)("returns `Invalid Date` if the string is not an ISO formatted date", () => {
                const result = (0, index_js_1.parseISO)(new Date(2014, 8 /* Sep */, 1, 11).toString());
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
        });
    });
    (0, vitest_1.describe)("validation", () => {
        (0, vitest_1.describe)("months", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid month", () => {
                const result = (0, index_js_1.parseISO)("2014-00");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("weeks", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid week", () => {
                const result = (0, index_js_1.parseISO)("2014-W00");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for 54th week", () => {
                const result = (0, index_js_1.parseISO)("2014-W54");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("calendar dates", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid day of the month", () => {
                const result = (0, index_js_1.parseISO)("2012-02-30");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for 29th of February of non-leap year", () => {
                const result = (0, index_js_1.parseISO)("2014-02-29");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("parses 29th of February of leap year", () => {
                const result = (0, index_js_1.parseISO)("2012-02-29");
                (0, vitest_1.expect)(result).toEqual(new Date(2012, 1, /* Feb */ 29));
            });
        });
        (0, vitest_1.describe)("week dates", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid day of the week", () => {
                const result = (0, index_js_1.parseISO)("2014-W02-0");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("ordinal dates", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid day of the year", () => {
                const result = (0, index_js_1.parseISO)("2012-000");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for 366th day of non-leap year", () => {
                const result = (0, index_js_1.parseISO)("2014-366");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("parses 366th day of leap year", () => {
                const result = (0, index_js_1.parseISO)("2012-366");
                (0, vitest_1.expect)(result).toEqual(new Date(2012, 11, /* Dec */ 31));
            });
        });
        (0, vitest_1.describe)("date", () => {
            (0, vitest_1.it)("returns `Invalid Date` when it contains spaces after the date", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11  basketball");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("time", () => {
            (0, vitest_1.it)("parses 24:00 as midnight of the next day", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T24:00");
                (0, vitest_1.expect)(result).toEqual(new Date(2014, 1 /* Feb */, 12, 0, 0));
            });
            (0, vitest_1.it)("returns `Invalid Date` for anything after 24:00", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T24:01");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for invalid hours", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T25");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for invalid minutes", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T21:60");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for invalid seconds", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T21:59:60");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for invalid time", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T21:basketball");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` when it contains spaces after the time", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T21:59:00  basketball");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("timezones", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid timezone minutes", () => {
                const result = (0, index_js_1.parseISO)("2014-02-11T21:35:45+04:60");
                (0, vitest_1.expect)(result instanceof Date).toBe(true);
                (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
            });
        });
    });
    (0, vitest_1.describe)("invalid argument", () => {
        (0, vitest_1.it)("returns Invalid Date if argument is non-date string", () => {
            const result = (0, index_js_1.parseISO)("abc");
            (0, vitest_1.expect)(result instanceof Date).toBe(true);
            (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
        });
        (0, vitest_1.it)("returns Invalid Date if argument is non-date string containing a colon", () => {
            const result = (0, index_js_1.parseISO)("00:00");
            (0, vitest_1.expect)(result instanceof Date).toBe(true);
            (0, vitest_1.expect)(isNaN(result.getTime())).toBe(true);
        });
    });
});
