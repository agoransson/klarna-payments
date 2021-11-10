import { Config } from "./Config";

export enum REGION {
    EU = "",
    US = "-na",
    OCEANIA = "-oc"
}

export const URLS = {
    API_URL: (config: Config) => (
        config.isLive 
            ? `https://api${config.region}.klarna.com` 
            : `https://api${config.region}.playground.klarna.com`
    ),
    ORDER_API_URL: (subscription: boolean, authorizationToken: string) => {
        if (subscription) {
            // TODO: How does subscriptions really work?
            throw new Error("Subscription not supported yet!");
        } else {
            return `/payments/v1/authorizations/${authorizationToken}/order`;
        }
    },
    CANCEL_AUTHORIZATION_API_URL: (authorizationToken: string) => (
        `/payments/v1/authorizations/${authorizationToken}`
    ),
    CREDIT_SESSION_API_URL: (sessionId?: string) => (
        sessionId ? `/payments/v1/sessions/${sessionId}`
            : "/payments/v1/sessions"
    ),
    CONSUMER_TOKEN_API_URL: (authorizationToken: string) => (
        `/payments/v1/authorizations/${authorizationToken}/customer-token`
    )
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
