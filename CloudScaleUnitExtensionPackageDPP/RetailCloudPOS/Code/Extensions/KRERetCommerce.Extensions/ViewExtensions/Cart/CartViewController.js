System.register(["PosApi/Extend/Views/CartView", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var CartView, TypeExtensions_1, CartViewController;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (CartView_1) {
                CartView = CartView_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            CartViewController = (function (_super) {
                __extends(CartViewController, _super);
                function CartViewController(context) {
                    var _this = _super.call(this, context) || this;
                    _this.cartLineSelectedHandler = function (data) {
                        _this._selectedCartLines = data.cartLines;
                        if (TypeExtensions_1.ArrayExtensions.hasElements(_this._selectedCartLines)) {
                            CartViewController.selectedCartLineId = _this._selectedCartLines[0].LineId;
                            CartViewController.selectedSingleCartLines = TypeExtensions_1.ArrayExtensions.firstOrUndefined(_this._selectedCartLines);
                            CartViewController._context = context;
                        }
                    };
                    _this.cartChangedHandler = function (data) {
                        _this._selectedChangeCartLines = data.cart.CartLines;
                        if (TypeExtensions_1.ArrayExtensions.hasElements(_this._selectedChangeCartLines)) {
                            CartViewController.selectedTotalAmount = _this._selectedChangeCartLines[0].TotalAmount;
                            CartViewController.selectedSingleCartTable = data.cart;
                            CartViewController.customer = data.customer;
                        }
                    };
                    _this.cartLineSelectionClearedHandler = function () {
                        _this._selectedCartLines = undefined;
                        CartViewController.selectedCartLineId = null;
                    };
                    _this.tenderLineSelectedHandler = function (data) {
                        _this._selectedTenderLines = data.tenderLines;
                    };
                    _this.tenderLineSelectionClearedHandler = function () {
                        _this._selectedCartLines = undefined;
                    };
                    _this.processingAddItemOrCustomerChangedHandler = function (processing) {
                        _this._isProcessingAddItemOrCustomer = processing;
                    };
                    return _this;
                }
                CartViewController.prototype.init = function (state) {
                    var addCustomerButton = document.getElementById("addCustomerButton");
                    if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(addCustomerButton)) {
                        addCustomerButton.style.display = "none";
                    }
                };
                CartViewController.selectedCartLineId = TypeExtensions_1.StringExtensions.EMPTY;
                return CartViewController;
            }(CartView.CartExtensionViewControllerBase));
            exports_1("default", CartViewController);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/ViewExtensions/Cart/CartViewController.js.map