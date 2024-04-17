"use strict";
// This is basic DST test for eachDayOfInterval
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../src/eachDayOfInterval/index.js");
const assert_1 = __importDefault(require("assert"));
if (process.env.TZ !== "Asia/Damascus")
    throw new Error("The test must be run with TZ=Asia/Damascus");
if (parseInt(((_a = process.version.match(/^v(\d+)\./)) === null || _a === void 0 ? void 0 : _a[1]) || "0") < 10)
    throw new Error("The test must be run on Node.js version >= 10");
assert_1.default.deepStrictEqual((0, index_js_1.eachDayOfInterval)({
    start: new Date(2020, 2, 26),
    end: new Date(2020, 2, 28),
}).map((d) => d.toString()), [
    "Thu Mar 26 2020 00:00:00 GMT+0200 (GMT+03:00)",
    "Fri Mar 27 2020 01:00:00 GMT+0300 (GMT+03:00)",
    "Sat Mar 28 2020 00:00:00 GMT+0300 (GMT+03:00)",
]);
