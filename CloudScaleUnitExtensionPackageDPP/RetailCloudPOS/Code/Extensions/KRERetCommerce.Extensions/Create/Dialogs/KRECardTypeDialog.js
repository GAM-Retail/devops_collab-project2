System.register(["PosApi/Consume/Dialogs", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Dialogs_1, TypeExtensions_1, KRECardTypeDialog, ListData;
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
            KRECardTypeDialog = (function () {
                function KRECardTypeDialog() {
                }
                KRECardTypeDialog.show = function (context, data) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        var listItems = data;
                        var convertedListItems = listItems.map(function (listItem) {
                            var convertedListItem = {
                                label: listItem.Name,
                                value: listItem.TypeId
                            };
                            return convertedListItem;
                        });
                        var listInputDialogOptions = {
                            title: "Payment card type",
                            subTitle: "Select a payment card type",
                            items: convertedListItems,
                            onBeforeClose: _this.onBeforeClose.bind(_this)
                        };
                        var dialogRequest = new Dialogs_1.ShowListInputDialogClientRequest(listInputDialogOptions);
                        context.runtime.executeAsync(dialogRequest)
                            .then(function (result) {
                            if (!result.canceled) {
                                var selectedItem = result.data.result.value;
                                var selectedListData = selectedItem.value;
                                context.logger.logInformational("Selected ListData label: " + selectedListData.label);
                                context.logger.logInformational("Selected ListData value: " + selectedListData.value);
                                resolve(selectedItem.value);
                            }
                            else {
                                context.logger.logInformational("ListInputDialog is canceled.");
                                resolve(null);
                            }
                        }).catch(function (reason) {
                            context.logger.logError(JSON.stringify(reason));
                            reject(reason);
                        });
                    });
                    return promise;
                };
                KRECardTypeDialog.onBeforeClose = function (result) {
                    if (!result.canceled) {
                        if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(result.data)) {
                            return Promise.resolve();
                        }
                        else {
                            var error = new Dialogs_1.ShowListInputDialogError("Data result is null.");
                            return Promise.reject(error);
                        }
                    }
                    else {
                        return Promise.resolve();
                    }
                };
                return KRECardTypeDialog;
            }());
            exports_1("default", KRECardTypeDialog);
            ListData = (function () {
                function ListData(label, value) {
                    this.label = label;
                    this.value = value;
                }
                return ListData;
            }());
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Create/Dialogs/KRECardTypeDialog.js.map