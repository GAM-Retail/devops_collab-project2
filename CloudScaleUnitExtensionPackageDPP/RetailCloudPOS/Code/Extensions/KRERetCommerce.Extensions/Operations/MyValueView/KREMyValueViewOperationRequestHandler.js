System.register(["PosApi/Create/Operations", "./KREMyValueViewOperationResponse", "./KREMyValueViewOperationRequest"], function (exports_1, context_1) {
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
    var Operations_1, KREMyValueViewOperationResponse_1, KREMyValueViewOperationRequest_1, KREMyValueViewOperationRequestHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (KREMyValueViewOperationResponse_1_1) {
                KREMyValueViewOperationResponse_1 = KREMyValueViewOperationResponse_1_1;
            },
            function (KREMyValueViewOperationRequest_1_1) {
                KREMyValueViewOperationRequest_1 = KREMyValueViewOperationRequest_1_1;
            }
        ],
        execute: function () {
            KREMyValueViewOperationRequestHandler = (function (_super) {
                __extends(KREMyValueViewOperationRequestHandler, _super);
                function KREMyValueViewOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KREMyValueViewOperationRequestHandler.prototype.supportedRequestType = function () {
                    return KREMyValueViewOperationRequest_1.default;
                };
                KREMyValueViewOperationRequestHandler.prototype.executeAsync = function (request) {
                    this.context.logger.logInformational("Log message from KREMyValueOperationRequestHandler executeAsync().");
                    this.context.navigator.navigate("KREMyValueView");
                    return Promise.resolve({
                        canceled: true,
                        data: new KREMyValueViewOperationResponse_1.default()
                    });
                };
                return KREMyValueViewOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", KREMyValueViewOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/MyValueView/KREMyValueViewOperationRequestHandler.js.map