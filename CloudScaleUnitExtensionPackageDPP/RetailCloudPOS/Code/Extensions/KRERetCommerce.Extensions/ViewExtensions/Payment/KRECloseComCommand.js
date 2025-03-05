System.register(["PosApi/Extend/Views/PaymentView", "../../DataService/DataServiceRequests.g", "PosApi/Consume/Peripherals"], function (exports_1, context_1) {
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
    var PaymentView, Messages, Peripherals_1, KRECloseComCommand;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PaymentView_1) {
                PaymentView = PaymentView_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (Peripherals_1_1) {
                Peripherals_1 = Peripherals_1_1;
            }
        ],
        execute: function () {
            KRECloseComCommand = (function (_super) {
                __extends(KRECloseComCommand, _super);
                function KRECloseComCommand(context) {
                    var _this = _super.call(this, context) || this;
                    _this.label = "Close connection";
                    _this.id = "CloseComPort";
                    _this.extraClass = "iconCancel";
                    return _this;
                }
                KRECloseComCommand.prototype.init = function (state) {
                    var _this = this;
                    this._paymentCard = null;
                    this._tenderType = state.tenderType;
                    this._fullAmount = state.fullAmount;
                    this._currency = state.currency;
                    this._tenderTypeId = state.tenderType.TenderTypeId;
                    this._paymentAmount = this._fullAmount;
                    this._tenderTypeName = state.tenderType.Name;
                    if (state.tenderType.OperationId === Commerce.Proxy.Entities.RetailOperation.PayCard) {
                        this.isVisible = true;
                        this.canExecute = true;
                        this.paymentViewPaymentCardChangedHandler = function (data) {
                            _this._paymentCard = data.paymentCard;
                            _this.context.logger.logInformational("Payment View Command - Payment card changed");
                        };
                        this.paymentViewAmountChangedHandler = function (data) {
                            _this._paymentAmount = +data.paymentAmount;
                            _this.context.logger.logInformational("Payment View Command - Amount changed");
                        };
                    }
                    else {
                        this.isVisible = false;
                        this.canExecute = false;
                    }
                };
                KRECloseComCommand.prototype.execute = function () {
                    var _this = this;
                    var getEDCConnector = new Messages.PaymentEDCConnector.GetEDCConnectorRequest(this._tenderTypeName);
                    this.context.runtime.executeAsync(getEDCConnector).then(function (connectorResult) {
                        if (connectorResult.data.result) {
                            _this._edcCom = connectorResult.data.result.Com;
                            _this._edcBaudRate = +connectorResult.data.result.BaudRate;
                            _this._edcWaitTime = +connectorResult.data.result.WaitTime;
                            _this._edcWaitLoop = +connectorResult.data.result.WaitLoop;
                            _this._edcDLLPath = connectorResult.data.result.DLLPath;
                            var hardwareStationDeviceActionRequest = new Peripherals_1.HardwareStationDeviceActionRequest("PAYMENTEDCCLOSECOM", "CloseComController", {
                                amount: _this._paymentAmount,
                                isQris: true,
                                edcName: _this._tenderTypeName,
                                edcCOM: _this._edcCom,
                                edcBaudRate: _this._edcBaudRate,
                                edcWaitTime: _this._edcWaitTime,
                                edcWaitLoop: _this._edcWaitLoop,
                                edcDLLPath: _this._edcDLLPath
                            });
                            _this.context.runtime.executeAsync(hardwareStationDeviceActionRequest);
                        }
                    });
                };
                return KRECloseComCommand;
            }(PaymentView.PaymentViewExtensionCommandBase));
            exports_1("default", KRECloseComCommand);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/ViewExtensions/Payment/KRECloseComCommand.js.map