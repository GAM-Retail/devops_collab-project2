System.register(["PosApi/Consume/Dialogs", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Dialogs_1, TypeExtensions_1, KREFindMyValueDialog, ListData;
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
            KREFindMyValueDialog = (function () {
                function KREFindMyValueDialog() {
                }
                KREFindMyValueDialog.prototype.show = function (context) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        var listItems = [new ListData("ValueID", "1"), new ListData("Phone", "2"), new ListData("Email", "3")];
                        var convertedListItems = listItems.map(function (listItem) {
                            var convertedListItem = {
                                label: listItem.label,
                                value: listItem
                            };
                            return convertedListItem;
                        });
                        var listInputDialogOptions = {
                            title: "My value customer",
                            subTitle: "Please choose one",
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
                                resolve(selectedItem.label);
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
                KREFindMyValueDialog.prototype.onBeforeClose = function (result) {
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
                return KREFindMyValueDialog;
            }());
            exports_1("default", KREFindMyValueDialog);
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
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/MyValue/KREFindMyValueDialog.js.map