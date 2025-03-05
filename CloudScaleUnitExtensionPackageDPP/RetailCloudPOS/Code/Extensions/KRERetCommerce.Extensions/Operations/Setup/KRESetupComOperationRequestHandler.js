System.register(["PosApi/Create/Operations", "./KRESetupComOperationResponse", "./KRESetupComOperationRequest", "../../DataService/DataServiceRequests.g", "../../Controls/Setup/KRECommerceSetupViewDialog"], function (exports_1, context_1) {
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
    var Operations_1, KRESetupComOperationResponse_1, KRESetupComOperationRequest_1, Messages, KRECommerceSetupViewDialog_1, KRESetupComOperationRequestHandler;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (Operations_1_1) {
                Operations_1 = Operations_1_1;
            },
            function (KRESetupComOperationResponse_1_1) {
                KRESetupComOperationResponse_1 = KRESetupComOperationResponse_1_1;
            },
            function (KRESetupComOperationRequest_1_1) {
                KRESetupComOperationRequest_1 = KRESetupComOperationRequest_1_1;
            },
            function (Messages_1) {
                Messages = Messages_1;
            },
            function (KRECommerceSetupViewDialog_1_1) {
                KRECommerceSetupViewDialog_1 = KRECommerceSetupViewDialog_1_1;
            }
        ],
        execute: function () {
            KRESetupComOperationRequestHandler = (function (_super) {
                __extends(KRESetupComOperationRequestHandler, _super);
                function KRESetupComOperationRequestHandler() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                KRESetupComOperationRequestHandler.prototype.supportedRequestType = function () {
                    return KRESetupComOperationRequest_1.default;
                };
                KRESetupComOperationRequestHandler.prototype.executeAsync = function (request) {
                    this.context.logger.logInformational("Log message from KRESetupComOperationRequestHandler executeAsync().");
                    var frmDialog = new KRECommerceSetupViewDialog_1.default();
                    this.context.runtime.executeAsync(new Messages.KRECommerceSetup.getdataParametersRequest()).then(function (response) {
                        frmDialog.open(response.data.result);
                    });
                    return Promise.resolve({
                        canceled: true,
                        data: new KRESetupComOperationResponse_1.default()
                    });
                };
                return KRESetupComOperationRequestHandler;
            }(Operations_1.ExtensionOperationRequestHandlerBase));
            exports_1("default", KRESetupComOperationRequestHandler);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/Setup/KRESetupComOperationRequestHandler.js.map