import { Config } from "../Config";
import axios, { AxiosResponse } from "axios";
import { generateAuth, URLS } from "../utils";
import { UpdateCreditSessionPayload } from "./UpdateCreditSessionPayload";
import { NotAuthorized, ResourceMissing, UnknownError } from "../CommonErrors";
import { UnableToUpdateCreditSession } from "./UnableToUpdateCreditSession";

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
 export function UpdateCreditSession(
    config: Config,
    sessionId: string,
    session: UpdateCreditSessionPayload
): Promise<void> {
    return new Promise<void>((resolve, reject) => {
        const url = URLS.API_URL(config) + URLS.CREDIT_SESSION_API_URL(sessionId);

        axios.post<UpdateCreditSessionPayload, AxiosResponse<void>>(url, session, {
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
                case 400:
                    throw new UnableToUpdateCreditSession();
                case 403:
                    throw new NotAuthorized();
                case 404:
                    throw new ResourceMissing();
                default:
                    throw new UnknownError();
            }
        }, (error) => {
            reject(error);
        });
    });
}
