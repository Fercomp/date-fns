"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRelative = void 0;
const index_js_1 = require("../../../../isSameWeek/index.js");
const index_js_2 = require("../../../../toDate/index.js");
const accusativeWeekdays = [
    "неділю",
    "понеділок",
    "вівторок",
    "середу",
    "четвер",
    "п’ятницю",
    "суботу",
];
function lastWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 5:
        case 6:
            return "'у минулу " + weekday + " о' p";
        case 1:
        case 2:
        case 4:
            return "'у минулий " + weekday + " о' p";
    }
}
function thisWeek(day) {
    const weekday = accusativeWeekdays[day];
    return "'у " + weekday + " о' p";
}
function nextWeek(day) {
    const weekday = accusativeWeekdays[day];
    switch (day) {
        case 0:
        case 3:
        case 5:
        case 6:
            return "'у наступну " + weekday + " о' p";
        case 1:
        case 2:
        case 4:
            return "'у наступний " + weekday + " о' p";
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
    yesterday: "'вчора о' p",
    today: "'сьогодні о' p",
    tomorrow: "'завтра о' p",
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
