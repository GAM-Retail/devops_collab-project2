System.register(["PosApi/Entities", "./DataServiceEntities.g", "PosApi/Consume/DataService"], function (exports_1, context_1) {
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
    var Entities_1, DataServiceEntities_g_1, DataService_1, StoreOperations, KREGrago, KREEventRegistration, KREMyValue, Bound, KRECommerceSetup, KRECreateItemBarcode, PaymentEDCConnector, PaymentEDCCRT, KRERetailSalesTransaction, KRETesting, KRETransactionRePrint;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (DataServiceEntities_g_1_1) {
                DataServiceEntities_g_1 = DataServiceEntities_g_1_1;
            },
            function (DataService_1_1) {
                DataService_1 = DataService_1_1;
            }
        ],
        execute: function () {
            exports_1("ProxyEntities", Entities_1.ProxyEntities);
            exports_1("Entities", DataServiceEntities_g_1.Entities);
            (function (StoreOperations) {
                var SearchMyValueResponse = (function (_super) {
                    __extends(SearchMyValueResponse, _super);
                    function SearchMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return SearchMyValueResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.SearchMyValueResponse = SearchMyValueResponse;
                var SearchMyValueRequest = (function (_super) {
                    __extends(SearchMyValueRequest, _super);
                    function SearchMyValueRequest(valueFilter, typeFilter) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "SearchMyValue";
                        _this._parameters = { valueFilter: valueFilter, typeFilter: typeFilter };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return SearchMyValueRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.SearchMyValueRequest = SearchMyValueRequest;
                var CreateMyValueResponse = (function (_super) {
                    __extends(CreateMyValueResponse, _super);
                    function CreateMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CreateMyValueResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.CreateMyValueResponse = CreateMyValueResponse;
                var CreateMyValueRequest = (function (_super) {
                    __extends(CreateMyValueRequest, _super);
                    function CreateMyValueRequest(custAccount, email, fullname, phone, membershipName, membershipNumber) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "CreateMyValue";
                        _this._parameters = { custAccount: custAccount, email: email, fullname: fullname, phone: phone, membershipName: membershipName, membershipNumber: membershipNumber };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return CreateMyValueRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.CreateMyValueRequest = CreateMyValueRequest;
                var GetMyValueResponse = (function (_super) {
                    __extends(GetMyValueResponse, _super);
                    function GetMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetMyValueResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.GetMyValueResponse = GetMyValueResponse;
                var GetMyValueRequest = (function (_super) {
                    __extends(GetMyValueRequest, _super);
                    function GetMyValueRequest(myValueId) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "GetMyValue";
                        _this._parameters = { myValueId: myValueId };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return GetMyValueRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.GetMyValueRequest = GetMyValueRequest;
                var PopulateEarningPointMyValueResponse = (function (_super) {
                    __extends(PopulateEarningPointMyValueResponse, _super);
                    function PopulateEarningPointMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return PopulateEarningPointMyValueResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.PopulateEarningPointMyValueResponse = PopulateEarningPointMyValueResponse;
                var PopulateEarningPointMyValueRequest = (function (_super) {
                    __extends(PopulateEarningPointMyValueRequest, _super);
                    function PopulateEarningPointMyValueRequest(transId, amount, exchangeRate, outletID, referenceNo, valueID, accountNum) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "PopulateEarningPointMyValue";
                        _this._parameters = { transId: transId, amount: amount, exchangeRate: exchangeRate, outletID: outletID, referenceNo: referenceNo, valueID: valueID, accountNum: accountNum };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return PopulateEarningPointMyValueRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.PopulateEarningPointMyValueRequest = PopulateEarningPointMyValueRequest;
                var EarningPointMyValueResponse = (function (_super) {
                    __extends(EarningPointMyValueResponse, _super);
                    function EarningPointMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return EarningPointMyValueResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.EarningPointMyValueResponse = EarningPointMyValueResponse;
                var EarningPointMyValueRequest = (function (_super) {
                    __extends(EarningPointMyValueRequest, _super);
                    function EarningPointMyValueRequest(transId, amount, exchangeRate, outletID, referenceNo, valueID, accountNum, adjustedReferenceNo, adjustmentType) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "EarningPointMyValue";
                        _this._parameters = { transId: transId, amount: amount, exchangeRate: exchangeRate, outletID: outletID, referenceNo: referenceNo, valueID: valueID, accountNum: accountNum, adjustedReferenceNo: adjustedReferenceNo, adjustmentType: adjustmentType };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return EarningPointMyValueRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.EarningPointMyValueRequest = EarningPointMyValueRequest;
                var ReturnPointMyValueResponse = (function (_super) {
                    __extends(ReturnPointMyValueResponse, _super);
                    function ReturnPointMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return ReturnPointMyValueResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.ReturnPointMyValueResponse = ReturnPointMyValueResponse;
                var ReturnPointMyValueRequest = (function (_super) {
                    __extends(ReturnPointMyValueRequest, _super);
                    function ReturnPointMyValueRequest(transId, amount, exchangeRate, outletID, referenceNo, adjustedReferenceNo, adjustmentType, valueID, accountNum) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "ReturnPointMyValue";
                        _this._parameters = { transId: transId, amount: amount, exchangeRate: exchangeRate, outletID: outletID, referenceNo: referenceNo, adjustedReferenceNo: adjustedReferenceNo, adjustmentType: adjustmentType, valueID: valueID, accountNum: accountNum };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return ReturnPointMyValueRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.ReturnPointMyValueRequest = ReturnPointMyValueRequest;
                var UpdateMyValueResponse = (function (_super) {
                    __extends(UpdateMyValueResponse, _super);
                    function UpdateMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return UpdateMyValueResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.UpdateMyValueResponse = UpdateMyValueResponse;
                var UpdateMyValueRequest = (function (_super) {
                    __extends(UpdateMyValueRequest, _super);
                    function UpdateMyValueRequest(accountNum, valueID) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "UpdateMyValue";
                        _this._parameters = { accountNum: accountNum, valueID: valueID };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return UpdateMyValueRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.UpdateMyValueRequest = UpdateMyValueRequest;
                var CheckCustomerMyValueResponse = (function (_super) {
                    __extends(CheckCustomerMyValueResponse, _super);
                    function CheckCustomerMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CheckCustomerMyValueResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.CheckCustomerMyValueResponse = CheckCustomerMyValueResponse;
                var CheckCustomerMyValueRequest = (function (_super) {
                    __extends(CheckCustomerMyValueRequest, _super);
                    function CheckCustomerMyValueRequest(accountNum) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "CheckCustomerMyValue";
                        _this._parameters = { accountNum: accountNum };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return CheckCustomerMyValueRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.CheckCustomerMyValueRequest = CheckCustomerMyValueRequest;
                var GetAllMyValueResponse = (function (_super) {
                    __extends(GetAllMyValueResponse, _super);
                    function GetAllMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetAllMyValueResponse;
                }(DataService_1.DataServiceResponse));
                StoreOperations.GetAllMyValueResponse = GetAllMyValueResponse;
                var GetAllMyValueRequest = (function (_super) {
                    __extends(GetAllMyValueRequest, _super);
                    function GetAllMyValueRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "";
                        _this._entityType = "";
                        _this._method = "GetAllMyValue";
                        _this._parameters = {};
                        _this._isAction = false;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return GetAllMyValueRequest;
                }(DataService_1.DataServiceRequest));
                StoreOperations.GetAllMyValueRequest = GetAllMyValueRequest;
            })(StoreOperations || (StoreOperations = {}));
            exports_1("StoreOperations", StoreOperations);
            (function (KREGrago) {
                var CheckOrderDataResponse = (function (_super) {
                    __extends(CheckOrderDataResponse, _super);
                    function CheckOrderDataResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CheckOrderDataResponse;
                }(DataService_1.DataServiceResponse));
                KREGrago.CheckOrderDataResponse = CheckOrderDataResponse;
                var CheckOrderDataRequest = (function (_super) {
                    __extends(CheckOrderDataRequest, _super);
                    function CheckOrderDataRequest(orderNum) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREGrago";
                        _this._entityType = "KREGragoEntity";
                        _this._method = "CheckOrderData";
                        _this._parameters = { orderNum: orderNum };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREGragoEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return CheckOrderDataRequest;
                }(DataService_1.DataServiceRequest));
                KREGrago.CheckOrderDataRequest = CheckOrderDataRequest;
                var GetItemGrogoResponse = (function (_super) {
                    __extends(GetItemGrogoResponse, _super);
                    function GetItemGrogoResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetItemGrogoResponse;
                }(DataService_1.DataServiceResponse));
                KREGrago.GetItemGrogoResponse = GetItemGrogoResponse;
                var GetItemGrogoRequest = (function (_super) {
                    __extends(GetItemGrogoRequest, _super);
                    function GetItemGrogoRequest(orderNum) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREGrago";
                        _this._entityType = "KREGragoEntity";
                        _this._method = "GetItemGrogo";
                        _this._parameters = { orderNum: orderNum };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREGragoEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return GetItemGrogoRequest;
                }(DataService_1.DataServiceRequest));
                KREGrago.GetItemGrogoRequest = GetItemGrogoRequest;
                var PayOrderDataResponse = (function (_super) {
                    __extends(PayOrderDataResponse, _super);
                    function PayOrderDataResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return PayOrderDataResponse;
                }(DataService_1.DataServiceResponse));
                KREGrago.PayOrderDataResponse = PayOrderDataResponse;
                var PayOrderDataRequest = (function (_super) {
                    __extends(PayOrderDataRequest, _super);
                    function PayOrderDataRequest(orderNum) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREGrago";
                        _this._entityType = "KREGragoEntity";
                        _this._method = "PayOrderData";
                        _this._parameters = { orderNum: orderNum };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREGragoEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return PayOrderDataRequest;
                }(DataService_1.DataServiceRequest));
                KREGrago.PayOrderDataRequest = PayOrderDataRequest;
            })(KREGrago || (KREGrago = {}));
            exports_1("KREGrago", KREGrago);
            (function (KREEventRegistration) {
                var getEventIdResponse = (function (_super) {
                    __extends(getEventIdResponse, _super);
                    function getEventIdResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return getEventIdResponse;
                }(DataService_1.DataServiceResponse));
                KREEventRegistration.getEventIdResponse = getEventIdResponse;
                var getEventIdRequest = (function (_super) {
                    __extends(getEventIdRequest, _super);
                    function getEventIdRequest(itemIdData, offerIdData, eventIdData) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREEventRegistration";
                        _this._entityType = "KREEventRegistrationEntity";
                        _this._method = "getEventId";
                        _this._parameters = { itemIdData: itemIdData, offerIdData: offerIdData, eventIdData: eventIdData };
                        _this._isAction = false;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREEventRegistrationHeaderEntity;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return getEventIdRequest;
                }(DataService_1.DataServiceRequest));
                KREEventRegistration.getEventIdRequest = getEventIdRequest;
                var insertEventRegisTransactionResponse = (function (_super) {
                    __extends(insertEventRegisTransactionResponse, _super);
                    function insertEventRegisTransactionResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return insertEventRegisTransactionResponse;
                }(DataService_1.DataServiceResponse));
                KREEventRegistration.insertEventRegisTransactionResponse = insertEventRegisTransactionResponse;
                var insertEventRegisTransactionRequest = (function (_super) {
                    __extends(insertEventRegisTransactionRequest, _super);
                    function insertEventRegisTransactionRequest(eventIdData, custNameData, custPhoneData, custEmailData, itemIdData, qtyData, transactionIdData, receiptIdData, myValueIdData) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREEventRegistration";
                        _this._entityType = "KREEventRegistrationEntity";
                        _this._method = "insertEventRegisTransaction";
                        _this._parameters = { eventIdData: eventIdData, custNameData: custNameData, custPhoneData: custPhoneData, custEmailData: custEmailData, itemIdData: itemIdData, qtyData: qtyData, transactionIdData: transactionIdData, receiptIdData: receiptIdData, myValueIdData: myValueIdData };
                        _this._isAction = false;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREEventRegistrationTransactionEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return insertEventRegisTransactionRequest;
                }(DataService_1.DataServiceRequest));
                KREEventRegistration.insertEventRegisTransactionRequest = insertEventRegisTransactionRequest;
                var getPricebyEventIdResponse = (function (_super) {
                    __extends(getPricebyEventIdResponse, _super);
                    function getPricebyEventIdResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return getPricebyEventIdResponse;
                }(DataService_1.DataServiceResponse));
                KREEventRegistration.getPricebyEventIdResponse = getPricebyEventIdResponse;
                var getPricebyEventIdRequest = (function (_super) {
                    __extends(getPricebyEventIdRequest, _super);
                    function getPricebyEventIdRequest(eventIdData, itemIdData) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREEventRegistration";
                        _this._entityType = "KREEventRegistrationEntity";
                        _this._method = "getPricebyEventId";
                        _this._parameters = { eventIdData: eventIdData, itemIdData: itemIdData };
                        _this._isAction = false;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREEventRegistrationPriceEntity;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return getPricebyEventIdRequest;
                }(DataService_1.DataServiceRequest));
                KREEventRegistration.getPricebyEventIdRequest = getPricebyEventIdRequest;
            })(KREEventRegistration || (KREEventRegistration = {}));
            exports_1("KREEventRegistration", KREEventRegistration);
            (function (KREMyValue) {
                var InsertPointMyValueResponse = (function (_super) {
                    __extends(InsertPointMyValueResponse, _super);
                    function InsertPointMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return InsertPointMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.InsertPointMyValueResponse = InsertPointMyValueResponse;
                var InsertPointMyValueRequest = (function (_super) {
                    __extends(InsertPointMyValueRequest, _super);
                    function InsertPointMyValueRequest(transId, valueID, point) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "InsertPointMyValue";
                        _this._parameters = { transId: transId, valueID: valueID, point: point };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return InsertPointMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.InsertPointMyValueRequest = InsertPointMyValueRequest;
                var SearchMyValueResponse = (function (_super) {
                    __extends(SearchMyValueResponse, _super);
                    function SearchMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return SearchMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.SearchMyValueResponse = SearchMyValueResponse;
                var SearchMyValueRequest = (function (_super) {
                    __extends(SearchMyValueRequest, _super);
                    function SearchMyValueRequest(valueFilter, typeFilter) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "SearchMyValue";
                        _this._parameters = { valueFilter: valueFilter, typeFilter: typeFilter };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return SearchMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.SearchMyValueRequest = SearchMyValueRequest;
                var SearchCustByMyValueIdResponse = (function (_super) {
                    __extends(SearchCustByMyValueIdResponse, _super);
                    function SearchCustByMyValueIdResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return SearchCustByMyValueIdResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.SearchCustByMyValueIdResponse = SearchCustByMyValueIdResponse;
                var SearchCustByMyValueIdRequest = (function (_super) {
                    __extends(SearchCustByMyValueIdRequest, _super);
                    function SearchCustByMyValueIdRequest(myValueId) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "SearchCustByMyValueId";
                        _this._parameters = { myValueId: myValueId };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return SearchCustByMyValueIdRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.SearchCustByMyValueIdRequest = SearchCustByMyValueIdRequest;
                var CreateMyValueResponse = (function (_super) {
                    __extends(CreateMyValueResponse, _super);
                    function CreateMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CreateMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.CreateMyValueResponse = CreateMyValueResponse;
                var CreateMyValueRequest = (function (_super) {
                    __extends(CreateMyValueRequest, _super);
                    function CreateMyValueRequest(custAccount, email, fullname, phone, membershipName, membershipNumber) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "CreateMyValue";
                        _this._parameters = { custAccount: custAccount, email: email, fullname: fullname, phone: phone, membershipName: membershipName, membershipNumber: membershipNumber };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return CreateMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.CreateMyValueRequest = CreateMyValueRequest;
                var GetMyValueResponse = (function (_super) {
                    __extends(GetMyValueResponse, _super);
                    function GetMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.GetMyValueResponse = GetMyValueResponse;
                var GetMyValueRequest = (function (_super) {
                    __extends(GetMyValueRequest, _super);
                    function GetMyValueRequest(myValueId) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "GetMyValue";
                        _this._parameters = { myValueId: myValueId };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return GetMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.GetMyValueRequest = GetMyValueRequest;
                var GetMyValueCustomerOrderResponse = (function (_super) {
                    __extends(GetMyValueCustomerOrderResponse, _super);
                    function GetMyValueCustomerOrderResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetMyValueCustomerOrderResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.GetMyValueCustomerOrderResponse = GetMyValueCustomerOrderResponse;
                var GetMyValueCustomerOrderRequest = (function (_super) {
                    __extends(GetMyValueCustomerOrderRequest, _super);
                    function GetMyValueCustomerOrderRequest(invoiceId) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "GetMyValueCustomerOrder";
                        _this._parameters = { invoiceId: invoiceId };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueInvoiceEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return GetMyValueCustomerOrderRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.GetMyValueCustomerOrderRequest = GetMyValueCustomerOrderRequest;
                var PopulateEarningPointMyValueResponse = (function (_super) {
                    __extends(PopulateEarningPointMyValueResponse, _super);
                    function PopulateEarningPointMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return PopulateEarningPointMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.PopulateEarningPointMyValueResponse = PopulateEarningPointMyValueResponse;
                var PopulateEarningPointMyValueRequest = (function (_super) {
                    __extends(PopulateEarningPointMyValueRequest, _super);
                    function PopulateEarningPointMyValueRequest(transId, amount, exchangeRate, outletID, referenceNo, valueID, accountNum) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "PopulateEarningPointMyValue";
                        _this._parameters = { transId: transId, amount: amount, exchangeRate: exchangeRate, outletID: outletID, referenceNo: referenceNo, valueID: valueID, accountNum: accountNum };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return PopulateEarningPointMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.PopulateEarningPointMyValueRequest = PopulateEarningPointMyValueRequest;
                var EarningPointMyValueResponse = (function (_super) {
                    __extends(EarningPointMyValueResponse, _super);
                    function EarningPointMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return EarningPointMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.EarningPointMyValueResponse = EarningPointMyValueResponse;
                var EarningPointMyValueRequest = (function (_super) {
                    __extends(EarningPointMyValueRequest, _super);
                    function EarningPointMyValueRequest(transId, amount, exchangeRate, outletID, referenceNo, valueID, accountNum, adjustedReferenceNo, adjustmentType) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "EarningPointMyValue";
                        _this._parameters = { transId: transId, amount: amount, exchangeRate: exchangeRate, outletID: outletID, referenceNo: referenceNo, valueID: valueID, accountNum: accountNum, adjustedReferenceNo: adjustedReferenceNo, adjustmentType: adjustmentType };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return EarningPointMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.EarningPointMyValueRequest = EarningPointMyValueRequest;
                var ReturnPointMyValueResponse = (function (_super) {
                    __extends(ReturnPointMyValueResponse, _super);
                    function ReturnPointMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return ReturnPointMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.ReturnPointMyValueResponse = ReturnPointMyValueResponse;
                var ReturnPointMyValueRequest = (function (_super) {
                    __extends(ReturnPointMyValueRequest, _super);
                    function ReturnPointMyValueRequest(transId, amount, exchangeRate, outletID, referenceNo, adjustedReferenceNo, adjustmentType, valueID, accountNum) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "ReturnPointMyValue";
                        _this._parameters = { transId: transId, amount: amount, exchangeRate: exchangeRate, outletID: outletID, referenceNo: referenceNo, adjustedReferenceNo: adjustedReferenceNo, adjustmentType: adjustmentType, valueID: valueID, accountNum: accountNum };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return ReturnPointMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.ReturnPointMyValueRequest = ReturnPointMyValueRequest;
                var UpdateMyValueResponse = (function (_super) {
                    __extends(UpdateMyValueResponse, _super);
                    function UpdateMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return UpdateMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.UpdateMyValueResponse = UpdateMyValueResponse;
                var UpdateMyValueRequest = (function (_super) {
                    __extends(UpdateMyValueRequest, _super);
                    function UpdateMyValueRequest(accountNum, valueID) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "UpdateMyValue";
                        _this._parameters = { accountNum: accountNum, valueID: valueID };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return UpdateMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.UpdateMyValueRequest = UpdateMyValueRequest;
                var CheckCustomerMyValueResponse = (function (_super) {
                    __extends(CheckCustomerMyValueResponse, _super);
                    function CheckCustomerMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CheckCustomerMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.CheckCustomerMyValueResponse = CheckCustomerMyValueResponse;
                var CheckCustomerMyValueRequest = (function (_super) {
                    __extends(CheckCustomerMyValueRequest, _super);
                    function CheckCustomerMyValueRequest(accountNum) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "CheckCustomerMyValue";
                        _this._parameters = { accountNum: accountNum };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return CheckCustomerMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.CheckCustomerMyValueRequest = CheckCustomerMyValueRequest;
                var UpdateMyvalueCartResponse = (function (_super) {
                    __extends(UpdateMyvalueCartResponse, _super);
                    function UpdateMyvalueCartResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return UpdateMyvalueCartResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.UpdateMyvalueCartResponse = UpdateMyvalueCartResponse;
                var UpdateMyvalueCartRequest = (function (_super) {
                    __extends(UpdateMyvalueCartRequest, _super);
                    function UpdateMyvalueCartRequest(cart) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "UpdateMyvalueCart";
                        _this._parameters = { cart: cart };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return UpdateMyvalueCartRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.UpdateMyvalueCartRequest = UpdateMyvalueCartRequest;
                var GetAllMyValueResponse = (function (_super) {
                    __extends(GetAllMyValueResponse, _super);
                    function GetAllMyValueResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetAllMyValueResponse;
                }(DataService_1.DataServiceResponse));
                KREMyValue.GetAllMyValueResponse = GetAllMyValueResponse;
                var GetAllMyValueRequest = (function (_super) {
                    __extends(GetAllMyValueRequest, _super);
                    function GetAllMyValueRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KREMyValue";
                        _this._entityType = "KREMyValueEntity";
                        _this._method = "GetAllMyValue";
                        _this._parameters = {};
                        _this._isAction = false;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREMyValueEntity;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return GetAllMyValueRequest;
                }(DataService_1.DataServiceRequest));
                KREMyValue.GetAllMyValueRequest = GetAllMyValueRequest;
            })(KREMyValue || (KREMyValue = {}));
            exports_1("KREMyValue", KREMyValue);
            (function (Bound) {
                var CheckVoucherEntityRequestResponse = (function (_super) {
                    __extends(CheckVoucherEntityRequestResponse, _super);
                    function CheckVoucherEntityRequestResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CheckVoucherEntityRequestResponse;
                }(DataService_1.DataServiceResponse));
                Bound.CheckVoucherEntityRequestResponse = CheckVoucherEntityRequestResponse;
                var CheckVoucherEntityRequestRequest = (function (_super) {
                    __extends(CheckVoucherEntityRequestRequest, _super);
                    function CheckVoucherEntityRequestRequest(voucherIdData) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "Bound";
                        _this._entityType = "KREVoucherEntity";
                        _this._method = "CheckVoucherEntityRequest";
                        _this._parameters = { voucherIdData: voucherIdData };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREVoucherEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return CheckVoucherEntityRequestRequest;
                }(DataService_1.DataServiceRequest));
                Bound.CheckVoucherEntityRequestRequest = CheckVoucherEntityRequestRequest;
                var VoucherUpdateEntityRequestResponse = (function (_super) {
                    __extends(VoucherUpdateEntityRequestResponse, _super);
                    function VoucherUpdateEntityRequestResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return VoucherUpdateEntityRequestResponse;
                }(DataService_1.DataServiceResponse));
                Bound.VoucherUpdateEntityRequestResponse = VoucherUpdateEntityRequestResponse;
                var VoucherUpdateEntityRequestRequest = (function (_super) {
                    __extends(VoucherUpdateEntityRequestRequest, _super);
                    function VoucherUpdateEntityRequestRequest(voucherIdData, warehouseIdData, transactionIdData, custOwnerData) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "Bound";
                        _this._entityType = "KREVoucherEntity";
                        _this._method = "VoucherUpdateEntityRequest";
                        _this._parameters = { voucherIdData: voucherIdData, warehouseIdData: warehouseIdData, transactionIdData: transactionIdData, custOwnerData: custOwnerData };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREVoucherEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return VoucherUpdateEntityRequestRequest;
                }(DataService_1.DataServiceRequest));
                Bound.VoucherUpdateEntityRequestRequest = VoucherUpdateEntityRequestRequest;
                var VoucherPostUpdateRequestResponse = (function (_super) {
                    __extends(VoucherPostUpdateRequestResponse, _super);
                    function VoucherPostUpdateRequestResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return VoucherPostUpdateRequestResponse;
                }(DataService_1.DataServiceResponse));
                Bound.VoucherPostUpdateRequestResponse = VoucherPostUpdateRequestResponse;
                var VoucherPostUpdateRequestRequest = (function (_super) {
                    __extends(VoucherPostUpdateRequestRequest, _super);
                    function VoucherPostUpdateRequestRequest(transactionIdData, receiptIdData) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "Bound";
                        _this._entityType = "KREVoucherEntity";
                        _this._method = "VoucherPostUpdateRequest";
                        _this._parameters = { transactionIdData: transactionIdData, receiptIdData: receiptIdData };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREVoucherEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return VoucherPostUpdateRequestRequest;
                }(DataService_1.DataServiceRequest));
                Bound.VoucherPostUpdateRequestRequest = VoucherPostUpdateRequestRequest;
                var RemoveChangeBackResponse = (function (_super) {
                    __extends(RemoveChangeBackResponse, _super);
                    function RemoveChangeBackResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return RemoveChangeBackResponse;
                }(DataService_1.DataServiceResponse));
                Bound.RemoveChangeBackResponse = RemoveChangeBackResponse;
                var RemoveChangeBackRequest = (function (_super) {
                    __extends(RemoveChangeBackRequest, _super);
                    function RemoveChangeBackRequest(transactionId, lineNum, TenderType) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "Bound";
                        _this._entityType = "KREVoucherEntity";
                        _this._method = "RemoveChangeBack";
                        _this._parameters = { transactionId: transactionId, lineNum: lineNum, TenderType: TenderType };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return RemoveChangeBackRequest;
                }(DataService_1.DataServiceRequest));
                Bound.RemoveChangeBackRequest = RemoveChangeBackRequest;
                var VoucherCancelResponse = (function (_super) {
                    __extends(VoucherCancelResponse, _super);
                    function VoucherCancelResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return VoucherCancelResponse;
                }(DataService_1.DataServiceResponse));
                Bound.VoucherCancelResponse = VoucherCancelResponse;
                var VoucherCancelRequest = (function (_super) {
                    __extends(VoucherCancelRequest, _super);
                    function VoucherCancelRequest(voucher) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "Bound";
                        _this._entityType = "KREVoucherEntity";
                        _this._method = "VoucherCancel";
                        _this._parameters = { voucher: voucher };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return VoucherCancelRequest;
                }(DataService_1.DataServiceRequest));
                Bound.VoucherCancelRequest = VoucherCancelRequest;
            })(Bound || (Bound = {}));
            exports_1("Bound", Bound);
            (function (KRECommerceSetup) {
                var getdataParametersResponse = (function (_super) {
                    __extends(getdataParametersResponse, _super);
                    function getdataParametersResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return getdataParametersResponse;
                }(DataService_1.DataServiceResponse));
                KRECommerceSetup.getdataParametersResponse = getdataParametersResponse;
                var getdataParametersRequest = (function (_super) {
                    __extends(getdataParametersRequest, _super);
                    function getdataParametersRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KRECommerceSetup";
                        _this._entityType = "KRECommerceSetupEntity";
                        _this._method = "getdataParameters";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KRECommerceSetupEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return getdataParametersRequest;
                }(DataService_1.DataServiceRequest));
                KRECommerceSetup.getdataParametersRequest = getdataParametersRequest;
            })(KRECommerceSetup || (KRECommerceSetup = {}));
            exports_1("KRECommerceSetup", KRECommerceSetup);
            (function (KRECreateItemBarcode) {
                var CreateDataResponse = (function (_super) {
                    __extends(CreateDataResponse, _super);
                    function CreateDataResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CreateDataResponse;
                }(DataService_1.DataServiceResponse));
                KRECreateItemBarcode.CreateDataResponse = CreateDataResponse;
                var CreateDataRequest = (function (_super) {
                    __extends(CreateDataRequest, _super);
                    function CreateDataRequest(itemId, barcodeSetupid, itemBarCode, unitID) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KRECreateItemBarcode";
                        _this._entityType = "KREApiEntity";
                        _this._method = "CreateData";
                        _this._parameters = { itemId: itemId, barcodeSetupid: barcodeSetupid, itemBarCode: itemBarCode, unitID: unitID };
                        _this._isAction = true;
                        _this._returnType = Entities_1.ProxyEntities.ItemBarcodeClass;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return CreateDataRequest;
                }(DataService_1.DataServiceRequest));
                KRECreateItemBarcode.CreateDataRequest = CreateDataRequest;
                var CreateBulkDataResponse = (function (_super) {
                    __extends(CreateBulkDataResponse, _super);
                    function CreateBulkDataResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return CreateBulkDataResponse;
                }(DataService_1.DataServiceResponse));
                KRECreateItemBarcode.CreateBulkDataResponse = CreateBulkDataResponse;
                var CreateBulkDataRequest = (function (_super) {
                    __extends(CreateBulkDataRequest, _super);
                    function CreateBulkDataRequest(itemBarcodes) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KRECreateItemBarcode";
                        _this._entityType = "KREApiEntity";
                        _this._method = "CreateBulkData";
                        _this._parameters = { itemBarcodes: itemBarcodes };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return CreateBulkDataRequest;
                }(DataService_1.DataServiceRequest));
                KRECreateItemBarcode.CreateBulkDataRequest = CreateBulkDataRequest;
                var FindDataResponse = (function (_super) {
                    __extends(FindDataResponse, _super);
                    function FindDataResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return FindDataResponse;
                }(DataService_1.DataServiceResponse));
                KRECreateItemBarcode.FindDataResponse = FindDataResponse;
                var FindDataRequest = (function (_super) {
                    __extends(FindDataRequest, _super);
                    function FindDataRequest(itemBarCode) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KRECreateItemBarcode";
                        _this._entityType = "KREApiEntity";
                        _this._method = "FindData";
                        _this._parameters = { itemBarCode: itemBarCode };
                        _this._isAction = true;
                        _this._returnType = Entities_1.ProxyEntities.ItemBarcodeClass;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return FindDataRequest;
                }(DataService_1.DataServiceRequest));
                KRECreateItemBarcode.FindDataRequest = FindDataRequest;
                var DeleteDataResponse = (function (_super) {
                    __extends(DeleteDataResponse, _super);
                    function DeleteDataResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return DeleteDataResponse;
                }(DataService_1.DataServiceResponse));
                KRECreateItemBarcode.DeleteDataResponse = DeleteDataResponse;
                var DeleteDataRequest = (function (_super) {
                    __extends(DeleteDataRequest, _super);
                    function DeleteDataRequest(itemBarCode) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KRECreateItemBarcode";
                        _this._entityType = "KREApiEntity";
                        _this._method = "DeleteData";
                        _this._parameters = { itemBarCode: itemBarCode };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return DeleteDataRequest;
                }(DataService_1.DataServiceRequest));
                KRECreateItemBarcode.DeleteDataRequest = DeleteDataRequest;
                var UpdateDataResponse = (function (_super) {
                    __extends(UpdateDataResponse, _super);
                    function UpdateDataResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return UpdateDataResponse;
                }(DataService_1.DataServiceResponse));
                KRECreateItemBarcode.UpdateDataResponse = UpdateDataResponse;
                var UpdateDataRequest = (function (_super) {
                    __extends(UpdateDataRequest, _super);
                    function UpdateDataRequest(itemBarCode, newitemBarCode) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KRECreateItemBarcode";
                        _this._entityType = "KREApiEntity";
                        _this._method = "UpdateData";
                        _this._parameters = { itemBarCode: itemBarCode, newitemBarCode: newitemBarCode };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return UpdateDataRequest;
                }(DataService_1.DataServiceRequest));
                KRECreateItemBarcode.UpdateDataRequest = UpdateDataRequest;
            })(KRECreateItemBarcode || (KRECreateItemBarcode = {}));
            exports_1("KRECreateItemBarcode", KRECreateItemBarcode);
            (function (PaymentEDCConnector) {
                var GetEDCConnectorResponse = (function (_super) {
                    __extends(GetEDCConnectorResponse, _super);
                    function GetEDCConnectorResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetEDCConnectorResponse;
                }(DataService_1.DataServiceResponse));
                PaymentEDCConnector.GetEDCConnectorResponse = GetEDCConnectorResponse;
                var GetEDCConnectorRequest = (function (_super) {
                    __extends(GetEDCConnectorRequest, _super);
                    function GetEDCConnectorRequest(NameData) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "PaymentEDCConnector";
                        _this._entityType = "KREPaymentEDCConnectorEntity";
                        _this._method = "GetEDCConnector";
                        _this._parameters = { NameData: NameData };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KREPaymentEDCConnectorEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return GetEDCConnectorRequest;
                }(DataService_1.DataServiceRequest));
                PaymentEDCConnector.GetEDCConnectorRequest = GetEDCConnectorRequest;
            })(PaymentEDCConnector || (PaymentEDCConnector = {}));
            exports_1("PaymentEDCConnector", PaymentEDCConnector);
            (function (PaymentEDCCRT) {
                var GetCardTypeResponse = (function (_super) {
                    __extends(GetCardTypeResponse, _super);
                    function GetCardTypeResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return GetCardTypeResponse;
                }(DataService_1.DataServiceResponse));
                PaymentEDCCRT.GetCardTypeResponse = GetCardTypeResponse;
                var GetCardTypeRequest = (function (_super) {
                    __extends(GetCardTypeRequest, _super);
                    function GetCardTypeRequest(tenderTypeData) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "PaymentEDCCRT";
                        _this._entityType = "KREPaymentEDCCRTEntity";
                        _this._method = "GetCardType";
                        _this._parameters = { tenderTypeData: tenderTypeData };
                        _this._isAction = true;
                        _this._returnType = Entities_1.ProxyEntities.CardTypeInfoClass;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return GetCardTypeRequest;
                }(DataService_1.DataServiceRequest));
                PaymentEDCCRT.GetCardTypeRequest = GetCardTypeRequest;
            })(PaymentEDCCRT || (PaymentEDCCRT = {}));
            exports_1("PaymentEDCCRT", PaymentEDCCRT);
            (function (KRERetailSalesTransaction) {
                var getCurrentSalesTransResponse = (function (_super) {
                    __extends(getCurrentSalesTransResponse, _super);
                    function getCurrentSalesTransResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return getCurrentSalesTransResponse;
                }(DataService_1.DataServiceResponse));
                KRERetailSalesTransaction.getCurrentSalesTransResponse = getCurrentSalesTransResponse;
                var getCurrentSalesTransRequest = (function (_super) {
                    __extends(getCurrentSalesTransRequest, _super);
                    function getCurrentSalesTransRequest(store, transdate) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KRERetailSalesTransaction";
                        _this._entityType = "KRERetailSalesTransactionEntity";
                        _this._method = "getCurrentSalesTrans";
                        _this._parameters = { store: store, transdate: transdate };
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KRERetailSalesTransactionEntity;
                        _this._isReturnTypeCollection = true;
                        return _this;
                    }
                    return getCurrentSalesTransRequest;
                }(DataService_1.DataServiceRequest));
                KRERetailSalesTransaction.getCurrentSalesTransRequest = getCurrentSalesTransRequest;
            })(KRERetailSalesTransaction || (KRERetailSalesTransaction = {}));
            exports_1("KRERetailSalesTransaction", KRERetailSalesTransaction);
            (function (KRETesting) {
                var getdataParametersResponse = (function (_super) {
                    __extends(getdataParametersResponse, _super);
                    function getdataParametersResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return getdataParametersResponse;
                }(DataService_1.DataServiceResponse));
                KRETesting.getdataParametersResponse = getdataParametersResponse;
                var getdataParametersRequest = (function (_super) {
                    __extends(getdataParametersRequest, _super);
                    function getdataParametersRequest() {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KRETesting";
                        _this._entityType = "KRETestingEntity";
                        _this._method = "getdataParameters";
                        _this._parameters = {};
                        _this._isAction = true;
                        _this._returnType = DataServiceEntities_g_1.Entities.KRETestingEntity;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return getdataParametersRequest;
                }(DataService_1.DataServiceRequest));
                KRETesting.getdataParametersRequest = getdataParametersRequest;
            })(KRETesting || (KRETesting = {}));
            exports_1("KRETesting", KRETesting);
            (function (KRETransactionRePrint) {
                var RePrintDataResponse = (function (_super) {
                    __extends(RePrintDataResponse, _super);
                    function RePrintDataResponse() {
                        return _super !== null && _super.apply(this, arguments) || this;
                    }
                    return RePrintDataResponse;
                }(DataService_1.DataServiceResponse));
                KRETransactionRePrint.RePrintDataResponse = RePrintDataResponse;
                var RePrintDataRequest = (function (_super) {
                    __extends(RePrintDataRequest, _super);
                    function RePrintDataRequest(transactionId, myvalueId) {
                        var _this = _super.call(this) || this;
                        _this._entitySet = "KRETransactionRePrint";
                        _this._entityType = "KRETransactionRePrintEntity";
                        _this._method = "RePrintData";
                        _this._parameters = { transactionId: transactionId, myvalueId: myvalueId };
                        _this._isAction = true;
                        _this._returnType = null;
                        _this._isReturnTypeCollection = false;
                        return _this;
                    }
                    return RePrintDataRequest;
                }(DataService_1.DataServiceRequest));
                KRETransactionRePrint.RePrintDataRequest = RePrintDataRequest;
            })(KRETransactionRePrint || (KRETransactionRePrint = {}));
            exports_1("KRETransactionRePrint", KRETransactionRePrint);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/DataService/DataServiceRequests.g.js.map