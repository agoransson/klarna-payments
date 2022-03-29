export abstract class KlarnaError extends Error {
    code?: number;

    constructor(message: string, code?: number) {
        super(message);

        if (code) {
            this.code = code;
        }
    }
}

export class UnknownError extends KlarnaError {
    constructor() {
        super("An unknown error occured.");
    }
}

export class NotAuthorized extends KlarnaError {
    constructor() {
        super("You were not authorized to execute this operation.", 403);
    }
}

export class ResourceMissing extends KlarnaError {
    constructor() {
        super("The resource does not exist.", 404);
    }
}

export class DataMismatch extends KlarnaError {
    constructor() {
        super("The data in the request does not match the session for the authorization", 409);
    }
}

export class RegionError extends Error {
    constructor() {
        super("Region is either unknown, or missing!");
    }
}
