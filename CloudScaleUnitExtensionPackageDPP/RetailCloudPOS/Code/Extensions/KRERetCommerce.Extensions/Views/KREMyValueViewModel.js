System.register(["PosApi/Consume/StoreOperations", "../DataService/DataServiceRequests.g", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var StoreOperations_1, Messages, TypeExtensions_1, KREMyValueViewModel;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (StoreOperations_1_1) {
                StoreOperations_1 = StoreOperations_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            KREMyValueViewModel = (function () {
                function KREMyValueViewModel(context) {
                    var _this = this;
                    this._context = context;
                    this.title = "My value transaction (offline)";
                    this.loadedData = [];
                    this.populateData = [];
                    this.isItemSelected = function () { return !TypeExtensions_1.ObjectExtensions.isNullOrUndefined(_this._selectedItem); };
                }
                KREMyValueViewModel.prototype.load = function () {
                    var _this = this;
                    return this._context.runtime
                        .executeAsync(new Messages.KREMyValue.GetAllMyValueRequest())
                        .then(function (response) {
                        if (!response.canceled) {
                            _this.loadedData = response.data.result;
                        }
                    });
                };
                KREMyValueViewModel.prototype.pushData = function () {
                    for (var i = 0; i < this.populateData.length; ++i) {
                        this._selectedItem = this.populateData[i];
                        this._context.runtime.executeAsync(new Messages.KREMyValue.EarningPointMyValueRequest(this._selectedItem.TransId, this._selectedItem.Amount.toString(), "0", "MVAPP00001", this._selectedItem.Refference, this._selectedItem.MyValue, this._selectedItem.AccountNum, "", ""));
                    }
                };
                KREMyValueViewModel.prototype.seletionChanged = function (items) {
                    this._context.logger.logInformational("Item selected:" + JSON.stringify(items));
                    this.populateData = items;
                    this._selectedItem = TypeExtensions_1.ArrayExtensions.firstOrUndefined(items);
                    return Promise.resolve();
                };
                KREMyValueViewModel.prototype.getOfflineData = function () {
                    var _this = this;
                    var getOfflineData = new StoreOperations_1.GetOfflinePendingTransactionCountClientRequest(this._context.logger.getNewCorrelationId());
                    return this._context.runtime.executeAsync(getOfflineData).then(function (result) {
                        _this._context.logger.logInformational("check data:" + JSON.stringify(result.data.result));
                    });
                };
                return KREMyValueViewModel;
            }());
            exports_1("default", KREMyValueViewModel);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Views/KREMyValueViewModel.js.map