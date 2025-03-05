System.register(["PosApi/Consume/Dialogs", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Dialogs_1, TypeExtensions_1, KREVoucherInputDialog;
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
            KREVoucherInputDialog = (function () {
                function KREVoucherInputDialog() {
                }
                KREVoucherInputDialog.prototype.show = function (context, cart) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        var subTitleMsg = "Enter voucher verification code for item " + cart.ItemId + " - " + cart.Description;
                        var alphanumericInputDialogOptions = {
                            title: "Please input voucher",
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
                KREVoucherInputDialog.prototype.onBeforeClose = function (context, result) {
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
                            var error = new Dialogs_1.ShowAlphanumericInputDialogError("Data result is null.");
                            return Promise.reject(error);
                        }
                    }
                    else {
                        return Promise.resolve();
                    }
                };
                return KREVoucherInputDialog;
            }());
            exports_1("default", KREVoucherInputDialog);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Create/Dialogs/KREVoucherInputDialog.js.map