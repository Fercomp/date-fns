"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../src/formatISO/index.js");
const assert_1 = __importDefault(require("assert"));
if (process.env.TZ !== "Asia/Kolkata")
    throw new Error("The test must be run with TZ=Asia/Kolkata");
if (parseInt(((_a = process.version.match(/^v(\d+)\./)) === null || _a === void 0 ? void 0 : _a[1]) || "0") < 10)
    throw new Error("The test must be run on Node.js version >= 10");
assert_1.default.strictEqual((0, index_js_1.formatISO)(new Date(1986, 3, 4, 10, 33, 1)), "1986-04-04T10:33:01+05:30");
