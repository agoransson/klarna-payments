"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuth = exports.URLS = exports.REGION = void 0;
var REGION;
(function (REGION) {
    REGION["EU"] = "";
    REGION["US"] = "-na";
    REGION["OCEANIA"] = "-oc";
})(REGION = exports.REGION || (exports.REGION = {}));
exports.URLS = {
    API_URL: (config) => (config.isLive
        ? `https://api${config.region}.klarna.com`
        : `https://api${config.region}.playground.klarna.com`),
    ORDER_API_URL: (subscription, authorizationToken) => {
        if (subscription) {
            // TODO: How does subscriptions really work?
            throw new Error("Subscription not supported yet!");
        }
        else {
            return `/payments/v1/authorizations/${authorizationToken}/order`;
        }
    },
    CANCEL_AUTHORIZATION_API_URL: (authorizationToken) => (`/payments/v1/authorizations/${authorizationToken}`),
    CREDIT_SESSION_API_URL: (sessionId) => (sessionId ? `/payments/v1/sessions/${sessionId}`
        : "/payments/v1/sessions"),
    CONSUMER_TOKEN_API_URL: (authorizationToken) => (`/payments/v1/authorizations/${authorizationToken}/customer-token`)
};
/**
 * Generate an auth token.
 *
 * @param username The username
 * @param password The password
 * @returns The base64 encoded string, used in authorization tokens for API.
 */
function generateAuth(username, password) {
    return "Basic " + Buffer.from(`${username}:${password}`).toString("base64");
}
exports.generateAuth = generateAuth;
//# sourceMappingURL=utils.js.map