System.register(["PosApi/Create/Dialogs", "PosApi/TypeExtensions", "knockout"], function (exports_1, context_1) {
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
    var Dialogs, TypeExtensions_1, knockout_1, KREMyValueMessageDialog;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1) {
                Dialogs = Dialogs_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (knockout_1_1) {
                knockout_1 = knockout_1_1;
            }
        ],
        execute: function () {
            KREMyValueMessageDialog = (function (_super) {
                __extends(KREMyValueMessageDialog, _super);
                function KREMyValueMessageDialog() {
                    return _super.call(this) || this;
                }
                KREMyValueMessageDialog.prototype.onReady = function (element) {
                    knockout_1.default.applyBindings(this, element);
                };
                KREMyValueMessageDialog.prototype.open = function (title, subTitle) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        _this.resolve = resolve;
                        var option = {
                            title: title,
                            subTitle: subTitle,
                            onCloseX: _this.onCloseX.bind(_this),
                            button1: {
                                id: "YesBtn",
                                label: "Yes",
                                isPrimary: true,
                                onClick: _this.button1ClickHandler.bind(_this)
                            },
                            button2: {
                                id: "NoBtn",
                                label: "No",
                                onClick: _this.button2ClickHandler.bind(_this)
                            }
                        };
                        _this.openDialog(option);
                    });
                    return promise;
                };
                KREMyValueMessageDialog.prototype.onCloseX = function () {
                    this.resolvePromise("");
                    return true;
                };
                KREMyValueMessageDialog.prototype.button1ClickHandler = function () {
                    this.isProcessing = true;
                    this.context.navigator.navigate("KRECreateCustMyValueView");
                    return true;
                };
                KREMyValueMessageDialog.prototype.button2ClickHandler = function () {
                    this.resolvePromise("");
                    return true;
                };
                KREMyValueMessageDialog.prototype.resolvePromise = function (result) {
                    if (TypeExtensions_1.ObjectExtensions.isFunction(this.resolve)) {
                        this.resolve = null;
                    }
                };
                return KREMyValueMessageDialog;
            }(Dialogs.ExtensionTemplatedDialogBase));
            exports_1("default", KREMyValueMessageDialog);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/KREMyValueMessageDialog.js.map