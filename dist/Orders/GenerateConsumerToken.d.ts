import { Config } from "../Config";
import { GenerateConsumerTokenPayload } from "./GenerateConsumerTokenPayload";
import { GenerateConsumerTokenResponse } from "./GenerateConsumerTokenResponse";
/**
 * Use this API call to create a Klarna Customer Token.
 *
 * After having obtained an authorization_token for a successful authorization,
 * this can be used to create a purchase token instead of placing the order.
 * Creating a Klarna Customer Token results in Klarna storing customer and
 * payment method details.
 *
 * @param config
 * @param authorizationToken
 * @param order
 * @returns
 */
export declare function GenerateConsumerToken(config: Config, authorizationToken: string, order: GenerateConsumerTokenPayload): Promise<GenerateConsumerTokenResponse>;
