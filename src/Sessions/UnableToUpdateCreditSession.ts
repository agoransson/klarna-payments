import { KlarnaError } from "../CommonErrors";

export class UnableToUpdateCreditSession implements KlarnaError {
    getCode() {
        return 400;
    }
    getMessage() {
        return "We were unable to update the session with the provided data. Some field constraint was violated.";
    }
}