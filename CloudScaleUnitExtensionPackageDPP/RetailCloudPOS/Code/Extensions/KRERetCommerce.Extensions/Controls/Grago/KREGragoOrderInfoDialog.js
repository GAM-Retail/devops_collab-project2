System.register(["PosApi/Consume/Dialogs", "../../Controls/Grago/KREGragoOrderDialogModule", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var Dialogs_1, KREGragoOrderDialogModule_1, TypeExtensions_1, KREGragoOrderInfoDialog;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1_1) {
                Dialogs_1 = Dialogs_1_1;
            },
            function (KREGragoOrderDialogModule_1_1) {
                KREGragoOrderDialogModule_1 = KREGragoOrderDialogModule_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            KREGragoOrderInfoDialog = (function (_super) {
                __extends(KREGragoOrderInfoDialog, _super);
                function KREGragoOrderInfoDialog() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREGragoOrderInfoDialog.prototype.show = function (context) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        var subTitleMsg = "Payment Gateway ";
                        var alphanumericInputDialogOptions = {
                            title: "Grago",
                            subTitle: subTitleMsg,
                            numPadLabel: "Please enter code:",
                            defaultValue: "",
                            enableBarcodeScanner: true,
                            enableMagneticStripReader: true,
                            onBeforeClose: _this.onBeforeClose.bind(context, _this)
                        };
                        var dialogRequest = new Dialogs_1.ShowAlphanumericInputDialogClientRequest(alphanumericInputDialogOptions);
                        context.runtime.executeAsync(dialogRequest)
                            .then(function (result) {
                            if (!result.canceled) {
                                context.logger.logInformational("AlphanumericInputDialog result: " + result.data.result.value.toUpperCase());
                                resolve(result.data.result.value.toUpperCase());
                            }
                            else {
                                context.logger.logInformational("AlphanumericInputDialog is canceled.");
                                resolve(null);
                            }
                        }).catch(function (reason) {
                            context.logger.logError(JSON.stringify(reason));
                            reject(reason);
                        });
                    });
                    return promise;
                };
                KREGragoOrderInfoDialog.prototype.onBeforeClose = function (context, result) {
                    if (!result.canceled) {
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(result.data)) {
                            if (result.data.value === "0") {
                                var error = new Dialogs_1.ShowAlphanumericInputDialogError("Invalid input. Enter different value.");
                                return Promise.reject(error);
                            }
                            else {
                                return Promise.resolve();
                            }
                        }
                        else {
                            return Promise.resolve();
                        }
                    }
                    else {
                        return Promise.resolve();
                    }
                };
                return KREGragoOrderInfoDialog;
            }(KREGragoOrderDialogModule_1.default));
            exports_1("default", KREGragoOrderInfoDialog);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/Grago/KREGragoOrderInfoDialog.js.map