import { KlarnaError } from "../CommonErrors";
export declare class UnableToGenerateConsumerToken implements KlarnaError {
    code: 400;
    name: "UnableToGenerateConsumerToken";
    message: "We were unable to create a consumer token with the provided data. Some field constraint was violated.";
}
