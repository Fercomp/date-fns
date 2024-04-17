"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localize = void 0;
const index_js_1 = require("../../../_lib/buildLocalizeFn/index.js");
const eraValues = {
    narrow: ["pr.n.e.", "AD"],
    abbreviated: ["pr. Hr.", "po. Hr."],
    wide: ["Pre Hrista", "Posle Hrista"],
};
const quarterValues = {
    narrow: ["1.", "2.", "3.", "4."],
    abbreviated: ["1. kv.", "2. kv.", "3. kv.", "4. kv."],
    wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
};
const monthValues = {
    narrow: [
        "1.",
        "2.",
        "3.",
        "4.",
        "5.",
        "6.",
        "7.",
        "8.",
        "9.",
        "10.",
        "11.",
        "12.",
    ],
    abbreviated: [
        "jan",
        "feb",
        "mar",
        "apr",
        "maj",
        "jun",
        "jul",
        "avg",
        "sep",
        "okt",
        "nov",
        "dec",
    ],
    wide: [
        "januar",
        "februar",
        "mart",
        "april",
        "maj",
        "jun",
        "jul",
        "avgust",
        "septembar",
        "oktobar",
        "novembar",
        "decembar",
    ],
};
const formattingMonthValues = {
    narrow: [
        "1.",
        "2.",
        "3.",
        "4.",
        "5.",
        "6.",
        "7.",
        "8.",
        "9.",
        "10.",
        "11.",
        "12.",
    ],
    abbreviated: [
        "jan",
        "feb",
        "mar",
        "apr",
        "maj",
        "jun",
        "jul",
        "avg",
        "sep",
        "okt",
        "nov",
        "dec",
    ],
    wide: [
        "januar",
        "februar",
        "mart",
        "april",
        "maj",
        "jun",
        "jul",
        "avgust",
        "septembar",
        "oktobar",
        "novembar",
        "decembar",
    ],
};
const dayValues = {
    narrow: ["N", "P", "U", "S", "Č", "P", "S"],
    short: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"],
    abbreviated: ["ned", "pon", "uto", "sre", "čet", "pet", "sub"],
    wide: [
        "nedelja",
        "ponedeljak",
        "utorak",
        "sreda",
        "četvrtak",
        "petak",
        "subota",
    ],
};
const formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutru",
        afternoon: "popodne",
        evening: "uveče",
        night: "noću",
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutru",
        afternoon: "popodne",
        evening: "uveče",
        night: "noću",
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutru",
        afternoon: "posle podne",
        evening: "uveče",
        night: "noću",
    },
};
const dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutru",
        afternoon: "popodne",
        evening: "uveče",
        night: "noću",
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutru",
        afternoon: "popodne",
        evening: "uveče",
        night: "noću",
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "ponoć",
        noon: "podne",
        morning: "ujutru",
        afternoon: "posle podne",
        evening: "uveče",
        night: "noću",
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
        formattingValues: formattingMonthValues,
        defaultFormattingWidth: "wide",
    }),
    day: (0, index_js_1.buildLocalizeFn)({
        values: dayValues,
        defaultWidth: "wide",
    }),
    dayPeriod: (0, index_js_1.buildLocalizeFn)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide",
    }),
};
