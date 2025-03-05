System.register(["PosApi/Create/Operations", "./KREMyValueOperationResponse", "./KREMyValueOperationRequest", "PosApi/Entities", "PosApi/TypeExtensions", "../../Controls/MyValue/KREFindMyValueDialog", "../../Controls/MyValue/KREMyValueDialog", "../../Controls/MyValue/KRECustDetailMyValueDialogModule", "../../DataService/DataServiceRequests.g", "../../Controls/KREMyValueMessageDialog", "../../Controls/MessageDialog", "PosApi/Consume/Device"], function (exports_1, context_1) {
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
    var Operations_1, KREMyValueOperationResponse_1, KREMyValueOperationRequest_1, Entities_1, TypeExtensions_1, KREFindMyValueDialog_1, KREMyValueDialog_1, KRECustDetailMyValueDialogModule_1, Messages, KREMyValueMessageDialog_1, MessageDialog_1, Device_1, KREMyValueOperationRequestHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (KREMyValueOperationResponse_1_1) {
                KREMyValueOperationResponse_1 = KREMyValueOperationResponse_1_1;
            },
            function (KREMyValueOperationRequest_1_1) {
                KREMyValueOperationRequest_1 = KREMyValueOperationRequest_1_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (KREFindMyValueDialog_1_1) {
                KREFindMyValueDialog_1 = KREFindMyValueDialog_1_1;
            },
            function (KREMyValueDialog_1_1) {
                KREMyValueDialog_1 = KREMyValueDialog_1_1;
            },
            function (KRECustDetailMyValueDialogModule_1_1) {
                KRECustDetailMyValueDialogModule_1 = KRECustDetailMyValueDialogModule_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (KREMyValueMessageDialog_1_1) {
                KREMyValueMessageDialog_1 = KREMyValueMessageDialog_1_1;
            },
            function (MessageDialog_1_1) {
                MessageDialog_1 = MessageDialog_1_1;
            },
            function (Device_1_1) {
                Device_1 = Device_1_1;
            }
        ],
        execute: function () {
            KREMyValueOperationRequestHandler = (function (_super) {
                __extends(KREMyValueOperationRequestHandler, _super);
                function KREMyValueOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREMyValueOperationRequestHandler.prototype.supportedRequestType = function () {
                    return KREMyValueOperationRequest_1.default;
                };
                KREMyValueOperationRequestHandler.prototype.executeAsync = function (request) {
                    this.context.logger.logInformational("Log message from KREMyValueOperationRequestHandler executeAsync().");
                    return this.showDialog();
                };
                KREMyValueOperationRequestHandler.prototype.showDialog = function () {
                    var _this = this;
                    var findMyValueDialog = new KREFindMyValueDialog_1.default();
                    findMyValueDialog.show(this.context).then(function (resultFilter) {
                        _this.filterType = resultFilter;
                        if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(resultFilter)) {
                            _this.context.logger.logInformational("not found");
                            return Promise.reject(true);
                        }
                        else {
                            _this.setOrderDialog(resultFilter);
                            return Promise.resolve();
                        }
                    }).catch(function (reason) {
                        _this.context.logger.logError("Error occurred in the create dialog: " + JSON.stringify(reason));
                        return Promise.resolve(false);
                    });
                    return Promise.resolve({
                        canceled: true,
                        data: new KREMyValueOperationResponse_1.default
                    });
                };
                KREMyValueOperationRequestHandler.prototype.setOrderDialog = function (filter) {
                    var _this = this;
                    var dialog = new KREMyValueDialog_1.default();
                    var mesgDialog = new KREMyValueMessageDialog_1.default();
                    var CustDetailMyValueDialogModule = new KRECustDetailMyValueDialogModule_1.default();
                    var idJson = "InvalidClient";
                    dialog.show(this.context, filter).then(function (InputMyvalue) {
                        var getConnection = new Device_1.GetConnectionStatusClientRequest(_this.context.logger.getNewCorrelationId());
                        _this.context.runtime.executeAsync(getConnection).then(function (responseCon) {
                            if (responseCon.data.result == Entities_1.ClientEntities.ConnectionStatusType.Online) {
                                _this.context.runtime.executeAsync(new Messages.KREMyValue.SearchMyValueRequest(InputMyvalue, filter)).then(function (response) {
                                    if (response.data.result.Error == "") {
                                        _this.context.logger.logInformational("Check my value id: " + response.data.result.Result);
                                        return CustDetailMyValueDialogModule.open(response.data.result);
                                    }
                                    else {
                                        if (response.data.result.Id == idJson) {
                                            MessageDialog_1.default.show(_this.context, "Error", response.data.result.Error);
                                        }
                                        else if (response.data.result.Id == "0") {
                                            MessageDialog_1.default.show(_this.context, "Error", response.data.result.Error);
                                        }
                                        else
                                            mesgDialog.open(response.data.result.Error + " " + InputMyvalue + " ", "Do you want to make a customer my value ?");
                                    }
                                    return Promise.reject(true);
                                });
                            }
                            else {
                                _this.context.runtime.executeAsync(new Messages.StoreOperations.SearchMyValueRequest(InputMyvalue, filter)).then(function (responseOffline) {
                                    MessageDialog_1.default.show(_this.context, "Error connection", responseOffline.data.result.Error);
                                });
                            }
                        });
                    });
                    return Promise.resolve(true);
                };
                return KREMyValueOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", KREMyValueOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/MyValue/KREMyValueOperationRequestHandler.js.map