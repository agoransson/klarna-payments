import { Config } from "./Config";
export declare enum Region {
    EU = 0,
    US = 1,
    OCEANIA = 2
}
export declare const getRegionValue: (region: Region) => string;
export declare const getRegion: (region: string) => Region;
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
