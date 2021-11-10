"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnableToCreateOrder = void 0;
const CommonErrors_1 = require("../CommonErrors");
class UnableToCreateOrder extends CommonErrors_1.KlarnaError {
    constructor() {
        super("We were unable to create an order with the provided data. Some field constraint was violated.", 400);
    }
}
exports.UnableToCreateOrder = UnableToCreateOrder;
//# sourceMappingURL=UnableToCreateOrder.js.map