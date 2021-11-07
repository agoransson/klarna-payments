import {
    Address,
    Attachment,
    Customer,
    Instant,
    Locale,
    MerchantUrls,
    OrderLine
} from "../CommonTypes";

export type CreateCreditSessionPayload = {
    acquiring_channel?: string;
    attachment?: Attachment;
    billing_address?: Address;
    custom_payment_method_ids?: Array<string>;
    customer?: Customer;
    design?: string;
    expires_at?: Instant;
    locale: Locale;
    merchant_data?: string;
    merchant_reference1?: string;
    merchant_reference2?: string;
    merchant_urls?: MerchantUrls;
    order_amount: number;
    order_lines: Array<OrderLine>;
    order_tax_amount?: number;
    purchase_country: string;
    purchase_currency: string;
    shipping_address?: Address;
}
