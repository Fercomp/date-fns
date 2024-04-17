"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.localize = void 0;
const index_js_1 = require("../../../_lib/buildLocalizeFn/index.js");
const eraValues = {
    narrow: ["ب", "ك"],
    abbreviated: ["ب", "ك"],
    wide: ["مىيلادىدىن بۇرۇن", "مىيلادىدىن كىيىن"],
};
const quarterValues = {
    narrow: ["1", "2", "3", "4"],
    abbreviated: ["1", "2", "3", "4"],
    wide: [
        "بىرىنجى چارەك",
        "ئىككىنجى چارەك",
        "ئۈچىنجى چارەك",
        "تۆتىنجى چارەك",
    ],
};
// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
    narrow: ["ي", "ف", "م", "ا", "م", "ى", "ى", "ا", "س", "ۆ", "ن", "د"],
    abbreviated: [
        "يانۋار",
        "فېۋىرال",
        "مارت",
        "ئاپرىل",
        "ماي",
        "ئىيۇن",
        "ئىيول",
        "ئاۋغۇست",
        "سىنتەبىر",
        "ئۆكتەبىر",
        "نويابىر",
        "دىكابىر",
    ],
    wide: [
        "يانۋار",
        "فېۋىرال",
        "مارت",
        "ئاپرىل",
        "ماي",
        "ئىيۇن",
        "ئىيول",
        "ئاۋغۇست",
        "سىنتەبىر",
        "ئۆكتەبىر",
        "نويابىر",
        "دىكابىر",
    ],
};
const dayValues = {
    narrow: ["ي", "د", "س", "چ", "پ", "ج", "ش"],
    short: ["ي", "د", "س", "چ", "پ", "ج", "ش"],
    abbreviated: [
        "يەكشەنبە",
        "دۈشەنبە",
        "سەيشەنبە",
        "چارشەنبە",
        "پەيشەنبە",
        "جۈمە",
        "شەنبە",
    ],
    wide: [
        "يەكشەنبە",
        "دۈشەنبە",
        "سەيشەنبە",
        "چارشەنبە",
        "پەيشەنبە",
        "جۈمە",
        "شەنبە",
    ],
};
const dayPeriodValues = {
    narrow: {
        am: "ئە",
        pm: "چ",
        midnight: "ك",
        noon: "چ",
        morning: "ئەتىگەن",
        afternoon: "چۈشتىن كىيىن",
        evening: "ئاخشىم",
        night: "كىچە",
    },
    abbreviated: {
        am: "ئە",
        pm: "چ",
        midnight: "ك",
        noon: "چ",
        morning: "ئەتىگەن",
        afternoon: "چۈشتىن كىيىن",
        evening: "ئاخشىم",
        night: "كىچە",
    },
    wide: {
        am: "ئە",
        pm: "چ",
        midnight: "ك",
        noon: "چ",
        morning: "ئەتىگەن",
        afternoon: "چۈشتىن كىيىن",
        evening: "ئاخشىم",
        night: "كىچە",
    },
};
const formattingDayPeriodValues = {
    narrow: {
        am: "ئە",
        pm: "چ",
        midnight: "ك",
        noon: "چ",
        morning: "ئەتىگەندە",
        afternoon: "چۈشتىن كىيىن",
        evening: "ئاخشامدا",
        night: "كىچىدە",
    },
    abbreviated: {
        am: "ئە",
        pm: "چ",
        midnight: "ك",
        noon: "چ",
        morning: "ئەتىگەندە",
        afternoon: "چۈشتىن كىيىن",
        evening: "ئاخشامدا",
        night: "كىچىدە",
    },
    wide: {
        am: "ئە",
        pm: "چ",
        midnight: "ك",
        noon: "چ",
        morning: "ئەتىگەندە",
        afternoon: "چۈشتىن كىيىن",
        evening: "ئاخشامدا",
        night: "كىچىدە",
    },
};
const ordinalNumber = (dirtyNumber, _options) => {
    return String(dirtyNumber);
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
