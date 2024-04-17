"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRelative = void 0;
const index_js_1 = require("../../../../isSameWeek/index.js");
const index_js_2 = require("../../../../toDate/index.js");
const accusativeWeekdays = [
    "нядзелю",
    "панядзелак",
    "аўторак",
    "сераду",
    "чацвер",
    "пятніцу",
    "суботу",
];
function lastWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 5:
        case 6:
            return "'у мінулую " + weekday + " а' p";
        case 1:
        case 2:
        case 4:
            return "'у мінулы " + weekday + " а' p";
    }
}
function thisWeek(day) {
    const weekday = accusativeWeekdays[day];
    return "'у " + weekday + " а' p";
}
function nextWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 5:
        case 6:
            return "'у наступную " + weekday + " а' p";
        case 1:
        case 2:
        case 4:
            return "'у наступны " + weekday + " а' p";
    }
}
const lastWeekFormat = (dirtyDate, baseDate, options) => {
    const date = (0, index_js_2.toDate)(dirtyDate);
    const day = date.getDay();
    if ((0, index_js_1.isSameWeek)(date, baseDate, options)) {
        return thisWeek(day);
    }
    else {
        return lastWeek(day);
    }
};
const nextWeekFormat = (dirtyDate, baseDate, options) => {
    const date = (0, index_js_2.toDate)(dirtyDate);
    const day = date.getDay();
    if ((0, index_js_1.isSameWeek)(date, baseDate, options)) {
        return thisWeek(day);
    }
    else {
        return nextWeek(day);
    }
};
const formatRelativeLocale = {
    lastWeek: lastWeekFormat,
    yesterday: "'учора а' p",
    today: "'сёння а' p",
    tomorrow: "'заўтра а' p",
    nextWeek: nextWeekFormat,
    other: "P",
};
const formatRelative = (token, date, baseDate, options) => {
    const format = formatRelativeLocale[token];
    if (typeof format === "function") {
        return format(date, baseDate, options);
    }
    return format;
};
exports.formatRelative = formatRelative;
