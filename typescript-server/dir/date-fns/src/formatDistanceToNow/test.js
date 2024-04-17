"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const utc_1 = require("@date-fns/utc");
const sinon_1 = __importDefault(require("sinon"));
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("formatDistanceToNow", () => {
    let clock;
    (0, vitest_1.beforeEach)(() => {
        clock = sinon_1.default.useFakeTimers(new Date(1986, 3, 4, 10, 32, 0).getTime());
    });
    (0, vitest_1.afterEach)(() => {
        clock.restore();
    });
    (0, vitest_1.describe)("seconds", () => {
        (0, vitest_1.describe)("when the includeSeconds option is true", () => {
            (0, vitest_1.it)("less than 5 seconds", () => {
                const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 58), {
                    includeSeconds: true,
                });
                (0, vitest_1.expect)(result).toBe("less than 5 seconds");
            });
            (0, vitest_1.it)("less than 10 seconds", () => {
                const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 52), {
                    includeSeconds: true,
                });
                (0, vitest_1.expect)(result).toBe("less than 10 seconds");
            });
            (0, vitest_1.it)("less than 20 seconds", () => {
                const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 45), {
                    includeSeconds: true,
                });
                (0, vitest_1.expect)(result).toBe("less than 20 seconds");
            });
            (0, vitest_1.it)("half a minute", () => {
                const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 35), {
                    includeSeconds: true,
                });
                (0, vitest_1.expect)(result).toBe("half a minute");
            });
            (0, vitest_1.it)("less than a minute", () => {
                const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 15), {
                    includeSeconds: true,
                });
                (0, vitest_1.expect)(result).toBe("less than a minute");
            });
            (0, vitest_1.it)("1 minute", () => {
                const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 0), {
                    includeSeconds: true,
                });
                (0, vitest_1.expect)(result).toBe("1 minute");
            });
        });
    });
    (0, vitest_1.describe)("minutes", () => {
        (0, vitest_1.it)("less than a minute", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 40));
            (0, vitest_1.expect)(result).toBe("less than a minute");
        });
        (0, vitest_1.it)("1 minute", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 10));
            (0, vitest_1.expect)(result).toBe("1 minute");
        });
        (0, vitest_1.it)("n minutes", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 29, 10));
            (0, vitest_1.expect)(result).toBe("3 minutes");
        });
    });
    (0, vitest_1.describe)("hours", () => {
        (0, vitest_1.it)("about 1 hour", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 9, 32, 0));
            (0, vitest_1.expect)(result).toBe("about 1 hour");
        });
        (0, vitest_1.it)("about n hours", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 7, 32, 0));
            (0, vitest_1.expect)(result).toBe("about 3 hours");
        });
    });
    (0, vitest_1.describe)("days", () => {
        (0, vitest_1.it)("1 day", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 3, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("1 day");
        });
        (0, vitest_1.it)("n days", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 1, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("3 days");
        });
    });
    (0, vitest_1.describe)("months", () => {
        (0, vitest_1.it)("about 1 month", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 2, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("about 1 month");
        });
        (0, vitest_1.it)("n months", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 0, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("3 months");
        });
    });
    (0, vitest_1.describe)("years", () => {
        (0, vitest_1.it)("about 1 year", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1985, 3, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("about 1 year");
        });
        (0, vitest_1.it)("over 1 year", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1984, 10, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("over 1 year");
        });
        (0, vitest_1.it)("almost n years", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1983, 4, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("almost 3 years");
        });
        (0, vitest_1.it)("about n years", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1983, 3, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("about 3 years");
        });
        (0, vitest_1.it)("over n years", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1982, 10, 4, 10, 32, 0));
            (0, vitest_1.expect)(result).toBe("over 3 years");
        });
    });
    (0, vitest_1.it)("accepts a timestamp", () => {
        const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 40).getTime());
        (0, vitest_1.expect)(result).toBe("less than a minute");
    });
    (0, vitest_1.describe)("when the addSuffix option is true", () => {
        (0, vitest_1.it)("adds a past suffix", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 10, 31, 35), {
                includeSeconds: true,
                addSuffix: true,
            });
            (0, vitest_1.expect)(result).toBe("half a minute ago");
        });
        (0, vitest_1.it)("adds a future suffix", () => {
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 11, 32, 0), {
                addSuffix: true,
            });
            (0, vitest_1.expect)(result).toBe("in about 1 hour");
        });
    });
    (0, vitest_1.describe)("custom locale", () => {
        (0, vitest_1.it)("can be passed to the function", () => {
            const localizeDistance = (token, count, options) => {
                (0, vitest_1.expect)(token).toBe("aboutXHours");
                (0, vitest_1.expect)(count).toBe(1);
                (0, vitest_1.expect)(options.addSuffix).toBe(true);
                (0, vitest_1.expect)(options.comparison).toBeGreaterThan(0);
                return "It works!";
            };
            const customLocale = {
                formatDistance: localizeDistance,
            };
            const result = (0, index_js_1.formatDistanceToNow)(new Date(1986, 3, 4, 11, 32, 0), {
                addSuffix: true,
                locale: customLocale,
            });
            (0, vitest_1.expect)(result).toBe("It works!");
        });
    });
    (0, vitest_1.it)("throws RangeError if the passed date is `Invalid Date`", function () {
        (0, vitest_1.expect)(index_js_1.formatDistanceToNow.bind(null, new Date(NaN))).toThrow(RangeError);
    });
    (0, vitest_1.it)("respects date extensions", () => {
        const result = (0, index_js_1.formatDistanceToNow)(new utc_1.UTCDate(+new Date(1986, 3, 4, 9, 32, 0)));
        (0, vitest_1.expect)(result).toBe("about 1 hour");
    });
});
