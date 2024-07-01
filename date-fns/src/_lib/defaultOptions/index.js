"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultOptions = exports.getDefaultOptions = void 0;
let defaultOptions = {};
function getDefaultOptions() {
    return defaultOptions;
}
exports.getDefaultOptions = getDefaultOptions;
function setDefaultOptions(newOptions) {
    defaultOptions = newOptions;
}
exports.setDefaultOptions = setDefaultOptions;
