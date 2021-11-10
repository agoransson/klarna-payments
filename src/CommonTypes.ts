export type ProductIdentifiers = {
    brand?: string;
    category_path?: string;
    global_trade_item_number?: string;
    manufacturer_part_number?: string;
}

export enum OrderType {
    PHYSICAL = "physical",
    DISCOUNT = "discount",
    SHIPPING_FEE = "shipping_fee",
    SALES_TAX = "sales_tax",
    DIGITAL = "digital",
    GIFT_CARD = "gift_card",
    STORE_CREDIT = "store_credit",
    SURCHARGE = "surcharge"
}

export type OrderLine = {
    image_url?: string;
    merchant_data?: string;
    name: string;
    product_identifiers?: ProductIdentifiers;
    product_url?: string;
    quantity: number;
    quantity_unit?: string;
    reference?: string;
    tax_rate?: number;
    total_amount: number;
    total_discount_amount?: number;
    total_tax_amount?: number;
    type?: OrderType;
    unit_price: number;
}

export type OrderOptions = {
    color_border?: string;
    color_border_selected?: string,
    color_details?: string,
    color_text?: string,
    radius_border?: string
}

export type MerchantUrls = {
    confirmation: string;
    notification?: string;
    push?: string;
}

export enum Locale {
    de_AT = "de-AT",
    de_DE = "de-DE",
    en_DE = "en-DE",

    be_BE = "be-BE",
    nl_BE = "nl-BE",
    fr_BE = "fr-BE",
    en_BE = "en-BE",

    it_CH = "it-CH",
    de_CH = "de-CH",
    fr_CH = "fr-CH",
    en_CH = "en-CH",

    da_DK = "da-DK",
    en_DK = "en-DK",

    ex_ES = "es-ES",
    ca_EX = "ca-ES",
    en_ES = "en-ES",

    fi_FI = "fi-FI",
    sv_FI = "sv-FI",
    en_FI = "en-FI",

    en_GB = "en-GB",

    it_IT = "it-IT",
    en_IT = "en-IT",

    nl_NL = "nl-NL",
    en_NL = "en-NL",

    nb_NO = "nb-NO",
    en_NO = "en-NO",

    pl_PL = "pl-PL",
    en_PL = "en-PL",

    sv_SE = "sv-SE",
    en_SE = "en-SE",

    en_US = "en-US"
}

export type Instant = {
    epoch_second?: number;
    nano?: number;
}

export type Customer = {
    date_of_birth?: string;
    gender?: string;
    last_four_ssn?: string;
    national_identification_number?: string;
    organization_entity_type?: string;
    organization_registration_id?: string;
    title?: string;
    type?: string;
    vat_id?: string;
}

export type Address = {
    attention?: string;
    city?: string;
    country?: string;
    email?: string;
    family_name?: string;
    given_name?: string;
    organization_name?: string;
    phone?: string;
    postal_code?: string;
    region?: string;
    street_address?: string;
    street_address2?: string;
    title?: string;
}

export type Attachment = {
    body: string;
    content_type: string;
}

export enum PaymentMethod {
    INVOICE = "invoice",
    FIXED_AMOUNT = "fixed_amount",
    PIX = "pix",
    BASE_ACCOUNT = "base_account",
    DEFERRED_INTEREST = "deferred_interest",
    DIRECT_DEBIT = "direct_debit",
    DIRECT_BANK_TRANSFER = "direct_bank_transfer",
    B2B_INVOICE = "b2b_invoice",
    CARD = "card",
    SLICE_IT_BY_CARD = "slice_it_by_card",
    PAY_LATER_BY_CARD = "pay_later_by_card"
}

export type AuthorizedPaymentMethod = {
    days?: number;
    number_of_installments?: number;
    type: PaymentMethod;
}

export type AssetUrl = {
    descriptive?: string;
    standard?: string;
}

export enum PaymentIdentifier {
    PAY_LATER = "Pay_later",
    PAY_NOW = "Pay_now",
    PAY_OVER_TIME = "Pay_over_time",
    DIRECT_BANK_TRANSFER = "Direct_bank_transfer",
    DIRECT_DEBIT = "Direct_debit"
}

export type PaymentMethodCategory = {
    asset_urls?: Array<AssetUrl>;
    identifier?: PaymentIdentifier;
    name?: string;
}

export enum SessionStatus {
    COMPLETE = "complete",
    INCOMPLETE = "incomplete"
}
