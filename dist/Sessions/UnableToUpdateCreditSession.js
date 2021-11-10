"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnableToUpdateCreditSession = void 0;
const CommonErrors_1 = require("../CommonErrors");
class UnableToUpdateCreditSession extends CommonErrors_1.KlarnaError {
    constructor() {
        super("We were unable to update the session with the provided data. Some field constraint was violated.", 400);
    }
}
exports.UnableToUpdateCreditSession = UnableToUpdateCreditSession;
//# sourceMappingURL=UnableToUpdateCreditSession.js.map