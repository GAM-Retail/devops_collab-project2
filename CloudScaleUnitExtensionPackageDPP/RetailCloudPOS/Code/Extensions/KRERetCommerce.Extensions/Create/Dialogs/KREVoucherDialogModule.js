System.register(["PosApi/Create/Dialogs", "../../DataService/DataServiceRequests.g", "PosApi/TypeExtensions", "../../Helper/NumberFormattingHelper", "PosApi/Consume/Formatters", "PosApi/Consume/Cart", "PosApi/Consume/Device"], function (exports_1, context_1) {
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
    var Dialogs, Messages, TypeExtensions_1, NumberFormattingHelper_1, Formatters_1, Cart_1, Device_1, KREVoucherDialog;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1) {
                Dialogs = Dialogs_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (NumberFormattingHelper_1_1) {
                NumberFormattingHelper_1 = NumberFormattingHelper_1_1;
            },
            function (Formatters_1_1) {
                Formatters_1 = Formatters_1_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            },
            function (Device_1_1) {
                Device_1 = Device_1_1;
            }
        ],
        execute: function () {
            KREVoucherDialog = (function (_super) {
                __extends(KREVoucherDialog, _super);
                function KREVoucherDialog() {
                    return _super.call(this) || this;
                }
                KREVoucherDialog.prototype.onReady = function (element) {
                    var _this = this;
                    var Voucher = element.querySelector("#Voucher");
                    Voucher.value = this._data.VoucherIdData.toString();
                    Voucher.onchange = function () { _this._data.VoucherIdData = Voucher.value; };
                    Voucher.disabled = true;
                    var Balance = element.querySelector("#Total");
                    Balance.value = Formatters_1.CurrencyFormatter.toCurrency(this._data.TotalAmountData);
                    Balance.onchange = function () { Formatters_1.CurrencyFormatter.toCurrency(NumberFormattingHelper_1.NumberFormattingHelper.roundToNDigits(_this._data.TotalAmountData, 2)); };
                    Balance.disabled = true;
                    var Result = element.querySelector("#Result");
                    Result.value = this._data.ResultInfoData.toString();
                    Result.onchange = function () { _this._data.ResultInfoData = Result.value; };
                    Result.disabled = true;
                };
                KREVoucherDialog.prototype.open = function (dataInfo) {
                    var _this = this;
                    this._data = dataInfo;
                    var promise = new Promise(function (resolve, reject) {
                        _this._resolve = resolve;
                        var option = {
                            title: "Voucher " + dataInfo.VoucherIdData + " is " + dataInfo.ResultInfoData,
                            onCloseX: _this.closeDialogHandler.bind(_this),
                            button1: {
                                id: "btnPayment",
                                label: "Payment",
                                isPrimary: true,
                                onClick: _this.onAddTenderLineToCartClick.bind(_this)
                            },
                            button2: {
                                id: "btnClose",
                                label: "Close",
                                onClick: _this.closeDialogHandler.bind(_this)
                            }
                        };
                        _this.openDialog(option);
                    });
                    return promise;
                };
                KREVoucherDialog.prototype.closeDialogHandler = function () {
                    this.resolvePromise(null);
                    var voucherUpdate = new Messages.Bound.VoucherCancelRequest(this._data.VoucherIdData);
                    this.context.runtime.executeAsync(voucherUpdate);
                    return true;
                };
                KREVoucherDialog.prototype.resolvePromise = function (dataResult) {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this._resolve)) {
                        this.isProcessing = true;
                        this._resolve(dataResult);
                        this._resolve = null;
                    }
                };
                KREVoucherDialog.prototype.onAddTenderLineToCartClick = function () {
                    var _this = this;
                    this.isProcessing = true;
                    this.resolvePromise(null);
                    var extensionProperty = {
                        Key: "eVoucher",
                        Value: {
                            StringValue: this._data.VoucherIdData
                        }
                    };
                    var getCartRequest = new Cart_1.GetCurrentCartClientRequest();
                    this.context.runtime.executeAsync(getCartRequest)
                        .then(function (getCurrentCartClientResponse) {
                        if (!getCurrentCartClientResponse.canceled) {
                            var correlationId_1 = _this.context.logger.getNewCorrelationId();
                            var cart = getCurrentCartClientResponse.data.result;
                            if (TypeExtensions_1.ArrayExtensions.hasElements(getCurrentCartClientResponse.data.result.CartLines)) {
                                _this.cartLineId = getCurrentCartClientResponse.data.result.CartLines[0].LineId;
                            }
                            if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cart) && TypeExtensions_1.ArrayExtensions.hasElements(cart.CartLines)) {
                                var getDeviceConfigurationClientRequest = new Device_1.GetDeviceConfigurationClientRequest();
                                _this.context.runtime.executeAsync(getDeviceConfigurationClientRequest)
                                    .then(function (getDeviceConfigurationClientResponse) {
                                    if (!getDeviceConfigurationClientResponse.canceled) {
                                        var deviceConfiguration_1 = getDeviceConfigurationClientResponse.data;
                                        var getParameters = new Messages.KRECommerceSetup.getdataParametersRequest();
                                        _this.context.runtime.executeAsync(getParameters).then(function (parameter) {
                                            var cartTenderLine = {
                                                Amount: _this._data.TotalAmountData,
                                                TenderTypeId: parameter.data.result.PaymentMethod,
                                                Currency: deviceConfiguration_1.result.Currency,
                                                LoyaltyCardId: _this._data.VoucherIdData,
                                                IsPolicyBypassed: true,
                                                SignatureData: "",
                                                TenderLineId: "",
                                                ExtensionProperties: [extensionProperty]
                                            };
                                            var addTenderLineToCartClientRequest = new Cart_1.AddTenderLineToCartClientRequest(cartTenderLine, correlationId_1);
                                            _this.context.runtime.executeAsync(addTenderLineToCartClientRequest)
                                                .then(function (addTenderLineToCartClientResponse) {
                                                if (!addTenderLineToCartClientResponse.canceled) {
                                                    var concludeTransactionClientRequest = new Cart_1.ConcludeTransactionClientRequest(correlationId_1);
                                                    _this.context.runtime.executeAsync(concludeTransactionClientRequest);
                                                    _this.isProcessing = false;
                                                }
                                                else {
                                                    _this.lastStatus("addTenderLineToCartClientRequest: cancelled");
                                                }
                                            });
                                        });
                                    }
                                }).catch(function (err) {
                                    _this.lastStatus(JSON.stringify(err));
                                });
                            }
                            else {
                                _this.lastStatus("failed onAddTenderLineToCartClick - cart is not loaded or no lines in cart");
                            }
                        }
                        else {
                            _this.lastStatus("onAddTenderLineToCartClick: cancelled");
                        }
                    }).catch(function (err) {
                        _this.lastStatus(JSON.stringify(err));
                    });
                    return true;
                };
                return KREVoucherDialog;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", KREVoucherDialog);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Create/Dialogs/KREVoucherDialogModule.js.map