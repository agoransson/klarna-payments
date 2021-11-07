import { Address, Customer, Locale } from "../CommonTypes";
export declare type GenerateConsumerTokenPayload = {
    billing_address?: Address;
    customer?: Customer;
    description: string;
    intended_use: string;
    locale: Locale;
    purchase_country: string;
    purchase_currency: string;
};
