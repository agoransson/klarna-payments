"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegionError = exports.DataMismatch = exports.ResourceMissing = exports.NotAuthorized = exports.UnknownError = exports.KlarnaError = void 0;
class KlarnaError extends Error {
    constructor(message, code) {
        super(message);
        if (code) {
            this.code = code;
        }
    }
}
exports.KlarnaError = KlarnaError;
class UnknownError extends KlarnaError {
    constructor() {
        super("An unknown error occured.");
    }
}
exports.UnknownError = UnknownError;
class NotAuthorized extends KlarnaError {
    constructor() {
        super("You were not authorized to execute this operation.", 403);
    }
}
exports.NotAuthorized = NotAuthorized;
class ResourceMissing extends KlarnaError {
    constructor() {
        super("The resource does not exist.", 404);
    }
}
exports.ResourceMissing = ResourceMissing;
class DataMismatch extends KlarnaError {
    constructor() {
        super("The data in the request does not match the session for the authorization", 409);
    }
}
exports.DataMismatch = DataMismatch;
class RegionError extends Error {
    constructor() {
        super("Region is either unknown, or missing!");
    }
}
exports.RegionError = RegionError;
//# sourceMappingURL=CommonErrors.js.map