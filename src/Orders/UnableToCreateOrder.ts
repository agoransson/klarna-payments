import { KlarnaError } from "../CommonErrors";

export class UnableToCreateOrder implements KlarnaError {
    getCode() {
        return 400;
    }
    getMessage() {
        return "We were unable to create an order with the provided data. Some field constraint was violated.";
    }
}
