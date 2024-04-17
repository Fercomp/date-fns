"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildFormatLongFn = void 0;
function buildFormatLongFn(args) {
    return (options = {}) => {
        // TODO: Remove String()
        const width = options.width
            ? String(options.width)
            : args.defaultWidth;
        const format = args.formats[width] || args.formats[args.defaultWidth];
        return format;
    };
}
exports.buildFormatLongFn = buildFormatLongFn;
