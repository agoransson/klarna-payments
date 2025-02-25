"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CancelAuthorization = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const CommonErrors_1 = require("../CommonErrors");
/**
 * Use this API call to cancel/release an authorization. If the
 * authorization_token received during a Klarna Payments won’t be used to
 * place an order immediately you could release the authorization.
 *
 * @param config
 * @param authorizationToken
 * @returns
 */
function CancelAuthorization(config, authorizationToken) {
    return new Promise((resolve, reject) => {
        const url = utils_1.URLS.API_URL(config) + utils_1.URLS.CANCEL_AUTHORIZATION_API_URL(authorizationToken);
        axios_1.default.delete(url, {
            headers: {
                "Authorization": (0, utils_1.generateAuth)(config.username, config.password),
                "content-type": "application/json"
            }
        })
            .then((reponse) => {
            if (!config.isLive) {
                console.log(reponse);
            }
            resolve();
        })
            .catch((error) => {
            const { response } = error;
            if (response) {
                const { status } = response;
                switch (status) {
                    case 403:
                        reject(new CommonErrors_1.NotAuthorized());
                        return;
                    case 404:
                        reject(new CommonErrors_1.ResourceMissing());
                        return;
                    default:
                        reject(new CommonErrors_1.UnknownError());
                }
            }
            else {
                reject(error);
            }
        });
    });
}
exports.CancelAuthorization = CancelAuthorization;
//# sourceMappingURL=CancelAuthorization.js.map