"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnableToGenerateConsumerToken = void 0;
class UnableToGenerateConsumerToken {
    getCode() {
        return 400;
    }
    getMessage() {
        return "We were unable to create a consumer token with the provided data. Some field constraint was violated.";
    }
}
exports.UnableToGenerateConsumerToken = UnableToGenerateConsumerToken;
//# sourceMappingURL=UnableToGenerateConsumerToken.js.map