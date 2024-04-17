"use strict";
// This is DST test for formatDistanceStrict in the Cairo timezone
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../src/formatDistanceStrict/index.js");
const assert_1 = __importDefault(require("assert"));
if (process.env.TZ !== "Africa/Cairo")
    throw new Error("The test must be run with TZ=Africa/Cairo");
assert_1.default.strictEqual((0, index_js_1.formatDistanceStrict)(new Date(1986, 3, 4, 10, 32, 0), new Date(1986, 4, 4, 10, 32, 0)), "1 month");
