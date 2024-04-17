"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRelative = void 0;
const index_js_1 = require("../../../../isSameWeek/index.js");
const accusativeWeekdays = [
    "жексенбіде",
    "дүйсенбіде",
    "сейсенбіде",
    "сәрсенбіде",
    "бейсенбіде",
    "жұмада",
    "сенбіде",
];
function lastWeek(day) {
    const weekday = accusativeWeekdays[day];
    return "'өткен " + weekday + " сағат' p'-де'";
}
function thisWeek(day) {
    const weekday = accusativeWeekdays[day];
    return "'" + weekday + " сағат' p'-де'";
}
function nextWeek(day) {
    const weekday = accusativeWeekdays[day];
    return "'келесі " + weekday + " сағат' p'-де'";
}
const formatRelativeLocale = {
    lastWeek: (date, baseDate, options) => {
        const day = date.getDay();
        if ((0, index_js_1.isSameWeek)(date, baseDate, options)) {
            return thisWeek(day);
        }
        else {
            return lastWeek(day);
        }
    },
    yesterday: "'кеше сағат' p'-де'",
    today: "'бүгін сағат' p'-де'",
    tomorrow: "'ертең сағат' p'-де'",
    nextWeek: (date, baseDate, options) => {
        const day = date.getDay();
        if ((0, index_js_1.isSameWeek)(date, baseDate, options)) {
            return thisWeek(day);
        }
        else {
            return nextWeek(day);
        }
    },
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
