System.register(["PosApi/Create/Dialogs", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var Dialogs, TypeExtensions_1, KRECommerceSetupView;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1) {
                Dialogs = Dialogs_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            KRECommerceSetupView = (function (_super) {
                __extends(KRECommerceSetupView, _super);
                function KRECommerceSetupView() {
                    return _super.call(this) || this;
                }
                KRECommerceSetupView.prototype.onReady = function (element) {
                    var _this = this;
                    var BKP = element.querySelector("#BKP");
                    BKP.value = this._data.BKP.toString();
                    BKP.onchange = function () { _this._data.BKP = BKP.value; };
                    BKP.disabled = true;
                    var DTP = element.querySelector("#DTP");
                    DTP.value = this._data.DTP.toString();
                    DTP.onchange = function () { _this._data.DTP = DTP.value; };
                    DTP.disabled = true;
                    var FTZ = element.querySelector("#FTZ");
                    FTZ.value = this._data.FTZ.toString();
                    FTZ.onchange = function () { _this._data.FTZ = FTZ.value; };
                    FTZ.disabled = true;
                    var ItemComment = element.querySelector("#ItemComment");
                    ItemComment.value = this._data.ItemComment.toString();
                    ItemComment.onchange = function () { _this._data.ItemComment = ItemComment.value; };
                    ItemComment.disabled = true;
                    var PaymentMethod = element.querySelector("#PaymentMethod");
                    PaymentMethod.value = this._data.PaymentMethod.toString();
                    PaymentMethod.onchange = function () { _this._data.PaymentMethod = PaymentMethod.value; };
                    PaymentMethod.disabled = true;
                    var ExcRate = element.querySelector("#ExcRate");
                    ExcRate.value = this._data.ExcRate.toString();
                    ExcRate.onchange = function () { _this._data.ExcRate = ExcRate.value.toString(); };
                    ExcRate.disabled = true;
                };
                KRECommerceSetupView.prototype.open = function (dataInfo) {
                    var _this = this;
                    this._data = dataInfo;
                    var titleInfo;
                    titleInfo = "Setup commerce";
                    var promise = new Promise(function (resolve, reject) {
                        var option = {
                            title: titleInfo,
                            subTitle: "setup commerce",
                            button1: {
                                id: "btnAdd",
                                label: "OK",
                                isPrimary: true,
                                onClick: _this.btnOKClickHandler.bind(_this)
                            }
                        };
                        _this.openDialog(option);
                    });
                    return promise;
                };
                KRECommerceSetupView.prototype.btnOKClickHandler = function () {
                    this.resolvePromise(null);
                    return true;
                };
                KRECommerceSetupView.prototype.resolvePromise = function (InfoResult) {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this._resolve)) {
                        this._resolve(InfoResult);
                        this._resolve = null;
                    }
                };
                return KRECommerceSetupView;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", KRECommerceSetupView);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/Setup/KRECommerceSetupViewDialog.js.map