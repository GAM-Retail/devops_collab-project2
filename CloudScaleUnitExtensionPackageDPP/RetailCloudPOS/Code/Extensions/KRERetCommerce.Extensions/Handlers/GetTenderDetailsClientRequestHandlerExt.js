System.register(["PosApi/Extend/RequestHandlers/TenderCountingRequestHandlers"], function (exports_1, context_1) {
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
    var TenderCountingRequestHandlers_1, GetTenderDetailsClientRequestHandlerExt;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (TenderCountingRequestHandlers_1_1) {
                TenderCountingRequestHandlers_1 = TenderCountingRequestHandlers_1_1;
            }
        ],
        execute: function () {
            GetTenderDetailsClientRequestHandlerExt = (function (_super) {
                __extends(GetTenderDetailsClientRequestHandlerExt, _super);
                function GetTenderDetailsClientRequestHandlerExt() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                GetTenderDetailsClientRequestHandlerExt.prototype.executeAsync = function (request) {
                    this.context.logger.logInformational("Executing GetTenderDetailsClientRequestHandlerExt for request:  " + JSON.stringify(request) + ".");
                    return this.defaultExecuteAsync(request);
                };
                return GetTenderDetailsClientRequestHandlerExt;
            }(TenderCountingRequestHandlers_1.GetTenderDetailsClientRequestHandler));
            exports_1("default", GetTenderDetailsClientRequestHandlerExt);
        }
    };
});
//# sourceMappingURL=C:/Commerce/KRERetailCommerce/Pos/Handlers/GetTenderDetailsClientRequestHandlerExt.js.map