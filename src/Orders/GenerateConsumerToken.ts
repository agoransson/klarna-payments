import { Config } from "../Config";
import axios, { AxiosError, AxiosResponse } from "axios";
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
    consumerToken: GenerateConsumerTokenPayload
): Promise<GenerateConsumerTokenResponse> {
    return new Promise<GenerateConsumerTokenResponse>((resolve, reject) => {
        const url = URLS.API_URL(config) + URLS.CONSUMER_TOKEN_API_URL(authorizationToken);

        axios.post<GenerateConsumerTokenPayload, AxiosResponse<GenerateConsumerTokenResponse>>(url, consumerToken, {
            headers: {
                "Authorization": generateAuth(config.username, config.password),
                "content-type": "application/json"
            }
        })
        .then(({ data }: AxiosResponse<GenerateConsumerTokenResponse>) => {
            if (!config.isLive) {
                console.log(data);
            }

            resolve(data);
        })
        .catch((error: AxiosError) => {
            const { response } = error;
            
            if (response) {
                const { status } = response;

                switch(status) {
                    case 400:
                        reject(new UnableToGenerateConsumerToken());
                        return;
                    case 403:
                        reject(new NotAuthorized());
                        return;
                    case 404:
                        reject(new ResourceMissing());
                        return;
                    case 409:
                        reject(new DataMismatch());
                        return;
                    default:
                        reject(new UnknownError());
                }
            } else {
                reject(error);
            }
        });
    });
}
