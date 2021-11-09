import { Config } from "./Config";

export enum REGION {
    EU = "",
    US = "-na",
    OCEANIA = "-oc"
}

export const URLS = {
    API_URL: (config: Config) => {
        if (config.isLive) {
            return `https://api${config.region}.klarna.com`;
        } else {
            return `https://api${config.region}.playground.klarna.com`;
        }
    },
    ORDER_API_URL: (subscription: boolean, authorizationToken: string) => {
        if (subscription) {
            // TODO: How does subscriptions really work?
            throw new Error("Subscription not supported yet!");
        } else {
            return `/payments/v1/authorizations/${authorizationToken}/order`;
        }
    },
    CANCEL_AUTHORIZATION_API_URL: (authorizationToken: string) => {
        return `/payments/v1/authorizations/${authorizationToken}`;
    },
    CREDIT_SESSION_API_URL: (sessionId?: string) => {
        if (sessionId) {
            return `/payments/v1/sessions/${sessionId}`;
        } else {
            return "/payments/v1/sessions";
        }
    },
    CONSUMER_TOKEN_API_URL: (authorizationToken: string) => {
        return `/payments/v1/authorizations/${authorizationToken}/customer-token`;
    }
}

export enum ORDER_TYPES {
    PHYSICAL = "physical",
    DIGITAL = "digital",
    DISCOUNT = "discount",
    SHIPPING_FEE = "shipping_fee",
    SALES_TAX = "sales_tax",
    GIFT_CARD = "gift_card",
    STORE_CREDIT = "store_credit",
    SURCHARGE = "surcharge"
}

/**
 * Generate an auth token.
 * 
 * @param username The username
 * @param password The password
 * @returns The base64 encoded string, used in authorization tokens for API.
 */
export function generateAuth(username: string, password: string): string {
    return "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
}
