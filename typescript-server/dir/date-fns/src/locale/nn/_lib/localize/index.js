"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localize = void 0;
const index_js_1 = require("../../../_lib/buildLocalizeFn/index.js");
const eraValues = {
    narrow: ["f.Kr.", "e.Kr."],
    abbreviated: ["f.Kr.", "e.Kr."],
    wide: ["før Kristus", "etter Kristus"],
};
const quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["Q1", "Q2", "Q3", "Q4"],
    wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
};
const monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
        "jan.",
        "feb.",
        "mars",
        "apr.",
        "mai",
        "juni",
        "juli",
        "aug.",
        "sep.",
        "okt.",
        "nov.",
        "des.",
    ],
    wide: [
        "januar",
        "februar",
        "mars",
        "april",
        "mai",
        "juni",
        "juli",
        "august",
        "september",
        "oktober",
        "november",
        "desember",
    ],
};
const dayValues = {
    narrow: ["S", "M", "T", "O", "T", "F", "L"],
    short: ["su", "må", "ty", "on", "to", "fr", "lau"],
    abbreviated: ["sun", "mån", "tys", "ons", "tor", "fre", "laur"],
    wide: [
        "sundag",
        "måndag",
        "tysdag",
        "onsdag",
        "torsdag",
        "fredag",
        "laurdag",
    ],
};
const dayPeriodValues = {
    narrow: {
        am: "a",
        pm: "p",
        midnight: "midnatt",
        noon: "middag",
        morning: "på morg.",
        afternoon: "på etterm.",
        evening: "på kvelden",
        night: "på natta",
    },
    abbreviated: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnatt",
        noon: "middag",
        morning: "på morg.",
        afternoon: "på etterm.",
        evening: "på kvelden",
        night: "på natta",
    },
    wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnatt",
        noon: "middag",
        morning: "på morgonen",
        afternoon: "på ettermiddagen",
        evening: "på kvelden",
        night: "på natta",
    },
};
const ordinalNumber = (dirtyNumber, _options) => {
    const number = Number(dirtyNumber);
    return number + ".";
};
exports.localize = {
    ordinalNumber,
    era: (0, index_js_1.buildLocalizeFn)({
        values: eraValues,
        defaultWidth: "wide",
    }),
    quarter: (0, index_js_1.buildLocalizeFn)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: (quarter) => quarter - 1,
    }),
    month: (0, index_js_1.buildLocalizeFn)({
        values: monthValues,
        defaultWidth: "wide",
    }),
    day: (0, index_js_1.buildLocalizeFn)({
        values: dayValues,
        defaultWidth: "wide",
    }),
    dayPeriod: (0, index_js_1.buildLocalizeFn)({
        values: dayPeriodValues,
        defaultWidth: "wide",
    }),
};
