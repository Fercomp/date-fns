"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const function_1 = require("fp-ts/function");
const js_fns_1 = require("js-fns");
// eslint-disable-next-line @typescript-eslint/ban-ts-comment -- Lodash types trip in different environemnts, so we can't put ts-expect-error
// @ts-ignore - Lodash types are tripping ("Module '"lodash"' has no exported member 'flow'.ts(2305)")
const lodash_1 = require("lodash");
const vitest_1 = require("vitest");
const index_js_1 = require("../../index.js");
const index_js_2 = require("./index.js");
(0, vitest_1.describe)("convertToFP", () => {
    function fn(a, b, c) {
        return "a b c"
            .replace("a", String(a))
            .replace("b", String(b))
            .replace("c", String(c));
    }
    (0, vitest_1.describe)("arity of converted function === arity of initial function", () => {
        (0, vitest_1.it)("allows arguments to be curried (and reverses their order)", () => {
            const fpFn = (0, index_js_2.convertToFP)(fn, 3);
            (0, vitest_1.expect)(fpFn(3)(2)(1)).toBe("1 2 3");
        });
        (0, vitest_1.it)("allows to group arguments", () => {
            const fpFn = (0, index_js_2.convertToFP)(fn, 3);
            (0, vitest_1.expect)(fpFn(3, 2)(1)).toBe("1 2 3");
            (0, vitest_1.expect)(fpFn(3)(2, 1)).toBe("1 2 3");
        });
        (0, vitest_1.it)("allows the function to be called with all arguments in the reversed order", () => {
            const fpFn = (0, index_js_2.convertToFP)(fn, 3);
            (0, vitest_1.expect)(fpFn(3, 2, 1)).toBe("1 2 3");
        });
        (0, vitest_1.it)("ignores calls without curried arguments", () => {
            const fpFn = (0, index_js_2.convertToFP)(fn, 3);
            (0, vitest_1.expect)(fpFn()()(3, 2)()()(1)).toBe("1 2 3");
        });
        (0, vitest_1.it)("ignores extra curried arguments in the last group", () => {
            const fpFn = (0, index_js_2.convertToFP)(fn, 3);
            // @ts-expect-error - It's ok, we're testing the function
            (0, vitest_1.expect)(fpFn(3, 2, 1, 0, -1, -2)).toBe("1 2 3");
            // @ts-expect-error - It's ok, we're testing the function
            (0, vitest_1.expect)(fpFn(3)(2)(1, 0, -1, -2)).toBe("1 2 3");
        });
    });
    (0, vitest_1.describe)("arity of converted function < arity of initial function", () => {
        (0, vitest_1.it)("calls the initial function with a short list of arguments", () => {
            const fpFn = (0, index_js_2.convertToFP)(fn, 2);
            (0, vitest_1.expect)(fpFn(2)(1)).toBe("1 2 undefined");
            (0, vitest_1.expect)(fpFn(2, 1)).toBe("1 2 undefined");
        });
        (0, vitest_1.it)("ignores extra curried arguments in the last group", () => {
            const fpFn = (0, index_js_2.convertToFP)(fn, 2);
            // @ts-expect-error - It's ok, we're testing the function
            (0, vitest_1.expect)(fpFn(3)(2, 1)).toBe("2 3 undefined");
            // @ts-expect-error - It's ok, we're testing the function
            (0, vitest_1.expect)(fpFn(3, 2, 1)).toBe("2 3 undefined");
        });
    });
    (0, vitest_1.describe)("arity of converted function > arity of initial function", () => {
        (0, vitest_1.it)("works, but ignores the extra arguments", () => {
            const fpFn = (0, index_js_2.convertToFP)(fn, 4);
            // @ts-expect-error - It's ok, we're testing the function
            (0, vitest_1.expect)(fpFn(4)(3)(2)(1)).toBe("1 2 3");
            // @ts-expect-error - It's ok, we're testing the function
            (0, vitest_1.expect)(fpFn(4, 3, 2, 1)).toBe("1 2 3");
        });
    });
    (0, vitest_1.describe)("arity of converted function === 0", () => {
        (0, vitest_1.it)("returns the constant instead of function", () => {
            // @ts-expect-error - It's ok, we're testing the function
            const result = (0, index_js_2.convertToFP)(fn, 0);
            (0, vitest_1.expect)(result).toBe("undefined undefined undefined");
        });
    });
    (0, vitest_1.describe)("types", () => {
        (0, vitest_1.it)("resolves proper types", () => {
            const fn1 = (0, index_js_1.addDays)();
            const fn2 = fn1(1);
            const result = fn2(new Date(1987, 1));
            (0, vitest_1.expect)(result.getFullYear()).toBe(1987);
        });
    });
    (0, vitest_1.describe)("Lodash", () => {
        (0, vitest_1.it)("works with flow", () => {
            const fn = (0, lodash_1.flow)((0, index_js_1.addDays)(1), (0, index_js_1.addHours)(1));
            const result = fn(new Date(1987, 1, 11));
            (0, vitest_1.expect)(result.getFullYear()).toBe(1987);
            (0, vitest_1.expect)(result).toEqual(new Date(1987, 1, 12, 1));
        });
    });
    (0, vitest_1.describe)("fp-ts", () => {
        (0, vitest_1.it)("works with pipe", () => {
            const result = (0, function_1.pipe)(new Date(1987, 1, 11), (0, index_js_1.isEqual)(new Date(1987, 1, 11)));
            const _assign = result;
            (0, vitest_1.expect)(result).toBe(true);
        });
    });
    (0, vitest_1.describe)("js-fns", () => {
        (0, vitest_1.it)("works with flow", () => {
            const fn = (0, js_fns_1.flow)((0, index_js_1.addDays)(1), (0, index_js_1.addHours)(1));
            const result = fn(new Date(1987, 1, 11));
            (0, vitest_1.expect)(result.getFullYear()).toBe(1987);
            (0, vitest_1.expect)(result).toEqual(new Date(1987, 1, 12, 1));
        });
    });
});
