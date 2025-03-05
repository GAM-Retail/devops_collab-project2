System.register(["PosApi/Consume/Cart", "PosApi/Extend/Triggers/TransactionTriggers", "../DataService/DataServiceRequests.g"], function (exports_1, context_1) {
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
    var Cart_1, Triggers, Messages, KREReturnPointPostHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Cart_1_1) {
                Cart_1 = Cart_1_1;
            },
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            }
        ],
        execute: function () {
            KREReturnPointPostHandler = (function (_super) {
                __extends(KREReturnPointPostHandler, _super);
                function KREReturnPointPostHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREReturnPointPostHandler.prototype.execute = function (options) {
                    var _this = this;
                    console.log("Executing PostReturnTransactionTrigger with options " + JSON.stringify(options) + ".");
                    var correlationId = this.context.logger.getNewCorrelationId();
                    var getAccountNum = new Messages.KREMyValue.GetMyValueRequest(options.originalTransaction.CustomerId);
                    return this.context.runtime.executeAsync(getAccountNum).then(function (result) {
                        if (result.data.result.MyValue != "") {
                            var extensionProperty = {
                                Key: "MYVALUE",
                                Value: { StringValue: result.data.result.MyValue + "," + options.originalTransaction.ReceiptId }
                            };
                            options.cart.ExtensionProperties = [extensionProperty];
                            var saveExtensionPropertiesOnCartClientRequest = new Cart_1.SaveExtensionPropertiesOnCartClientRequest([extensionProperty], correlationId);
                            _this.context.runtime.executeAsync(saveExtensionPropertiesOnCartClientRequest);
                        }
                        else {
                            Promise.resolve({ canceled: false, data: new Messages.KREMyValue.ReturnPointMyValueResponse });
                        }
                    });
                };
                return KREReturnPointPostHandler;
            }(Triggers.PostReturnTransactionTrigger));
            exports_1("default", KREReturnPointPostHandler);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/TriggerHandlers/KREReturnPointPostHandler.js.map