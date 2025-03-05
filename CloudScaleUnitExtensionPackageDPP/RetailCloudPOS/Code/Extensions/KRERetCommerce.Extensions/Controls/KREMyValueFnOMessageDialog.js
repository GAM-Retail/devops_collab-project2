System.register(["PosApi/Create/Dialogs", "PosApi/TypeExtensions", "PosApi/Entities", "../DataService/DataServiceRequests.g", "PosApi/Consume/Customer", "PosApi/Consume/Cart", "../Controls/MessageDialog", "knockout"], function (exports_1, context_1) {
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
    var Dialogs, TypeExtensions_1, Entities_1, Messages, Customer_1, Cart_1, MessgDialog, knockout_1, KREMyValueFnOMessageDialog;
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
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            },
            function (MessgDialog_1) {
                MessgDialog = MessgDialog_1;
            },
            function (knockout_1_1) {
                knockout_1 = knockout_1_1;
            }
        ],
        execute: function () {
            KREMyValueFnOMessageDialog = (function (_super) {
                __extends(KREMyValueFnOMessageDialog, _super);
                function KREMyValueFnOMessageDialog() {
                    return _super.call(this) || this;
                }
                KREMyValueFnOMessageDialog.prototype.onReady = function (element) {
                    knockout_1.default.applyBindings(this, element);
                };
                KREMyValueFnOMessageDialog.prototype.open = function (title, subTitle, dataMyValue) {
                    var _this = this;
                    this.setData = dataMyValue;
                    var promise = new Promise(function (resolve, reject) {
                        _this.resolve = resolve;
                        var option = {
                            title: title,
                            subTitle: subTitle,
                            onCloseX: _this.onCloseX.bind(_this),
                            button1: {
                                id: "YesBtn",
                                label: "Yes",
                                isPrimary: true,
                                onClick: _this.button1ClickHandler.bind(_this)
                            },
                            button2: {
                                id: "NoBtn",
                                label: "No",
                                onClick: _this.button2ClickHandler.bind(_this)
                            }
                        };
                        _this.setButtonDisabledState("YesBtn", false);
                        _this.openDialog(option);
                    });
                    return promise;
                };
                KREMyValueFnOMessageDialog.prototype.onCloseX = function () {
                    this.resolvePromise("");
                    return true;
                };
                KREMyValueFnOMessageDialog.prototype.button1ClickHandler = function () {
                    var _this = this;
                    this.isProcessing = true;
                    var splitName = this.setData.Name.split(" ", 2);
                    var customer;
                    customer = new Entities_1.ProxyEntities.CustomerClass();
                    customer.CustomerTypeValue = Entities_1.ProxyEntities.CustomerType.Person;
                    customer.Name = this.setData.Name;
                    customer.FirstName = splitName[0];
                    customer.LastName = splitName[1] + ".";
                    customer.Email = this.setData.Email;
                    customer.ReceiptEmail = this.setData.Email;
                    customer.Phone = this.setData.Phone;
                    var correlationId = this.context.logger.getNewCorrelationId();
                    this.context.runtime.executeAsync(new Customer_1.CreateCustomerServiceRequest(correlationId, customer)).then(function (response) {
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(response.data.customer.AccountNumber)) {
                            var updateMyValue = new Messages.KREMyValue.UpdateMyValueRequest(response.data.customer.AccountNumber, _this.setData.MyValue);
                            _this.context.runtime.executeAsync(updateMyValue).then(function (responseMyValue) {
                                if (responseMyValue.data.result.Error == "") {
                                    var setCustomerOnCartOperationRequest = new Cart_1.SetCustomerOnCartOperationRequest(correlationId, response.data.customer.AccountNumber);
                                    _this.context.runtime.executeAsync(setCustomerOnCartOperationRequest);
                                }
                                else {
                                    MessgDialog.default.show(_this.context, "Error", responseMyValue.data.result.Error);
                                }
                            });
                        }
                        _this.isProcessing = false;
                    });
                    return true;
                };
                KREMyValueFnOMessageDialog.prototype.button2ClickHandler = function () {
                    this.resolvePromise("");
                    return true;
                };
                KREMyValueFnOMessageDialog.prototype.resolvePromise = function (result) {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this.resolve)) {
                        this.resolve = null;
                    }
                };
                return KREMyValueFnOMessageDialog;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", KREMyValueFnOMessageDialog);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/KREMyValueFnOMessageDialog.js.map