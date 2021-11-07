export interface KlarnaError {
    getCode?(): number;
    getMessage?(): string;
}
export declare class UnknownError implements KlarnaError {
}
export declare class NotAuthorized implements KlarnaError {
    getCode(): number;
    getMessage(): string;
}
export declare class ResourceMissing implements KlarnaError {
    getCode(): number;
    getMessage(): string;
}
export declare class DataMismatch implements KlarnaError {
    getCode(): number;
    getMessage(): string;
}
