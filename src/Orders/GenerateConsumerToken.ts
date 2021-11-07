import { Config } from "../Config";
import axios, { AxiosResponse } from "axios";
import { generateAuth, URLS } from "../utils";
import { GenerateConsumerTokenPayload } from "./GenerateConsumerTokenPayload";
import { GenerateConsumerTokenResponse } from "./GenerateConsumerTokenResponse";
import { UnableToGenerateConsumerToken } from "./UnableToGenerateConsumerToken";
import { DataMismatch, NotAuthorized, ResourceMissing, UnknownError } from "../CommonErrors";

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
 export function GenerateConsumerToken(
    config: Config,
    authorizationToken: string,
    order: GenerateConsumerTokenPayload
): Promise<GenerateConsumerTokenResponse> {
    return new Promise<GenerateConsumerTokenResponse>((resolve, reject) => {
        const url = URLS.API_URL(config) + URLS.CONSUMER_TOKEN_API_URL(authorizationToken);

        axios.post<GenerateConsumerTokenPayload, AxiosResponse<GenerateConsumerTokenResponse>>(url, order, {
            headers: {
                "Authorization": generateAuth(config.username, config.password),
                "content-type": "application/json"
            }
        })
        .then((response) => {
            if (!config.isLive) {
                console.log(response);
            }
            switch(response.status) {
                case 200:
                    resolve(response.data);
                case 400:
                    throw new UnableToGenerateConsumerToken();
                case 403:
                    throw new NotAuthorized();
                case 404:
                    throw new ResourceMissing();
                case 409:
                    throw new DataMismatch();
                default:
                    throw new UnknownError();
            }
        }, (error) => {
            reject(error);
        });
    });
}
