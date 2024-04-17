"use strict";
// This is basic DST test for parseISO
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../src/parseISO/index.js");
const assert_1 = __importDefault(require("assert"));
if (process.env.TZ !== "Australia/Sydney")
    throw new Error("The test must be run with TZ=Australia/Sydney");
if (parseInt(((_a = process.version.match(/^v(\d+)\./)) === null || _a === void 0 ? void 0 : _a[1]) || "0") < 10)
    throw new Error("The test must be run on Node.js version >= 10");
// Test DST start edge
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-10-06").getDate(), 6); // DST start
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-10-07").getDate(), 7);
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-10-06T01:00:00").toString(), "Sun Oct 06 2019 01:00:00 GMT+1000 (Australian Eastern Standard Time)");
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-10-06T02:00:00").toString(), "Sun Oct 06 2019 03:00:00 GMT+1100 (Australian Eastern Daylight Time)");
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-10-06T05:00:00").toString(), "Sun Oct 06 2019 05:00:00 GMT+1100 (Australian Eastern Daylight Time)");
// Test DST end edge
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-04-06").getDate(), 6);
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-04-07").getDate(), 7); // DST end
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-04-06T11:00:00").toString(), "Sat Apr 06 2019 11:00:00 GMT+1100 (Australian Eastern Daylight Time)");
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-04-07T11:00:00").toString(), "Sun Apr 07 2019 11:00:00 GMT+1000 (Australian Eastern Standard Time)");
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-04-07T00:00:00").toString(), "Sun Apr 07 2019 00:00:00 GMT+1100 (Australian Eastern Daylight Time)");
// test edge cases for months, years
assert_1.default.strictEqual((0, index_js_1.parseISO)("2020-01-01T00:00:00").toString(), "Wed Jan 01 2020 00:00:00 GMT+1100 (Australian Eastern Daylight Time)");
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-12-31T23:59:59").toString(), "Tue Dec 31 2019 23:59:59 GMT+1100 (Australian Eastern Daylight Time)");
assert_1.default.strictEqual((0, index_js_1.parseISO)("2020-02-29T23:59:59").toString(), "Sat Feb 29 2020 23:59:59 GMT+1100 (Australian Eastern Daylight Time)");
