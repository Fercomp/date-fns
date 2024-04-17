"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const index_js_1 = require("../_lib/test/index.js");
const index_js_2 = require("./index.js");
(0, vitest_1.describe)("isDate", () => {
    (0, vitest_1.it)("returns true if the given value is a date object", () => {
        (0, vitest_1.expect)((0, index_js_2.isDate)(new Date())).toBe(true);
    });
    (0, vitest_1.it)("returns true if the given value is an Invalid Date", () => {
        (0, vitest_1.expect)((0, index_js_2.isDate)(new Date(NaN))).toBe(true);
    });
    (0, vitest_1.it)("ensures that the passed argument is an instance of Date", () => {
        const date = new Date();
        if ((0, index_js_2.isDate)(date)) {
            (0, index_js_1.assertType)(date);
        }
        else {
            (0, index_js_1.assertType)(date);
        }
    });
    (0, vitest_1.describe)("with date passed from another iframe", () => {
        // If in the browser, run the test in an iframe
        if (typeof window !== "undefined") {
            (0, vitest_1.afterEach)(() => {
                const iframe = document.getElementById("iframe");
                iframe && iframe.remove();
            });
            (0, vitest_1.it)("returns true for a date passed from another iframe", () => new Promise((resolve) => {
                const iframe = document.createElement("iframe");
                iframe.id = "iframe";
                iframe.addEventListener("load", () => {
                    execScript("window.date = new Date()");
                    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- It's ok we're messing with iframes
                    (0, vitest_1.expect)((0, index_js_2.isDate)(iframe.contentWindow.date)).toBe(true);
                    resolve(void 0);
                });
                if (!document.body)
                    throw new Error("document.body is not defined");
                document.body.appendChild(iframe);
            }));
        }
        else {
            vitest_1.it.skip("returns true for a date passed from another iframe");
        }
        function execScript(scriptText) {
            const iframe = document.querySelector("iframe#iframe");
            if (!iframe || !(iframe instanceof HTMLIFrameElement)) {
                throw new Error("Can't execute the script because iframe isn't found");
            }
            const doc = iframe.contentDocument;
            const script = doc.createElement("script");
            script.innerText = scriptText;
            // @ts-expect-error - We're messing with iframes
            if (!(doc.body instanceof iframe.contentWindow.HTMLBodyElement)) {
                throw new Error("Can't execute the script because iframe does not have body");
            }
            doc.body.append(script);
        }
    });
    (0, vitest_1.it)("returns false if the given value is not a date object", () => {
        (0, vitest_1.expect)(!(0, index_js_2.isDate)(new Date().getTime())).toBe(true);
        (0, vitest_1.expect)(!(0, index_js_2.isDate)(new Date().toISOString())).toBe(true);
        (0, vitest_1.expect)(!(0, index_js_2.isDate)({})).toBe(true);
        (0, vitest_1.expect)(!(0, index_js_2.isDate)(null)).toBe(true);
        (0, vitest_1.expect)(!(0, index_js_2.isDate)(0)).toBe(true);
    });
});
