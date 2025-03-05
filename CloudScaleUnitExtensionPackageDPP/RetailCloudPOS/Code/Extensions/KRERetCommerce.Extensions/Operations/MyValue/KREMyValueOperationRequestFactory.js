System.register(["./KREMyValueOperationRequest"], function (exports_1, context_1) {
    "use strict";
    var KREMyValueOperationRequest_1, getOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (KREMyValueOperationRequest_1_1) {
                KREMyValueOperationRequest_1 = KREMyValueOperationRequest_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var operationRequest = new KREMyValueOperationRequest_1.default(correlationId);
                return Promise.resolve({
                    canceled: false,
                    data: operationRequest
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/MyValue/KREMyValueOperationRequestFactory.js.map