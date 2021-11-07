import { KlarnaError } from "../CommonErrors";

export class UnableToGenerateConsumerToken implements KlarnaError {
    getCode() {
        return 400;
    }
    getMessage() {
        return "We were unable to create a consumer token with the provided data. Some field constraint was violated.";
    }
}
