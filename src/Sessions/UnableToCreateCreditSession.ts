import { KlarnaError } from "../CommonErrors";

export class UnableToCreateCreditSession extends KlarnaError {
    constructor() {
        super("We were unable to create a credit session with the provided data. Some field constraint was violated.", 400);
    }
}
