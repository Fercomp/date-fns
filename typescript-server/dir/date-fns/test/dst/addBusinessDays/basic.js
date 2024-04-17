"use strict";
// This is basic DST test for addBusinessDays
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const assert_1 = __importDefault(require("assert"));
const index_js_1 = require("../../../src/addBusinessDays/index.js");
if (process.env.TZ !== "America/Santiago")
    throw new Error("The test must be run with TZ=America/Santiago");
if (parseInt(((_a = process.version.match(/^v(\d+)\./)) === null || _a === void 0 ? void 0 : _a[1]) || "0") < 10)
    throw new Error("The test must be run on Node.js version >= 10");
console.log((0, index_js_1.addBusinessDays)(new Date(2014, 8 /* Sep */, 1), 10).toString());
assert_1.default.deepStrictEqual(
// new Date(2014, 8, 7) is the DST day
(0, index_js_1.addBusinessDays)(new Date(2014, 8 /* Sep */, 1), 10).toString(), "Mon Sep 15 2014 00:00:00 GMT-0300 (Chile Summer Time)");
