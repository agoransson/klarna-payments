import { KlarnaError } from "../CommonErrors";
export declare class UnableToGenerateConsumerToken implements KlarnaError {
    getCode(): number;
    getMessage(): string;
}
