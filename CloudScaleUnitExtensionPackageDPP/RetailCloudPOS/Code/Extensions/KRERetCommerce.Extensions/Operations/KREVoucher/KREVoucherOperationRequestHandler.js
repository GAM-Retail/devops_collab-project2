System.register(["PosApi/Create/Operations", "./KREVoucherOperationResponse", "./KREVoucherOperationRequest", "PosApi/Entities", "../../Create/Dialogs/KREVoucherDialogModule", "PosApi/TypeExtensions", "../../Create/Dialogs/KREVoucherInputDialog", "../../DataService/DataServiceRequests.g", "PosApi/Consume/Cart", "../../Utilities/KREMessageHelpers", "PosApi/Consume/Device"], function (exports_1, context_1) {
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
    var Operations_1, KREVoucherOperationResponse_1, KREVoucherOperationRequest_1, Entities_1, KREVoucherDialogModule_1, TypeExtensions_1, KREVoucherInputDialog_1, Messages, Cart_1, KREMessageHelpers_1, Device_1, KREVoucherOperationRequestHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (KREVoucherOperationResponse_1_1) {
                KREVoucherOperationResponse_1 = KREVoucherOperationResponse_1_1;
            },
            function (KREVoucherOperationRequest_1_1) {
                KREVoucherOperationRequest_1 = KREVoucherOperationRequest_1_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (KREVoucherDialogModule_1_1) {
                KREVoucherDialogModule_1 = KREVoucherDialogModule_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (KREVoucherInputDialog_1_1) {
                KREVoucherInputDialog_1 = KREVoucherInputDialog_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            },
            function (KREMessageHelpers_1_1) {
                KREMessageHelpers_1 = KREMessageHelpers_1_1;
            },
            function (Device_1_1) {
                Device_1 = Device_1_1;
            }
        ],
        execute: function () {
            KREVoucherOperationRequestHandler = (function (_super) {
                __extends(KREVoucherOperationRequestHandler, _super);
                function KREVoucherOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREVoucherOperationRequestHandler.prototype.supportedRequestType = function () {
                    return KREVoucherOperationRequest_1.default;
                };
                KREVoucherOperationRequestHandler.prototype.executeAsync = function (request) {
                    var _this = this;
                    this.context.logger.logInformational("Log message from KREVoucherOperationRequestHandler executeAsync().");
                    var getConnection = new Device_1.GetConnectionStatusClientRequest(this.context.logger.getNewCorrelationId());
                    return this.context.runtime.executeAsync(getConnection).then(function (responseCon) {
                        if (responseCon.data.result == Entities_1.ClientEntities.ConnectionStatusType.Online) {
                            var refreshCart = new Cart_1.RefreshCartClientRequest(request.correlationId);
                            return _this.context.runtime.executeAsync(refreshCart).then(function (refreshCartResponse) {
                                if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(refreshCartResponse.data.result)) {
                                    return Promise.resolve({ canceled: true, data: null });
                                }
                                else {
                                    _this.showVoucherInputDialog(refreshCartResponse.data.result.CartLines[0]);
                                    return Promise.resolve({
                                        canceled: true,
                                        data: new KREVoucherOperationResponse_1.default()
                                    });
                                }
                            });
                        }
                        else {
                            KREMessageHelpers_1.default.ShowMessage(_this.context, "Error", "Voucher internal cannot be used, offline status");
                            return Promise.resolve({
                                canceled: true,
                                data: null
                            });
                        }
                    });
                };
                KREVoucherOperationRequestHandler.prototype.showVoucherInputDialog = function (cart) {
                    var _this = this;
                    var voucherInputDialog = new KREVoucherInputDialog_1.default();
                    voucherInputDialog.show(this.context, cart).then(function (voucher) {
                        if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(voucher)) {
                            _this.context.logger.logInformational("CheckVoucher canceled.");
                            return Promise.resolve(false);
                        }
                        _this.context.logger.logInformational("Result CheckVoucher : " + JSON.stringify(voucher));
                        return _this.context.runtime.executeAsync(new Messages.Bound.CheckVoucherEntityRequestRequest(voucher))
                            .then(function (response) {
                            _this._selectedItem = response.data.result;
                            if (!response.canceled && response.data.result.StatusData != "Failed") {
                                _this.context.logger.logInformational("CheckVoucher: " + response.data.result.VoucherIdData);
                                _this.InfoVoucherDialog(cart).then(function () { return true; });
                                return Promise.resolve(true);
                            }
                            else {
                                KREMessageHelpers_1.default.ShowMessage(_this.context, "Error", " Voucher " + voucher + " is " + response.data.result.ResultInfoData);
                                return Promise.reject(false);
                            }
                        });
                    }).catch(function (reason) {
                        _this.context.logger.logError("Error occurred in the create dialog: " + JSON.stringify(reason));
                        return Promise.reject(reason);
                    });
                    return Promise.resolve({
                        canceled: true,
                        data: new KREVoucherOperationResponse_1.default
                    });
                };
                KREVoucherOperationRequestHandler.prototype.InfoVoucherDialog = function (cart) {
                    var _this = this;
                    var dialog = new KREVoucherDialogModule_1.default();
                    return dialog
                        .open(this._selectedItem)
                        .then(function (InfoItem) {
                        if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(InfoItem)) {
                            _this.context.logger.logInformational("Update canceled for data: " + JSON.stringify(InfoItem));
                            return Promise.resolve(false);
                        }
                        _this.context.logger.logInformational("Updated data is: " + JSON.stringify(InfoItem));
                        return Promise.resolve(false);
                    }).catch(function (reason) {
                        _this.context.logger.logError("Error occurred in the edit dialog: " + JSON.stringify(reason));
                        return Promise.resolve(false);
                    });
                };
                return KREVoucherOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", KREVoucherOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/KREVoucher/KREVoucherOperationRequestHandler.js.map