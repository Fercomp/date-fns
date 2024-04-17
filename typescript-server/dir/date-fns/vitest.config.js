"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("vitest/config");
exports.default = (0, config_1.defineConfig)({
    test: {
        include: ["src/**/test.ts"],
        // Speed up tests, but also it's a workaround for the browser issue:
        // https://github.com/vitest-dev/vitest/issues/5382
        isolate: false,
        browser: {
            // Enable it via --browser
            // enabled: true,
            name: "chromium",
            provider: "playwright",
            headless: true,
        },
    },
});
