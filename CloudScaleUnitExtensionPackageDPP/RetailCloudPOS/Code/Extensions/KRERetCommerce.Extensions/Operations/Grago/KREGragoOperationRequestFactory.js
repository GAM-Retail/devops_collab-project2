System.register(["./KREGragoOperationRequest"], function (exports_1, context_1) {
    "use strict";
    var KREGragoOperationRequest_1, getOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (KREGragoOperationRequest_1_1) {
                KREGragoOperationRequest_1 = KREGragoOperationRequest_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var operationRequest = new KREGragoOperationRequest_1.default(correlationId);
                return Promise.resolve({
                    canceled: false,
                    data: operationRequest
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/Grago/KREGragoOperationRequestFactory.js.map