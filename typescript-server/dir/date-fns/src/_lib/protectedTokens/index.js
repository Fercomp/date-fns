"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.warnOrThrowProtectedError = exports.isProtectedWeekYearToken = exports.isProtectedDayOfYearToken = void 0;
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;
const throwTokens = ["D", "DD", "YY", "YYYY"];
function isProtectedDayOfYearToken(token) {
    return dayOfYearTokenRE.test(token);
}
exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
function isProtectedWeekYearToken(token) {
    return weekYearTokenRE.test(token);
}
exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
function warnOrThrowProtectedError(token, format, input) {
    const _message = message(token, format, input);
    console.warn(_message);
    if (throwTokens.includes(token))
        throw new RangeError(_message);
}
exports.warnOrThrowProtectedError = warnOrThrowProtectedError;
function message(token, format, input) {
    const subject = token[0] === "Y" ? "years" : "days of the month";
    return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}
