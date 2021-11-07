import { Address, Customer } from "../CommonTypes";

export type GenerateConsumerTokenResponse = {
    billing_address?: Address;
    customer?: Customer;
    payment_method_reference?: string;
    redirect_url: string;
    token_id: string;
}
