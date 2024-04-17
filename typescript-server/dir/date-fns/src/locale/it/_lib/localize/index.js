"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localize = void 0;
const index_js_1 = require("../../../_lib/buildLocalizeFn/index.js");
const eraValues = {
    narrow: ["aC", "dC"],
    abbreviated: ["a.C.", "d.C."],
    wide: ["avanti Cristo", "dopo Cristo"],
};
const quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["T1", "T2", "T3", "T4"],
    wide: [
        "1º trimestre",
        "2º trimestre",
        "3º trimestre",
        "4º trimestre",
    ],
};
const monthValues = {
    narrow: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
    abbreviated: [
        "gen",
        "feb",
        "mar",
        "apr",
        "mag",
        "giu",
        "lug",
        "ago",
        "set",
        "ott",
        "nov",
        "dic",
    ],
    wide: [
        "gennaio",
        "febbraio",
        "marzo",
        "aprile",
        "maggio",
        "giugno",
        "luglio",
        "agosto",
        "settembre",
        "ottobre",
        "novembre",
        "dicembre",
    ],
};
const dayValues = {
    narrow: ["D", "L", "M", "M", "G", "V", "S"],
    short: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    abbreviated: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    wide: [
        "domenica",
        "lunedì",
        "martedì",
        "mercoledì",
        "giovedì",
        "venerdì",
        "sabato",
    ],
};
const dayPeriodValues = {
    narrow: {
        am: "m.",
        pm: "p.",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "mattina",
        afternoon: "pomeriggio",
        evening: "sera",
        night: "notte",
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "mattina",
        afternoon: "pomeriggio",
        evening: "sera",
        night: "notte",
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "mattina",
        afternoon: "pomeriggio",
        evening: "sera",
        night: "notte",
    },
};
const formattingDayPeriodValues = {
    narrow: {
        am: "m.",
        pm: "p.",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "di mattina",
        afternoon: "del pomeriggio",
        evening: "di sera",
        night: "di notte",
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "di mattina",
        afternoon: "del pomeriggio",
        evening: "di sera",
        night: "di notte",
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "mezzanotte",
        noon: "mezzogiorno",
        morning: "di mattina",
        afternoon: "del pomeriggio",
        evening: "di sera",
        night: "di notte",
    },
};
const ordinalNumber = (dirtyNumber, _options) => {
    const number = Number(dirtyNumber);
    return String(number);
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
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide",
    }),
};
