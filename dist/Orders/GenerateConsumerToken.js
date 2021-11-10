"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenerateConsumerToken = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const UnableToGenerateConsumerToken_1 = require("./UnableToGenerateConsumerToken");
const CommonErrors_1 = require("../CommonErrors");
/**
 * Use this API call to create a Klarna Customer Token.
 *
 * After having obtained an authorization_token for a successful authorization,
 * this can be used to create a purchase token instead of placing the order.
 * Creating a Klarna Customer Token results in Klarna storing customer and
 * payment method details.
 *
 * @param config
 * @param authorizationToken
 * @param order
 * @returns
 */
function GenerateConsumerToken(config, authorizationToken, consumerToken) {
    return new Promise((resolve, reject) => {
        const url = utils_1.URLS.API_URL(config) + utils_1.URLS.CONSUMER_TOKEN_API_URL(authorizationToken);
        axios_1.default.post(url, consumerToken, {
            headers: {
                "Authorization": (0, utils_1.generateAuth)(config.username, config.password),
                "content-type": "application/json"
            }
        })
            .then((response) => {
            if (!config.isLive) {
                console.log(response);
            }
            switch (response.status) {
                case 200:
                    resolve(response.data);
                    return;
                case 400:
                    reject(new UnableToGenerateConsumerToken_1.UnableToGenerateConsumerToken());
                    return;
                case 403:
                    reject(new CommonErrors_1.NotAuthorized());
                    return;
                case 404:
                    reject(new CommonErrors_1.ResourceMissing());
                    return;
                case 409:
                    reject(new CommonErrors_1.DataMismatch());
                    return;
                default:
                    reject(new CommonErrors_1.UnknownError());
            }
        }, (error) => {
            reject(error);
        });
    });
}
exports.GenerateConsumerToken = GenerateConsumerToken;
//# sourceMappingURL=GenerateConsumerToken.js.map