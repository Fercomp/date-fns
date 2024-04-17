"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
const index_js_2 = require("../setDefaultOptions/index.js");
const index_js_3 = require("../startOfWeek/index.js");
const index_js_4 = require("../_lib/defaultOptions/index.js");
const index_js_5 = require("../locale/eo/index.js");
const index_js_6 = require("../_lib/test/index.js");
(0, vitest_1.describe)("getDefaultOptions", () => {
    (0, vitest_1.afterEach)(index_js_6.resetDefaultOptions);
    (0, vitest_1.it)("returns an empty object", () => {
        const result = (0, index_js_1.getDefaultOptions)();
        (0, vitest_1.expect)(result).toEqual({});
    });
    (0, vitest_1.it)("returns a clone of the original object", () => {
        (0, index_js_4.setDefaultOptions)({ weekStartsOn: 1 });
        const result = (0, index_js_1.getDefaultOptions)();
        (0, vitest_1.expect)((0, index_js_4.getDefaultOptions)()).toEqual(result);
    });
    (0, vitest_1.it)("mutating the result does not affect functions that use options", () => {
        const defaultOptionsClone = (0, index_js_1.getDefaultOptions)();
        defaultOptionsClone.weekStartsOn = 1;
        const result = (0, index_js_3.startOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
        (0, vitest_1.expect)(result).toEqual(new Date(2014, 7 /* Aug */, 31));
        // Mutating the original object does affect `startOfWeek`
        const _defaultOptions = (0, index_js_4.getDefaultOptions)();
        _defaultOptions.weekStartsOn = 1;
        const result2 = (0, index_js_3.startOfWeek)(new Date(2014, 8 /* Sep */, 2, 11, 55, 0));
        (0, vitest_1.expect)(result2).toEqual(new Date(2014, 8 /* Sep */, 1));
    });
    (0, vitest_1.it)("returns new values after setting them via `setDefaultOptions`", () => {
        (0, index_js_2.setDefaultOptions)({
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: index_js_5.eo,
        });
        const result = (0, index_js_1.getDefaultOptions)();
        (0, vitest_1.expect)(result).toEqual({
            weekStartsOn: 1,
            firstWeekContainsDate: 4,
            locale: index_js_5.eo,
        });
    });
});
