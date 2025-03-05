System.register(["PosApi/Extend/Triggers/PaymentTriggers", "../DataService/DataServiceRequests.g"], function (exports_1, context_1) {
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
    var Triggers, Messages, KREVoidInUse;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            }
        ],
        execute: function () {
            KREVoidInUse = (function (_super) {
                __extends(KREVoidInUse, _super);
                function KREVoidInUse() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREVoidInUse.prototype.execute = function (options) {
                    console.log("Executing PostPaymentTrigger with options " + JSON.stringify(options) + ".");
                    if (options.tenderLines[0].TenderTypeId == "10") {
                        var voucherUpdate = new Messages.Bound.VoucherCancelRequest(options.tenderLines[0].LoyaltyCardId);
                        this.context.runtime.executeAsync(voucherUpdate);
                    }
                    return Promise.resolve();
                };
                return KREVoidInUse;
            }(Triggers.PostVoidPaymentTrigger));
            exports_1("default", KREVoidInUse);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/TriggerHandlers/KREVoidInUse.js.map