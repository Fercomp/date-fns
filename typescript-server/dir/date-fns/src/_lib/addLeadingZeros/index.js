"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLeadingZeros = void 0;
function addLeadingZeros(number, targetLength) {
    const sign = number < 0 ? "-" : "";
    const output = Math.abs(number).toString().padStart(targetLength, "0");
    return sign + output;
}
exports.addLeadingZeros = addLeadingZeros;
