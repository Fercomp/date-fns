"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoundingMethod = void 0;
function getRoundingMethod(method) {
    return (number) => {
        const round = method ? Math[method] : Math.trunc;
        const result = round(number);
        // Prevent negative zero
        return result === 0 ? 0 : result;
    };
}
exports.getRoundingMethod = getRoundingMethod;
