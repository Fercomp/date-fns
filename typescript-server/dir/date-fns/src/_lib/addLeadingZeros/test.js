"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("./index.js");
(0, vitest_1.describe)("addLeadingZeros", () => {
    (0, vitest_1.it)("adds leading zeros when number has fewer digits than target length", () => {
        (0, vitest_1.expect)((0, index_js_1.addLeadingZeros)(7, 3)).toBe("007");
        (0, vitest_1.expect)((0, index_js_1.addLeadingZeros)(7, 2)).toBe("07");
        (0, vitest_1.expect)((0, index_js_1.addLeadingZeros)(7, 1)).toBe("7");
        (0, vitest_1.expect)((0, index_js_1.addLeadingZeros)(7, 0)).toBe("7");
        (0, vitest_1.expect)((0, index_js_1.addLeadingZeros)(7, -1)).toBe("7");
    });
});
