"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatRelative = void 0;
const index_js_1 = require("../../../../isSameWeek/index.js");
const weekdays = [
    "svētdienā",
    "pirmdienā",
    "otrdienā",
    "trešdienā",
    "ceturtdienā",
    "piektdienā",
    "sestdienā",
];
const formatRelativeLocale = {
    lastWeek: (date, baseDate, options) => {
        if ((0, index_js_1.isSameWeek)(date, baseDate, options)) {
            return "eeee 'plkst.' p";
        }
        const weekday = weekdays[date.getDay()];
        return "'Pagājušā " + weekday + " plkst.' p";
    },
    yesterday: "'Vakar plkst.' p",
    today: "'Šodien plkst.' p",
    tomorrow: "'Rīt plkst.' p",
    nextWeek: (date, baseDate, options) => {
        if ((0, index_js_1.isSameWeek)(date, baseDate, options)) {
            return "eeee 'plkst.' p";
        }
        const weekday = weekdays[date.getDay()];
        return "'Nākamajā " + weekday + " plkst.' p";
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
