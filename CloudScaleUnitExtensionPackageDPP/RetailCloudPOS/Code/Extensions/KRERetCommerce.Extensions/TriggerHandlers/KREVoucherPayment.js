System.register(["PosApi/Extend/Triggers/TransactionTriggers", "../DataService/DataServiceRequests.g", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var Triggers, Messages, TypeExtensions_1, KREVoucherPayment;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            KREVoucherPayment = (function (_super) {
                __extends(KREVoucherPayment, _super);
                function KREVoucherPayment() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREVoucherPayment.prototype.execute = function (options) {
                    console.log("Executing PreEndTransactionTrigger with options " + JSON.stringify(options) + ".");
                    for (var i = 0; i < options.cart.TenderLines.length; ++i) {
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(options.cart.TenderLines[i].ExtensionProperties[0])) {
                            var voucher = options.cart.TenderLines[i].ExtensionProperties[0].Value.StringValue;
                            var warehouse = options.cart.WarehouseId;
                            var transactionId = options.cart.TenderLines[i].TransactionId;
                            var custOwner = void 0;
                            if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(options.cart.CustomerId))
                                custOwner = options.cart.CustomerId;
                            else
                                custOwner = "";
                            if (voucher == options.cart.TenderLines[i].LoyaltyCardId) {
                                var voucherUpdate = new Messages.Bound.VoucherUpdateEntityRequestRequest(voucher, warehouse, transactionId, custOwner);
                                this.context.runtime.executeAsync(voucherUpdate);
                            }
                            else {
                                return Promise.resolve({ canceled: true, data: new Messages.Bound.VoucherUpdateEntityRequestResponse });
                            }
                        }
                        else {
                            return Promise.resolve({ canceled: false, data: null });
                        }
                    }
                    return Promise.resolve({ canceled: false, data: null });
                };
                return KREVoucherPayment;
            }(Triggers.PreEndTransactionTrigger));
            exports_1("default", KREVoucherPayment);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/TriggerHandlers/KREVoucherPayment.js.map