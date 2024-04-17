"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localize = void 0;
const index_js_1 = require("../../../_lib/buildLocalizeFn/index.js");
const eraValues = {
    narrow: ["пр.н.е.", "АД"],
    abbreviated: ["пр. Хр.", "по. Хр."],
    wide: ["Пре Христа", "После Христа"],
};
const quarterValues = {
    narrow: ["1.", "2.", "3.", "4."],
    abbreviated: ["1. кв.", "2. кв.", "3. кв.", "4. кв."],
    wide: ["1. квартал", "2. квартал", "3. квартал", "4. квартал"],
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
        "јан",
        "феб",
        "мар",
        "апр",
        "мај",
        "јун",
        "јул",
        "авг",
        "сеп",
        "окт",
        "нов",
        "дец",
    ],
    wide: [
        "јануар",
        "фебруар",
        "март",
        "април",
        "мај",
        "јун",
        "јул",
        "август",
        "септембар",
        "октобар",
        "новембар",
        "децембар",
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
        "јан",
        "феб",
        "мар",
        "апр",
        "мај",
        "јун",
        "јул",
        "авг",
        "сеп",
        "окт",
        "нов",
        "дец",
    ],
    wide: [
        "јануар",
        "фебруар",
        "март",
        "април",
        "мај",
        "јун",
        "јул",
        "август",
        "септембар",
        "октобар",
        "новембар",
        "децембар",
    ],
};
const dayValues = {
    narrow: ["Н", "П", "У", "С", "Ч", "П", "С"],
    short: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
    abbreviated: ["нед", "пон", "уто", "сре", "чет", "пет", "суб"],
    wide: [
        "недеља",
        "понедељак",
        "уторак",
        "среда",
        "четвртак",
        "петак",
        "субота",
    ],
};
const formattingDayPeriodValues = {
    narrow: {
        am: "АМ",
        pm: "ПМ",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "поподне",
        evening: "увече",
        night: "ноћу",
    },
    abbreviated: {
        am: "АМ",
        pm: "ПМ",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "поподне",
        evening: "увече",
        night: "ноћу",
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "после подне",
        evening: "увече",
        night: "ноћу",
    },
};
const dayPeriodValues = {
    narrow: {
        am: "AM",
        pm: "PM",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "поподне",
        evening: "увече",
        night: "ноћу",
    },
    abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "поподне",
        evening: "увече",
        night: "ноћу",
    },
    wide: {
        am: "AM",
        pm: "PM",
        midnight: "поноћ",
        noon: "подне",
        morning: "ујутру",
        afternoon: "после подне",
        evening: "увече",
        night: "ноћу",
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
