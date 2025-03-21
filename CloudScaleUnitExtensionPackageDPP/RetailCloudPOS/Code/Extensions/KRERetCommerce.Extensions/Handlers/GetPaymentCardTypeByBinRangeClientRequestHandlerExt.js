System.register(["PosApi/Extend/RequestHandlers/PaymentRequestHandlers"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || (function () {
        var extendStatics = function (d, b) {
            extendStatics = Object.setPrototypeOf ||
                ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
            return extendStatics(d, b);
        };
        return function (d, b) {
            if (typeof b !== "function" && b !== null)
                throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
            extendStatics(d, b);
            function __() { this.constructor = d; }
            d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
        };
    })();
    var PaymentRequestHandlers_1, GetPaymentCardTypeByBinRangeClientRequestHandlerExt;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PaymentRequestHandlers_1_1) {
                PaymentRequestHandlers_1 = PaymentRequestHandlers_1_1;
            }
        ],
        execute: function () {
            GetPaymentCardTypeByBinRangeClientRequestHandlerExt = (function (_super) {
                __extends(GetPaymentCardTypeByBinRangeClientRequestHandlerExt, _super);
                function GetPaymentCardTypeByBinRangeClientRequestHandlerExt() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GetPaymentCardTypeByBinRangeClientRequestHandlerExt.prototype.executeAsync = function (request) {
                    return this.defaultExecuteAsync(request);
                };
                return GetPaymentCardTypeByBinRangeClientRequestHandlerExt;
            }(PaymentRequestHandlers_1.GetPaymentCardTypeByBinRangeClientRequestHandler));
            exports_1("default", GetPaymentCardTypeByBinRangeClientRequestHandlerExt);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Handlers/GetPaymentCardTypeByBinRangeClientRequestHandlerExt.js.map