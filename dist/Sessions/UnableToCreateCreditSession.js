"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnableToCreateCreditSession = void 0;
const CommonErrors_1 = require("../CommonErrors");
class UnableToCreateCreditSession extends CommonErrors_1.KlarnaError {
    constructor() {
        super("We were unable to create a credit session with the provided data. Some field constraint was violated.", 400);
    }
}
exports.UnableToCreateCreditSession = UnableToCreateCreditSession;
//# sourceMappingURL=UnableToCreateCreditSession.js.map