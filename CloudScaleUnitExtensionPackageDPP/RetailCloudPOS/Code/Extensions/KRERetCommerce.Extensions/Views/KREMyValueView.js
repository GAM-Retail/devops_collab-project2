System.register(["PosApi/Create/Views", "./KREMyValueViewModel", "PosApi/Consume/Controls", "PosApi/TypeExtensions", "PosApi/Consume/Formatters"], function (exports_1, context_1) {
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
    var Views, KREMyValueViewModel_1, Controls_1, TypeExtensions_1, Formatters_1, KREMyValueView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Views_1) {
                Views = Views_1;
            },
            function (KREMyValueViewModel_1_1) {
                KREMyValueViewModel_1 = KREMyValueViewModel_1_1;
            },
            function (Controls_1_1) {
                Controls_1 = Controls_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (Formatters_1_1) {
                Formatters_1 = Formatters_1_1;
            }
        ],
        execute: function () {
            KREMyValueView = (function (_super) {
                __extends(KREMyValueView, _super);
                function KREMyValueView(context) {
                    var _this = this;
                    var config = {
                        title: "My value transaction",
                        commandBar: {
                            commands: [
                                {
                                    name: "Push",
                                    label: "Push",
                                    icon: Views.Icons.SetAction,
                                    isVisible: true,
                                    canExecute: false,
                                    execute: function (args) {
                                        _this.state.isProcessing = true;
                                        _this.viewModel.pushData();
                                        _this.viewModel.load().then(function () {
                                            _this.dataList.data = _this.viewModel.loadedData;
                                            _this.state.isProcessing = false;
                                        });
                                    }
                                },
                                {
                                    name: "SelectData",
                                    label: "Select all",
                                    icon: Views.Icons.SelectAll,
                                    isVisible: true,
                                    canExecute: true,
                                    execute: function (args) {
                                        _this.state.isProcessing = true;
                                        _this.selectAll();
                                        _this.state.isProcessing = false;
                                    }
                                },
                                {
                                    name: "Refresh",
                                    label: "Refresh",
                                    icon: Views.Icons.Refresh,
                                    isVisible: true,
                                    canExecute: true,
                                    execute: function (args) {
                                        _this.state.isProcessing = true;
                                        _this.viewModel.load().then(function () {
                                            _this.dataList.data = _this.viewModel.loadedData;
                                            _this.state.isProcessing = false;
                                        });
                                    }
                                },
                                {
                                    name: "getDataOffline",
                                    label: "Get data Offline",
                                    icon: Views.Icons.Go,
                                    isVisible: true,
                                    canExecute: true,
                                    execute: function (args) {
                                        _this.state.isProcessing = true;
                                        _this.viewModel.getOfflineData();
                                        _this.state.isProcessing = false;
                                    }
                                }
                            ]
                        }
                    };
                    _this = _super.call(this, context, config) || this;
                    _this.viewModel = new KREMyValueViewModel_1.default(context);
                    return _this;
                }
                Object.defineProperty(KREMyValueView.prototype, "btnPushCommand", {
                    get: function () {
                        return TypeExtensions_1.ArrayExtensions.firstOrUndefined(this.state.commandBar.commands, function (c) { return c.name === "Push"; });
                    },
                    enumerable: false,
                    configurable: true
                });
                KREMyValueView.prototype.selectAll = function () {
                    var nameFilterValue = "";
                    var itemsToSelect = this.dataList.data.filter(function (item) { return item.ValueId.toLowerCase().indexOf(nameFilterValue.toLowerCase()) != -1; });
                    if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(itemsToSelect[0]))
                        this.btnPushCommand.canExecute = false;
                    else
                        this.btnPushCommand.canExecute = true;
                    this.dataList.selectItems(itemsToSelect);
                };
                KREMyValueView.prototype.dispose = function () {
                    TypeExtensions_1.ObjectExtensions.disposeAllProperties(this);
                };
                KREMyValueView.prototype.onReady = function (element) {
                    var _this = this;
                    var dataListOptions = {
                        interactionMode: Controls_1.DataListInteractionMode.MultiSelect,
                        data: this.viewModel.loadedData,
                        columns: [
                            {
                                title: "ValueID",
                                ratio: 20, collapseOrder: 1, minWidth: 100,
                                computeValue: function (data) { return data.ValueId; }
                            },
                            {
                                title: "Customer",
                                ratio: 20, collapseOrder: 2, minWidth: 100,
                                computeValue: function (data) { return data.AccountNum; }
                            },
                            {
                                title: "TransId",
                                ratio: 20, collapseOrder: 3, minWidth: 100,
                                computeValue: function (data) { return data.TransId; }
                            },
                            {
                                title: "ReceiptId",
                                ratio: 20, collapseOrder: 4, minWidth: 100,
                                computeValue: function (data) { return data.Refference; }
                            },
                            {
                                title: "Amount",
                                ratio: 20, collapseOrder: 5, minWidth: 100,
                                computeValue: function (data) { return Formatters_1.CurrencyFormatter.toCurrency(data.Amount); }
                            }
                        ]
                    };
                    var dataListRootElem = element.querySelector("#KREMyValueView");
                    this.dataList = this.context.controlFactory.create(this.context.logger.getNewCorrelationId(), "DataList", dataListOptions, dataListRootElem);
                    this.dataList.addEventListener("SelectionChanged", function (eventData) {
                        if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(eventData.items[0]))
                            _this.btnPushCommand.canExecute = false;
                        else
                            _this.btnPushCommand.canExecute = true;
                        _this.viewModel.seletionChanged(eventData.items);
                    });
                    this.viewModel.load().then(function () {
                        _this.dataList.data = _this.viewModel.loadedData;
                    });
                };
                return KREMyValueView;
            }(Views.CustomViewControllerBase));
            exports_1("default", KREMyValueView);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Views/KREMyValueView.js.map