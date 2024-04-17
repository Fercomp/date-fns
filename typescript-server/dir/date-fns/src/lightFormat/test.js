"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("lightFormat", () => {
    const date = new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123);
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 3, 4).getTime();
        (0, vitest_1.expect)((0, index_js_1.lightFormat)(date, "yyyy-MM-dd")).toBe("2014-04-04");
    });
    (0, vitest_1.it)("escapes characters between the single quote characters", () => {
        const result = (0, index_js_1.lightFormat)(date, "'yyyy-'MM-dd'D yyyy-'MM-dd'");
        (0, vitest_1.expect)(result).toBe("yyyy-04-04D yyyy-04-04");
    });
    (0, vitest_1.it)('two single quote characters are transformed into a "real" single quote', () => {
        const date = new Date(2014, 3, 4, 5);
        (0, vitest_1.expect)((0, index_js_1.lightFormat)(date, "''h 'o''clock'''")).toBe("'5 o'clock'");
    });
    (0, vitest_1.it)("accepts new line charactor", () => {
        const date = new Date(2014, 3, 4, 5);
        (0, vitest_1.expect)((0, index_js_1.lightFormat)(date, "yyyy-MM-dd'\n'HH:mm:ss")).toBe("2014-04-04\n05:00:00");
    });
    (0, vitest_1.describe)("year", () => {
        (0, vitest_1.describe)("regular year", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.lightFormat)(date, "y yy yyy yyyy yyyyy");
                (0, vitest_1.expect)(result).toBe("1986 86 1986 1986 01986");
            });
            (0, vitest_1.it)("1 BC formats as 1", () => {
                const date = new Date(0);
                date.setFullYear(0 /* Jan */, 1);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.lightFormat)(date, "y");
                (0, vitest_1.expect)(result).toBe("1");
            });
            (0, vitest_1.it)("2 BC formats as 2", () => {
                const date = new Date(0);
                date.setFullYear(-1, 0 /* Jan */, 1);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.lightFormat)(date, "y");
                (0, vitest_1.expect)(result).toBe("2");
            });
        });
    });
    (0, vitest_1.describe)("month", () => {
        (0, vitest_1.it)("formatting month", () => {
            const result = (0, index_js_1.lightFormat)(date, "M MM");
            (0, vitest_1.expect)(result).toBe("4 04");
        });
    });
    (0, vitest_1.describe)("day", () => {
        (0, vitest_1.it)("date", () => {
            const result = (0, index_js_1.lightFormat)(date, "d dd");
            (0, vitest_1.expect)(result).toBe("4 04");
        });
    });
    (0, vitest_1.describe)("hour", () => {
        (0, vitest_1.it)("hour [1-12]", () => {
            const result = (0, index_js_1.lightFormat)(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), "h hh");
            (0, vitest_1.expect)(result).toBe("12 12");
        });
        (0, vitest_1.it)("hour [0-23]", () => {
            const result = (0, index_js_1.lightFormat)(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), "H HH");
            (0, vitest_1.expect)(result).toBe("0 00");
        });
        (0, vitest_1.describe)("AM, PM", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.lightFormat)(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), "a aa aaa aaaa aaaaa");
                (0, vitest_1.expect)(result).toBe("AM AM am a.m. a");
                const pmResult = (0, index_js_1.lightFormat)(new Date(2018, 0 /* Jan */, 1, 13, 0, 0, 0), "a aa aaa aaaa aaaaa");
                (0, vitest_1.expect)(pmResult).toBe("PM PM pm p.m. p");
            });
            (0, vitest_1.it)("12 PM", () => {
                const date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.lightFormat)(date, "h H a")).toBe("12 12 PM");
            });
            (0, vitest_1.it)("12 AM", () => {
                const date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.lightFormat)(date, "h H a")).toBe("12 0 AM");
            });
        });
    });
    (0, vitest_1.it)("minute", () => {
        const result = (0, index_js_1.lightFormat)(date, "m mm");
        (0, vitest_1.expect)(result).toBe("32 32");
    });
    (0, vitest_1.describe)("second", () => {
        (0, vitest_1.it)("second", () => {
            const result = (0, index_js_1.lightFormat)(date, "s ss");
            (0, vitest_1.expect)(result).toBe("55 55");
        });
    });
    (0, vitest_1.it)("fractional seconds", () => {
        const result = (0, index_js_1.lightFormat)(date, "S SS SSS SSSS");
        (0, vitest_1.expect)(result).toBe("1 12 123 1230");
    });
    (0, vitest_1.it)("returns empty string when the format is an empty string", () => {
        (0, vitest_1.expect)((0, index_js_1.lightFormat)(Date.now(), "")).toBe("");
    });
    (0, vitest_1.it)("throws RangeError if the date isn't valid", () => {
        (0, vitest_1.expect)(index_js_1.lightFormat.bind(null, new Date(NaN), "MMMM d, yyyy")).toThrow(RangeError);
    });
    (0, vitest_1.it)("throws RangeError exception if the format string contains an unescaped latin alphabet character", () => {
        (0, vitest_1.expect)(index_js_1.lightFormat.bind(null, date, "yyyy-MM-dd-nnnn")).toThrow(RangeError);
    });
});
