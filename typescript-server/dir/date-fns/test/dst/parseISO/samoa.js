"use strict";
// This is an edge case DST test for parseISO
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../src/parseISO/index.js");
const assert_1 = __importDefault(require("assert"));
if (process.env.TZ !== "Pacific/Apia")
    throw new Error("The test must be run with TZ=Pacific/Apia");
if (parseInt(((_a = process.version.match(/^v(\d+)\./)) === null || _a === void 0 ? void 0 : _a[1]) || "0") < 10)
    throw new Error("The test must be run on Node.js version >= 10");
assert_1.default.strictEqual((0, index_js_1.parseISO)("2011-12-30").getDate(), 31);
assert_1.default.strictEqual((0, index_js_1.parseISO)("2011-12-30T03:30").toString(), "Sat Dec 31 2011 03:30:00 GMT+1400 (Apia Daylight Time)");
