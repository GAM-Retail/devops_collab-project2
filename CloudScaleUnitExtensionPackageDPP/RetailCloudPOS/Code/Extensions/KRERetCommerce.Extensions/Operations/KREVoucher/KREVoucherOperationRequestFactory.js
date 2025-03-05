System.register(["./KREVoucherOperationRequest"], function (exports_1, context_1) {
    "use strict";
    var KREVoucherOperationRequest_1, getOperationRequest;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (KREVoucherOperationRequest_1_1) {
                KREVoucherOperationRequest_1 = KREVoucherOperationRequest_1_1;
            }
        ],
        execute: function () {
            getOperationRequest = function (context, operationId, actionParameters, correlationId) {
                var operationRequest = new KREVoucherOperationRequest_1.default(correlationId);
                return Promise.resolve({
                    canceled: false,
                    data: operationRequest
                });
            };
            exports_1("default", getOperationRequest);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Operations/KREVoucher/KREVoucherOperationRequestFactory.js.map