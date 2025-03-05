System.register(["PosApi/TypeExtensions", "PosApi/Extend/Triggers/Triggers", "../Controls/DialogSample/MessageDialog", "PosApi/Extend/Triggers/ApplicationTriggers"], function (exports_1, context_1) {
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
    var TypeExtensions_1, Triggers_1, MessageDialog_1, Triggers, PreElevateUserTrigger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            },
            function (Triggers_1_1) {
                Triggers_1 = Triggers_1_1;
            },
            function (MessageDialog_1_1) {
                MessageDialog_1 = MessageDialog_1_1;
            },
            function (Triggers_2) {
                Triggers = Triggers_2;
            }
        ],
        execute: function () {
            PreElevateUserTrigger = (function (_super) {
                __extends(PreElevateUserTrigger, _super);
                function PreElevateUserTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PreElevateUserTrigger.prototype.execute = function (options) {
                    var newOptions = TypeExtensions_1.ObjectExtensions.clone(options);
                    newOptions.operatorId = TypeExtensions_1.StringExtensions.format("Prefix_{0}", options.operatorId);
                    return MessageDialog_1.default.show(this.context, TypeExtensions_1.StringExtensions.format("Executing PreElevateUserTrigger with options {0}.", JSON.stringify(newOptions)))
                        .then(function () {
                        return Promise.resolve(new Triggers_1.CancelableTriggerResult(false, newOptions));
                    });
                };
                return PreElevateUserTrigger;
            }(Triggers.PreElevateUserTrigger));
            exports_1("default", PreElevateUserTrigger);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/TriggerHandlers/PreElevateUserTrigger.js.map