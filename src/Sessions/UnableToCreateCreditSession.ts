import { KlarnaError } from "../CommonErrors";

export class UnableToCreateCreditSession implements KlarnaError {
    getCode() {
        return 400;
    }
    getMessage() {
        return "We were unable to create a credit session with the provided data. Some field constraint was violated.";
    }
}

