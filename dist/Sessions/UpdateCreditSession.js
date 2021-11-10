"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCreditSession = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const CommonErrors_1 = require("../CommonErrors");
const UnableToUpdateCreditSession_1 = require("./UnableToUpdateCreditSession");
/**
 * Use this API call to update a Klarna Payments session with new details,
 * in case something in the order has changed and the checkout has been
 * reloaded. Including if the consumer adds a new item to the cart or if
 * consumer details are updated.
 *
 * @param config
 * @param session
 * @returns
 */
function UpdateCreditSession(config, sessionId, session) {
    return new Promise((resolve, reject) => {
        const url = utils_1.URLS.API_URL(config) + utils_1.URLS.CREDIT_SESSION_API_URL(sessionId);
        axios_1.default.post(url, session, {
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
                case 204:
                    resolve();
                    return;
                case 400:
                    reject(new UnableToUpdateCreditSession_1.UnableToUpdateCreditSession());
                    return;
                case 403:
                    reject(new CommonErrors_1.NotAuthorized());
                    return;
                case 404:
                    reject(new CommonErrors_1.ResourceMissing());
                    return;
                default:
                    reject(new CommonErrors_1.UnknownError());
            }
        }, (error) => {
            reject(error);
        });
    });
}
exports.UpdateCreditSession = UpdateCreditSession;
//# sourceMappingURL=UpdateCreditSession.js.map