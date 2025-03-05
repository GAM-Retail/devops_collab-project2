System.register(["knockout", "PosApi/Extend/Views/CartView", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var knockout_1, CartView_1, TypeExtensions_1, LineDetailsCustomControl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (knockout_1_1) {
                knockout_1 = knockout_1_1;
            },
            function (CartView_1_1) {
                CartView_1 = CartView_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            LineDetailsCustomControl = (function (_super) {
                __extends(LineDetailsCustomControl, _super);
                function LineDetailsCustomControl(id, context) {
                    var _this = _super.call(this, id, context) || this;
                    _this._cartLine = knockout_1.ko.observable(null);
                    _this.cartLineItemId = knockout_1.ko.computed(function () {
                        var cartLine = _this._cartLine();
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cartLine)) {
                            return cartLine.ItemId;
                        }
                        return TypeExtensions_1.StringExtensions.EMPTY;
                    });
                    _this.cartLineDescription = knockout_1.ko.computed(function () {
                        var cartLine = _this._cartLine();
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cartLine)) {
                            return cartLine.Description;
                        }
                        return TypeExtensions_1.StringExtensions.EMPTY;
                    });
                    _this.isCartLineSelected = knockout_1.ko.computed(function () { return !TypeExtensions_1.ObjectExtensions.isNullOrUndefined(_this._cartLine()); });
                    _this.cartLineSelectedHandler = function (data) {
                        if (TypeExtensions_1.ArrayExtensions.hasElements(data.cartLines)) {
                            _this._cartLine(data.cartLines[0]);
                        }
                    };
                    _this.cartLineSelectionClearedHandler = function () {
                        _this._cartLine(null);
                    };
                    return _this;
                }
                LineDetailsCustomControl.prototype.onReady = function (element) {
                    knockout_1.ko.applyBindingsToNode(element, {
                        template: {
                            name: LineDetailsCustomControl.TEMPLATE_ID,
                            data: this
                        }
                    });
                };
                LineDetailsCustomControl.prototype.init = function (state) {
                    this._state = state;
                };
                LineDetailsCustomControl.TEMPLATE_ID = "Microsot_KRERetailCommerce_LineDetails";
                return LineDetailsCustomControl;
            }(CartView_1.CartViewCustomControlBase));
            exports_1("default", LineDetailsCustomControl);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/ViewExtensions/Cart/LineDetailsCustomControl.js.map