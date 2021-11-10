import { Config } from "../Config";
import axios, { AxiosError, AxiosResponse } from "axios";
import { generateAuth, URLS } from "../utils";
import { ReadCreditSessionResponse } from "./ReadCreditSessionResponse";
import { NotAuthorized, UnknownError } from "../CommonErrors";

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
 export function ReadCreditSession(
    config: Config,
    sessionId: string
): Promise<ReadCreditSessionResponse> {
    return new Promise<ReadCreditSessionResponse>((resolve, reject) => {
        const url = URLS.API_URL(config) + URLS.CREDIT_SESSION_API_URL(sessionId);

        axios.get<ReadCreditSessionResponse>(url, {
            headers: {
                "Authorization": generateAuth(config.username, config.password),
                "content-type": "application/json"
            }
        })
        .then(({ data }: AxiosResponse<ReadCreditSessionResponse>) => {
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
                    case 403:
                        reject(new NotAuthorized());
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
