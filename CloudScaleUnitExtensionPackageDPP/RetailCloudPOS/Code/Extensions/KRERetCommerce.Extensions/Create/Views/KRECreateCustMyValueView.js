System.register(["knockout", "PosApi/Create/Views", "PosApi/TypeExtensions", "../../DataService/DataServiceRequests.g", "PosApi/Entities", "PosApi/Consume/Customer", "PosApi/Consume/Cart", "../../Controls/MessageDialog"], function (exports_1, context_1) {
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
    var knockout_1, Views, TypeExtensions_1, Messages, Entities_1, Customer_1, Cart_1, MessgDialog, KRECreateCustMyValueView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (knockout_1_1) {
                knockout_1 = knockout_1_1;
            },
            function (Views_1) {
                Views = Views_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (Customer_1_1) {
                Customer_1 = Customer_1_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            },
            function (MessgDialog_1) {
                MessgDialog = MessgDialog_1;
            }
        ],
        execute: function () {
            KRECreateCustMyValueView = (function (_super) {
                __extends(KRECreateCustMyValueView, _super);
                function KRECreateCustMyValueView(context) {
                    var _this = this;
                    var config = {
                        title: "New Customer My Value View",
                        commandBar: {
                            commands: [
                                {
                                    name: "AddMyValue",
                                    label: "Save Customer My value",
                                    icon: Views.Icons.Save,
                                    isVisible: true,
                                    canExecute: false,
                                    execute: function (args) {
                                        if (TypeExtensions_1.StringExtensions.isEmpty(_this.email)) {
                                            MessgDialog.default.ShowErrorMessage(context, "Error mandatory", "Field e-mail cannot be empty");
                                        }
                                        else {
                                            _this.addMyValue(_this.firstname, _this.lastname, _this.email, _this.phone);
                                        }
                                    }
                                }
                            ]
                        }
                    };
                    _this = _super.call(this, context, config) || this;
                    _this.state.title = "New Customer My Value View";
                    _this.state.isProcessing = false;
                    _this.firstname = knockout_1.default.observable("");
                    _this.lastname = knockout_1.default.observable("");
                    _this.email = knockout_1.default.observable("");
                    _this.phone = knockout_1.default.observable("");
                    return _this;
                }
                KRECreateCustMyValueView.prototype.onReady = function (element) {
                    var _this = this;
                    knockout_1.default.applyBindings(this, element);
                    this.correlationId = this.context.logger.getNewCorrelationId();
                    var firstname = element.querySelector("#firstname");
                    firstname.value = this.firstname();
                    firstname.onchange = function () {
                        if (phone.value == "") {
                            phone.value = "";
                            _this.phone = "";
                        }
                        if (email.value == "") {
                            _this.email = "";
                            email.value = "";
                        }
                        _this.firstname = firstname.value.toUpperCase();
                        if (firstname.value != "" && lastname.value != "" && email.value != "") {
                            _this.btnSaveCommand.canExecute = true;
                        }
                        else {
                            _this.btnSaveCommand.canExecute = false;
                        }
                    };
                    firstname.required = true;
                    var lastname = element.querySelector("#lastname");
                    lastname.value = this.lastname();
                    lastname.onchange = function () {
                        if (lastname.value == "") {
                            _this.lastname = "";
                            lastname.value = "";
                        }
                        else {
                            _this.lastname = lastname.value;
                        }
                        if (firstname.value != "" && lastname.value != "" && email.value != "") {
                            _this.btnSaveCommand.canExecute = true;
                        }
                        else {
                            _this.btnSaveCommand.canExecute = false;
                        }
                    };
                    lastname.required = true;
                    var email = element.querySelector("#email");
                    email.value = this.email();
                    email.onchange = function () {
                        _this.email = email.value;
                        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
                        if (email.value.match(mailformat)) {
                            if (firstname.value != "" && lastname.value != "" && email.value != "") {
                                _this.btnSaveCommand.canExecute = true;
                            }
                            else {
                                _this.btnSaveCommand.canExecute = false;
                            }
                        }
                        else {
                            if (email.value != "") {
                                MessgDialog.default.ShowErrorMessage(_this.context, "Email error", "You have entered an invalid email address!");
                            }
                        }
                    };
                    email.required = true;
                    var phone = element.querySelector("#phone");
                    phone.value = this.phone();
                    phone.onchange = function () {
                        _this.phone = phone.value;
                        if (firstname.value != "" && lastname.value != "" && email.value != "") {
                            _this.btnSaveCommand.canExecute = true;
                        }
                        else {
                            _this.btnSaveCommand.canExecute = false;
                        }
                    };
                };
                Object.defineProperty(KRECreateCustMyValueView.prototype, "btnSaveCommand", {
                    get: function () {
                        return TypeExtensions_1.ArrayExtensions.firstOrUndefined(this.state.commandBar.commands, function (c) { return c.name === "AddMyValue"; });
                    },
                    enumerable: false,
                    configurable: true
                });
                KRECreateCustMyValueView.prototype.addMyValue = function (firstname, lastname, email, phone) {
                    var _this = this;
                    if (email === void 0) { email = ""; }
                    if (phone === void 0) { phone = ""; }
                    this.state.isProcessing = true;
                    try {
                        var customer = void 0;
                        customer = new Entities_1.ProxyEntities.CustomerClass();
                        customer.CustomerTypeValue = Entities_1.ProxyEntities.CustomerType.Person;
                        customer.Name = firstname + " " + lastname;
                        customer.FirstName = firstname;
                        customer.LastName = lastname;
                        customer.Email = this.email;
                        customer.ReceiptEmail = this.email;
                        customer.Phone = this.phone;
                        customer.ReceiptSettings = 2;
                        customer.CustomerGroup = 'KGVC';
                        this.context.runtime.executeAsync(new Customer_1.CreateCustomerServiceRequest(this.correlationId, customer)).then(function (response) {
                            var fullName = firstname + " " + lastname;
                            var createMyValue = new Messages.KREMyValue.CreateMyValueRequest(response.data.customer.AccountNumber, email, fullName, phone, "", "");
                            _this.context.runtime.executeAsync(createMyValue).then(function (responseMyValue) {
                                if (responseMyValue.data.result.Error == "") {
                                    var setCustomerOnCartOperationRequest = new Cart_1.SetCustomerOnCartOperationRequest(_this.correlationId, response.data.customer.AccountNumber);
                                    _this.context.runtime.executeAsync(setCustomerOnCartOperationRequest).then(function () {
                                        var comment = responseMyValue.data.result.MyValue;
                                        var setTransactionCommentOperationRequest = new Cart_1.SetTransactionCommentOperationRequest(_this.correlationId, comment);
                                        _this.context.runtime.executeAsync(setTransactionCommentOperationRequest).then(function (responseCart) {
                                            var extensionProperty = {
                                                Key: "MYVALUE",
                                                Value: {
                                                    StringValue: responseMyValue.data.result.MyValue
                                                }
                                            };
                                            responseCart.data.cart.ExtensionProperties = [extensionProperty];
                                            var saveExtensionPropertiesOnCartClientRequest = new Cart_1.SaveExtensionPropertiesOnCartClientRequest([extensionProperty], _this.correlationId);
                                            _this.context.runtime.executeAsync(saveExtensionPropertiesOnCartClientRequest);
                                            var cartViewParameters = new Entities_1.ClientEntities.CartViewNavigationParameters(_this.correlationId);
                                            _this.context.navigator.navigateToPOSView("CartView", cartViewParameters);
                                        });
                                    });
                                }
                                else {
                                    MessgDialog.default.show(_this.context, "Error", responseMyValue.data.result.Error);
                                }
                            });
                            _this.state.isProcessing = false;
                        });
                    }
                    catch (_a) {
                        alert("please check data");
                    }
                };
                KRECreateCustMyValueView.prototype.dispose = function () {
                    TypeExtensions_1.ObjectExtensions.disposeAllProperties(this);
                };
                return KRECreateCustMyValueView;
            }(Views.CustomViewControllerBase));
            exports_1("default", KRECreateCustMyValueView);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Create/Views/KRECreateCustMyValueView.js.map