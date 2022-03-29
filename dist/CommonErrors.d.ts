export declare abstract class KlarnaError extends Error {
    code?: number;
    constructor(message: string, code?: number);
}
export declare class UnknownError extends KlarnaError {
    constructor();
}
export declare class NotAuthorized extends KlarnaError {
    constructor();
}
export declare class ResourceMissing extends KlarnaError {
    constructor();
}
export declare class DataMismatch extends KlarnaError {
    constructor();
}
export declare class RegionError extends Error {
    constructor();
}
