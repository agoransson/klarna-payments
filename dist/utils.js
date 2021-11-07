"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateAuth = exports.ORDER_TYPES = exports.URLS = exports.REGION = void 0;
var REGION;
(function (REGION) {
    REGION["EU"] = "";
    REGION["US"] = "-na";
    REGION["OCEANIA"] = "-oc";
})(REGION = exports.REGION || (exports.REGION = {}));
exports.URLS = {
    API_URL: (config) => {
        if (config.isLive) {
            return `https://api${config.region}.klarna.com`;
        }
        else {
            return `https://api${config.region}.playground.klarna.com`;
        }
    },
    ORDER_API_URL: (subscription, authorizationToken) => {
        if (subscription) {
            return `/payments/v1/authorizations/${authorizationToken}/order`;
        }
        else {
            return `/customer-token/v1/tokens/${authorizationToken}/order`;
        }
    },
    CANCEL_AUTHORIZATION_API_URL: (authorizationToken) => {
        return `/payments/v1/authorizations/${authorizationToken}`;
    },
    CREDIT_SESSION_API_URL: (sessionId) => {
        if (sessionId) {
            return `/payments/v1/sessions/${sessionId}`;
        }
        else {
            return "/payments/v1/sessions";
        }
    },
    CONSUMER_TOKEN_API_URL: (authorizationToken) => {
        return `/payments/v1/authorizations/${authorizationToken}/customer-token`;
    }
};
var ORDER_TYPES;
(function (ORDER_TYPES) {
    ORDER_TYPES["PHYSICAL"] = "physical";
    ORDER_TYPES["DIGITAL"] = "digital";
    ORDER_TYPES["DISCOUNT"] = "discount";
    ORDER_TYPES["SHIPPING_FEE"] = "shipping_fee";
    ORDER_TYPES["SALES_TAX"] = "sales_tax";
    ORDER_TYPES["GIFT_CARD"] = "gift_card";
    ORDER_TYPES["STORE_CREDIT"] = "store_credit";
    ORDER_TYPES["SURCHARGE"] = "surcharge";
})(ORDER_TYPES = exports.ORDER_TYPES || (exports.ORDER_TYPES = {}));
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