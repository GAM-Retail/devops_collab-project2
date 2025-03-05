System.register([], function (exports_1, context_1) {
    "use strict";
    var NumberFormattingHelper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            NumberFormattingHelper = (function () {
                function NumberFormattingHelper() {
                }
                NumberFormattingHelper.getRoundedStringValue = function (value, decimalPrecision) {
                    return NumberFormattingHelper.roundToNDigits(value, decimalPrecision).toFixed(decimalPrecision);
                };
                NumberFormattingHelper.roundToNDigits = function (value, decimalPrecision) {
                    if (decimalPrecision === 0) {
                        return Math.round(value);
                    }
                    return Math.round(value * Math.pow(10, decimalPrecision)) / Math.pow(10, decimalPrecision);
                };
                return NumberFormattingHelper;
            }());
            exports_1("NumberFormattingHelper", NumberFormattingHelper);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Helper/NumberFormattingHelper.js.map