"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Klarna = void 0;
const Orders_1 = require("./Orders");
const Sessions_1 = require("./Sessions");
class Klarna {
    constructor({ config }) {
        this.config = config;
    }
    v100() {
        return {
            orders: {
                cancelAuthorization: (authorizationToken) => ((0, Orders_1.CancelAuthorization)(this.config, authorizationToken)),
                generateConsumerToken: (authorizationToken, consumerToken) => ((0, Orders_1.GenerateConsumerToken)(this.config, authorizationToken, consumerToken)),
                createOrder: (authorizationToken, order) => ((0, Orders_1.CreateOrder)(this.config, authorizationToken, order))
            },
            sessions: {
                createCreditSession: (session) => ((0, Sessions_1.CreateCreditSession)(this.config, session)),
                readCreditSession: (sessionId) => ((0, Sessions_1.ReadCreditSession)(this.config, sessionId)),
                updateCreditSession: (sessionId, session) => ((0, Sessions_1.UpdateCreditSession)(this.config, sessionId, session))
            }
        };
    }
}
exports.Klarna = Klarna;
//# sourceMappingURL=Klarna.js.map