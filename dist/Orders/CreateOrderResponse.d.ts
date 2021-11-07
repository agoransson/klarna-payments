import { AuthorizedPaymentMethod } from "../CommonTypes";
export declare type CreateOrderResponse = {
    authorized_payment_method?: AuthorizedPaymentMethod;
    fraud_status?: string;
    order_id: string;
    redirect_url?: string;
};
