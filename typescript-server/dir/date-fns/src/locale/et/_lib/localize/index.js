"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localize = void 0;
const index_js_1 = require("../../../_lib/buildLocalizeFn/index.js");
const eraValues = {
    narrow: ["e.m.a", "m.a.j"],
    abbreviated: ["e.m.a", "m.a.j"],
    wide: ["enne meie ajaarvamist", "meie ajaarvamise järgi"],
};
const quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["K1", "K2", "K3", "K4"],
    wide: ["1. kvartal", "2. kvartal", "3. kvartal", "4. kvartal"],
};
const monthValues = {
    narrow: ["J", "V", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
        "jaan",
        "veebr",
        "märts",
        "apr",
        "mai",
        "juuni",
        "juuli",
        "aug",
        "sept",
        "okt",
        "nov",
        "dets",
    ],
    wide: [
        "jaanuar",
        "veebruar",
        "märts",
        "aprill",
        "mai",
        "juuni",
        "juuli",
        "august",
        "september",
        "oktoober",
        "november",
        "detsember",
    ],
};
const dayValues = {
    narrow: ["P", "E", "T", "K", "N", "R", "L"],
    short: ["P", "E", "T", "K", "N", "R", "L"],
    abbreviated: [
        "pühap.",
        "esmasp.",
        "teisip.",
        "kolmap.",
        "neljap.",
        "reede.",
        "laup.",
    ],
    wide: [
        "pühapäev",
        "esmaspäev",
        "teisipäev",
        "kolmapäev",
        "neljapäev",
        "reede",
        "laupäev",
    ],
};
const dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "kesköö",
        noon: "keskpäev",
        morning: "hommik",
        afternoon: "pärastlõuna",
        evening: "õhtu",
        night: "öö",
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "kesköö",
        noon: "keskpäev",
        morning: "hommik",
        afternoon: "pärastlõuna",
        evening: "õhtu",
        night: "öö",
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "kesköö",
        noon: "keskpäev",
        morning: "hommik",
        afternoon: "pärastlõuna",
        evening: "õhtu",
        night: "öö",
    },
};
const formattingDayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "keskööl",
        noon: "keskpäeval",
        morning: "hommikul",
        afternoon: "pärastlõunal",
        evening: "õhtul",
        night: "öösel",
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "keskööl",
        noon: "keskpäeval",
        morning: "hommikul",
        afternoon: "pärastlõunal",
        evening: "õhtul",
        night: "öösel",
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "keskööl",
        noon: "keskpäeval",
        morning: "hommikul",
        afternoon: "pärastlõunal",
        evening: "õhtul",
        night: "öösel",
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
        formattingValues: monthValues,
        defaultFormattingWidth: "wide",
    }),
    day: (0, index_js_1.buildLocalizeFn)({
        values: dayValues,
        defaultWidth: "wide",
        formattingValues: dayValues,
        defaultFormattingWidth: "wide",
    }),
    dayPeriod: (0, index_js_1.buildLocalizeFn)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide",
    }),
};
