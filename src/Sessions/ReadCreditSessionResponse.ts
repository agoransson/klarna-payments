import { Address, Attachment, Customer, Instant, Locale, MerchantUrls, OrderLine, OrderOptions, PaymentMethodCategory, SessionStatus } from "../CommonTypes";

export type ReadCreditSessionResponse = {
    acquiring_channel?: string;
    attachment?: Attachment;
    authorization_token?: string;
    billing_address?: Address;
    client_token?: string;
    custom_payment_method_ids?: Array<string>;
    customer?: Customer;
    design?: string;
    expires_at?: Instant;
    locale: Locale;
    merchant_data?: string;
    merchant_reference1?: string;
    merchant_reference2?: string;
    merchant_urls?: MerchantUrls;
    options?: OrderOptions;
    order_amount: number;
    order_lines: Array<OrderLine>;
    order_tax_amount?: number;
    payment_method_categories?: Array<PaymentMethodCategory>;
    purchase_country: string;
    purchase_currency: string;
    shipping_address?: Address;
    status?: SessionStatus;
}
