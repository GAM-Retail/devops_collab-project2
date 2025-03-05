System.register(["PosApi/Create/Dialogs", "../../DataService/DataServiceRequests.g", "PosApi/TypeExtensions", "PosApi/Entities", "PosApi/Consume/Cart", "../../Controls/MessageDialog", "PosApi/Consume/Device", "PosApi/Consume/Customer"], function (exports_1, context_1) {
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
    var Dialogs, Messages, TypeExtensions_1, Entities_1, Cart_1, MessgDialog, Device_1, Customer_1, KRECustDetailMyValueDialog;
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
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            },
            function (MessgDialog_1) {
                MessgDialog = MessgDialog_1;
            },
            function (Device_1_1) {
                Device_1 = Device_1_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            }
        ],
        execute: function () {
            KRECustDetailMyValueDialog = (function (_super) {
                __extends(KRECustDetailMyValueDialog, _super);
                function KRECustDetailMyValueDialog() {
                    return _super.call(this) || this;
                }
                KRECustDetailMyValueDialog.prototype.onReady = function (element) {
                    var _this = this;
                    var MyValue = element.querySelector("#MyValue");
                    MyValue.value = this._data.MyValue.toString();
                    MyValue.onchange = function () { _this._data.MyValue = MyValue.value; };
                    MyValue.disabled = true;
                    var Name = element.querySelector("#Name");
                    Name.value = this._data.Name.toString();
                    Name.onchange = function () { _this._data.Name = Name.value; };
                    Name.disabled = true;
                    var Email = element.querySelector("#Email");
                    Email.value = this._data.Email.toString();
                    Email.onchange = function () { _this._data.Email = Email.value; };
                    Email.disabled = true;
                    var Phone = element.querySelector("#Phone");
                    if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(this._data.Phone)) {
                        Phone.value = this._data.Phone.toString();
                        Phone.onchange = function () { _this._data.Phone = Phone.value; };
                        Phone.disabled = true;
                    }
                    var Address = element.querySelector("#Address");
                    if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(this._data.Address)) {
                        Address.value = this._data.Address.toString();
                        Address.onchange = function () { _this._data.Address = Address.value; };
                        Address.disabled = true;
                    }
                    var Point = element.querySelector("#Point");
                    Point.value = this._data.Point.toString();
                    Point.disabled = true;
                };
                KRECustDetailMyValueDialog.prototype.open = function (dataInfo) {
                    var _this = this;
                    this._data = dataInfo;
                    var titleInfo;
                    if (this._data.ErrorOffline != "")
                        titleInfo = this._data.ErrorOffline;
                    else
                        titleInfo = "My value customer";
                    var promise = new Promise(function (resolve, reject) {
                        _this._resolve = resolve;
                        var option = {
                            title: titleInfo,
                            subTitle: "Customer details ",
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
                KRECustDetailMyValueDialog.prototype.btnAddClickHandler = function () {
                    var _this = this;
                    this.isProcessing = true;
                    var getConnection = new Device_1.GetConnectionStatusClientRequest(this.context.logger.getNewCorrelationId());
                    this.context.runtime.executeAsync(getConnection).then(function (responseCon) {
                        if (responseCon.data.result == Entities_1.ClientEntities.ConnectionStatusType.Online) {
                            var getAccountNum = new Messages.KREMyValue.GetMyValueRequest(_this._data.MyValue);
                            _this.context.runtime.executeAsync(getAccountNum).then(function (accountNum) {
                                _this.addMyValue(accountNum.data.result.Result, _this._data);
                                _this.isProcessing = false;
                            });
                        }
                        else {
                            _this.isProcessing = false;
                        }
                    });
                    this.resolvePromise(this._data);
                    return true;
                };
                KRECustDetailMyValueDialog.prototype.btnCancelClickHandler = function () {
                    this.resolvePromise(null);
                    return true;
                };
                KRECustDetailMyValueDialog.prototype.resolvePromise = function (InfoResult) {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this._resolve)) {
                        this._resolve(InfoResult);
                        this._resolve = null;
                    }
                };
                KRECustDetailMyValueDialog.prototype.addMyValue = function (customerId, myValue) {
                    var _this = this;
                    var correlationId = this.context.logger.getNewCorrelationId();
                    try {
                        if (customerId != "") {
                            var setCustomerOnCartOperationRequest = new Cart_1.SetCustomerOnCartOperationRequest(correlationId, customerId);
                            this.context.runtime.executeAsync(setCustomerOnCartOperationRequest).then(function () {
                                var comment = _this._data.MyValue;
                                var setTransactionCommentOperationRequest = new Cart_1.SetTransactionCommentOperationRequest(correlationId, comment);
                                _this.context.runtime.executeAsync(setTransactionCommentOperationRequest).then(function (responseCart) {
                                    var extensionProperty = {
                                        Key: "MYVALUE",
                                        Value: {
                                            StringValue: _this._data.MyValue
                                        }
                                    };
                                    responseCart.data.cart.LoyaltyCardId = _this._data.MyValue;
                                    responseCart.data.cart.ExtensionProperties = [extensionProperty];
                                    var saveExtensionPropertiesOnCartClientRequest = new Cart_1.SaveExtensionPropertiesOnCartClientRequest([extensionProperty], correlationId);
                                    _this.context.runtime.executeAsync(saveExtensionPropertiesOnCartClientRequest);
                                });
                            });
                        }
                        else {
                            if (this._data.AutoCreateCust == 1) {
                                var splitName = myValue.Name.split(" ");
                                var customer = void 0;
                                customer = new Entities_1.ProxyEntities.CustomerClass();
                                customer.CustomerTypeValue = Entities_1.ProxyEntities.CustomerType.Person;
                                customer.CustomerGroup = "KGVC";
                                customer.Name = myValue.Name;
                                customer.FirstName = splitName[0];
                                if (splitName.length >= 1) {
                                    if (splitName[1] == "") {
                                        customer.LastName = ".";
                                    }
                                    else {
                                        var custNameData = "";
                                        for (var i = 1; i < splitName.length; ++i) {
                                            custNameData += splitName[i] + " ";
                                        }
                                        customer.LastName = custNameData;
                                    }
                                }
                                else {
                                    customer.LastName = ".";
                                }
                                customer.Email = myValue.Email;
                                customer.ReceiptEmail = myValue.Email;
                                customer.Phone = myValue.Phone;
                                customer.ReceiptSettings = 2;
                                this.context.runtime.executeAsync(new Customer_1.CreateCustomerServiceRequest(correlationId, customer)).then(function (response) {
                                    if (response.data.customer.AccountNumber != "") {
                                        var updateValueId = new Messages.KREMyValue.UpdateMyValueRequest(response.data.customer.AccountNumber, myValue.MyValue);
                                        _this.context.runtime.executeAsync(updateValueId).then(function (responseValue) {
                                            if (responseValue.data.result.AccountNum != "") {
                                                var setCustomerOnCartOperationRequest = new Cart_1.SetCustomerOnCartOperationRequest(correlationId, response.data.customer.AccountNumber);
                                                _this.context.runtime.executeAsync(setCustomerOnCartOperationRequest).then(function () {
                                                    var comment = myValue.MyValue;
                                                    var setTransactionCommentOperationRequest = new Cart_1.SetTransactionCommentOperationRequest(correlationId, comment);
                                                    _this.context.runtime.executeAsync(setTransactionCommentOperationRequest).then(function (responseCart) {
                                                        var extensionProperty = {
                                                            Key: "MYVALUE",
                                                            Value: {
                                                                StringValue: myValue.MyValue
                                                            }
                                                        };
                                                        responseCart.data.cart.ExtensionProperties = [extensionProperty];
                                                        var saveExtensionPropertiesOnCartClientRequest = new Cart_1.SaveExtensionPropertiesOnCartClientRequest([extensionProperty], correlationId);
                                                        _this.context.runtime.executeAsync(saveExtensionPropertiesOnCartClientRequest);
                                                    });
                                                }).catch(function (reason) {
                                                    _this.context.logger.logError("Error : " + JSON.stringify(reason));
                                                    Promise.reject(new Entities_1.ClientEntities.ExtensionError("Error"));
                                                });
                                            }
                                        });
                                    }
                                });
                            }
                            else {
                                var mssgError = "Data not found in FNO or has been deleted";
                                MessgDialog.default.ShowErrorMessage(this.context, "Error", mssgError);
                            }
                        }
                    }
                    catch (_a) {
                        console.error("please check data");
                    }
                };
                return KRECustDetailMyValueDialog;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", KRECustDetailMyValueDialog);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/MyValue/KRECustDetailMyValueDialogModule.js.map