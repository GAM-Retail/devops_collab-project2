System.register(["PosApi/Extend/Triggers/TransactionTriggers", "PosApi/Entities", "../DataService/DataServiceRequests.g", "PosApi/TypeExtensions", "PosApi/Consume/Device"], function (exports_1, context_1) {
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
    var Triggers, Entities_1, Messages, TypeExtensions_1, Device_1, KREVoucherPostPayment;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (Device_1_1) {
                Device_1 = Device_1_1;
            }
        ],
        execute: function () {
            KREVoucherPostPayment = (function (_super) {
                __extends(KREVoucherPostPayment, _super);
                function KREVoucherPostPayment() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREVoucherPostPayment.prototype.execute = function (options) {
                    var _this = this;
                    var evoucher = 'eVoucher';
                    console.log("Executing PostCartCheckoutTrigger with options " + JSON.stringify(options) + ".");
                    for (var i = 0; i < options.cart.TenderLines.length; ++i) {
                        if (options.cart.TenderLines[i].ExtensionProperties[0]) {
                            if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(options.cart.TenderLines[i].ExtensionProperties[0].Key == evoucher)) {
                                var getConnection = new Device_1.GetConnectionStatusClientRequest(this.context.logger.getNewCorrelationId());
                                return this.context.runtime.executeAsync(getConnection).then(function (responseCon) {
                                    if (responseCon.data.result == Entities_1.ClientEntities.ConnectionStatusType.Online) {
                                        var transactionId = options.salesOrder.Id;
                                        var receiptId = options.salesOrder.ReceiptId;
                                        var voucherPostUpdate = new Messages.Bound.VoucherPostUpdateRequestRequest(transactionId, receiptId);
                                        _this.context.runtime.executeAsync(voucherPostUpdate);
                                    }
                                });
                            }
                            else {
                                return Promise.resolve();
                            }
                        }
                    }
                    return Promise.resolve();
                };
                return KREVoucherPostPayment;
            }(Triggers.PostCartCheckoutTrigger));
            exports_1("default", KREVoucherPostPayment);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/TriggerHandlers/KREVoucherPostPayment.js.map