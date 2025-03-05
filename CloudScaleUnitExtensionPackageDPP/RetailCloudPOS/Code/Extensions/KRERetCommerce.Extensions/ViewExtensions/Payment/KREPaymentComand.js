System.register(["PosApi/Extend/Views/PaymentView", "../../Create/Dialogs/KREMessageDialog", "../../Create/Dialogs/KRECardTypeDialog", "../../DataService/DataServiceRequests.g", "PosApi/Consume/Peripherals", "PosApi/Consume/Cart", "PosApi/Entities"], function (exports_1, context_1) {
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
    var PaymentView, KREMessageDialog_1, KRECardTypeDialog_1, Messages, Peripherals_1, Cart_1, Entities_1, KREPaymentComand;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (PaymentView_1) {
                PaymentView = PaymentView_1;
            },
            function (KREMessageDialog_1_1) {
                KREMessageDialog_1 = KREMessageDialog_1_1;
            },
            function (KRECardTypeDialog_1_1) {
                KRECardTypeDialog_1 = KRECardTypeDialog_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (Peripherals_1_1) {
                Peripherals_1 = Peripherals_1_1;
            },
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            }
        ],
        execute: function () {
            KREPaymentComand = (function (_super) {
                __extends(KREPaymentComand, _super);
                function KREPaymentComand(context) {
                    var _this = _super.call(this, context) || this;
                    _this.label = "EDC - Card";
                    _this.id = "paymentConnectCard";
                    _this.extraClass = "iconGo";
                    return _this;
                }
                KREPaymentComand.prototype.init = function (state) {
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
                KREPaymentComand.prototype.execute = function () {
                    var _this = this;
                    var correlationId = this.context.logger.getNewCorrelationId();
                    this.isProcessing = true;
                    var getEDCConnector = new Messages.PaymentEDCConnector.GetEDCConnectorRequest(this._tenderTypeName);
                    this.context.runtime.executeAsync(getEDCConnector).then(function (connectorResult) {
                        if (connectorResult.data.result) {
                            _this._edcCom = connectorResult.data.result.Com;
                            _this._edcBaudRate = +connectorResult.data.result.BaudRate;
                            _this._edcWaitTime = +connectorResult.data.result.WaitTime;
                            _this._edcWaitLoop = +connectorResult.data.result.WaitLoop;
                            _this._edcDLLPath = connectorResult.data.result.DLLPath;
                            var getCardType = new Messages.PaymentEDCCRT.GetCardTypeRequest(_this._tenderTypeId);
                            _this.context.runtime.executeAsync(getCardType).then(function (entityResult) {
                                if (entityResult.data.result) {
                                    KRECardTypeDialog_1.default.show(_this.context, entityResult.data.result).then(function (respon) {
                                        respon = _this._cardType = respon;
                                        if (respon) {
                                            var hardwareStationDeviceActionRequest = new Peripherals_1.HardwareStationDeviceActionRequest("PAYMENTEDC", "EdcController", {
                                                amount: _this._paymentAmount,
                                                isQris: false,
                                                edcName: _this._tenderTypeName,
                                                edcCOM: _this._edcCom,
                                                edcBaudRate: _this._edcBaudRate,
                                                edcWaitTime: _this._edcWaitTime,
                                                edcWaitLoop: _this._edcWaitLoop,
                                                edcDLLPath: _this._edcDLLPath
                                            });
                                            _this.context.runtime.executeAsync(hardwareStationDeviceActionRequest).then(function (result) {
                                                if (result.data.response) {
                                                    console.log("Return from hardware station");
                                                    console.log(result);
                                                    var cartTenderLine = {
                                                        MaskedCardNumber: result.data.response.ResponCard,
                                                        Amount: _this._paymentAmount,
                                                        CustomerId: result.data.response.ResponCard,
                                                        InternalTransactionId: "00000000-0000-0000-0000-000000000000",
                                                        TenderTypeId: _this._tenderTypeId,
                                                        CardTypeId: _this._cardType,
                                                        IsPolicyBypassed: false,
                                                        SignatureData: "",
                                                        ReasonCodeLines: [{ ReasonCodeId: "APPCODE", InputTypeValue: 9, SubReasonCodeId: "", Information: result.data.response.ResponApproval }],
                                                        TenderLineId: "",
                                                        AmountInCompanyCurrency: 0,
                                                        AmountInTenderedCurrency: 0,
                                                        AuthorizedAmount: 0,
                                                        CardProcessorStatusValue: 0,
                                                        CashBackAmount: 0,
                                                        ChannelId: 0,
                                                        CompanyCurrencyExchangeRate: 0,
                                                        Currency: "IDR",
                                                        ExchangeRate: 0,
                                                        ExtensionProperties: [],
                                                        IncomeExpenseAccountTypeValue: -1,
                                                        IncrementalOffsetAmount: 0,
                                                        IsChangeLine: false,
                                                        IsCustomerAccountFloorLimitUsed: false,
                                                        IsDeposit: false,
                                                        IsHistorical: false,
                                                        IsIncrementalCaptureEnabled: false,
                                                        IsLinkedRefund: false,
                                                        IsPreProcessed: false,
                                                        IsReauthorizationEnabled: false,
                                                        IsVoidable: true,
                                                        LineNumber: 0,
                                                        LinkedPaymentLineNumber: 0,
                                                        LinkedPaymentRefRecId: 0,
                                                        PaymentRefRecId: 0,
                                                        ProcessingTypeValue: 0,
                                                        RefundableAmount: 0,
                                                        RoundingDifference: 0,
                                                        StatusValue: 4,
                                                        TransactionStatusValue: 0,
                                                        VoidStatusValue: 0
                                                    };
                                                    var preProcessedTenderLine = new Cart_1.AddPreprocessedTenderLineToCartClientRequest(cartTenderLine);
                                                    _this.context.runtime.executeAsync(preProcessedTenderLine).then(function (preprocessedTenderLineToCartClientResponse) {
                                                        if (!preprocessedTenderLineToCartClientResponse.canceled) {
                                                            var cartViewParameters = new Entities_1.ClientEntities.CartViewNavigationParameters(correlationId);
                                                            _this.context.navigator.navigateToPOSView("CartView", cartViewParameters);
                                                            var concludeTransactionClientRequest = new Cart_1.ConcludeTransactionClientRequest(correlationId);
                                                            _this.context.runtime.executeAsync(concludeTransactionClientRequest);
                                                            _this.isProcessing = false;
                                                        }
                                                        else {
                                                            _this.isProcessing = false;
                                                        }
                                                    });
                                                }
                                            }).catch(function (err) {
                                                KREMessageDialog_1.default.show(_this.context, "PAYMENTEDC - EdcController ", "Failure in executing HardwareStation request:" + err);
                                                _this.isProcessing = false;
                                                throw err;
                                            });
                                        }
                                        else {
                                            _this.isProcessing = false;
                                        }
                                    });
                                }
                            });
                        }
                    });
                };
                return KREPaymentComand;
            }(PaymentView.PaymentViewExtensionCommandBase));
            exports_1("default", KREPaymentComand);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/ViewExtensions/Payment/KREPaymentComand.js.map