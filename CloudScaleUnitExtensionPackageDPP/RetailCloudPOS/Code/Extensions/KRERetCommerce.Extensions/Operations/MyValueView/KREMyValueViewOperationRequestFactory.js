System.register(["./KREMyValueViewOperationRequest"], function (exports_1, context_1) {
    "use strict";
    var KREMyValueViewOperationRequest_1, getOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (KREMyValueViewOperationRequest_1_1) {
                KREMyValueViewOperationRequest_1 = KREMyValueViewOperationRequest_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var operationRequest = new KREMyValueViewOperationRequest_1.default(correlationId);
                return Promise.resolve({
                    canceled: false,
                    data: operationRequest
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/MyValueView/KREMyValueViewOperationRequestFactory.js.map