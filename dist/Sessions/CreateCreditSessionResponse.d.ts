import { PaymentMethodCategory } from "../CommonTypes";
export declare type CreateCreditSessionResponse = {
    client_token: string;
    payment_method_categories?: Array<PaymentMethodCategory>;
    session_id: string;
};
