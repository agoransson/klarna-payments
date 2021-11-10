import { KlarnaError } from "../CommonErrors";

export class UnableToUpdateCreditSession extends KlarnaError {
    constructor() {
        super("We were unable to update the session with the provided data. Some field constraint was violated.", 400);
    }
}
