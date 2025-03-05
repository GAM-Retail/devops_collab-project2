System.register(["PosApi/Extend/Views/ManageShiftsView", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var ManageShiftsView, TypeExtensions_1, KREManageShiftsDisableBankDrop;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (ManageShiftsView_1) {
                ManageShiftsView = ManageShiftsView_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            KREManageShiftsDisableBankDrop = (function (_super) {
                __extends(KREManageShiftsDisableBankDrop, _super);
                function KREManageShiftsDisableBankDrop(context) {
                    var _this = _super.call(this, context) || this;
                    _this.label = "";
                    _this.id = "";
                    _this.extraClass = "";
                    return _this;
                }
                KREManageShiftsDisableBankDrop.prototype.init = function (state) {
                    console.log("command executed");
                    var bankDropBtn = document.getElementById("bankDrop");
                    if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(bankDropBtn)) {
                        bankDropBtn.style.display = "none";
                    }
                    this.isVisible = false;
                    this.canExecute = true;
                };
                KREManageShiftsDisableBankDrop.prototype.execute = function () {
                };
                return KREManageShiftsDisableBankDrop;
            }(ManageShiftsView.ManageShiftsExtensionCommandBase));
            exports_1("default", KREManageShiftsDisableBankDrop);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/ViewExtensions/ManageShifts/KREManageShiftsDisableBankDrop.js.map