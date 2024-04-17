"use strict";
// This is basic DST test for parseISO
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../src/parseISO/index.js");
const assert_1 = __importDefault(require("assert"));
if (process.env.TZ !== "America/Sao_Paulo")
    throw new Error("The test must be run with TZ=America/Sao_Paulo");
if (parseInt(((_a = process.version.match(/^v(\d+)\./)) === null || _a === void 0 ? void 0 : _a[1]) || "0") < 10)
    throw new Error("The test must be run on Node.js version >= 10");
// Test DST start edge
assert_1.default.strictEqual((0, index_js_1.parseISO)("2018-11-03").getDate(), 3);
assert_1.default.strictEqual((0, index_js_1.parseISO)("2018-11-04").getDate(), 4); // DST start
assert_1.default.strictEqual((0, index_js_1.parseISO)("2018-11-05").getDate(), 5);
// Test DST end edge
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-02-15").getDate(), 15);
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-02-16").getDate(), 16); // DST end
assert_1.default.strictEqual((0, index_js_1.parseISO)("2019-02-17").getDate(), 17);
// Test creation of nonexistent time
assert_1.default.strictEqual((0, index_js_1.parseISO)("2018-11-04T00:00").toString(), "Sun Nov 04 2018 01:00:00 GMT-0200 (Brasilia Summer Time)");
assert_1.default.strictEqual((0, index_js_1.parseISO)("2018-11-04T00:30").toString(), "Sun Nov 04 2018 01:30:00 GMT-0200 (Brasilia Summer Time)");
