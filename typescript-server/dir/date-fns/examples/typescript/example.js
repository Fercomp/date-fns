"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const date_fns_1 = require("date-fns");
const locale_1 = require("date-fns/locale");
const result = (0, date_fns_1.format)(new Date(2017, 0, 25, 21, 28, 15), "eeee, dd MMMM HH:mm:ss", {
    locale: locale_1.eo,
});
console.log(result === "merkredo, 25 januaro 21:28:15");
