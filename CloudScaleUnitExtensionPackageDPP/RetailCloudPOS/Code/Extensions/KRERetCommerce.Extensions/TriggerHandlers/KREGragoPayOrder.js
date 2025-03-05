System.register(["PosApi/Extend/Triggers/TransactionTriggers", "../DataService/DataServiceRequests.g", "PosApi/TypeExtensions"], function (exports_1, context_1) {
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
    var Triggers, Messages, TypeExtensions_1, KREGragoPayOrder;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            KREGragoPayOrder = (function (_super) {
                __extends(KREGragoPayOrder, _super);
                function KREGragoPayOrder() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREGragoPayOrder.prototype.execute = function (options) {
                    var _this = this;
                    console.log("Executing PostCartCheckoutTrigger with options " + JSON.stringify(options) + ".");
                    var keyValue;
                    if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(options.cart.ExtensionProperties[0])) {
                        if (options.cart.ExtensionProperties.length > 1)
                            keyValue = TypeExtensions_1.ArrayExtensions.firstOrUndefined(options.cart.ExtensionProperties, function (c) { return c.Key === "GRAGO"; }).Key;
                        else
                            keyValue = options.cart.ExtensionProperties[0].Key;
                        if (keyValue == "GRAGO") {
                            var getOrder_1 = TypeExtensions_1.ArrayExtensions.firstOrUndefined(options.cart.ExtensionProperties, function (c) { return c.Key === "GRAGO"; }).Value.StringValue;
                            var getItemGrargo = new Messages.KREGrago.GetItemGrogoRequest(getOrder_1);
                            this.context.runtime.executeAsync(getItemGrargo).then(function (responseItem) {
                                var getcomment = TypeExtensions_1.ArrayExtensions.firstOrUndefined(options.cart.CartLines, function (c) { return c.ItemId === responseItem.data.result.Item; }).Comment;
                                if (getcomment.search(getOrder_1) != -1) {
                                    var payOrder = new Messages.KREGrago.PayOrderDataRequest(getOrder_1);
                                    _this.context.runtime.executeAsync(payOrder).then(function (response) {
                                        if (response.data.result.Error != "") {
                                            Promise.reject(response.data.result.Error);
                                        }
                                    });
                                }
                            });
                        }
                    }
                    return Promise.resolve();
                };
                return KREGragoPayOrder;
            }(Triggers.PostCartCheckoutTrigger));
            exports_1("default", KREGragoPayOrder);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/TriggerHandlers/KREGragoPayOrder.js.map