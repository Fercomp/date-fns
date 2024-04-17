"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateOffset = exports.resetDefaultOptions = exports.assertType = void 0;
const index_js_1 = require("../addLeadingZeros/index.js");
const index_js_2 = require("../defaultOptions/index.js");
function assertType(_) { }
exports.assertType = assertType;
function resetDefaultOptions() {
    (0, index_js_2.setDefaultOptions)({});
}
exports.resetDefaultOptions = resetDefaultOptions;
// This makes sure we create the consistent offsets across timezones, no matter where these tests are ran.
function generateOffset(originalDate) {
    // Add the timezone.
    let offset = "";
    const tzOffset = originalDate.getTimezoneOffset();
    if (tzOffset !== 0) {
        const absoluteOffset = Math.abs(tzOffset);
        const hourOffset = (0, index_js_1.addLeadingZeros)(Math.trunc(absoluteOffset / 60), 2);
        const minuteOffset = (0, index_js_1.addLeadingZeros)(absoluteOffset % 60, 2);
        // If less than 0, the sign is +, because it is ahead of time.
        const sign = tzOffset < 0 ? "+" : "-";
        offset = `${sign}${hourOffset}:${minuteOffset}`;
    }
    else {
        offset = "Z";
    }
    return offset;
}
exports.generateOffset = generateOffset;
