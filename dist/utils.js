"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuth = exports.URLS = exports.Region = void 0;
const CommonErrors_1 = require("./CommonErrors");
var Region;
(function (Region) {
    Region[Region["EU"] = 0] = "EU";
    Region[Region["US"] = 1] = "US";
    Region[Region["OCEANIA"] = 2] = "OCEANIA";
})(Region = exports.Region || (exports.Region = {}));
const getRegionValue = (region) => {
    switch (region) {
        case Region.EU:
            return "";
        case Region.US:
            return "-na";
        case Region.OCEANIA:
            return "-oc";
        default:
            throw new CommonErrors_1.RegionError();
    }
};
exports.URLS = {
    API_URL: (config) => (config.isLive
        ? `https://api${getRegionValue(config === null || config === void 0 ? void 0 : config.region)}.klarna.com`
        : `https://api${getRegionValue(config === null || config === void 0 ? void 0 : config.region)}.playground.klarna.com`),
    ORDER_API_URL: (authorizationToken) => (`/payments/v1/authorizations/${authorizationToken}/order`),
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