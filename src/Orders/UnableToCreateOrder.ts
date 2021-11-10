import { KlarnaError } from "../CommonErrors";

export class UnableToCreateOrder extends KlarnaError {
    constructor() {
        super("We were unable to create an order with the provided data. Some field constraint was violated.", 400);
    }
}
