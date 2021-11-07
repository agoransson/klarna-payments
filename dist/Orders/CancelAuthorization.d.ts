import { Config } from "../Config";
/**
 * Use this API call to cancel/release an authorization. If the
 * authorization_token received during a Klarna Payments won’t be used to
 * place an order immediately you could release the authorization.
 *
 * @param config
 * @param authorizationToken
 * @returns
 */
export declare function CancelAuthorization(config: Config, authorizationToken: string): Promise<void>;
