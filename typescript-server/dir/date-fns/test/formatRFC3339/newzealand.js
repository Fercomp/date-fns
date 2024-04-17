"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../src/formatRFC3339/index.js");
const assert_1 = __importDefault(require("assert"));
/**
 * Pacific/Chatham (Chatham Islands, New Zealand) is interesting for being the farthest from UTC.
 * It depends on Standard (+12:45) and Summer time (+13:45).
 */
if (process.env.TZ !== "Pacific/Chatham")
    throw new Error("The test must be run with TZ=Pacific/Chatham (UTC+12:45 or UTC+13:45)");
if (parseInt(((_a = process.version.match(/^v(\d+)\./)) === null || _a === void 0 ? void 0 : _a[1]) || "0") < 10)
    throw new Error("The test must be run on Node.js version >= 10");
// Old date
assert_1.default.strictEqual((0, index_js_1.formatRFC3339)(new Date(1986, 3, 4, 10, 33, 1)), "1986-04-04T10:33:01+12:45");
// Standard time (Chatham have +13:45)
assert_1.default.strictEqual((0, index_js_1.formatRFC3339)(new Date(2020, 8, 27, 20, 59, 1)), "2020-09-27T20:59:01+13:45");
// Summer time (Chatham have +12:45)
assert_1.default.strictEqual((0, index_js_1.formatRFC3339)(new Date(2020, 3, 5, 5, 0, 54)), "2020-04-05T05:00:54+12:45");
