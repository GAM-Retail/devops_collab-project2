System.register(["PosApi/Extend/RequestHandlers/PeripheralsRequestHandlers", "PosApi/Consume/Peripherals"], function (exports_1, context_1) {
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
    var PeripheralsRequestHandlers_1, Peripherals_1, PaymentTerminalActivateGiftCardPeripheralRequestHandlerExt;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PeripheralsRequestHandlers_1_1) {
                PeripheralsRequestHandlers_1 = PeripheralsRequestHandlers_1_1;
            },
            function (Peripherals_1_1) {
                Peripherals_1 = Peripherals_1_1;
            }
        ],
        execute: function () {
            PaymentTerminalActivateGiftCardPeripheralRequestHandlerExt = (function (_super) {
                __extends(PaymentTerminalActivateGiftCardPeripheralRequestHandlerExt, _super);
                function PaymentTerminalActivateGiftCardPeripheralRequestHandlerExt() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PaymentTerminalActivateGiftCardPeripheralRequestHandlerExt.prototype.executeAsync = function (request) {
                    var extensionTransaction = {
                        ExtensionProperties: [
                            {
                                Key: "TestPropertyKey",
                                Value: { StringValue: "TestPropertyValue" }
                            }
                        ]
                    };
                    var updatedRequest = new Peripherals_1.PaymentTerminalActivateGiftCardPeripheralRequest(request.correlationId, request.amount, request.tenderInfo, request.paymentConnectorId, extensionTransaction);
                    return this.defaultExecuteAsync(updatedRequest);
                };
                return PaymentTerminalActivateGiftCardPeripheralRequestHandlerExt;
            }(PeripheralsRequestHandlers_1.PaymentTerminalActivateGiftCardPeripheralRequestHandler));
            exports_1("default", PaymentTerminalActivateGiftCardPeripheralRequestHandlerExt);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Handlers/PaymentTerminalActivateGiftCardPeripheralRequestHandlerExt.js.map