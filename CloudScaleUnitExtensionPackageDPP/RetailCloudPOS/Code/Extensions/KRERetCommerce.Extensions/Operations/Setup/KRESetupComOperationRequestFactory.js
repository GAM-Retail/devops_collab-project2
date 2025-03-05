System.register(["./KRESetupComOperationRequest"], function (exports_1, context_1) {
    "use strict";
    var KRESetupComOperationRequest_1, getOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (KRESetupComOperationRequest_1_1) {
                KRESetupComOperationRequest_1 = KRESetupComOperationRequest_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var operationRequest = new KRESetupComOperationRequest_1.default(correlationId);
                return Promise.resolve({
                    canceled: false,
                    data: operationRequest
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/Setup/KRESetupComOperationRequestFactory.js.map