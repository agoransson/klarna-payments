import { Config } from "./Config";
export declare enum REGION {
    EU = "",
    US = "-na",
    OCEANIA = "-oc"
}
export declare const URLS: {
    API_URL: (config: Config) => string;
    ORDER_API_URL: (authorizationToken: string) => string;
    CANCEL_AUTHORIZATION_API_URL: (authorizationToken: string) => string;
    CREDIT_SESSION_API_URL: (sessionId?: string) => string;
    CONSUMER_TOKEN_API_URL: (authorizationToken: string) => string;
};
/**
 * Generate an auth token.
 *
 * @param username The username
 * @param password The password
 * @returns The base64 encoded string, used in authorization tokens for API.
 */
export declare function generateAuth(username: string, password: string): string;
