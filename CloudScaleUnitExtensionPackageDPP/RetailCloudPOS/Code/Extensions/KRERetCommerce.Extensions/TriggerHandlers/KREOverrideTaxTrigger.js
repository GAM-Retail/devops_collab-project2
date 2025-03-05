System.register(["PosApi/Extend/Triggers/TaxOverrideTriggers", "PosApi/Entities", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var Triggers, Entities_1, TypeExtensions_1, KREOverrideTaxTrigger;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            KREOverrideTaxTrigger = (function (_super) {
                __extends(KREOverrideTaxTrigger, _super);
                function KREOverrideTaxTrigger() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREOverrideTaxTrigger.prototype.execute = function (options) {
                    this.context.logger.logVerbose("Executing PreProductSaleTrigger with options " + JSON.stringify(options.taxOverride) + ".");
                    if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(options)) {
                        var error = new Entities_1.ClientEntities.ExtensionError("The options provided to the PreProductSaleTrigger were invalid. Please select a product and try again.");
                        return Promise.reject(error);
                    }
                    else {
                        return Promise.resolve();
                    }
                };
                return KREOverrideTaxTrigger;
            }(Triggers.PostOverrideTransactionTaxTrigger));
            exports_1("default", KREOverrideTaxTrigger);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/TriggerHandlers/KREOverrideTaxTrigger.js.map