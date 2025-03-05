System.register(["PosApi/Extend/Triggers/CustomerTriggers", "PosApi/Entities", "../DataService/DataServiceRequests.g", "PosApi/Consume/Device"], function (exports_1, context_1) {
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
    var Triggers, Entities_1, Messages, Device_1, KRESetCustToCartMyValueHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Triggers_1) {
                Triggers = Triggers_1;
            },
            function (Entities_1_1) {
                Entities_1 = Entities_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (Device_1_1) {
                Device_1 = Device_1_1;
            }
        ],
        execute: function () {
            KRESetCustToCartMyValueHandler = (function (_super) {
                __extends(KRESetCustToCartMyValueHandler, _super);
                function KRESetCustToCartMyValueHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KRESetCustToCartMyValueHandler.prototype.execute = function (options) {
                    var _this = this;
                    console.log("Executing IPreCustomerSetTriggerOptions with options " + JSON.stringify(options) + ".");
                    var getConnection = new Device_1.GetConnectionStatusClientRequest(this.context.logger.getNewCorrelationId());
                    return this.context.runtime.executeAsync(getConnection).then(function (responseCon) {
                        if (responseCon.data.result == Entities_1.ClientEntities.ConnectionStatusType.Online) {
                            var getAccountNum = new Messages.KREMyValue.CheckCustomerMyValueRequest(options.customerId);
                            return _this.context.runtime.executeAsync(getAccountNum).then(function (result) {
                                if (result.data.result.Error != "") {
                                    return Promise.reject(new Entities_1.ClientEntities.ExtensionError(result.data.result.Error));
                                }
                                else {
                                    return Promise.resolve({ canceled: false, data: new Messages.KREMyValue.CheckCustomerMyValueResponse });
                                }
                            }).catch(function (reason) {
                                _this.context.logger.logError("Error : " + JSON.stringify(reason));
                                return Promise.reject(new Entities_1.ClientEntities.ExtensionError("Error"));
                            });
                        }
                        else {
                            return Promise.resolve({ canceled: false, data: null });
                        }
                    });
                };
                return KRESetCustToCartMyValueHandler;
            }(Triggers.PreCustomerSetTrigger));
            exports_1("default", KRESetCustToCartMyValueHandler);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/TriggerHandlers/KRESetCustToCartMyValueHandler.js.map