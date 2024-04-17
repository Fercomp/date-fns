"use strict";
// This is DST test for formatDistanceStrict in the Melbourne timezone
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_js_1 = require("../../../src/formatDistanceStrict/index.js");
const index_js_2 = require("../../../src/parseISO/index.js");
const assert_1 = __importDefault(require("assert"));
if (process.env.TZ !== "Australia/Melbourne")
    throw new Error("The test must be run with TZ=Australia/Melbourne");
assert_1.default.strictEqual((0, index_js_1.formatDistanceStrict)((0, index_js_2.parseISO)("2020-04-05T01:00:00+11:00"), (0, index_js_2.parseISO)("2020-04-05T03:00:00+10:00")), "3 hours");
