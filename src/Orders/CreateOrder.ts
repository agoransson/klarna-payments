import { Config } from "../Config";
import axios, { AxiosResponse } from "axios";
import { generateAuth, URLS } from "../utils";
import { CreateOrderPayload } from "./CreateOrderPayload";
import { CreateOrderResponse } from "./CreateOrderResponse";
import { UnableToCreateOrder } from "./UnableToCreateOrder";
import { DataMismatch, NotAuthorized, ResourceMissing, UnknownError } from "../CommonErrors";

/**
 * Use this API call to create a new order. Placing an order towards Klarna
 * means that the Klarna Payments session will be closed and that an order
 * will be created in Klarna's system.
 * 
 * When you have received the authorization_token for a successful authorization
 * you can place the order. Among the other order details in this request, you
 * include a URL to the confirmation page for the customer.
 * 
 * When the Order has been successfully placed at Klarna, you need to handle it
 * either through the Merchant Portal or using Klarna’s Order Management API.
 * 
 * @param config 
 * @param authorizationToken 
 * @param order 
 * @param recurring 
 * @returns 
 */
 export function CreateOrder(
    config: Config,
    authorizationToken: string,
    order: CreateOrderPayload,
    recurring?: boolean
): Promise<CreateOrderResponse> {
    return new Promise<CreateOrderResponse>((resolve, reject) => {
        const url = URLS.API_URL(config) + URLS.ORDER_API_URL(recurring ? recurring : false, authorizationToken);

        axios.post<CreateOrderPayload, AxiosResponse<CreateOrderResponse>>(url, order, {
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
                    reject(new UnableToCreateOrder());
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
        }, (error) => {
            reject(error);
        });
    });
}