System.register(["PosApi/Entities", "../DataService/DataServiceRequests.g", "PosApi/TypeExtensions", "PosApi/Consume/Device", "PosApi/Extend/Triggers/TransactionTriggers", "PosApi/Consume/Cart"], function (exports_1, context_1) {
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
    var Entities_1, Messages, TypeExtensions_1, Device_1, Triggers, Cart_1, KREMyValueEarningReturnPointTrigger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
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
            },
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            }
        ],
        execute: function () {
            KREMyValueEarningReturnPointTrigger = (function (_super) {
                __extends(KREMyValueEarningReturnPointTrigger, _super);
                function KREMyValueEarningReturnPointTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREMyValueEarningReturnPointTrigger.prototype.execute = function (options) {
                    var _this = this;
                    this.context.logger.logInformational(JSON.stringify(options));
                    if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(options.cart.CustomerId)) {
                        var getConnection = new Device_1.GetConnectionStatusClientRequest(this.context.logger.getNewCorrelationId());
                        this.context.runtime.executeAsync(getConnection).then(function (responseCon) {
                            if (responseCon.data.result == Entities_1.ClientEntities.ConnectionStatusType.Online) {
                                var setMyValue = void 0;
                                if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(options.cart.ExtensionProperties[0])) {
                                    if (options.cart.ExtensionProperties.length > 1)
                                        setMyValue = TypeExtensions_1.ArrayExtensions.firstOrUndefined(options.cart.ExtensionProperties, function (c) { return c.Key === "MYVALUE"; }).Key;
                                    else
                                        setMyValue = options.cart.ExtensionProperties[0].Key;
                                    if (setMyValue == "MYVALUE") {
                                        var correlationId_1 = _this.context.logger.getNewCorrelationId();
                                        var valueId_1 = TypeExtensions_1.ArrayExtensions.firstOrUndefined(options.cart.ExtensionProperties, function (c) { return c.Key === "MYVALUE"; }).Value.StringValue;
                                        if (options.salesOrder.TransactionTypeValue != Entities_1.ProxyEntities.TransactionType.CustomerOrder) {
                                            if (options.cart.AmountPaid > 0) {
                                                if (options.salesOrder.TransactionTypeValue == Entities_1.ProxyEntities.TransactionType.SalesInvoice) {
                                                    var getAmountCustOrder = new Messages.KREMyValue.GetMyValueCustomerOrderRequest(options.salesOrder.SalesLines[0].Comment);
                                                    _this.context.runtime.executeAsync(getAmountCustOrder).then(function (getAmount) {
                                                        var earningPointCustOrder = new Messages.KREMyValue.EarningPointMyValueRequest(options.cart.Id, Math.round(getAmount.data.result.InvoiceAmount).toString(), "0", options.cart.WarehouseId, options.salesOrder.ReceiptId, valueId_1, options.cart.CustomerId, "", "Earn");
                                                        _this.context.runtime.executeAsync(earningPointCustOrder).then(function (retPoint) {
                                                            var refresh = new Cart_1.RefreshCartClientRequest(correlationId_1);
                                                            _this.context.runtime.executeAsync(refresh);
                                                        });
                                                    });
                                                }
                                                else {
                                                    var earningPoint = new Messages.KREMyValue.EarningPointMyValueRequest(options.cart.Id, Math.round(options.cart.TotalAmount).toString(), "0", options.cart.WarehouseId, options.salesOrder.ReceiptId, valueId_1, options.cart.CustomerId, "", "Earn");
                                                    _this.context.runtime.executeAsync(earningPoint).then(function (retPoint) {
                                                        var refresh = new Cart_1.RefreshCartClientRequest(correlationId_1);
                                                        _this.context.runtime.executeAsync(refresh);
                                                    });
                                                }
                                            }
                                            else {
                                                var text = options.cart.ExtensionProperties[0].Value.StringValue.split(",");
                                                var MyvalueId = text[0];
                                                var OriginalReceiptId = text[1];
                                                var earningPoint = new Messages.KREMyValue.EarningPointMyValueRequest(options.cart.Id, Math.round(options.cart.TotalAmount).toString(), "0", options.cart.WarehouseId, options.salesOrder.ReceiptId, MyvalueId, options.cart.CustomerId, OriginalReceiptId, "RETURN_EARN");
                                                _this.context.runtime.executeAsync(earningPoint).then(function (retPoint) {
                                                    var refresh = new Cart_1.RefreshCartClientRequest(_this.context.logger.getNewCorrelationId());
                                                    _this.context.runtime.executeAsync(refresh);
                                                });
                                            }
                                        }
                                        else {
                                            var setData = new Messages.KRETransactionRePrint.RePrintDataRequest(options.salesOrder.Id, options.cart.ExtensionProperties[0].Value.StringValue);
                                            _this.context.runtime.executeAsync(setData);
                                        }
                                    }
                                    else {
                                        var setData = new Messages.KRETransactionRePrint.RePrintDataRequest(options.salesOrder.Id, "");
                                        _this.context.runtime.executeAsync(setData);
                                    }
                                }
                                else {
                                    var setData = new Messages.KRETransactionRePrint.RePrintDataRequest(options.salesOrder.Id, "");
                                    _this.context.runtime.executeAsync(setData);
                                }
                            }
                            else {
                                if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(options.cart.ExtensionProperties[0])) {
                                    var setMyValue = options.cart.ExtensionProperties[0].Key;
                                    if (setMyValue == "MYVALUE") {
                                        if (options.cart.AmountPaid > 0) {
                                            var earningPoint = new Messages.StoreOperations.EarningPointMyValueRequest(options.cart.Id, Math.round(options.cart.TotalAmount).toString(), "0", options.cart.WarehouseId, options.salesOrder.ReceiptId, options.cart.ExtensionProperties[0].Value.StringValue, options.cart.CustomerId, "", "Earn");
                                            _this.context.runtime.executeAsync(earningPoint);
                                        }
                                        else {
                                            var text = options.cart.ExtensionProperties[0].Value.StringValue.split(",");
                                            var MyvalueId = text[0];
                                            var OriginalReceiptId = text[1];
                                            var earningPoint = new Messages.StoreOperations.EarningPointMyValueRequest(options.cart.Id, Math.round(options.cart.TotalAmount).toString(), "0", options.cart.WarehouseId, options.salesOrder.ReceiptId, MyvalueId, options.cart.CustomerId, OriginalReceiptId, "RETURN_EARN");
                                            _this.context.runtime.executeAsync(earningPoint);
                                        }
                                    }
                                    else {
                                        var setData = new Messages.KRETransactionRePrint.RePrintDataRequest(options.salesOrder.Id, "");
                                        _this.context.runtime.executeAsync(setData);
                                    }
                                }
                                else {
                                    var setData = new Messages.KRETransactionRePrint.RePrintDataRequest(options.salesOrder.Id, "");
                                    _this.context.runtime.executeAsync(setData);
                                }
                            }
                            return Promise.resolve();
                        });
                        return Promise.resolve();
                    }
                    else {
                        var setData = new Messages.KRETransactionRePrint.RePrintDataRequest(options.salesOrder.Id, "");
                        this.context.runtime.executeAsync(setData);
                        return Promise.resolve();
                    }
                };
                return KREMyValueEarningReturnPointTrigger;
            }(Triggers.PostCartCheckoutTrigger));
            exports_1("default", KREMyValueEarningReturnPointTrigger);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/TriggerHandlers/KREMyValueEarningReturnPointTrigger.js.map