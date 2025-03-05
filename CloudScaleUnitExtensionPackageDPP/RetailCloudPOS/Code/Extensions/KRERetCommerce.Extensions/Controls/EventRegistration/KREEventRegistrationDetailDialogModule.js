System.register(["PosApi/Create/Dialogs", "PosApi/TypeExtensions", "PosApi/Entities", "../../DataService/DataServiceEntities.g", "../../DataService/DataServiceRequests.g", "../../ViewExtensions/Cart/CartViewController", "PosApi/Consume/Cart", "PosApi/Consume/Formatters"], function (exports_1, context_1) {
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
    var Dialogs, TypeExtensions_1, Entities_1, DataServiceEntities_g_1, Messages, CartViewController_1, Cart_1, Formatters_1, KREEventRegistrationDetailDialog;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1) {
                Dialogs = Dialogs_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (DataServiceEntities_g_1_1) {
                DataServiceEntities_g_1 = DataServiceEntities_g_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (CartViewController_1_1) {
                CartViewController_1 = CartViewController_1_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            },
            function (Formatters_1_1) {
                Formatters_1 = Formatters_1_1;
            }
        ],
        execute: function () {
            KREEventRegistrationDetailDialog = (function (_super) {
                __extends(KREEventRegistrationDetailDialog, _super);
                function KREEventRegistrationDetailDialog() {
                    return _super.call(this) || this;
                }
                KREEventRegistrationDetailDialog.prototype.onReady = function (element) {
                    var _this = this;
                    this._data = new DataServiceEntities_g_1.Entities.KREEventRegistrationTransactionEntity();
                    var EventReg = element.querySelector("#EventReg");
                    EventReg.value = this._eventId.toString();
                    EventReg.disabled = true;
                    var CustName = element.querySelector("#CustName");
                    CustName.value = this._CustName.toString();
                    CustName.onchange = function () { _this._data.CustName = CustName.value.toString(); };
                    CustName.disabled = false;
                    var CustPhone = element.querySelector("#CustPhone");
                    CustPhone.value = this._CustPhone.toString();
                    CustPhone.onchange = function () { _this._data.CustPhone = CustPhone.value.toString(); };
                    CustPhone.disabled = false;
                    var CustEmail = element.querySelector("#CustEmail");
                    CustEmail.value = this._CustEmail.toString();
                    CustEmail.onchange = function () { _this._data.CustEmail = CustEmail.value.toString(); };
                    CustEmail.disabled = false;
                    var Price = element.querySelector("#Price");
                    Price.value = Formatters_1.CurrencyFormatter.toCurrency(this._price);
                    Price.disabled = true;
                };
                KREEventRegistrationDetailDialog.prototype.open = function (eventId, itemId, qty, transactionId, custId, receiptId, eventName, price, custName, custPhone, custEmail, isPurchaseProduct) {
                    var _this = this;
                    this._eventId = eventId;
                    this._itemId = itemId;
                    this._qty = qty;
                    this._transactionId = transactionId;
                    this._custId = custId;
                    this._receiptId = receiptId;
                    this.cartLineId = CartViewController_1.default.selectedSingleCartLines.LineId;
                    this._eventName = eventName;
                    this._price = price;
                    this._CustName = custName;
                    this._CustPhone = custPhone;
                    this._CustEmail = custEmail;
                    this._isPurchaseProduct = isPurchaseProduct;
                    var promise = new Promise(function (resolve, reject) {
                        _this._resolve = resolve;
                        var option = {
                            title: "Event Registration Detail",
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
                KREEventRegistrationDetailDialog.prototype.btnAddClickHandler = function () {
                    if (this._data.CustName)
                        this._CustName = this._data.CustName;
                    if (this._data.CustPhone)
                        this._CustPhone = this._data.CustPhone;
                    if (this._data.CustEmail)
                        this._CustEmail = this._data.CustEmail;
                    this.insertTransaction(this._eventId.toString(), this._CustName, this._CustPhone, this._CustEmail, this._itemId, this._qty, this._transactionId, this._receiptId, this._custId, this._eventName);
                    return true;
                };
                KREEventRegistrationDetailDialog.prototype.btnCancelClickHandler = function () {
                    this.resolvePromise('cancel');
                    return true;
                };
                KREEventRegistrationDetailDialog.prototype.resolvePromise = function (InfoResult) {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this._resolve)) {
                        this._resolve(InfoResult);
                        this._resolve = null;
                    }
                };
                KREEventRegistrationDetailDialog.prototype.insertTransaction = function (eventId, custName, custPhone, custEmail, itemId, qty, transactionId, receiptId, myValueId, eventName) {
                    var _this = this;
                    var correlationId = this.context.logger.getNewCorrelationId();
                    var insertEventRegistTrans = new Messages.KREEventRegistration.insertEventRegisTransactionRequest(eventId, custName, custPhone, custEmail, itemId, qty, transactionId, receiptId, myValueId);
                    this.context.runtime.executeAsync(insertEventRegistTrans).then(function (result) {
                        if (result) {
                            var itemComment_1;
                            itemComment_1 = eventName + ' ' + custName + ' ' + custPhone + ' ' + custEmail;
                            if (_this._isPurchaseProduct == "0") {
                                var priceOverrideRequest = new Cart_1.PriceOverrideOperationRequest(_this.cartLineId, _this._price, correlationId);
                                _this.context.runtime.executeAsync(priceOverrideRequest).then(function () {
                                    var setCommentOperationRequest = new Cart_1.SetCartLineCommentOperationRequest(_this.cartLineId, itemComment_1, correlationId);
                                    _this.context.runtime.executeAsync(setCommentOperationRequest);
                                });
                            }
                            else if (_this._isPurchaseProduct == "1") {
                                var setCommentOperationRequest = new Cart_1.SetCartLineCommentOperationRequest(_this.cartLineId, itemComment_1, correlationId);
                                _this.context.runtime.executeAsync(setCommentOperationRequest);
                            }
                            var cartViewParameters = new Entities_1.ClientEntities.CartViewNavigationParameters(correlationId);
                            _this.context.navigator.navigateToPOSView("CartView", cartViewParameters);
                        }
                    });
                };
                return KREEventRegistrationDetailDialog;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", KREEventRegistrationDetailDialog);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/EventRegistration/KREEventRegistrationDetailDialogModule.js.map