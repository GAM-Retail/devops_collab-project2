System.register(["PosApi/Create/Dialogs", "PosApi/TypeExtensions", "../../Helper/NumberFormattingHelper", "PosApi/Consume/Formatters", "PosApi/Consume/Cart", "PosApi/Consume/ScanResults"], function (exports_1, context_1) {
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
    var Dialogs, TypeExtensions_1, NumberFormattingHelper_1, Formatters_1, Cart_1, ScanResults_1, KREEventRegistrationDialogModule;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1) {
                Dialogs = Dialogs_1;
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
            function (ScanResults_1_1) {
                ScanResults_1 = ScanResults_1_1;
            }
        ],
        execute: function () {
            KREEventRegistrationDialogModule = (function (_super) {
                __extends(KREEventRegistrationDialogModule, _super);
                function KREEventRegistrationDialogModule() {
                    return _super.call(this) || this;
                }
                KREEventRegistrationDialogModule.prototype.onReady = function (element) {
                    var _this = this;
                    var OrderNum = element.querySelector("#OrderNum");
                    OrderNum.value = this._data.OrderNum.toString();
                    OrderNum.onchange = function () { _this._data.OrderNum = OrderNum.value; };
                    OrderNum.disabled = true;
                    var Name = element.querySelector("#Name");
                    Name.value = this._data.Name.toString();
                    Name.onchange = function () { _this._data.Name = Name.value; };
                    Name.disabled = true;
                    var Price = element.querySelector("#Price");
                    Price.value = Formatters_1.CurrencyFormatter.toCurrency(this._data.Price);
                    Price.onchange = function () { Formatters_1.CurrencyFormatter.toCurrency(NumberFormattingHelper_1.NumberFormattingHelper.roundToNDigits(_this._data.Price, 2)); };
                    Price.disabled = true;
                    var SalesId = element.querySelector("#SalesId");
                    SalesId.value = this._data.SalesId;
                    SalesId.onchange = function () {
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(SalesId.value)) {
                            _this._data.SalesId = SalesId.value;
                        }
                    };
                    var Comment = element.querySelector("#Comment");
                    Comment.value = this._data.Comment;
                    Comment.onchange = function () { _this._data.Comment = Comment.value; };
                    Comment.disabled = true;
                };
                KREEventRegistrationDialogModule.prototype.open = function (dataInfo) {
                    var _this = this;
                    this._data = dataInfo;
                    var promise = new Promise(function (resolve, reject) {
                        _this._resolve = resolve;
                        var option = {
                            title: "Payment Gateway " + dataInfo.Name,
                            subTitle: "Status :" + dataInfo.Status,
                            button1: {
                                id: "btnAdd",
                                label: "Add",
                                isPrimary: true,
                                onClick: _this.btnAddClickHandler.bind(_this)
                            },
                            button2: {
                                id: "btnCancel",
                                label: "Cancel",
                                onClick: _this.btnCancelClickHandler.bind(_this)
                            },
                            onCloseX: function () { return _this.btnCancelClickHandler(); }
                        };
                        _this.openDialog(option);
                    });
                    return promise;
                };
                KREEventRegistrationDialogModule.prototype.btnAddClickHandler = function () {
                    var _this = this;
                    this.isProcessing = true;
                    this.addToCartAsync(this._data.OrderNum, this._data.Item, this._data.Price, this._data.SalesId, this._data.Comment).then(function () {
                        _this.isProcessing = false;
                    });
                    this.resolvePromise(this._data);
                    return true;
                };
                KREEventRegistrationDialogModule.prototype.btnCancelClickHandler = function () {
                    this.resolvePromise(null);
                    return true;
                };
                KREEventRegistrationDialogModule.prototype.resolvePromise = function (InfoResult) {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this._resolve)) {
                        this._resolve(InfoResult);
                        this._resolve = null;
                    }
                };
                KREEventRegistrationDialogModule.prototype.addToCartAsync = function (orderNum, item, price, salesId, mssgComment) {
                    var _this = this;
                    var extensionProperty = {
                        Key: "GRAGO",
                        Value: {
                            StringValue: orderNum
                        }
                    };
                    var correlationId = this.context.logger.getNewCorrelationId();
                    var extensionPropertyRequest = new Cart_1.SaveExtensionPropertiesOnCartClientRequest([extensionProperty], correlationId);
                    return this.context.runtime.executeAsync(extensionPropertyRequest).then(function (result) {
                        if (result.canceled) {
                            return Promise.resolve({ canceled: true, data: null });
                        }
                        var getScanResult = new ScanResults_1.GetScanResultClientRequest(item);
                        return _this.context.runtime.executeAsync(getScanResult);
                    }).then(function (result) {
                        if (result.canceled) {
                            return Promise.resolve({ canceled: true, data: null });
                        }
                        var details = [
                            {
                                product: result.data.result.Product,
                                quantity: 0,
                            }
                        ];
                        var addCartLineRequest = new Cart_1.AddItemToCartOperationRequest(details, correlationId);
                        return _this.context.runtime.executeAsync(addCartLineRequest);
                    }).then(function (result) {
                        _this.cartLineId = TypeExtensions_1.ArrayExtensions.firstOrUndefined(result.data.cart.CartLines, function (c) { return c.ItemId === item; }).LineId;
                        var priceOverride = new Cart_1.PriceOverrideOperationRequest(_this.cartLineId, price, correlationId);
                        return _this.context.runtime.executeAsync(priceOverride);
                    }).then(function () {
                        var setCommentOperationRequest = new Cart_1.SetCartLineCommentOperationRequest(_this.cartLineId, mssgComment, correlationId);
                        _this.context.runtime.executeAsync(setCommentOperationRequest);
                    }).catch(function (reason) {
                        _this.context.logger.logInformational(JSON.stringify(reason));
                    });
                };
                return KREEventRegistrationDialogModule;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", KREEventRegistrationDialogModule);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/EventRegistration/KREEventRegistrationDialogModule.js.map