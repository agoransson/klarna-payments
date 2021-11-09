import { Config } from "../Config";
import axios, { AxiosResponse } from "axios";
import { generateAuth, URLS } from "../utils";
import { CreateCreditSessionPayload } from "./CreateCreditSessionPayload";
import { CreateCreditSessionResponse } from "./CreateCreditSessionResponse";
import { NotAuthorized, UnknownError } from "../CommonErrors";
import { UnableToCreateCreditSession } from "./UnableToCreateCreditSession";

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
 export function CreateCreditSession(
    config: Config,
    session: CreateCreditSessionPayload
): Promise<CreateCreditSessionResponse> {
    return new Promise<CreateCreditSessionResponse>((resolve, reject) => {
        const url = URLS.API_URL(config) + URLS.CREDIT_SESSION_API_URL();

        axios.post<CreateCreditSessionPayload, AxiosResponse<CreateCreditSessionResponse>>(url, session, {
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
                    return;
                case 400:
                    throw new UnableToCreateCreditSession();
                case 403:
                    throw new NotAuthorized();
                default:
                    throw new UnknownError();
            }
        }, (error) => {
            reject(error);
        });
    });
}
