System.register(["PosApi/Entities", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Entities_1, TypeExtensions_1, Entities;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            exports_1("ProxyEntities", Entities_1.ProxyEntities);
            (function (Entities) {
                var KREGragoEntity = (function () {
                    function KREGragoEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.IDMember = (odataObject.IDMember != null) ? parseInt(odataObject.IDMember, 10) : undefined;
                        this.OrderNum = odataObject.OrderNum;
                        this.Name = odataObject.Name;
                        this.Item = odataObject.Item;
                        this.Price = (odataObject.Price != null) ? parseFloat(odataObject.Price) : undefined;
                        this.Comment = odataObject.Comment;
                        this.SalesId = odataObject.SalesId;
                        this.Status = odataObject.Status;
                        this.Error = odataObject.Error;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREGragoEntity;
                }());
                Entities.KREGragoEntity = KREGragoEntity;
                var KREEventRegistrationEntity = (function () {
                    function KREEventRegistrationEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.IDMember = (odataObject.IDMember != null) ? parseInt(odataObject.IDMember, 10) : undefined;
                        this.RecId = odataObject.RecId;
                        this.EventId = odataObject.EventId;
                        this.RetailChannelId = odataObject.RetailChannelId;
                        this.ItemId = odataObject.ItemId;
                        this.InfoCode = odataObject.InfoCode;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREEventRegistrationEntity;
                }());
                Entities.KREEventRegistrationEntity = KREEventRegistrationEntity;
                var KREMyValueEntity = (function () {
                    function KREMyValueEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.IDMember = (odataObject.IDMember != null) ? parseInt(odataObject.IDMember, 10) : undefined;
                        this.Id = odataObject.Id;
                        this.MyValue = odataObject.MyValue;
                        this.ValueId = odataObject.ValueId;
                        this.AccountNum = odataObject.AccountNum;
                        this.Name = odataObject.Name;
                        this.Email = odataObject.Email;
                        this.Phone = odataObject.Phone;
                        this.Address = odataObject.Address;
                        this.Refference = odataObject.Refference;
                        this.TransId = odataObject.TransId;
                        this.Outlet = odataObject.Outlet;
                        this.Point = odataObject.Point;
                        this.Amount = odataObject.Amount;
                        this.Result = odataObject.Result;
                        this.Error = odataObject.Error;
                        this.Client = odataObject.Client;
                        this.Sign = odataObject.Sign;
                        this.ErrorOffline = odataObject.ErrorOffline;
                        this.AutoCreateCust = odataObject.AutoCreateCust;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREMyValueEntity;
                }());
                Entities.KREMyValueEntity = KREMyValueEntity;
                var KRERetailSalesTransactionEntity = (function () {
                    function KRERetailSalesTransactionEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.IDMember = (odataObject.IDMember != null) ? parseInt(odataObject.IDMember, 10) : undefined;
                        this.TransactionId = odataObject.TransactionId;
                        this.LineNum = odataObject.LineNum;
                        this.barcode = odataObject.barcode;
                        this.ItemNumber = odataObject.ItemNumber;
                        this.ProductName = odataObject.ProductName;
                        this.TransDate = (odataObject.TransDate instanceof Date) ? odataObject.TransDate
                            : (odataObject.TransDate != null) ? TypeExtensions_1.DateExtensions.convertStringToDateObject(odataObject.TransDate) : undefined;
                        this.TransTime = odataObject.TransTime;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KRERetailSalesTransactionEntity;
                }());
                Entities.KRERetailSalesTransactionEntity = KRERetailSalesTransactionEntity;
                var KRETestingEntity = (function () {
                    function KRETestingEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.ID = odataObject.ID;
                        this.MyValueClientId = odataObject.MyValueClientId;
                        this.MyValueClientSecret = odataObject.MyValueClientSecret;
                        this.MyValueURLGetUser = odataObject.MyValueURLGetUser;
                        this.MyValueURLGetUserPoint = odataObject.MyValueURLGetUserPoint;
                        this.MyValueURLCreateMyValue = odataObject.MyValueURLCreateMyValue;
                        this.MyValueURLEarningPoint = odataObject.MyValueURLEarningPoint;
                        this.MyValueURLRedeemPoint = odataObject.MyValueURLRedeemPoint;
                        this.MyValueURLRefferal = odataObject.MyValueURLRefferal;
                        this.MyValueURLReturn = odataObject.MyValueURLReturn;
                        this.AutoCreateCust = odataObject.AutoCreateCust;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KRETestingEntity;
                }());
                Entities.KRETestingEntity = KRETestingEntity;
                var KRETransactionRePrintEntity = (function () {
                    function KRETransactionRePrintEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.IDMember = (odataObject.IDMember != null) ? parseInt(odataObject.IDMember, 10) : undefined;
                        this.TransactionId = odataObject.TransactionId;
                        this.MyValue = odataObject.MyValue;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KRETransactionRePrintEntity;
                }());
                Entities.KRETransactionRePrintEntity = KRETransactionRePrintEntity;
                var KREVoucherEntity = (function () {
                    function KREVoucherEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.IDMember = (odataObject.IDMember != null) ? parseInt(odataObject.IDMember, 10) : undefined;
                        this.VoucherIdData = odataObject.VoucherIdData;
                        this.TotalAmountData = (odataObject.TotalAmountData != null) ? parseFloat(odataObject.TotalAmountData) : undefined;
                        this.WarehouseIdData = odataObject.WarehouseIdData;
                        this.TransactionIdData = odataObject.TransactionIdData;
                        this.ReceiptIdData = odataObject.ReceiptIdData;
                        this.CustOwnerData = odataObject.CustOwnerData;
                        this.ResultInfoData = odataObject.ResultInfoData;
                        this.StatusData = odataObject.StatusData;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREVoucherEntity;
                }());
                Entities.KREVoucherEntity = KREVoucherEntity;
                var KRECommerceSetupEntity = (function () {
                    function KRECommerceSetupEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.ID = odataObject.ID;
                        this.BKP = odataObject.BKP;
                        this.DTP = odataObject.DTP;
                        this.FTZ = odataObject.FTZ;
                        this.ItemComment = odataObject.ItemComment;
                        this.PaymentMethod = odataObject.PaymentMethod;
                        this.ExcRate = odataObject.ExcRate;
                        this.DPPOther = (odataObject.DPPOther != null) ? parseFloat(odataObject.DPPOther) : undefined;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KRECommerceSetupEntity;
                }());
                Entities.KRECommerceSetupEntity = KRECommerceSetupEntity;
                var KREApiEntity = (function () {
                    function KREApiEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.ID = odataObject.ID;
                        this.TRANSACTIONID = odataObject.TRANSACTIONID;
                        this.MYVALUEID = odataObject.MYVALUEID;
                        this.POINT = odataObject.POINT;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREApiEntity;
                }());
                Entities.KREApiEntity = KREApiEntity;
                var KREPaymentEDCConnectorEntity = (function () {
                    function KREPaymentEDCConnectorEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.Id = odataObject.Id;
                        this.ConnectorId = odataObject.ConnectorId;
                        this.Name = odataObject.Name;
                        this.BaudRate = odataObject.BaudRate;
                        this.Com = odataObject.Com;
                        this.TerminalId = odataObject.TerminalId;
                        this.WaitTime = odataObject.WaitTime;
                        this.WaitLoop = odataObject.WaitLoop;
                        this.DLLPath = odataObject.DLLPath;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREPaymentEDCConnectorEntity;
                }());
                Entities.KREPaymentEDCConnectorEntity = KREPaymentEDCConnectorEntity;
                var KREPaymentEDCCRTEntity = (function () {
                    function KREPaymentEDCCRTEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.RECID = (odataObject.RECID != null) ? parseInt(odataObject.RECID, 10) : undefined;
                        this.TenderTypeId = odataObject.TenderTypeId;
                        this.CardTypeId = odataObject.CardTypeId;
                        this.Name = odataObject.Name;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREPaymentEDCCRTEntity;
                }());
                Entities.KREPaymentEDCCRTEntity = KREPaymentEDCCRTEntity;
                var KREEventRegistrationHeaderEntity = (function () {
                    function KREEventRegistrationHeaderEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.IDMember = (odataObject.IDMember != null) ? parseInt(odataObject.IDMember, 10) : undefined;
                        this.EventId = odataObject.EventId;
                        this.EventName = odataObject.EventName;
                        this.Price = (odataObject.Price != null) ? parseFloat(odataObject.Price) : undefined;
                        this.IsPurchaseProduct = odataObject.IsPurchaseProduct;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREEventRegistrationHeaderEntity;
                }());
                Entities.KREEventRegistrationHeaderEntity = KREEventRegistrationHeaderEntity;
                var KREEventRegistrationTransactionEntity = (function () {
                    function KREEventRegistrationTransactionEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.IDMember = (odataObject.IDMember != null) ? parseInt(odataObject.IDMember, 10) : undefined;
                        this.EventId = odataObject.EventId;
                        this.CustName = odataObject.CustName;
                        this.CustPhone = odataObject.CustPhone;
                        this.CustEmail = odataObject.CustEmail;
                        this.ItemId = odataObject.ItemId;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREEventRegistrationTransactionEntity;
                }());
                Entities.KREEventRegistrationTransactionEntity = KREEventRegistrationTransactionEntity;
                var KREEventRegistrationPriceEntity = (function () {
                    function KREEventRegistrationPriceEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.IDMember = (odataObject.IDMember != null) ? parseInt(odataObject.IDMember, 10) : undefined;
                        this.EventId = odataObject.EventId;
                        this.EventName = odataObject.EventName;
                        this.Price = (odataObject.Price != null) ? parseFloat(odataObject.Price) : undefined;
                        this.ItemId = odataObject.ItemId;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREEventRegistrationPriceEntity;
                }());
                Entities.KREEventRegistrationPriceEntity = KREEventRegistrationPriceEntity;
                var KREMyValueInvoiceEntity = (function () {
                    function KREMyValueInvoiceEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.Id = (odataObject.Id != null) ? parseInt(odataObject.Id, 10) : undefined;
                        this.InvoiceId = odataObject.InvoiceId;
                        this.Qty = (odataObject.Qty != null) ? parseFloat(odataObject.Qty) : undefined;
                        this.InvoiceAmount = (odataObject.InvoiceAmount != null) ? parseFloat(odataObject.InvoiceAmount) : undefined;
                        this.ContributionMargin = (odataObject.ContributionMargin != null) ? parseFloat(odataObject.ContributionMargin) : undefined;
                        this.ContributionRatio = (odataObject.ContributionRatio != null) ? parseFloat(odataObject.ContributionRatio) : undefined;
                        this.ExtensionProperties = undefined;
                        if (odataObject.ExtensionProperties) {
                            this.ExtensionProperties = [];
                            for (var i = 0; i < odataObject.ExtensionProperties.length; i++) {
                                if (odataObject.ExtensionProperties[i] != null) {
                                    if (odataObject.ExtensionProperties[i]['@odata.type'] != null) {
                                        var className = odataObject.ExtensionProperties[i]['@odata.type'];
                                        className = className.substr(className.lastIndexOf('.') + 1).concat("Class");
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities[className](odataObject.ExtensionProperties[i]);
                                    }
                                    else {
                                        this.ExtensionProperties[i] = new Entities_1.ProxyEntities.CommercePropertyClass(odataObject.ExtensionProperties[i]);
                                    }
                                }
                                else {
                                    this.ExtensionProperties[i] = undefined;
                                }
                            }
                        }
                    }
                    return KREMyValueInvoiceEntity;
                }());
                Entities.KREMyValueInvoiceEntity = KREMyValueInvoiceEntity;
                var KREItemBarcodeEntity = (function () {
                    function KREItemBarcodeEntity(odataObject) {
                        odataObject = odataObject || {};
                        this.itemId = odataObject.itemId;
                        this.barcodeSetupid = odataObject.barcodeSetupid;
                        this.itemBarCode = odataObject.itemBarCode;
                        this.unitID = odataObject.unitID;
                    }
                    return KREItemBarcodeEntity;
                }());
                Entities.KREItemBarcodeEntity = KREItemBarcodeEntity;
            })(Entities || (Entities = {}));
            exports_1("Entities", Entities);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/DataService/DataServiceEntities.g.js.map