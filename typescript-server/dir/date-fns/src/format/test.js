"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const sinon_1 = __importDefault(require("sinon"));
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("format", () => {
    const date = new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123);
    const offset = date.getTimezoneOffset();
    const absoluteOffset = Math.abs(offset);
    const hours = Math.trunc(absoluteOffset / 60);
    const hoursLeadingZero = hours < 10 ? "0" : "";
    const minutes = absoluteOffset % 60;
    const minutesLeadingZero = minutes < 10 ? "0" : "";
    const sign = offset > 0 ? "-" : "+";
    const timezone = sign + hoursLeadingZero + hours + ":" + minutesLeadingZero + minutes;
    const timezoneShort = timezone.replace(":", "");
    const timezoneWithOptionalMinutesShort = minutes === 0 ? sign + hoursLeadingZero + hours : timezoneShort;
    const timezoneWithZ = offset === 0 ? "Z" : timezone;
    const timezoneWithZShort = offset === 0 ? "Z" : timezoneShort;
    const timezoneWithOptionalMinutesAndZShort = offset === 0 ? "Z" : timezoneWithOptionalMinutesShort;
    const timezoneGMTShort = minutes === 0
        ? "GMT" + sign + hours
        : "GMT" + sign + hours + ":" + minutesLeadingZero + minutes;
    const timezoneGMT = "GMT" + timezone;
    const timestamp = date.getTime().toString();
    const secondsTimestamp = Math.trunc(date.getTime() / 1000).toString();
    (0, vitest_1.it)("accepts a timestamp", () => {
        const date = new Date(2014, 3, 4).getTime();
        (0, vitest_1.expect)((0, index_js_1.format)(date, "yyyy-MM-dd")).toBe("2014-04-04");
    });
    (0, vitest_1.it)("escapes characters between the single quote characters", () => {
        const result = (0, index_js_1.format)(date, "'yyyy-'MM-dd'THH:mm:ss.SSSX' yyyy-'MM-dd'");
        (0, vitest_1.expect)(result).toBe("yyyy-04-04THH:mm:ss.SSSX 1986-MM-dd");
    });
    (0, vitest_1.it)('two single quote characters are transformed into a "real" single quote', () => {
        const date = new Date(2014, 3, 4, 5);
        (0, vitest_1.expect)((0, index_js_1.format)(date, "''h 'o''clock'''")).toBe("'5 o'clock'");
    });
    (0, vitest_1.it)("accepts new line charactor", () => {
        const date = new Date(2014, 3, 4, 5);
        (0, vitest_1.expect)((0, index_js_1.format)(date, "yyyy-MM-dd'\n'HH:mm:ss")).toBe("2014-04-04\n05:00:00");
    });
    (0, vitest_1.it)("alias formatDate has same behavior as format", () => {
        const date = new Date(2014, 3, 4, 5);
        (0, vitest_1.expect)((0, index_js_1.formatDate)(date, "yyyy-MM-dd'\n'HH:mm:ss")).toBe((0, index_js_1.format)(date, "yyyy-MM-dd'\n'HH:mm:ss"));
    });
    (0, vitest_1.describe)("ordinal numbers", () => {
        (0, vitest_1.it)("ordinal day of an ordinal month", () => {
            const result = (0, index_js_1.format)(date, "do 'day of the' Mo 'month of' yyyy");
            (0, vitest_1.expect)(result).toBe("4th day of the 4th month of 1986");
        });
        (0, vitest_1.it)("should return a correct ordinal number", () => {
            const result = [];
            for (let i = 1; i <= 31; i++) {
                result.push((0, index_js_1.format)(new Date(2015, 0, i), "do"));
            }
            const expected = [
                "1st",
                "2nd",
                "3rd",
                "4th",
                "5th",
                "6th",
                "7th",
                "8th",
                "9th",
                "10th",
                "11th",
                "12th",
                "13th",
                "14th",
                "15th",
                "16th",
                "17th",
                "18th",
                "19th",
                "20th",
                "21st",
                "22nd",
                "23rd",
                "24th",
                "25th",
                "26th",
                "27th",
                "28th",
                "29th",
                "30th",
                "31st",
            ];
            (0, vitest_1.expect)(result).toEqual(expected);
        });
    });
    (0, vitest_1.it)("era", () => {
        const result = (0, index_js_1.format)(date, "G GG GGG GGGG GGGGG");
        (0, vitest_1.expect)(result).toBe("AD AD AD Anno Domini A");
        const bcDate = new Date();
        bcDate.setFullYear(-1, 0 /* Jan */, 1);
        const bcResult = (0, index_js_1.format)(bcDate, "G GG GGG GGGG GGGGG");
        (0, vitest_1.expect)(bcResult).toBe("BC BC BC Before Christ B");
    });
    (0, vitest_1.describe)("year", () => {
        (0, vitest_1.describe)("regular year", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "y yo yy yyy yyyy yyyyy");
                (0, vitest_1.expect)(result).toBe("1986 1986th 86 1986 1986 01986");
            });
            (0, vitest_1.it)("1 BC formats as 1", () => {
                const date = new Date(0);
                date.setFullYear(0, 0 /* Jan */, 1);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.format)(date, "y");
                (0, vitest_1.expect)(result).toBe("1");
            });
            (0, vitest_1.it)("2 BC formats as 2", () => {
                const date = new Date(0);
                date.setFullYear(-1, 0 /* Jan */, 1);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.format)(date, "y");
                (0, vitest_1.expect)(result).toBe("2");
            });
            (0, vitest_1.it)("2 BC formats as 2nd", () => {
                const date = new Date();
                date.setFullYear(-1, 0 /* Jan */, 1);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.format)(date, "yo");
                (0, vitest_1.expect)(result).toBe("2nd");
            });
        });
        (0, vitest_1.describe)("local week-numbering year", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "Y Yo YY YYY YYYY YYYYY", {
                    useAdditionalWeekYearTokens: true,
                });
                (0, vitest_1.expect)(result).toBe("1986 1986th 86 1986 1986 01986");
            });
            (0, vitest_1.it)("the first week of the next year", () => {
                const result = (0, index_js_1.format)(new Date(2013, 11 /* Dec */, 29), "YYYY", {
                    useAdditionalWeekYearTokens: true,
                });
                (0, vitest_1.expect)(result).toBe("2014");
            });
            (0, vitest_1.it)("allows to specify `weekStartsOn` and `firstWeekContainsDate` in options", () => {
                const result = (0, index_js_1.format)(new Date(2013, 11 /* Dec */, 29), "YYYY", {
                    weekStartsOn: 1,
                    firstWeekContainsDate: 4,
                    useAdditionalWeekYearTokens: true,
                });
                (0, vitest_1.expect)(result).toBe("2013");
            });
            (0, vitest_1.it)("the first week of year", () => {
                const result = (0, index_js_1.format)(new Date(2016, 0 /* Jan */, 1), "YYYY", {
                    useAdditionalWeekYearTokens: true,
                });
                (0, vitest_1.expect)(result).toBe("2016");
            });
            (0, vitest_1.it)("1 BC formats as 1", () => {
                const date = new Date(0);
                date.setFullYear(0, 6 /* Jul */, 2);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.format)(date, "Y");
                (0, vitest_1.expect)(result).toBe("1");
            });
            (0, vitest_1.it)("2 BC formats as 2", () => {
                const date = new Date(0);
                date.setFullYear(-1, 6 /* Jul */, 2);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.format)(date, "Y");
                (0, vitest_1.expect)(result).toBe("2");
            });
        });
        (0, vitest_1.describe)("ISO week-numbering year", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "R RR RRR RRRR RRRRR");
                (0, vitest_1.expect)(result).toBe("1986 1986 1986 1986 01986");
            });
            (0, vitest_1.it)("the first week of the next year", () => {
                const result = (0, index_js_1.format)(new Date(2013, 11 /* Dec */, 30), "RRRR");
                (0, vitest_1.expect)(result).toBe("2014");
            });
            (0, vitest_1.it)("the last week of the previous year", () => {
                const result = (0, index_js_1.format)(new Date(2016, 0 /* Jan */, 1), "RRRR");
                (0, vitest_1.expect)(result).toBe("2015");
            });
            (0, vitest_1.it)("1 BC formats as 0", () => {
                const date = new Date(0);
                date.setFullYear(0, 6 /* Jul */, 2);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.format)(date, "R");
                (0, vitest_1.expect)(result).toBe("0");
            });
            (0, vitest_1.it)("2 BC formats as -1", () => {
                const date = new Date(0);
                date.setFullYear(-1, 6 /* Jul */, 2);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.format)(date, "R");
                (0, vitest_1.expect)(result).toBe("-1");
            });
        });
        (0, vitest_1.describe)("extended year", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "u uu uuu uuuu uuuuu");
                (0, vitest_1.expect)(result).toBe("1986 1986 1986 1986 01986");
            });
            (0, vitest_1.it)("1 BC formats as 0", () => {
                const date = new Date(0);
                date.setFullYear(0, 0, 1);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.format)(date, "u");
                (0, vitest_1.expect)(result).toBe("0");
            });
            (0, vitest_1.it)("2 BC formats as -1", () => {
                const date = new Date(0);
                date.setFullYear(-1, 0, 1);
                date.setHours(0, 0, 0, 0);
                const result = (0, index_js_1.format)(date, "u");
                (0, vitest_1.expect)(result).toBe("-1");
            });
        });
    });
    (0, vitest_1.describe)("quarter", () => {
        (0, vitest_1.it)("formatting quarter", () => {
            const result = (0, index_js_1.format)(date, "Q Qo QQ QQQ QQQQ QQQQQ");
            (0, vitest_1.expect)(result).toBe("2 2nd 02 Q2 2nd quarter 2");
        });
        (0, vitest_1.it)("stand-alone quarter", () => {
            const result = (0, index_js_1.format)(date, "q qo qq qqq qqqq qqqqq");
            (0, vitest_1.expect)(result).toBe("2 2nd 02 Q2 2nd quarter 2");
        });
        (0, vitest_1.it)("returns a correct quarter for each month", () => {
            const result = [];
            for (let i = 0; i <= 11; i++) {
                result.push((0, index_js_1.format)(new Date(1986, i, 1), "Q"));
            }
            const expected = [
                "1",
                "1",
                "1",
                "2",
                "2",
                "2",
                "3",
                "3",
                "3",
                "4",
                "4",
                "4",
            ];
            (0, vitest_1.expect)(result).toEqual(expected);
        });
    });
    (0, vitest_1.describe)("month", () => {
        (0, vitest_1.it)("formatting month", () => {
            const result = (0, index_js_1.format)(date, "M Mo MM MMM MMMM MMMMM");
            (0, vitest_1.expect)(result).toBe("4 4th 04 Apr April A");
        });
        (0, vitest_1.it)("stand-alone month", () => {
            const result = (0, index_js_1.format)(date, "L Lo LL LLL LLLL LLLLL");
            (0, vitest_1.expect)(result).toBe("4 4th 04 Apr April A");
        });
    });
    (0, vitest_1.describe)("week", () => {
        (0, vitest_1.describe)("local week of year", () => {
            (0, vitest_1.it)("works as expected", () => {
                const date = new Date(1986, 3 /* Apr */, 6);
                const result = (0, index_js_1.format)(date, "w wo ww");
                (0, vitest_1.expect)(result).toBe("15 15th 15");
            });
            (0, vitest_1.it)("allows to specify `weekStartsOn` and `firstWeekContainsDate` in options", () => {
                const date = new Date(1986, 3 /* Apr */, 6);
                const result = (0, index_js_1.format)(date, "w wo ww", {
                    weekStartsOn: 1,
                    firstWeekContainsDate: 4,
                });
                (0, vitest_1.expect)(result).toBe("14 14th 14");
            });
        });
        (0, vitest_1.it)("ISO week of year", () => {
            const date = new Date(1986, 3 /* Apr */, 6);
            const result = (0, index_js_1.format)(date, "I Io II");
            (0, vitest_1.expect)(result).toBe("14 14th 14");
        });
    });
    (0, vitest_1.describe)("day", () => {
        (0, vitest_1.it)("date", () => {
            const result = (0, index_js_1.format)(date, "d do dd");
            (0, vitest_1.expect)(result).toBe("4 4th 04");
        });
        (0, vitest_1.describe)("day of year", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "D Do DD DDD DDDDD", {
                    useAdditionalDayOfYearTokens: true,
                });
                (0, vitest_1.expect)(result).toBe("94 94th 94 094 00094");
            });
            (0, vitest_1.it)("returns a correct day number for the last day of a leap year", () => {
                const result = (0, index_js_1.format)(new Date(1992, 11 /* Dec */, 31, 23, 59, 59, 999), "D", { useAdditionalDayOfYearTokens: true });
                (0, vitest_1.expect)(result).toBe("366");
            });
        });
    });
    (0, vitest_1.describe)("week day", () => {
        (0, vitest_1.describe)("day of week", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "E EE EEE EEEE EEEEE EEEEEE");
                (0, vitest_1.expect)(result).toBe("Fri Fri Fri Friday F Fr");
            });
        });
        (0, vitest_1.describe)("ISO day of week", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "i io ii iii iiii iiiii iiiiii");
                (0, vitest_1.expect)(result).toBe("5 5th 05 Fri Friday F Fr");
            });
            (0, vitest_1.it)("returns a correct day of an ISO week", () => {
                const result = [];
                for (let i = 1; i <= 7; i++) {
                    result.push((0, index_js_1.format)(new Date(1986, 8 /* Sep */, i), "i"));
                }
                const expected = ["1", "2", "3", "4", "5", "6", "7"];
                (0, vitest_1.expect)(result).toEqual(expected);
            });
        });
        (0, vitest_1.describe)("formatting day of week", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "e eo ee eee eeee eeeee eeeeee");
                (0, vitest_1.expect)(result).toBe("6 6th 06 Fri Friday F Fr");
            });
            (0, vitest_1.it)("by default, 1 is Sunday, 2 is Monday, ...", () => {
                const result = [];
                for (let i = 7; i <= 13; i++) {
                    result.push((0, index_js_1.format)(new Date(1986, 8 /* Sep */, i), "e"));
                }
                const expected = ["1", "2", "3", "4", "5", "6", "7"];
                (0, vitest_1.expect)(result).toEqual(expected);
            });
            (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
                const result = [];
                for (let i = 1; i <= 7; i++) {
                    result.push((0, index_js_1.format)(new Date(1986, 8 /* Sep */, i), "e", { weekStartsOn: 1 }));
                }
                const expected = ["1", "2", "3", "4", "5", "6", "7"];
                (0, vitest_1.expect)(result).toEqual(expected);
            });
        });
        (0, vitest_1.describe)("stand-alone day of week", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "c co cc ccc cccc ccccc cccccc");
                (0, vitest_1.expect)(result).toBe("6 6th 06 Fri Friday F Fr");
            });
            (0, vitest_1.it)("by default, 1 is Sunday, 2 is Monday, ...", () => {
                const result = [];
                for (let i = 7; i <= 13; i++) {
                    result.push((0, index_js_1.format)(new Date(1986, 8 /* Sep */, i), "c"));
                }
                const expected = ["1", "2", "3", "4", "5", "6", "7"];
                (0, vitest_1.expect)(result).toEqual(expected);
            });
            (0, vitest_1.it)("allows to specify which day is the first day of the week", () => {
                const result = [];
                for (let i = 1; i <= 7; i++) {
                    result.push((0, index_js_1.format)(new Date(1986, 8 /* Sep */, i), "c", { weekStartsOn: 1 }));
                }
                const expected = ["1", "2", "3", "4", "5", "6", "7"];
                (0, vitest_1.expect)(result).toEqual(expected);
            });
        });
    });
    (0, vitest_1.describe)("day period and hour", () => {
        (0, vitest_1.it)("hour [1-12]", () => {
            const result = (0, index_js_1.format)(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), "h ho hh");
            (0, vitest_1.expect)(result).toBe("12 12th 12");
        });
        (0, vitest_1.it)("hour [0-23]", () => {
            const result = (0, index_js_1.format)(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), "H Ho HH");
            (0, vitest_1.expect)(result).toBe("0 0th 00");
        });
        (0, vitest_1.it)("hour [0-11]", () => {
            const result = (0, index_js_1.format)(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), "K Ko KK");
            (0, vitest_1.expect)(result).toBe("0 0th 00");
        });
        (0, vitest_1.it)("hour [1-24]", () => {
            const result = (0, index_js_1.format)(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), "k ko kk");
            (0, vitest_1.expect)(result).toBe("24 24th 24");
        });
        (0, vitest_1.describe)("AM, PM", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0), "a aa aaa aaaa aaaaa");
                (0, vitest_1.expect)(result).toBe("AM AM am a.m. a");
            });
            (0, vitest_1.it)("12 PM", () => {
                const date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.format)(date, "h H K k a")).toBe("12 12 0 12 PM");
            });
            (0, vitest_1.it)("12 AM", () => {
                const date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.format)(date, "h H K k a")).toBe("12 0 0 24 AM");
            });
        });
        (0, vitest_1.describe)("AM, PM, noon, midnight", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(new Date(1986, 3 /* Apr */, 6, 2, 0, 0, 900), "b bb bbb bbbb bbbbb");
                (0, vitest_1.expect)(result).toBe("AM AM am a.m. a");
                const pmResult = (0, index_js_1.format)(new Date(1986, 3 /* Apr */, 6, 13, 0, 0, 900), "b bb bbb bbbb bbbbb");
                (0, vitest_1.expect)(pmResult).toBe("PM PM pm p.m. p");
            });
            (0, vitest_1.it)("12 PM", () => {
                const date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.format)(date, "b bb bbb bbbb bbbbb")).toBe("noon noon noon noon n");
            });
            (0, vitest_1.it)("12 AM", () => {
                const date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.format)(date, "b bb bbb bbbb bbbbb")).toBe("midnight midnight midnight midnight mi");
            });
        });
        (0, vitest_1.describe)("flexible day periods", () => {
            (0, vitest_1.it)("works as expected", () => {
                const result = (0, index_js_1.format)(date, "B, BB, BBB, BBBB, BBBBB");
                (0, vitest_1.expect)(result).toBe("in the morning, in the morning, in the morning, in the morning, in the morning");
            });
            (0, vitest_1.it)("12 PM", () => {
                const date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.format)(date, "h B")).toBe("12 in the afternoon");
            });
            (0, vitest_1.it)("5 PM", () => {
                const date = new Date(1986, 3 /* Apr */, 6, 17, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.format)(date, "h B")).toBe("5 in the evening");
            });
            (0, vitest_1.it)("12 AM", () => {
                const date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.format)(date, "h B")).toBe("12 at night");
            });
            (0, vitest_1.it)("4 AM", () => {
                const date = new Date(1986, 3 /* Apr */, 6, 4, 0, 0, 900);
                (0, vitest_1.expect)((0, index_js_1.format)(date, "h B")).toBe("4 in the morning");
            });
        });
    });
    (0, vitest_1.it)("minute", () => {
        const result = (0, index_js_1.format)(date, "m mo mm");
        (0, vitest_1.expect)(result).toBe("32 32nd 32");
    });
    (0, vitest_1.describe)("second", () => {
        (0, vitest_1.it)("second", () => {
            const result = (0, index_js_1.format)(date, "s so ss");
            (0, vitest_1.expect)(result).toBe("55 55th 55");
        });
        (0, vitest_1.it)("fractional seconds", () => {
            const result = (0, index_js_1.format)(date, "S SS SSS SSSS");
            (0, vitest_1.expect)(result).toBe("1 12 123 1230");
        });
    });
    (0, vitest_1.describe)("time zone", () => {
        (0, vitest_1.it)("ISO-8601 with Z", () => {
            const result = (0, index_js_1.format)(date, "X XX XXX XXXX XXXXX");
            const expectedResult = [
                timezoneWithOptionalMinutesAndZShort,
                timezoneWithZShort,
                timezoneWithZ,
                timezoneWithZShort,
                timezoneWithZ,
            ].join(" ");
            (0, vitest_1.expect)(result).toBe(expectedResult);
            const getTimezoneOffsetStub = sinon_1.default.stub(Date.prototype, "getTimezoneOffset");
            getTimezoneOffsetStub.returns(0);
            const resultZeroOffset = (0, index_js_1.format)(date, "X XX XXX XXXX XXXXX");
            (0, vitest_1.expect)(resultZeroOffset).toBe("Z Z Z Z Z");
            getTimezoneOffsetStub.returns(480);
            const resultNegativeOffset = (0, index_js_1.format)(date, "X XX XXX XXXX XXXXX");
            (0, vitest_1.expect)(resultNegativeOffset).toBe("-08 -0800 -08:00 -0800 -08:00");
            getTimezoneOffsetStub.returns(450);
            const resultNegative30Offset = (0, index_js_1.format)(date, "X XX XXX XXXX XXXXX");
            (0, vitest_1.expect)(resultNegative30Offset).toBe("-0730 -0730 -07:30 -0730 -07:30");
            getTimezoneOffsetStub.restore();
        });
        (0, vitest_1.it)("ISO-8601 without Z", () => {
            const result = (0, index_js_1.format)(date, "x xx xxx xxxx xxxxx");
            const expectedResult = [
                timezoneWithOptionalMinutesShort,
                timezoneShort,
                timezone,
                timezoneShort,
                timezone,
            ].join(" ");
            (0, vitest_1.expect)(result).toBe(expectedResult);
        });
        (0, vitest_1.it)("GMT", () => {
            const result = (0, index_js_1.format)(date, "O OO OOO OOOO");
            const expectedResult = [
                timezoneGMTShort,
                timezoneGMTShort,
                timezoneGMTShort,
                timezoneGMT,
            ].join(" ");
            (0, vitest_1.expect)(result).toBe(expectedResult);
            const getTimezoneOffsetStub = sinon_1.default.stub(Date.prototype, "getTimezoneOffset");
            getTimezoneOffsetStub.returns(480);
            const resultNegativeOffset = (0, index_js_1.format)(date, "O OO OOO OOOO");
            (0, vitest_1.expect)(resultNegativeOffset).toBe("GMT-8 GMT-8 GMT-8 GMT-08:00");
            getTimezoneOffsetStub.returns(450);
            const resultNegative30Offset = (0, index_js_1.format)(date, "O OO OOO OOOO");
            (0, vitest_1.expect)(resultNegative30Offset).toBe("GMT-7:30 GMT-7:30 GMT-7:30 GMT-07:30");
            getTimezoneOffsetStub.restore();
        });
        (0, vitest_1.it)("Specific non-location", () => {
            const result = (0, index_js_1.format)(date, "z zz zzz zzzz");
            const expectedResult = [
                timezoneGMTShort,
                timezoneGMTShort,
                timezoneGMTShort,
                timezoneGMT,
            ].join(" ");
            (0, vitest_1.expect)(result).toBe(expectedResult);
        });
    });
    (0, vitest_1.describe)("timestamp", () => {
        (0, vitest_1.it)("seconds timestamp", () => {
            const result = (0, index_js_1.format)(date, "t");
            (0, vitest_1.expect)(result).toBe(secondsTimestamp);
        });
        (0, vitest_1.it)("milliseconds timestamp", () => {
            const result = (0, index_js_1.format)(date, "T");
            (0, vitest_1.expect)(result).toBe(timestamp);
        });
        (0, vitest_1.it)("seconds timestamp handles negative numbers", () => {
            (0, vitest_1.expect)((0, index_js_1.format)(new Date(1001), "t")).toBe("1");
            (0, vitest_1.expect)((0, index_js_1.format)(new Date(-1001), "t")).toBe("-1");
        });
    });
    (0, vitest_1.describe)("long format", () => {
        (0, vitest_1.it)("short date", () => {
            const result = (0, index_js_1.format)(date, "P");
            (0, vitest_1.expect)(result).toBe("04/04/1986");
        });
        (0, vitest_1.it)("medium date", () => {
            const result = (0, index_js_1.format)(date, "PP");
            (0, vitest_1.expect)(result).toBe("Apr 4, 1986");
        });
        (0, vitest_1.it)("long date", () => {
            const result = (0, index_js_1.format)(date, "PPP");
            (0, vitest_1.expect)(result).toBe("April 4th, 1986");
        });
        (0, vitest_1.it)("full date", () => {
            const result = (0, index_js_1.format)(date, "PPPP");
            (0, vitest_1.expect)(result).toBe("Friday, April 4th, 1986");
        });
        (0, vitest_1.it)("short time", () => {
            const result = (0, index_js_1.format)(date, "p");
            (0, vitest_1.expect)(result).toBe("10:32 AM");
        });
        (0, vitest_1.it)("medium time", () => {
            const result = (0, index_js_1.format)(date, "pp");
            (0, vitest_1.expect)(result).toBe("10:32:55 AM");
        });
        (0, vitest_1.it)("long time", () => {
            const result = (0, index_js_1.format)(date, "ppp");
            (0, vitest_1.expect)(result).toBe("10:32:55 AM " + timezoneGMTShort);
        });
        (0, vitest_1.it)("full time", () => {
            const result = (0, index_js_1.format)(date, "pppp");
            (0, vitest_1.expect)(result).toBe("10:32:55 AM " + timezoneGMT);
        });
        (0, vitest_1.it)("short date + time", () => {
            const result = (0, index_js_1.format)(date, "Pp");
            (0, vitest_1.expect)(result).toBe("04/04/1986, 10:32 AM");
        });
        (0, vitest_1.it)("medium date + time", () => {
            const result = (0, index_js_1.format)(date, "PPpp");
            (0, vitest_1.expect)(result).toBe("Apr 4, 1986, 10:32:55 AM");
        });
        (0, vitest_1.it)("long date + time", () => {
            const result = (0, index_js_1.format)(date, "PPPppp");
            (0, vitest_1.expect)(result).toBe("April 4th, 1986 at 10:32:55 AM " + timezoneGMTShort);
        });
        (0, vitest_1.it)("full date + time", () => {
            const result = (0, index_js_1.format)(date, "PPPPpppp");
            (0, vitest_1.expect)(result).toBe("Friday, April 4th, 1986 at 10:32:55 AM " + timezoneGMT);
        });
        (0, vitest_1.it)("allows arbitrary combination of date and time", () => {
            const result = (0, index_js_1.format)(date, "Ppppp");
            (0, vitest_1.expect)(result).toBe("04/04/1986, 10:32:55 AM " + timezoneGMT);
        });
    });
    (0, vitest_1.describe)("edge cases", () => {
        (0, vitest_1.it)("throws RangeError if the time value is invalid", () => {
            (0, vitest_1.expect)(index_js_1.format.bind(null, new Date(NaN), "MMMM d, yyyy")).toThrow(RangeError);
        });
        (0, vitest_1.it)("handles dates before 100 AD", () => {
            const initialDate = new Date(0);
            initialDate.setFullYear(7, 11 /* Dec */, 31);
            initialDate.setHours(0, 0, 0, 0);
            (0, vitest_1.expect)((0, index_js_1.format)(initialDate, "Y ww i")).toBe("8 01 1");
        });
    });
    (0, vitest_1.describe)("locale features", () => {
        (0, vitest_1.it)("allows to pass a custom locale", () => {
            const customLocale = {
                localize: {
                    month: () => {
                        return "works";
                    },
                },
                formatLong: {
                    date: () => {
                        return "'It' MMMM!";
                    },
                },
            };
            const result = (0, index_js_1.format)(date, "PPPP", {
                // @ts-expect-error - It's ok to have incomplete locale
                locale: customLocale,
            });
            (0, vitest_1.expect)(result).toBe("It works!");
        });
        (0, vitest_1.it)("allows a localize preprocessor", () => {
            const customLocale = {
                localize: {
                    month: (v) => ["janvier"][v],
                    ordinalNumber: (v) => String(v) + "er",
                    preprocessor: (date, parts) => {
                        // replace `do` tokens to `d` if not the first of the month
                        if (date.getDate() === 1)
                            return parts;
                        return parts.map((part) => part.isToken && part.value === "do"
                            ? { isToken: true, value: "d" }
                            : part);
                    },
                },
            };
            let result = (0, index_js_1.format)(new Date(2024, 0, 1), "do MMMM", {
                // @ts-expect-error - It's ok to have incomplete locale
                locale: customLocale,
            });
            (0, vitest_1.expect)(result).toEqual("1er janvier");
            result = (0, index_js_1.format)(new Date(2024, 0, 2), "do MMMM", {
                // @ts-expect-error - It's ok to have incomplete locale
                locale: customLocale,
            });
            (0, vitest_1.expect)(result).toEqual("2 janvier");
        });
    });
    (0, vitest_1.it)("throws RangeError exception if the format string contains an unescaped latin alphabet character", () => {
        (0, vitest_1.expect)(index_js_1.format.bind(null, date, "yyyy-MM-dd-nnnn")).toThrow(RangeError);
    });
    (0, vitest_1.describe)("useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options", () => {
        (0, vitest_1.it)("throws an error if D token is used", () => {
            (0, vitest_1.expect)(() => (0, index_js_1.format)(date, "yyyy-MM-D")).toThrow("Use `d` instead of `D`");
        });
        (0, vitest_1.it)("allows D token if useAdditionalDayOfYearTokens is set to true", () => {
            const result = (0, index_js_1.format)(date, "yyyy-MM-D", {
                useAdditionalDayOfYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual("1986-04-94");
        });
        (0, vitest_1.it)("throws an error if DD token is used", () => {
            (0, vitest_1.expect)(() => (0, index_js_1.format)(date, "yyyy-MM-DD")).toThrow("Use `dd` instead of `DD`");
        });
        (0, vitest_1.it)("allows DD token if useAdditionalDayOfYearTokens is set to true", () => {
            const result = (0, index_js_1.format)(date, "yyyy-MM-DD", {
                useAdditionalDayOfYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual("1986-04-94");
        });
        (0, vitest_1.it)("throws an error if YY token is used", () => {
            (0, vitest_1.expect)(() => (0, index_js_1.format)(date, "YY-MM-dd")).toThrow("Use `yy` instead of `YY`");
        });
        (0, vitest_1.it)("allows YY token if useAdditionalWeekYearTokens is set to true", () => {
            const result = (0, index_js_1.format)(date, "YY-MM-dd", {
                useAdditionalWeekYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual("86-04-04");
        });
        (0, vitest_1.it)("throws an error if YYYY token is used", () => {
            (0, vitest_1.expect)(() => (0, index_js_1.format)(date, "YYYY-MM-dd")).toThrow("Use `yyyy` instead of `YYYY`");
        });
        (0, vitest_1.it)("allows YYYY token if useAdditionalWeekYearTokens is set to true", () => {
            const result = (0, index_js_1.format)(date, "YYYY-MM-dd", {
                useAdditionalWeekYearTokens: true,
            });
            (0, vitest_1.expect)(result).toEqual("1986-04-04");
        });
        (0, vitest_1.describe)("console.warn", () => {
            let warn;
            (0, vitest_1.beforeEach)(() => {
                warn = vitest_1.vi.spyOn(console, "warn").mockImplementation(() => undefined);
            });
            (0, vitest_1.afterEach)(() => {
                warn.mockRestore();
            });
            (0, vitest_1.it)('warns if "D" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "yyyy-MM-D");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `d` instead of `D` (in `yyyy-MM-D`) for formatting days of the month to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
            (0, vitest_1.it)('warns if "DD" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "yyyy-MM-DD");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `dd` instead of `DD` (in `yyyy-MM-DD`) for formatting days of the month to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
            (0, vitest_1.it)('warns if "DDD" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "yyyy-MM-DDD");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `ddd` instead of `DDD` (in `yyyy-MM-DDD`) for formatting days of the month to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
            (0, vitest_1.it)('warns if "DDDD" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "yyyy-MM-DDDD");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `dddd` instead of `DDDD` (in `yyyy-MM-DDDD`) for formatting days of the month to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
            (0, vitest_1.it)('warns if "DDDDD" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "yyyy-MM-DDDDD");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `ddddd` instead of `DDDDD` (in `yyyy-MM-DDDDD`) for formatting days of the month to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
            (0, vitest_1.it)('warns if "Y" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "Y-MM-dd");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `y` instead of `Y` (in `Y-MM-dd`) for formatting years to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
            (0, vitest_1.it)('warns if "YY" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "YY-MM-dd");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `yy` instead of `YY` (in `YY-MM-dd`) for formatting years to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
            (0, vitest_1.it)('warns if "YYY" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "YYY-MM-dd");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `yyy` instead of `YYY` (in `YYY-MM-dd`) for formatting years to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
            (0, vitest_1.it)('warns if "YYYY" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "YYYY-MM-dd");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `yyyy` instead of `YYYY` (in `YYYY-MM-dd`) for formatting years to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
            (0, vitest_1.it)('warns if "YYYYY" token is used', () => {
                try {
                    (0, index_js_1.format)(date, "YYYYY-MM-dd");
                }
                catch (_) {
                    // Ignore the error
                }
                (0, vitest_1.expect)(warn).toBeCalledWith("Use `yyyyy` instead of `YYYYY` (in `YYYYY-MM-dd`) for formatting years to the input `" +
                    date +
                    "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md");
            });
        });
    });
});
