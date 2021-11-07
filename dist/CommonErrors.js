"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataMismatch = exports.ResourceMissing = exports.NotAuthorized = exports.UnknownError = void 0;
class UnknownError {
}
exports.UnknownError = UnknownError;
class NotAuthorized {
    getCode() {
        return 403;
    }
    getMessage() {
        return "You were not authorized to execute this operation.";
    }
}
exports.NotAuthorized = NotAuthorized;
class ResourceMissing {
    getCode() {
        return 404;
    }
    getMessage() {
        return `The resource does not exist.`;
    }
}
exports.ResourceMissing = ResourceMissing;
class DataMismatch {
    getCode() {
        return 409;
    }
    getMessage() {
        return "The data in the request does not match the session for the authorization";
    }
}
exports.DataMismatch = DataMismatch;
//# sourceMappingURL=CommonErrors.js.map