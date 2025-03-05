System.register(["PosApi/Consume/Dialogs"], function (exports_1, context_1) {
    "use strict";
    var Dialogs_1, MessageDialog;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Dialogs_1_1) {
                Dialogs_1 = Dialogs_1_1;
            }
        ],
        execute: function () {
            MessageDialog = (function () {
                function MessageDialog() {
                }
                MessageDialog.show = function (context, title, message) {
                    var messageDialogOptions = {
                        title: title,
                        message: message,
                        showCloseX: true,
                        button1: {
                            id: "Button1Close",
                            label: "OK",
                            result: "OKResult"
                        }
                    };
                    var dialogRequest = new Dialogs_1.ShowMessageDialogClientRequest(messageDialogOptions);
                    return context.runtime.executeAsync(dialogRequest).then(function (value) {
                        return Promise.resolve();
                    });
                };
                MessageDialog.ShowErrorMessage = function (context, message, error) {
                    var title = message;
                    return this.show(context, title, error).then(function () {
                        return Promise.reject(error);
                    }).catch(function () {
                        return Promise.reject(error);
                    });
                };
                return MessageDialog;
            }());
            exports_1("default", MessageDialog);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/MessageDialog.js.map