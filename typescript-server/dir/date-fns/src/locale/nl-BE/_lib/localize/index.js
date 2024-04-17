"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localize = void 0;
const index_js_1 = require("../../../_lib/buildLocalizeFn/index.js");
const eraValues = {
    narrow: ["v.C.", "n.C."],
    abbreviated: ["v.Chr.", "n.Chr."],
    wide: ["voor Christus", "na Christus"],
};
const quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["K1", "K2", "K3", "K4"],
    wide: ["1e kwartaal", "2e kwartaal", "3e kwartaal", "4e kwartaal"],
};
const monthValues = {
    narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
    abbreviated: [
        "jan.",
        "feb.",
        "mrt.",
        "apr.",
        "mei",
        "jun.",
        "jul.",
        "aug.",
        "sep.",
        "okt.",
        "nov.",
        "dec.",
    ],
    wide: [
        "januari",
        "februari",
        "maart",
        "april",
        "mei",
        "juni",
        "juli",
        "augustus",
        "september",
        "oktober",
        "november",
        "december",
    ],
};
const dayValues = {
    narrow: ["Z", "M", "D", "W", "D", "V", "Z"],
    short: ["zo", "ma", "di", "wo", "do", "vr", "za"],
    abbreviated: ["zon", "maa", "din", "woe", "don", "vri", "zat"],
    wide: [
        "zondag",
        "maandag",
        "dinsdag",
        "woensdag",
        "donderdag",
        "vrijdag",
        "zaterdag",
    ],
};
const dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "middernacht",
        noon: "het middag",
        morning: "'s ochtends",
        afternoon: "'s namiddags",
        evening: "'s avonds",
        night: "'s nachts",
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "middernacht",
        noon: "het middag",
        morning: "'s ochtends",
        afternoon: "'s namiddags",
        evening: "'s avonds",
        night: "'s nachts",
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "middernacht",
        noon: "het middag",
        morning: "'s ochtends",
        afternoon: "'s namiddags",
        evening: "'s avonds",
        night: "'s nachts",
    },
};
const ordinalNumber = (dirtyNumber, _options) => {
    const number = Number(dirtyNumber);
    return number + "e";
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
