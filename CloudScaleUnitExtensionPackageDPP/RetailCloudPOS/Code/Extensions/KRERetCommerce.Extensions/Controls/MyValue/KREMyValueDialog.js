System.register(["PosApi/Consume/Dialogs", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Dialogs_1, TypeExtensions_1, KREMyValueDialog;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1_1) {
                Dialogs_1 = Dialogs_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            KREMyValueDialog = (function () {
                function KREMyValueDialog() {
                }
                KREMyValueDialog.prototype.show = function (context, filter) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        var subTitleMsg = "My value customer filter by " + filter.toLowerCase();
                        var alphanumericInputDialogOptions = {
                            title: "Search My value customer",
                            subTitle: subTitleMsg,
                            numPadLabel: "Please enter " + filter.toLowerCase() + " :",
                            defaultValue: "",
                            enableBarcodeScanner: true,
                            enableMagneticStripReader: true,
                            onBeforeClose: _this.onBeforeClose.bind(context, _this)
                        };
                        var dialogRequest = new Dialogs_1.ShowAlphanumericInputDialogClientRequest(alphanumericInputDialogOptions);
                        context.runtime.executeAsync(dialogRequest).then(function (result) {
                            if (!result.canceled) {
                                context.logger.logInformational("AlphanumericInputDialog result: " + result.data.result.value);
                                resolve(result.data.result.value);
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
                KREMyValueDialog.prototype.onBeforeClose = function (context, result) {
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
                return KREMyValueDialog;
            }());
            exports_1("default", KREMyValueDialog);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/MyValue/KREMyValueDialog.js.map