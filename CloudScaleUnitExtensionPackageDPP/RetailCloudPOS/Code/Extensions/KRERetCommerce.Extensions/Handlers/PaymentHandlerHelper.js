System.register(["PosApi/TypeExtensions"], function (exports_1, context_1) {
    "use strict";
    var TypeExtensions_1, PaymentHandlerHelper;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TypeExtensions_1_1) {
                TypeExtensions_1 = TypeExtensions_1_1;
            }
        ],
        execute: function () {
            PaymentHandlerHelper = (function () {
                function PaymentHandlerHelper() {
                }
                PaymentHandlerHelper.FillExtensionProperties = function (cart, extensionProperties) {
                    var extraProperties = null;
                    if (!TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cart)) {
                        extraProperties = {
                            ExtensionProperties: [
                                {
                                    Key: "CartId",
                                    Value: {
                                        StringValue: !TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cart) ? cart.Id : ""
                                    }
                                }, {
                                    Key: "ChannelId",
                                    Value: {
                                        StringValue: (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cart.ChannelId)) ? "" : cart.ChannelId.toString()
                                    }
                                }, {
                                    Key: "TerminalId",
                                    Value: {
                                        StringValue: cart.TerminalId
                                    }
                                }, {
                                    Key: "StaffId",
                                    Value: { StringValue: cart.StaffId }
                                }, {
                                    Key: "CustomerId",
                                    Value: {
                                        StringValue: (TypeExtensions_1.StringExtensions.isNullOrWhitespace(cart.CustomerId)) ? "" : cart.CustomerId
                                    }
                                }, {
                                    Key: "ShippingZipCode",
                                    Value: {
                                        StringValue: !TypeExtensions_1.ObjectExtensions.isNullOrUndefined(cart.ShippingAddress) ?
                                            (TypeExtensions_1.StringExtensions.isNullOrWhitespace(cart.ShippingAddress.ZipCode) ? "" : cart.ShippingAddress.ZipCode) : ""
                                    }
                                }
                            ]
                        };
                    }
                    if (TypeExtensions_1.ObjectExtensions.isNullOrUndefined(extensionProperties)) {
                        extensionProperties = extraProperties;
                    }
                    else {
                        for (var i = 0; i < extraProperties.ExtensionProperties.length; i++) {
                            extensionProperties.ExtensionProperties.push(extraProperties.ExtensionProperties[i]);
                        }
                    }
                    return extensionProperties;
                };
                return PaymentHandlerHelper;
            }());
            exports_1("PaymentHandlerHelper", PaymentHandlerHelper);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Handlers/PaymentHandlerHelper.js.map