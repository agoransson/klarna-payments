import { Config } from "../Config";
import { ReadCreditSessionResponse } from "./ReadCreditSessionResponse";
/**
 * Use this API call to create a Klarna Payments session.
 *
 * When a session is created you will receive the available
 * payment_method_categories for the session, a session_id and a client_token.
 * The session_id can be used to read or update the session using the REST API.
 * The client_token should be passed to the browser.
 *
 * @param config
 * @param session
 * @returns
 */
export declare function ReadCreditSession(config: Config, sessionId: string): Promise<ReadCreditSessionResponse>;
