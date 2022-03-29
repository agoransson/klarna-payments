import { RegionError } from "./CommonErrors";
import { Config } from "./Config";

export enum Region {
    EU,
    US,
    OCEANIA
}

const getRegionValue = (region: Region): string => {
    switch (region) {
        case Region.EU:
            return "";
        case Region.US:
            return "-na";
        case Region.OCEANIA:
            return "-oc";
        default:
            throw new RegionError();
    }
}

export const URLS = {
    API_URL: (config: Config) => (
        config.isLive 
            ? `https://api${getRegionValue(config?.region)}.klarna.com` 
            : `https://api${getRegionValue(config?.region)}.playground.klarna.com`
    ),
    ORDER_API_URL: (authorizationToken: string) => (
        `/payments/v1/authorizations/${authorizationToken}/order`
    ),
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
