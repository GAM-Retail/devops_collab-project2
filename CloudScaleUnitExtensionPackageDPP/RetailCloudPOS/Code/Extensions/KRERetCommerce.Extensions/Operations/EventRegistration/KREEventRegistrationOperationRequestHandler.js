System.register(["PosApi/Create/Operations", "./KREEventRegistrationOperationRequest", "../../Controls/EventRegistration/KREEventRegistrationDialog", "../../Controls/EventRegistration/KREEventRegistrationDetailDialogModule", "PosApi/TypeExtensions", "../../DataService/DataServiceRequests.g", "../../ViewExtensions/Cart/CartViewController", "../../Create/Dialogs/KREMessageDialog"], function (exports_1, context_1) {
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
    var Operations_1, KREEventRegistrationOperationRequest_1, KREEventRegistrationDialog_1, KREEventRegistrationDetailDialogModule_1, TypeExtensions_1, Messages, CartViewController_1, KREMessageDialog_1, CartViewController_2, KREEventRegistrationOperationRequestHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (KREEventRegistrationOperationRequest_1_1) {
                KREEventRegistrationOperationRequest_1 = KREEventRegistrationOperationRequest_1_1;
            },
            function (KREEventRegistrationDialog_1_1) {
                KREEventRegistrationDialog_1 = KREEventRegistrationDialog_1_1;
            },
            function (KREEventRegistrationDetailDialogModule_1_1) {
                KREEventRegistrationDetailDialogModule_1 = KREEventRegistrationDetailDialogModule_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (CartViewController_1_1) {
                CartViewController_1 = CartViewController_1_1;
                CartViewController_2 = CartViewController_1_1;
            },
            function (KREMessageDialog_1_1) {
                KREMessageDialog_1 = KREMessageDialog_1_1;
            }
        ],
        execute: function () {
            KREEventRegistrationOperationRequestHandler = (function (_super) {
                __extends(KREEventRegistrationOperationRequestHandler, _super);
                function KREEventRegistrationOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREEventRegistrationOperationRequestHandler.prototype.supportedRequestType = function () {
                    return KREEventRegistrationOperationRequest_1.default;
                };
                KREEventRegistrationOperationRequestHandler.prototype.executeAsync = function (request) {
                    var _this = this;
                    if (CartViewController_2.default.customer) {
                        this.custId = CartViewController_1.default.customer.AccountNumber;
                        this.custName = CartViewController_1.default.customer.Name;
                        this.custPhone = CartViewController_1.default.customer.Phone;
                        this.custEmail = CartViewController_1.default.customer.Email;
                    }
                    else {
                        this.custId = '';
                        this.custName = '';
                        this.custPhone = '';
                        this.custEmail = '';
                    }
                    this.receiptId = '';
                    this.itemId = CartViewController_1.default.selectedSingleCartLines.ItemId;
                    this.transactionId = CartViewController_1.default.selectedSingleCartTable.Id;
                    this.qty = CartViewController_1.default.selectedSingleCartLines.Quantity.toString();
                    if (CartViewController_1.default.selectedSingleCartLines.DiscountLines[0])
                        this.offerId = CartViewController_1.default.selectedSingleCartLines.DiscountLines[0].OfferId;
                    else
                        this.offerId = '';
                    this.eventId = "";
                    var getEventId = new Messages.KREEventRegistration.getEventIdRequest(this.itemId, this.offerId, this.eventId);
                    this.context.runtime.executeAsync(getEventId).then(function (responseCon) {
                        if (responseCon.data.result) {
                            _this.showDialog(responseCon.data.result, _this.itemId);
                        }
                        else {
                            KREMessageDialog_1.default.show(_this.context, "ERROR", "NO EVENT AVAILABLE");
                        }
                    });
                    return Promise.resolve({
                        canceled: true
                    });
                };
                KREEventRegistrationOperationRequestHandler.prototype.showDialog = function (data, _itemid) {
                    var _this = this;
                    KREEventRegistrationDialog_1.default.show(this.context, data).then(function (respon) {
                        respon.value = _this.eventId = respon.value;
                        respon.label = _this.eventName = respon.label;
                        if (_this.eventId) {
                            var getPricebyEventId = new Messages.KREEventRegistration.getEventIdRequest(_this.itemId, _this.offerId, _this.eventId);
                            _this.context.runtime.executeAsync(getPricebyEventId).then(function (responPrice) {
                                if (responPrice.data.result) {
                                    _this.price = responPrice.data.result[0].Price;
                                    _this.isPurchaseProduct = responPrice.data.result[0].IsPurchaseProduct;
                                    _this.setOrderDialog(_this.eventId, _this.itemId, _this.qty, _this.transactionId, _this.custId, _this.receiptId, _this.eventName, _this.price, _this.custName, _this.custPhone, _this.custEmail);
                                }
                            });
                        }
                    });
                    return Promise.resolve({
                        canceled: true
                    });
                };
                KREEventRegistrationOperationRequestHandler.prototype.setOrderDialog = function (_eventId, _itemid, _qty, _transactionId, _custId, _receiptId, _eventName, _price, _custName, _custPhone, _custEmail) {
                    var _this = this;
                    var dialog = new KREEventRegistrationDetailDialogModule_1.default();
                    return dialog
                        .open(_eventId, _itemid, _qty, _transactionId, _custId, _receiptId, _eventName, this.price, _custName, _custPhone, _custEmail, this.isPurchaseProduct)
                        .then(function (InfoItem) {
                        if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(InfoItem)) {
                            _this.context.logger.logInformational("dialog canceled for data: " + JSON.stringify(InfoItem));
                            return Promise.resolve(false);
                        }
                        _this.context.logger.logInformational("data is: " + JSON.stringify(InfoItem));
                        return Promise.resolve(true);
                    }).catch(function (reason) {
                        _this.context.logger.logError("Error occurred in the show dialog: " + JSON.stringify(reason));
                        return Promise.resolve(false);
                    });
                };
                return KREEventRegistrationOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", KREEventRegistrationOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/EventRegistration/KREEventRegistrationOperationRequestHandler.js.map