import { Config } from "../Config";
import axios, { AxiosError, AxiosResponse } from "axios";
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
        .then((reponse: AxiosResponse<void>) => {
            if (!config.isLive) {
                console.log(reponse);
            }

            resolve();
        })
        .catch((error: AxiosError) => {
            const { response } = error;
            
            if (response) {
                const { status } = response;

                switch(status) {
                    case 403:
                        reject(new NotAuthorized());
                        return;
                    case 404:
                        reject(new ResourceMissing());
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
