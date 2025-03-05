System.register(["PosApi/Extend/RequestHandlers/PeripheralsRequestHandlers", "PosApi/Consume/Peripherals", "PosApi/Consume/Cart", "./PaymentHandlerHelper", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var PeripheralsRequestHandlers_1, Peripherals_1, Cart_1, PaymentHandlerHelper_1, TypeExtensions_1, PaymentTerminalAuthorizePaymentRequestHandlerExt;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PeripheralsRequestHandlers_1_1) {
                PeripheralsRequestHandlers_1 = PeripheralsRequestHandlers_1_1;
            },
            function (Peripherals_1_1) {
                Peripherals_1 = Peripherals_1_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            },
            function (PaymentHandlerHelper_1_1) {
                PaymentHandlerHelper_1 = PaymentHandlerHelper_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            PaymentTerminalAuthorizePaymentRequestHandlerExt = (function (_super) {
                __extends(PaymentTerminalAuthorizePaymentRequestHandlerExt, _super);
                function PaymentTerminalAuthorizePaymentRequestHandlerExt() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PaymentTerminalAuthorizePaymentRequestHandlerExt.prototype.executeAsync = function (request) {
                    var _this = this;
                    var cart = null;
                    var cartRequest = new Cart_1.GetCurrentCartClientRequest();
                    return this.context.runtime.executeAsync(cartRequest)
                        .then(function (result) {
                        if (!(result.canceled || TypeExtensions_1.ObjectExtensions.isNullOrUndefined(result.data))) {
                            cart = result.data.result;
                        }
                    }).then(function () {
                        var newRequest = new Peripherals_1.PaymentTerminalAuthorizePaymentRequest(request.paymentConnectorId, request.amount, request.tenderInfo, request.voiceAuthorization, request.isManualEntry, PaymentHandlerHelper_1.PaymentHandlerHelper.FillExtensionProperties(cart, request.extensionTransactionProperties), request.correlationId, request.paymentTransactionReferenceData);
                        return _this.defaultExecuteAsync(newRequest);
                    });
                };
                return PaymentTerminalAuthorizePaymentRequestHandlerExt;
            }(PeripheralsRequestHandlers_1.PaymentTerminalAuthorizePaymentRequestHandler));
            exports_1("default", PaymentTerminalAuthorizePaymentRequestHandlerExt);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Handlers/PaymentTerminalAuthorizePaymentRequestHandlerExt.js.map