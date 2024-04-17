"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const vitest_1 = require("vitest");
const _1 = require(".");
(0, vitest_1.describe)("constructNow", () => {
    (0, vitest_1.it)("creates a new Date instance using the constructor from the reference date", () => {
        const result = (0, _1.constructNow)(new Date("2023-10-25T12:00:00"));
        (0, vitest_1.expect)(result instanceof Date).toBe(true);
        (0, vitest_1.expect)(+result - Date.now()).toBeLessThan(10); // Give 10 ms of slack
        (0, vitest_1.expect)(result.constructor).toBe(Date);
    });
    (0, vitest_1.it)("creates a new Date instance using a number as the reference date", () => {
        const result = (0, _1.constructNow)(1635158400000);
        (0, vitest_1.expect)(result instanceof Date).toBe(true);
        (0, vitest_1.expect)(+result - Date.now()).toBeLessThan(10); // Give 10 ms of slack
        (0, vitest_1.expect)(result.constructor).toBe(Date);
    });
    (0, vitest_1.it)("creates a new Date instance using a string as the reference date", () => {
        const result = (0, _1.constructNow)("2023-10-25T12:00:00");
        (0, vitest_1.expect)(result instanceof Date).toBe(true);
        (0, vitest_1.expect)(+result - Date.now()).toBeLessThan(10); // Give 10 ms of slack
        (0, vitest_1.expect)(result.constructor).toBe(Date);
    });
    (0, vitest_1.it)("creates a new custom Date instance using the constructor from the reference date", () => {
        class CustomDate extends Date {
        }
        const result = (0, _1.constructNow)(new CustomDate("2023-10-26T12:00:00"));
        (0, vitest_1.expect)(result instanceof CustomDate).toBe(true);
        (0, vitest_1.expect)(+result - Date.now()).toBeLessThan(10); // Give 10 ms of slack
        (0, vitest_1.expect)(result.constructor).toBe(CustomDate);
    });
});
