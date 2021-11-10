import { Config } from "../Config";
import axios from "axios";
import { generateAuth, URLS } from "../utils";
import { NotAuthorized, ResourceMissing, UnknownError } from "../CommonErrors";

/**
 * Use this API call to cancel/release an authorization. If the
 * authorization_token received during a Klarna Payments won’t be used to
 * place an order immediately you could release the authorization.
 * 
 * @param config 
 * @param authorizationToken
 * @returns 
 */
 export function CancelAuthorization(
    config: Config,
    authorizationToken: string
): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const url = URLS.API_URL(config) + URLS.CANCEL_AUTHORIZATION_API_URL(authorizationToken);

        axios.delete<void>(url, {
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
                case 204:
                    resolve();
                    return;
                case 403:
                    reject(new NotAuthorized());
                    return;
                case 404:
                    reject(new ResourceMissing());
                    return;
                default:
                    reject(new UnknownError());
            }
        }, (error) => {
            reject(error);
        });
    });
}
