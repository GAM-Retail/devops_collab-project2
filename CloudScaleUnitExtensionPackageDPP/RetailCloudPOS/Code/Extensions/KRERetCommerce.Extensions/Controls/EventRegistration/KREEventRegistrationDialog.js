System.register(["PosApi/Consume/Dialogs", "PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var Dialogs_1, TypeExtensions_1, KREEventRegistrationDialog, ListData;
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
            KREEventRegistrationDialog = (function () {
                function KREEventRegistrationDialog() {
                }
                KREEventRegistrationDialog.show = function (context, data) {
                    var _this = this;
                    var promise = new Promise(function (resolve, reject) {
                        var listItems = data;
                        var convertedListItems = listItems.map(function (listItem) {
                            var convertedListItem = {
                                label: listItem.EventName,
                                value: listItem.EventId
                            };
                            return convertedListItem;
                        });
                        var listInputDialogOptions = {
                            title: "Event Registration",
                            subTitle: "Select an event",
                            items: convertedListItems,
                            onBeforeClose: _this.onBeforeClose.bind(_this)
                        };
                        var dialogRequest = new Dialogs_1.ShowListInputDialogClientRequest(listInputDialogOptions);
                        context.runtime.executeAsync(dialogRequest)
                            .then(function (result) {
                            if (!result.canceled) {
                                context.logger.logInformational("list Dialog result: " + result.data.result.value);
                                var selectedItem = result.data.result.value;
                                var selectedListData = selectedItem;
                                context.logger.logInformational("Selected ListData label: " + selectedListData.label);
                                context.logger.logInformational("Selected ListData value: " + selectedListData.value);
                                resolve(selectedListData);
                            }
                            else {
                                context.logger.logInformational("list Dialog is canceled.");
                                resolve(null);
                            }
                        }).catch(function (reason) {
                            context.logger.logError(reason);
                            reject(reason);
                        });
                    });
                    return promise;
                };
                KREEventRegistrationDialog.onBeforeClose = function (result) {
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
                return KREEventRegistrationDialog;
            }());
            exports_1("default", KREEventRegistrationDialog);
            ListData = (function () {
                function ListData(_label, _value) {
                    for (var i = 0; i < _label.length; ++i) {
                        this.label = _label[i].toString();
                        this.value = _value[i].toString();
                    }
                }
                return ListData;
            }());
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Controls/EventRegistration/KREEventRegistrationDialog.js.map