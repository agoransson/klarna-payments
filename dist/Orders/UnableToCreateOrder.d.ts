import { KlarnaError } from "../CommonErrors";
export declare class UnableToCreateOrder implements KlarnaError {
    getCode(): number;
    getMessage(): string;
}
