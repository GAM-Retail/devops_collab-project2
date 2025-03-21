System.register(["./KREEventRegistrationOperationRequest"], function (exports_1, context_1) {
    "use strict";
    var KREEventRegistrationOperationRequest_1, getOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (KREEventRegistrationOperationRequest_1_1) {
                KREEventRegistrationOperationRequest_1 = KREEventRegistrationOperationRequest_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var operationRequest = new KREEventRegistrationOperationRequest_1.default(correlationId);
                return Promise.resolve({
                    canceled: false,
                    data: operationRequest
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/EventRegistration/KREEventRegistrationOperationRequestFactory.js.map