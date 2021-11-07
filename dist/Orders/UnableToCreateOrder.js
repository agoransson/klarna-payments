"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnableToCreateOrder = void 0;
class UnableToCreateOrder {
    getCode() {
        return 400;
    }
    getMessage() {
        return "We were unable to create an order with the provided data. Some field constraint was violated.";
    }
}
exports.UnableToCreateOrder = UnableToCreateOrder;
//# sourceMappingURL=UnableToCreateOrder.js.map