System.register(["PosApi/Extend/RequestHandlers/PeripheralsRequestHandlers"], function (exports_1, context_1) {
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
    var PeripheralsRequestHandlers_1, PaymentTerminalUpdateLinesRequestHandlerExt;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PeripheralsRequestHandlers_1_1) {
                PeripheralsRequestHandlers_1 = PeripheralsRequestHandlers_1_1;
            }
        ],
        execute: function () {
            PaymentTerminalUpdateLinesRequestHandlerExt = (function (_super) {
                __extends(PaymentTerminalUpdateLinesRequestHandlerExt, _super);
                function PaymentTerminalUpdateLinesRequestHandlerExt() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PaymentTerminalUpdateLinesRequestHandlerExt.prototype.executeAsync = function (request) {
                    return this.defaultExecuteAsync(request);
                };
                return PaymentTerminalUpdateLinesRequestHandlerExt;
            }(PeripheralsRequestHandlers_1.PaymentTerminalUpdateLinesRequestHandler));
            exports_1("default", PaymentTerminalUpdateLinesRequestHandlerExt);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Handlers/PaymentTerminalUpdateLinesRequestHandlerExt.js.map