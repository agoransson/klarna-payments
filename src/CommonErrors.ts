export interface KlarnaError {
    getCode?(): number;
    getMessage?(): string;
}

export class UnknownError implements KlarnaError {
}

export class NotAuthorized implements KlarnaError {
    getCode() {
        return 403;
    }
    getMessage() {
        return "You were not authorized to execute this operation.";
    }
}

export class ResourceMissing implements KlarnaError {
    getCode() {
        return 404;
    }
    getMessage() {
        return `The resource does not exist.`;
    }
}

export class DataMismatch implements KlarnaError {
    getCode() {
        return 409;
    }
    getMessage() {
        return "The data in the request does not match the session for the authorization";
    }
}
