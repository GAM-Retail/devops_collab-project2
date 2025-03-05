System.register(["PosApi/Create/Operations", "./KREGragoOperationResponse", "./KREGragoOperationRequest", "PosApi/Entities", "../../Controls/Grago/KREGragoOrderInfoDialog", "../../Controls/Grago/KREGragoOrderDialogModule", "PosApi/TypeExtensions", "../../DataService/DataServiceRequests.g", "../../Controls/MessageDialog", "PosApi/Consume/Device"], function (exports_1, context_1) {
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
    var Operations_1, KREGragoOperationResponse_1, KREGragoOperationRequest_1, Entities_1, KREGragoOrderInfoDialog_1, KREGragoOrderDialogModule_1, TypeExtensions_1, Messages, MessgDialog, Device_1, KREGragoOperationRequestHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (KREGragoOperationResponse_1_1) {
                KREGragoOperationResponse_1 = KREGragoOperationResponse_1_1;
            },
            function (KREGragoOperationRequest_1_1) {
                KREGragoOperationRequest_1 = KREGragoOperationRequest_1_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (KREGragoOrderInfoDialog_1_1) {
                KREGragoOrderInfoDialog_1 = KREGragoOrderInfoDialog_1_1;
            },
            function (KREGragoOrderDialogModule_1_1) {
                KREGragoOrderDialogModule_1 = KREGragoOrderDialogModule_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (MessgDialog_1) {
                MessgDialog = MessgDialog_1;
            },
            function (Device_1_1) {
                Device_1 = Device_1_1;
            }
        ],
        execute: function () {
            KREGragoOperationRequestHandler = (function (_super) {
                __extends(KREGragoOperationRequestHandler, _super);
                function KREGragoOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREGragoOperationRequestHandler.prototype.supportedRequestType = function () {
                    return KREGragoOperationRequest_1.default;
                };
                KREGragoOperationRequestHandler.prototype.executeAsync = function (request) {
                    var _this = this;
                    var getConnection = new Device_1.GetConnectionStatusClientRequest(this.context.logger.getNewCorrelationId());
                    return this.context.runtime.executeAsync(getConnection).then(function (responseCon) {
                        if (responseCon.data.result == Entities_1.ClientEntities.ConnectionStatusType.Online) {
                            _this.context.logger.logInformational("Log message from KREGragoOperationRequestHandler executeAsync().");
                            return _this.showDialog();
                        }
                        else {
                            MessgDialog.default.show(_this.context, "Error connection", "please check your connection");
                            return Promise.resolve({ canceled: false, data: null });
                        }
                    });
                };
                KREGragoOperationRequestHandler.prototype.showDialog = function () {
                    var _this = this;
                    var gragoOrderInfoDialog = new KREGragoOrderInfoDialog_1.default();
                    gragoOrderInfoDialog.show(this.context).then(function (orderNum) {
                        if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(orderNum)) {
                            _this.context.logger.logInformational("not found");
                            Promise.resolve(false);
                        }
                        _this.context.logger.logInformational("Check Order number: " + orderNum);
                        _this.context.runtime.executeAsync(new Messages.KREGrago.CheckOrderDataRequest(orderNum)).then(function (response) {
                            if (response.data.result.Error == "") {
                                if (response.data.result.Status == "Paid Order") {
                                    MessgDialog.default.show(_this.context, "Order number " + orderNum, "Status : " + response.data.result.Status);
                                    return Promise.reject(false);
                                }
                                else {
                                    _this.context.logger.logInformational("Check Order number: " + response.data.result.OrderNum);
                                    return _this.setOrderDialog(response.data.result);
                                }
                            }
                            else {
                                MessgDialog.default.show(_this.context, "Error for order number " + orderNum, response.data.result.Error);
                                return Promise.reject(false);
                            }
                        });
                    }).catch(function (reason) {
                        var error = new Entities_1.ClientEntities.ExtensionError("Error occurred in the create dialog");
                        return Promise.reject(error);
                    });
                    return Promise.resolve({
                        canceled: true,
                        data: new KREGragoOperationResponse_1.default
                    });
                };
                KREGragoOperationRequestHandler.prototype.setOrderDialog = function (selectedItem) {
                    var _this = this;
                    var dialog = new KREGragoOrderDialogModule_1.default();
                    return dialog
                        .open(selectedItem)
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
                return KREGragoOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", KREGragoOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/Grago/KREGragoOperationRequestHandler.js.map