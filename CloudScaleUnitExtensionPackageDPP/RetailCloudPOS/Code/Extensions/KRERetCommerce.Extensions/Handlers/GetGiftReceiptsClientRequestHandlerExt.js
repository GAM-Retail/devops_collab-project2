System.register(["PosApi/Extend/RequestHandlers/SalesOrdersRequestHandlers", "PosApi/Consume/SalesOrders"], function (exports_1, context_1) {
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
    var SalesOrdersRequestHandlers_1, SalesOrders_1, GetGiftReceiptsClientRequestHandlerExt;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (SalesOrdersRequestHandlers_1_1) {
                SalesOrdersRequestHandlers_1 = SalesOrdersRequestHandlers_1_1;
            },
            function (SalesOrders_1_1) {
                SalesOrders_1 = SalesOrders_1_1;
            }
        ],
        execute: function () {
            GetGiftReceiptsClientRequestHandlerExt = (function (_super) {
                __extends(GetGiftReceiptsClientRequestHandlerExt, _super);
                function GetGiftReceiptsClientRequestHandlerExt() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GetGiftReceiptsClientRequestHandlerExt.prototype.executeAsync = function (request) {
                    var _this = this;
                    request.salesOrder.AmountDue = 0;
                    if (request.isPreview) {
                        request.salesOrder.AmountDue = 0;
                        return this.defaultExecuteAsync(request);
                    }
                    else {
                        var response = new Promise(function (resolve, reject) {
                            _this._getGiftReceiptForAllSalesLinesAsync(request, resolve, reject);
                        });
                        return response;
                    }
                };
                GetGiftReceiptsClientRequestHandlerExt.prototype._getGiftReceiptForAllSalesLinesAsync = function (request, resolve, reject) {
                    var _this = this;
                    this.defaultExecuteAsync(request).then(function (value) {
                        if (value.canceled) {
                            resolve({ canceled: true, data: null });
                        }
                        else if (request.salesOrder.SalesLines.length !== value.data.result.selectedSalesLines.length) {
                            _this._getGiftReceiptForAllSalesLinesAsync(request, resolve, reject);
                        }
                        else {
                            resolve({ canceled: false, data: new SalesOrders_1.GetGiftReceiptsClientResponse(value.data.result) });
                        }
                    }).catch(function (reason) {
                        reject(reason);
                    });
                };
                return GetGiftReceiptsClientRequestHandlerExt;
            }(SalesOrdersRequestHandlers_1.GetGiftReceiptsClientRequestHandler));
            exports_1("default", GetGiftReceiptsClientRequestHandlerExt);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Handlers/GetGiftReceiptsClientRequestHandlerExt.js.map