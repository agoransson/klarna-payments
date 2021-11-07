import { Config } from "../Config";
import { UpdateCreditSessionPayload } from "./UpdateCreditSessionPayload";
/**
 * Use this API call to update a Klarna Payments session with new details,
 * in case something in the order has changed and the checkout has been
 * reloaded. Including if the consumer adds a new item to the cart or if
 * consumer details are updated.
 *
 * @param config
 * @param session
 * @returns
 */
export declare function UpdateCreditSession(config: Config, sessionId: string, session: UpdateCreditSessionPayload): Promise<void>;
