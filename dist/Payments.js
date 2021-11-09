"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Payments = void 0;
const Orders_1 = require("./Orders");
const Sessions_1 = require("./Sessions");
__exportStar(require("./Orders"), exports);
__exportStar(require("./Sessions"), exports);
__exportStar(require("./CommonTypes"), exports);
__exportStar(require("./CommonErrors"), exports);
class Payments {
    constructor({ config }) {
        this.v100 = {
            orders: {
                cancelAuthorization: (authorizationToken) => ((0, Orders_1.CancelAuthorization)(this.config, authorizationToken)),
                generateConsumerToken: (authorizationToken, consumerToken) => ((0, Orders_1.GenerateConsumerToken)(this.config, authorizationToken, consumerToken)),
                createOrder: (authorizationToken, order, recurring = false) => ((0, Orders_1.CreateOrder)(this.config, authorizationToken, order, recurring))
            },
            sessions: {
                createCreditSession: (session) => ((0, Sessions_1.CreateCreditSession)(this.config, session)),
                readCreditSession: (sessionId) => ((0, Sessions_1.ReadCreditSession)(this.config, sessionId)),
                updateCreditSession: (sessionId, session) => ((0, Sessions_1.UpdateCreditSession)(this.config, sessionId, session))
            }
        };
        this.config = config;
    }
}
exports.Payments = Payments;
//# sourceMappingURL=Payments.js.map