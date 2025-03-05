System.register(["../Create/Dialogs/KREMessageDialog"], function (exports_1, context_1) {
    "use strict";
    var KREMessageDialog_1, MessageHelpers;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (KREMessageDialog_1_1) {
                KREMessageDialog_1 = KREMessageDialog_1_1;
            }
        ],
        execute: function () {
            MessageHelpers = (function () {
                function MessageHelpers() {
                }
                MessageHelpers.ShowMessage = function (context, title, message) {
                    return KREMessageDialog_1.default.show(context, title, message);
                };
                MessageHelpers.ShowErrorMessage = function (context, message, error) {
                    var title = context.resources.getString("string_70");
                    return KREMessageDialog_1.default.show(context, title, message).then(function () {
                        return Promise.reject(error);
                    }).catch(function () {
                        return Promise.reject(error);
                    });
                };
                return MessageHelpers;
            }());
            exports_1("default", MessageHelpers);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Utilities/KREMessageHelpers.js.map