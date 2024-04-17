"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("parse", () => {
    const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900);
    (0, vitest_1.it)("escapes characters between the single quote characters", () => {
        const result = (0, index_js_1.parse)("2018 hello world July 2nd", "yyyy 'hello world' MMMM do", referenceDate);
        (0, vitest_1.expect)(result).toEqual(new Date(2018, 6 /* Jul */, 2));
    });
    (0, vitest_1.it)('two single quote characters are transformed into a "real" single quote', () => {
        const result = (0, index_js_1.parse)("'5 o'clock'", "''h 'o''clock'''", referenceDate);
        (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 5));
    });
    (0, vitest_1.it)("accepts new line charactor", () => {
        const result = (0, index_js_1.parse)("2014-04-04\n05:00:00", "yyyy-MM-dd'\n'HH:mm:ss", referenceDate);
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 3 /* Apr */, 4, 5));
    });
    (0, vitest_1.describe)("era", () => {
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("10000 BC", "yyyyy G", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(-9999, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("2018 Anno Domini", "yyyy GGGG", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2018, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("44 B", "y GGGGG", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(-43, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("with week-numbering year", () => {
            const result = (0, index_js_1.parse)("44 B", "Y GGGGG", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(-44, 11 /* Dec */, 30));
        });
        (0, vitest_1.it)("parses stand-alone BC", () => {
            const result = (0, index_js_1.parse)("BC", "G", referenceDate);
            const expectedResult = new Date(0);
            expectedResult.setFullYear(0, 0 /* Jan */, 1);
            expectedResult.setHours(0, 0, 0, 0);
            (0, vitest_1.expect)(result).toEqual(expectedResult);
        });
        (0, vitest_1.it)("parses stand-alone AD", () => {
            const result = (0, index_js_1.parse)("AD", "G", referenceDate);
            const expectedResult = new Date(0);
            expectedResult.setFullYear(1, 0 /* Jan */, 1);
            expectedResult.setHours(0, 0, 0, 0);
            (0, vitest_1.expect)(result).toEqual(expectedResult);
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["G", "BC"],
                ["R", "2019"],
                ["u", "2019"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when G is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 420`, `${token} G`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`G\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("calendar year", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("2017", "y", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2017, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("2017th", "yo", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2017, 0 /* Jan */, 1));
        });
        (0, vitest_1.describe)("two-digit numeric year", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.parse)("02", "yy", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date(2002, 0 /* Jan */, 1));
            });
            (0, vitest_1.it)("gets the 100 year range from `referenceDate`", () => {
                const result = (0, index_js_1.parse)("02", "yy", new Date(1860, 6 /* Jul */, 2));
                (0, vitest_1.expect)(result).toEqual(new Date(1902, 0 /* Jan */, 1));
            });
        });
        (0, vitest_1.it)("three-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("123", "yyy", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(123, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("four-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("0044", "yyyy", referenceDate);
            const expectedResult = new Date(0);
            expectedResult.setFullYear(44, 0 /* Jan */, 1);
            expectedResult.setHours(0, 0, 0, 0);
            (0, vitest_1.expect)(result).toEqual(expectedResult);
        });
        (0, vitest_1.it)("specified amount of digits", () => {
            const result = (0, index_js_1.parse)("000001", "yyyyyy", referenceDate);
            const expectedResult = new Date(0);
            expectedResult.setFullYear(1, 0 /* Jan */, 1);
            expectedResult.setHours(0, 0, 0, 0);
            (0, vitest_1.expect)(result).toEqual(expectedResult);
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["y", "2019"],
                ["Y", "2019"],
                ["R", "2019"],
                ["u", "2019"],
                ["w", "1"],
                ["I", "1"],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when y is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 2019`, `${token} y`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`y\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("local week-numbering year", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("2002", "Y", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2001, 11 /* Dec */, 30));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("12345th", "Yo", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(12344, 11 /* Dec */, 31));
        });
        (0, vitest_1.describe)("two-digit numeric year", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.parse)("02", "YY", referenceDate, {
                    useAdditionalWeekYearTokens: true,
                });
                (0, vitest_1.expect)(result).toEqual(new Date(2001, 11 /* Dec */, 30));
            });
            (0, vitest_1.it)("gets the 100 year range from `referenceDate`", () => {
                const result = (0, index_js_1.parse)("02", "YY", new Date(1860, 6 /* Jul */, 2), {
                    useAdditionalWeekYearTokens: true,
                });
                (0, vitest_1.expect)(result).toEqual(new Date(1901, 11 /* Dec */, 29));
            });
        });
        (0, vitest_1.it)("three-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("123", "YYY", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(122, 11 /* Dec */, 27));
        });
        (0, vitest_1.it)("four-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("2018", "YYYY", referenceDate, {
                useAdditionalWeekYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2017, 11 /* Dec */, 31));
        });
        (0, vitest_1.it)("specified amount of digits", () => {
            const result = (0, index_js_1.parse)("000001", "YYYYYY", referenceDate);
            const expectedResult = new Date(0);
            expectedResult.setFullYear(0, 11 /* Dec */, 31);
            expectedResult.setHours(0, 0, 0, 0);
            (0, vitest_1.expect)(result).toEqual(expectedResult);
        });
        (0, vitest_1.it)("allows to specify `weekStartsOn` and `firstWeekContainsDate` in options", () => {
            const result = (0, index_js_1.parse)("2018", "Y", referenceDate, {
                weekStartsOn: 1 /* Mon */,
                firstWeekContainsDate: 4,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2018, 0 /* Jan */, 1));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["y", "2019"],
                ["Y", "2019"],
                ["R", "2019"],
                ["u", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["I", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["i", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when Y is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 2019`, `${token} Y`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`Y\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("ISO week-numbering year", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("-1234", "R", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(-1234, 0 /* Jan */, 3));
        });
        (0, vitest_1.it)("two-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("-02", "RR", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(-3, 11 /* Dec */, 29));
        });
        (0, vitest_1.it)("three-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("123", "RRR", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(123, 0 /* Jan */, 4));
        });
        (0, vitest_1.it)("four-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("2018", "RRRR", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2018, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("specified amount of digits", () => {
            const result = (0, index_js_1.parse)("000001", "RRRRRR", referenceDate);
            const expectedResult = new Date(0);
            expectedResult.setFullYear(1, 0 /* Jan */, 1);
            expectedResult.setHours(0, 0, 0, 0);
            (0, vitest_1.expect)(result).toEqual(expectedResult);
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["G", "AD"],
                ["y", "2019"],
                ["Y", "2019"],
                ["R", "2019"],
                ["u", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["w", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when R is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 2019`, `${token} R`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`R\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("extended year", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("-1234", "u", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(-1234, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("two-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("-02", "uu", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(-2, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("three-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("123", "uuu", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(123, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("four-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("2018", "uuuu", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2018, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("specified amount of digits", () => {
            const result = (0, index_js_1.parse)("000001", "uuuuuu", referenceDate);
            const expectedResult = new Date(0);
            expectedResult.setFullYear(1, 0 /* Jan */, 1);
            expectedResult.setHours(0, 0, 0, 0);
            (0, vitest_1.expect)(result).toEqual(expectedResult);
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["G", "AD"],
                ["y", "2019"],
                ["Y", "2019"],
                ["R", "2019"],
                ["u", "2019"],
                ["w", "1"],
                ["I", "1"],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when u is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 2019`, `${token} u`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`u\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("quarter with following year", () => {
        (0, vitest_1.it)("first quarter", () => {
            const result = (0, index_js_1.parse)("Q1/2020", "QQQ/yyyy", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2020, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("second quarter", () => {
            const result = (0, index_js_1.parse)("Q2/2020", "QQQ/yyyy", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2020, 3 /* Apr */, 1));
        });
        (0, vitest_1.it)("third quarter", () => {
            const result = (0, index_js_1.parse)("Q3/2020", "QQQ/yyyy", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2020, 6 /* Jul */, 1));
        });
        (0, vitest_1.it)("fourth quarter", () => {
            const result = (0, index_js_1.parse)("Q4/2020", "QQQ/yyyy", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2020, 9 /* Oct */, 1));
        });
    });
    (0, vitest_1.describe)("quarter (formatting)", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("1", "Q", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("1st", "Qo", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("02", "QQ", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 1));
        });
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("Q3", "QQQ", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 6 /* Jul */, 1));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("4st quarter", "QQQQ", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 9 /* Oct */, 1));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("1", "QQQQQ", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["Y", "2019"],
                ["R", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["w", "1"],
                ["I", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when Q is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} Q`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`Q\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("quarter (stand-alone)", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("1", "q", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("1th", "qo", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("02", "qq", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 1));
        });
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("Q3", "qqq", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 6 /* Jul */, 1));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("4th quarter", "qqqq", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 9 /* Oct */, 1));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("1", "qqqqq", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["Y", "2019"],
                ["R", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["w", "1"],
                ["I", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when q is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} q`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`q\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("month (formatting)", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("6", "M", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 5 /* Jun */, 1));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("6th", "Mo", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 5 /* Jun */, 1));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("01", "MM", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("Nov", "MMM", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 10 /* Nov */, 1));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("February", "MMMM", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 1 /* Feb */, 1));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("J", "MMMMM", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["Y", "2019"],
                ["R", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["w", "1"],
                ["I", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when M is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} M`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`M\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("month (stand-alone)", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("6", "L", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 5 /* Jun */, 1));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("6th", "Lo", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 5 /* Jun */, 1));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("01", "LL", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("Nov", "LLL", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 10 /* Nov */, 1));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("February", "LLLL", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 1 /* Feb */, 1));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("J", "LLLLL", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["Y", "2019"],
                ["R", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["w", "1"],
                ["I", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when L is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} L`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`L\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("local week of year", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("49", "w", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 10 /* Nov */, 30));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("49th", "wo", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 10 /* Nov */, 30));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("01", "ww", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1985, 11 /* Dec */, 29));
        });
        (0, vitest_1.it)("allows to specify `weekStartsOn` and `firstWeekContainsDate` in options", () => {
            const result = (0, index_js_1.parse)("49", "w", referenceDate, {
                weekStartsOn: 1 /* Mon */,
                firstWeekContainsDate: 4,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 11 /* Dec */, 1));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["y", "2019"],
                ["R", "2019"],
                ["u", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["w", "1"],
                ["I", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["i", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when w is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} w`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`w\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("ISO week of year", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("49", "I", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 11 /* Dec */, 1));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("49th", "Io", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 11 /* Dec */, 1));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("01", "II", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1985, 11 /* Dec */, 30));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["y", "2019"],
                ["Y", "2019"],
                ["u", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["w", "1"],
                ["I", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when I is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} I`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`I\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("day of month", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("28", "d", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 28));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("28th", "do", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 28));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("01", "dd", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 1));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["Y", "2019"],
                ["R", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["w", "1"],
                ["I", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when d is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} d`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`d\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("day of year", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("200", "D", referenceDate, {
                useAdditionalDayOfYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 6 /* Jul */, 19));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("200th", "Do", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 6 /* Jul */, 19));
        });
        (0, vitest_1.it)("two-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("01", "DD", referenceDate, {
                useAdditionalDayOfYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("three-digit zero-padding", () => {
            const result = (0, index_js_1.parse)("001", "DDD", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 0 /* Jan */, 1));
        });
        (0, vitest_1.it)("specified amount of digits", () => {
            const result = (0, index_js_1.parse)("000200", "DDDDDD", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 6 /* Jul */, 19));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["Y", "2019"],
                ["R", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["w", "1"],
                ["I", "1"],
                ["d", "1"],
                ["D", "1"],
                ["E", "Mon"],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example, _options]) => {
                (0, vitest_1.it)(`throws an error when D is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} D`, referenceDate, {
                        useAdditionalDayOfYearTokens: true,
                    });
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`D\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("day of week (formatting)", () => {
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("Mon", "E", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 2 /* Mar */, 31));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("Tuesday", "EEEE", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 1));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("W", "EEEEE", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 2));
        });
        (0, vitest_1.it)("short", () => {
            const result = (0, index_js_1.parse)("Th", "EEEEEE", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 3));
        });
        (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
            const result = (0, index_js_1.parse)("Thursday", "EEEE", referenceDate, {
                weekStartsOn: /* Fri */ 5,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 10));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["E", "Mon"],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when E is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} Mon`, `${token} E`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`E\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("ISO day of week (formatting)", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("1", "i", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 2 /* Mar */, 31));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("1st", "io", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 2 /* Mar */, 31));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("02", "ii", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 1));
        });
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("Wed", "iii", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 2));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("Thursday", "iiii", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 3));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("S", "iiiii", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 6));
        });
        (0, vitest_1.it)("short", () => {
            const result = (0, index_js_1.parse)("Fr", "iiiiii", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["y", "2019"],
                ["Y", "2019"],
                ["u", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["w", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["E", "Mon"],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when i is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} i`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`i\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("local day of week (formatting)", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("2", "e", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 2 /* Mar */, 31));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("2nd", "eo", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 2 /* Mar */, 31));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("03", "ee", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 1));
        });
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("Wed", "eee", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 2));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("Thursday", "eeee", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 3));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("S", "eeeee", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 2 /* Mar */, 30));
        });
        (0, vitest_1.it)("short", () => {
            const result = (0, index_js_1.parse)("Fr", "eeeeee", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4));
        });
        (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
            const result = (0, index_js_1.parse)("7th", "eo", referenceDate, {
                weekStartsOn: /* Fri */ 5,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 10));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["y", "2019"],
                ["R", "2019"],
                ["u", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["I", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["E", "Mon"],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when e is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} e`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`e\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("local day of week (stand-alone)", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("2", "c", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 2 /* Mar */, 31));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("2nd", "co", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 2 /* Mar */, 31));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("03", "cc", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 1));
        });
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("Wed", "ccc", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 2));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("Thursday", "cccc", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 3));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("S", "ccccc", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 2 /* Mar */, 30));
        });
        (0, vitest_1.it)("short", () => {
            const result = (0, index_js_1.parse)("Fr", "cccccc", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4));
        });
        (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
            const result = (0, index_js_1.parse)("7th", "co", referenceDate, {
                weekStartsOn: /* Fri */ 5,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 10));
        });
        (0, vitest_1.describe)("validation", () => {
            const tokensToValidate = [
                ["y", "2019"],
                ["R", "2019"],
                ["u", "2019"],
                ["Q", "1"],
                ["q", "1"],
                ["M", "1"],
                ["L", "1"],
                ["I", "1"],
                ["d", "1"],
                ["D", "1", { useAdditionalDayOfYearTokens: true }],
                ["E", "Mon"],
                ["i", "1"],
                ["e", "1"],
                ["c", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ];
            tokensToValidate.forEach(([token, example, options]) => {
                (0, vitest_1.it)(`throws an error when c is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} c`, referenceDate, options);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`c\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("AM, PM", () => {
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("5 AM", "h a", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 5));
        });
        (0, vitest_1.it)("12 AM", () => {
            const result = (0, index_js_1.parse)("12 AM", "h aa", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 0));
        });
        (0, vitest_1.it)("12 PM", () => {
            const result = (0, index_js_1.parse)("12 PM", "h aaa", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 12));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("5 p.m.", "h aaaa", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 17));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("11 a", "h aaaaa", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 11));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["a", "AM"],
                ["b", "AM"],
                ["B", "in the morning"],
                ["H", "1"],
                ["k", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when a is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} AM`, `${token} a`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`a\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("AM, PM, noon, midnight", () => {
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("noon", "b", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 12));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("midnight", "bbbb", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 0));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("mi", "bbbbb", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 0));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["a", "AM"],
                ["b", "AM"],
                ["B", "in the morning"],
                ["H", "1"],
                ["k", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when b is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} AM`, `${token} b`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`b\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("flexible day period", () => {
        (0, vitest_1.it)("abbreviated", () => {
            const result = (0, index_js_1.parse)("2 at night", "h B", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 2));
        });
        (0, vitest_1.it)("wide", () => {
            const result = (0, index_js_1.parse)("12 in the afternoon", "h BBBB", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 12));
        });
        (0, vitest_1.it)("narrow", () => {
            const result = (0, index_js_1.parse)("5 in the evening", "h BBBBB", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 17));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["a", "AM"],
                ["b", "AM"],
                ["B", "in the morning"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when B is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} in the morning`, `${token} B`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`B\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("hour [1-12]", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("1", "h", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 1));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("1st", "ho", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 1));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("01", "hh", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 1));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["h", "1"],
                ["H", "1"],
                ["K", "1"],
                ["k", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when h is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} h`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`h\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("hour [0-23]", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("12", "H", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 12));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("12th", "Ho", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 12));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("00", "HH", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 0));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["a", "AM"],
                ["b", "AM"],
                ["h", "1"],
                ["H", "1"],
                ["K", "1"],
                ["k", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when H is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} H`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`H\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("hour [0-11]", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("1", "K", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 1));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("1st", "Ko", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 1));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("1", "KK", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 1));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["h", "1"],
                ["H", "1"],
                ["K", "1"],
                ["k", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when K is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} K`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`K\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("hour [1-24]", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("12", "k", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 12));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("12th", "ko", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 12));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("24", "kk", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 0));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["a", "AM"],
                ["b", "AM"],
                ["h", "1"],
                ["H", "1"],
                ["K", "1"],
                ["k", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when k is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} k`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`k\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("minute", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("25", "m", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 25));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("25th", "mo", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 25));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("05", "mm", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 5));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["m", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when m is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} m`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`m\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("second", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("25", "s", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 32, 25));
        });
        (0, vitest_1.it)("ordinal", () => {
            const result = (0, index_js_1.parse)("25th", "so", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 32, 25));
        });
        (0, vitest_1.it)("zero-padding", () => {
            const result = (0, index_js_1.parse)("05", "ss", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 32, 5));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["s", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when s is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} s`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`s\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("fraction of second", () => {
        (0, vitest_1.it)("1/10 of second", () => {
            const result = (0, index_js_1.parse)("1", "S", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 100));
        });
        (0, vitest_1.it)("1/100 of second", () => {
            const result = (0, index_js_1.parse)("12", "SS", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 120));
        });
        (0, vitest_1.it)("millisecond", () => {
            const result = (0, index_js_1.parse)("123", "SSS", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 123));
        });
        (0, vitest_1.it)("specified amount of digits", () => {
            const result = (0, index_js_1.parse)("567890", "SSSSSS", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 567));
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["S", "1"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when S is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} 1`, `${token} S`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`S\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("timezone (ISO-8601 w/ Z)", () => {
        (0, vitest_1.describe)("X", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-0530", "yyyy-MM-dd'T'HH:mm:ss.SSSX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123Z", "yyyy-MM-dd'T'HH:mm:ss.SSSX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
            (0, vitest_1.it)("hours", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+05", "yyyy-MM-dd'T'HH:mm:ss.SSSX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123+05:00"));
            });
        });
        (0, vitest_1.describe)("XX", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-0530", "yyyy-MM-dd'T'HH:mm:ss.SSSXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123Z", "yyyy-MM-dd'T'HH:mm:ss.SSSXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
        });
        (0, vitest_1.describe)("XXX", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-05:30", "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123Z", "yyyy-MM-dd'T'HH:mm:ss.SSSXXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
        });
        (0, vitest_1.describe)("XXXX", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-0530", "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123Z", "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
            (0, vitest_1.it)("hours, minutes and seconds", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+053045", "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:37:53.123+05:30"));
            });
        });
        (0, vitest_1.describe)("XXXXX", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-05:30", "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123Z", "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
            (0, vitest_1.it)("hours, minutes and seconds", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+05:30:45", "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:37:53.123+05:30"));
            });
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["X", "-0530"],
                ["x", "-0530"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when X is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} -0530`, `${token} X`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`X\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("timezone (ISO-8601 w/o Z)", () => {
        (0, vitest_1.describe)("x", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-0530", "yyyy-MM-dd'T'HH:mm:ss.SSSx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+0000", "yyyy-MM-dd'T'HH:mm:ss.SSSx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
            (0, vitest_1.it)("hours", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+05", "yyyy-MM-dd'T'HH:mm:ss.SSSx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123+05:00"));
            });
        });
        (0, vitest_1.describe)("xx", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-0530", "yyyy-MM-dd'T'HH:mm:ss.SSSxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+0000", "yyyy-MM-dd'T'HH:mm:ss.SSSxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
        });
        (0, vitest_1.describe)("xxx", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-05:30", "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+00:00", "yyyy-MM-dd'T'HH:mm:ss.SSSxxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
        });
        (0, vitest_1.describe)("xxxx", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-0530", "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+0000", "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
            (0, vitest_1.it)("hours, minutes and seconds", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+053045", "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:37:53.123+05:30"));
            });
        });
        (0, vitest_1.describe)("xxxxx", () => {
            (0, vitest_1.it)("hours and minutes", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123-05:30", "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123-05:30"));
            });
            (0, vitest_1.it)("GMT", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+00:00", "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:38:38.123Z"));
            });
            (0, vitest_1.it)("hours, minutes and seconds", () => {
                const result = (0, index_js_1.parse)("2016-11-25T16:38:38.123+05:30:45", "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date("2016-11-25T16:37:53.123+05:30"));
            });
        });
        (0, vitest_1.describe)("validation", () => {
            [
                ["X", "-0530"],
                ["x", "-0530"],
                ["t", "512969520"],
                ["T", "512969520900"],
            ].forEach(([token, example]) => {
                (0, vitest_1.it)(`throws an error when x is used after ${token}`, () => {
                    const block = () => (0, index_js_1.parse)(`${example} -0530`, `${token} x`, referenceDate);
                    (0, vitest_1.expect)(block).toThrow(RangeError);
                    (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`${token}\` and \`x\` at the same time`));
                });
            });
        });
    });
    (0, vitest_1.describe)("seconds timestamp", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("512969520", "t", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(512969520000));
        });
        (0, vitest_1.it)("specified amount of digits", () => {
            const result = (0, index_js_1.parse)("00000000000512969520", "tttttttttttttttttttt", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(512969520000));
        });
        (0, vitest_1.it)(`throws an error when it is used after any token`, () => {
            const block = () => (0, index_js_1.parse)(`1 512969520`, `h t`, referenceDate);
            (0, vitest_1.expect)(block).toThrow(RangeError);
            (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`t\` and any other token at the same time`));
        });
    });
    (0, vitest_1.describe)("milliseconds timestamp", () => {
        (0, vitest_1.it)("numeric", () => {
            const result = (0, index_js_1.parse)("512969520900", "T", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(512969520900));
        });
        (0, vitest_1.it)("specified amount of digits", () => {
            const result = (0, index_js_1.parse)("00000000512969520900", "TTTTTTTTTTTTTTTTTTTT", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(512969520900));
        });
        (0, vitest_1.it)(`throws an error when it is used after any token`, () => {
            const block = () => (0, index_js_1.parse)(`1 512969520900`, `h T`, referenceDate);
            (0, vitest_1.expect)(block).toThrow(RangeError);
            (0, vitest_1.expect)(block).toThrow(new RegExp(`The format string mustn't contain \`T\` and any other token at the same time`));
        });
    });
    (0, vitest_1.describe)("common formats", () => {
        (0, vitest_1.it)("ISO-8601", () => {
            const result = (0, index_js_1.parse)("20161105T040404", "yyyyMMdd'T'HHmmss", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0));
        });
        (0, vitest_1.it)("ISO week-numbering date", () => {
            const result = (0, index_js_1.parse)("2016W474T153005", "RRRR'W'IIi'T'HHmmss", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2016, 10 /* Nov */, 24, 15, 30, 5, 0));
        });
        (0, vitest_1.it)("ISO day of year date", () => {
            const result = (0, index_js_1.parse)("2010123T235959", "yyyyDDD'T'HHmmss", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2010, 4 /* May */, 3, 23, 59, 59, 0));
        });
        (0, vitest_1.it)("Date.prototype.toString()", () => {
            const dateString = "Wed Jul 02 2014 05:30:15 GMT+0600";
            const formatString = "EEE MMM dd yyyy HH:mm:ss 'GMT'xx";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(dateString));
        });
        (0, vitest_1.it)("Date.prototype.toISOString()", () => {
            const dateString = "2014-07-02T05:30:15.123+06:00";
            const formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(dateString));
        });
        (0, vitest_1.it)("middle-endian", () => {
            const result = (0, index_js_1.parse)("5 a.m. 07/02/2016", "h aaaa MM/dd/yyyy", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2016, 6 /* Jul */, 2, 5, 0, 0, 0));
        });
        (0, vitest_1.it)("little-endian", () => {
            const result = (0, index_js_1.parse)("02.07.1995", "dd.MM.yyyy", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(1995, 6 /* Jul */, 2, 0, 0, 0, 0));
        });
    });
    (0, vitest_1.describe)("priority", () => {
        (0, vitest_1.it)("units of lower priority don't overwrite values of higher priority", () => {
            const dateString = "+06:00 123 15 30 05 02 07 2014";
            const formatString = "xxx SSS ss mm HH dd MM yyyy";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date("2014-07-02T05:30:15.123+06:00"));
        });
    });
    (0, vitest_1.describe)("with `options.strictValidation` = true", () => {
        (0, vitest_1.describe)("calendar year", () => {
            (0, vitest_1.it)("returns `Invalid Date` for year zero", () => {
                const result = (0, index_js_1.parse)("0", "y", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("works correctly for two-digit year zero", () => {
                const result = (0, index_js_1.parse)("00", "yy", referenceDate);
                (0, vitest_1.expect)(result).toEqual(new Date(2000, 0 /* Jan */, 1));
            });
        });
        (0, vitest_1.describe)("local week-numbering year", () => {
            (0, vitest_1.it)("returns `Invalid Date` for year zero", () => {
                const result = (0, index_js_1.parse)("0", "Y", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("works correctly for two-digit year zero", () => {
                const result = (0, index_js_1.parse)("00", "YY", referenceDate, {
                    useAdditionalWeekYearTokens: true,
                });
                (0, vitest_1.expect)(result).toEqual(new Date(1999, 11 /* Dec */, 26));
            });
        });
        (0, vitest_1.describe)("quarter (formatting)", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid quarter", () => {
                const result = (0, index_js_1.parse)("0", "Q", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("quarter (stand-alone)", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid quarter", () => {
                const result = (0, index_js_1.parse)("5", "q", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("month (formatting)", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid month", () => {
                const result = (0, index_js_1.parse)("00", "MM", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("month (stand-alone)", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid month", () => {
                const result = (0, index_js_1.parse)("13", "LL", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("local week of year", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid week", () => {
                const result = (0, index_js_1.parse)("0", "w", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("ISO week of year", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid week", () => {
                const result = (0, index_js_1.parse)("54", "II", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("day of month", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid day of the month", () => {
                const result = (0, index_js_1.parse)("30", "d", new Date(2012, 1 /* Feb */, 1));
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for 29th of February of non-leap year", () => {
                const result = (0, index_js_1.parse)("29", "d", new Date(2014, 1 /* Feb */, 1));
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("parses 29th of February of leap year", () => {
                const result = (0, index_js_1.parse)("29", "d", new Date(2012, 1 /* Feb */, 1));
                (0, vitest_1.expect)(result).toEqual(new Date(2012, 1 /* Feb */, 29));
            });
        });
        (0, vitest_1.describe)("day of year", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid day of the year", () => {
                const result = (0, index_js_1.parse)("0", "D", referenceDate, {
                    useAdditionalDayOfYearTokens: true,
                });
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for 366th day of non-leap year", () => {
                const result = (0, index_js_1.parse)("366", "D", new Date(2014, 1 /* Feb */, 1), {
                    useAdditionalDayOfYearTokens: true,
                });
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("parses 366th day of leap year", () => {
                const result = (0, index_js_1.parse)("366", "D", new Date(2012, 1 /* Feb */, 1), {
                    useAdditionalDayOfYearTokens: true,
                });
                (0, vitest_1.expect)(result).toEqual(new Date(2012, 11 /* Dec */, 31));
            });
        });
        (0, vitest_1.describe)("ISO day of week (formatting)", () => {
            (0, vitest_1.it)("returns `Invalid Date` for day zero", () => {
                const result = (0, index_js_1.parse)("0", "i", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for eight day of week", () => {
                const result = (0, index_js_1.parse)("8", "i", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("local day of week (formatting)", () => {
            (0, vitest_1.it)("returns `Invalid Date` for day zero", () => {
                const result = (0, index_js_1.parse)("0", "e", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for eight day of week", () => {
                const result = (0, index_js_1.parse)("8", "e", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("local day of week (stand-alone)", () => {
            (0, vitest_1.it)("returns `Invalid Date` for day zero", () => {
                const result = (0, index_js_1.parse)("0", "c", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for eight day of week", () => {
                const result = (0, index_js_1.parse)("8", "c", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("hour [1-12]", () => {
            (0, vitest_1.it)("returns `Invalid Date` for hour zero", () => {
                const result = (0, index_js_1.parse)("00", "hh", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for invalid hour", () => {
                const result = (0, index_js_1.parse)("13", "hh", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("hour [0-23]", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid hour", () => {
                const result = (0, index_js_1.parse)("24", "HH", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("hour [0-11]", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid hour", () => {
                const result = (0, index_js_1.parse)("12", "KK", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("hour [1-24]", () => {
            (0, vitest_1.it)("returns `Invalid Date` for hour zero", () => {
                const result = (0, index_js_1.parse)("00", "kk", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
            (0, vitest_1.it)("returns `Invalid Date` for invalid hour", () => {
                const result = (0, index_js_1.parse)("25", "kk", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("minute", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid minute", () => {
                const result = (0, index_js_1.parse)("60", "mm", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
        (0, vitest_1.describe)("second", () => {
            (0, vitest_1.it)("returns `Invalid Date` for invalid second", () => {
                const result = (0, index_js_1.parse)("60", "ss", referenceDate);
                (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
            });
        });
    });
    (0, vitest_1.describe)("custom locale", () => {
        (0, vitest_1.it)("allows to pass a custom locale", () => {
            const customLocale = {
                match: {
                    era: () => {
                        return {
                            value: 0,
                            rest: " it works!",
                        };
                    },
                },
            };
            const result = (0, index_js_1.parse)("2018 foobar", "y G 'it works!'", referenceDate, {
                // @ts-expect-error - It's oke to have incomplete locale
                locale: customLocale,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(-2017, 0 /* Jan */, 1));
        });
    });
    (0, vitest_1.it)("accepts a timestamp as `referenceDate`", () => {
        const dateString = "6 p.m.";
        const formatString = "h aaaa";
        const result = (0, index_js_1.parse)(dateString, formatString, referenceDate.getTime());
        (0, vitest_1.expect)(result).toEqual(new Date(1986, 3 /* Apr */, 4, 18));
    });
    (0, vitest_1.it)("does not mutate `referenceDate`", () => {
        const referenceDateClone1 = new Date(referenceDate.getTime());
        const referenceDateClone2 = new Date(referenceDate.getTime());
        const dateString = "6 p.m.";
        const formatString = "h aaaa";
        (0, index_js_1.parse)(dateString, formatString, referenceDateClone1);
        (0, vitest_1.expect)(referenceDateClone1).toEqual(referenceDateClone2);
    });
    (0, vitest_1.describe)("failure", () => {
        (0, vitest_1.it)("returns `referenceDate` if `dateString` and `formatString` are empty strings", () => {
            const dateString = "";
            const formatString = "";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(referenceDate);
        });
        (0, vitest_1.it)("returns `referenceDate` if no tokens in `formatString` are provided", () => {
            const dateString = "not a token";
            const formatString = "'not a token'";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(referenceDate);
        });
        (0, vitest_1.it)("returns `Invalid Date`  if `formatString` doesn't match `dateString`", () => {
            const dateString = "2017-01-01";
            const formatString = "yyyy/MM/dd";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
        });
        (0, vitest_1.it)("returns `Invalid Date`  if `formatString` tokens failed to parse a value", () => {
            const dateString = "2017-01-01";
            const formatString = "MMMM do yyyy";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
        });
        (0, vitest_1.it)("returns `Invalid Date` if `formatString` is empty string but `dateString` is not", () => {
            const dateString = "2017-01-01";
            const formatString = "";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
        });
        (0, vitest_1.it)("returns `Invalid Date` if `referenceDate` is `Invalid Date`", () => {
            const dateString = "2014-07-02T05:30:15.123+06:00";
            const formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
            const result = (0, index_js_1.parse)(dateString, formatString, new Date(NaN));
            (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
        });
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("returns Invalid Date if the string contains some remaining input after parsing", () => {
            const result = (0, index_js_1.parse)("2016-11-05T040404", "yyyy-MM-dd", referenceDate);
            (0, vitest_1.expect)(result instanceof Date && isNaN(result.getTime())).toBe(true);
        });
        (0, vitest_1.it)("parses normally if the remaining input is just whitespace", () => {
            const result = (0, index_js_1.parse)("2016-11-05   \n", "yyyy-MM-dd", referenceDate);
            (0, vitest_1.expect)(result).toEqual(new Date(2016, 10 /* Nov */, 5));
        });
        (0, vitest_1.it)("throws RangeError exception if the format string contains an unescaped latin alphabet character", () => {
            (0, vitest_1.expect)(() => (0, index_js_1.parse)("2016-11-05-nnnn", "yyyy-MM-dd-nnnn", referenceDate)).toThrow(RangeError);
        });
    });
    (0, vitest_1.describe)("useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options", () => {
        (0, vitest_1.it)("throws an error if D token is used", () => {
            try {
                (0, index_js_1.parse)("2016 5", "yyyy D", referenceDate);
            }
            catch (e) {
                (0, vitest_1.expect)(e instanceof RangeError &&
                    e.message.startsWith("Use `d` instead of `D`")).toBe(true);
            }
        });
        (0, vitest_1.it)("allows D token if useAdditionalDayOfYearTokens is set to true", () => {
            const result = (0, index_js_1.parse)("2016 5", "yyyy D", referenceDate, {
                useAdditionalDayOfYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2016, 0, 5));
        });
        (0, vitest_1.it)("throws an error if DD token is used", () => {
            try {
                (0, index_js_1.parse)("2016 05", "yyyy DD", referenceDate);
            }
            catch (e) {
                (0, vitest_1.expect)(e instanceof RangeError &&
                    e.message.startsWith("Use `dd` instead of `DD`")).toBe(true);
            }
        });
        (0, vitest_1.it)("allows DD token if useAdditionalDayOfYearTokens is set to true", () => {
            const result = (0, index_js_1.parse)("2016 05", "yyyy DD", referenceDate, {
                useAdditionalDayOfYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2016, 0, 5));
        });
        (0, vitest_1.it)("throws an error if YY token is used", () => {
            try {
                (0, index_js_1.parse)("16 1", "YY w", referenceDate);
            }
            catch (e) {
                (0, vitest_1.expect)(e instanceof RangeError &&
                    e.message.startsWith("Use `yy` instead of `YY`")).toBe(true);
            }
        });
        (0, vitest_1.it)("allows YY token if useAdditionalWeekYearTokens is set to true", () => {
            const result = (0, index_js_1.parse)("16 1", "YY w", referenceDate, {
                useAdditionalWeekYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2015, 11, 27));
        });
        (0, vitest_1.it)("throws an error if YYYY token is used", () => {
            try {
                (0, index_js_1.parse)("2016 1", "YYYY w", referenceDate);
            }
            catch (e) {
                (0, vitest_1.expect)(e instanceof RangeError &&
                    e.message.startsWith("Use `yyyy` instead of `YYYY`")).toBe(true);
            }
        });
        (0, vitest_1.it)("allows YYYY token if useAdditionalWeekYearTokens is set to true", () => {
            const result = (0, index_js_1.parse)("2016 1", "YYYY w", referenceDate, {
                useAdditionalWeekYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual(new Date(2015, 11, 27));
        });
    });
    (0, vitest_1.describe)("long format", () => {
        (0, vitest_1.it)("short date", () => {
            const expected = new Date(1995, 4 /* May */, 26);
            const dateString = "05/26/1995";
            const formatString = "P";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("medium date", () => {
            const expected = new Date(1995, 4 /* May */, 26);
            const dateString = "May 26, 1995";
            const formatString = "PP";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("long date", () => {
            const expected = new Date(1995, 4 /* May */, 26);
            const dateString = "May 26th, 1995";
            const formatString = "PPP";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("full date", () => {
            const expected = new Date(1995, 4 /* May */, 26);
            const dateString = "Friday, May 26th, 1995";
            const formatString = "PPPP";
            const result = (0, index_js_1.parse)(dateString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("short time", () => {
            const expected = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), 10, 32);
            const timeString = "10:32 AM";
            const formatString = "p";
            const result = (0, index_js_1.parse)(timeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("medium time", () => {
            const expected = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate(), 10, 32, 55);
            const timeString = "10:32:55 AM";
            const formatString = "pp";
            const result = (0, index_js_1.parse)(timeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("short date + short time", () => {
            const expected = new Date(1995, 4 /* May */, 26, 10, 32);
            const dateTimeString = "05/26/1995, 10:32 AM";
            const formatString = "Pp";
            const result = (0, index_js_1.parse)(dateTimeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("medium date + short time", () => {
            const expected = new Date(1995, 4 /* May */, 26, 10, 32);
            const dateTimeString = "May 26, 1995, 10:32 AM";
            const formatString = "PPp";
            const result = (0, index_js_1.parse)(dateTimeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("long date + short time", () => {
            const expected = new Date(1995, 4 /* May */, 26, 10, 32);
            const dateTimeString = "May 26th, 1995 at 10:32 AM";
            const formatString = "PPPp";
            const result = (0, index_js_1.parse)(dateTimeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("full date + short time", () => {
            const expected = new Date(1995, 4 /* May */, 26, 10, 32);
            const dateTimeString = "Friday, May 26th, 1995 at 10:32 AM";
            const formatString = "PPPPp";
            const result = (0, index_js_1.parse)(dateTimeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("short date + short time", () => {
            const expected = new Date(1995, 4 /* May */, 26, 10, 32, 55);
            const dateTimeString = "05/26/1995, 10:32:55 AM";
            const formatString = "Ppp";
            const result = (0, index_js_1.parse)(dateTimeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("medium date + short time", () => {
            const expected = new Date(1995, 4 /* May */, 26, 10, 32, 55);
            const dateTimeString = "May 26, 1995, 10:32:55 AM";
            const formatString = "PPpp";
            const result = (0, index_js_1.parse)(dateTimeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("long date + short time", () => {
            const expected = new Date(1995, 4 /* May */, 26, 10, 32, 55);
            const dateTimeString = "May 26th, 1995 at 10:32:55 AM";
            const formatString = "PPPpp";
            const result = (0, index_js_1.parse)(dateTimeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
        (0, vitest_1.it)("full date + short time", () => {
            const expected = new Date(1995, 4 /* May */, 26, 10, 32, 55);
            const dateTimeString = "Friday, May 26th, 1995 at 10:32:55 AM";
            const formatString = "PPPPpp";
            const result = (0, index_js_1.parse)(dateTimeString, formatString, referenceDate);
            (0, vitest_1.expect)(result).toEqual(expected);
        });
    });
});
