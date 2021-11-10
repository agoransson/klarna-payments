"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadCreditSession = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const CommonErrors_1 = require("../CommonErrors");
/**
 * Use this API call to create a Klarna Payments session.
 *
 * When a session is created you will receive the available
 * payment_method_categories for the session, a session_id and a client_token.
 * The session_id can be used to read or update the session using the REST API.
 * The client_token should be passed to the browser.
 *
 * @param config
 * @param session
 * @returns
 */
function ReadCreditSession(config, sessionId) {
    return new Promise((resolve, reject) => {
        const url = utils_1.URLS.API_URL(config) + utils_1.URLS.CREDIT_SESSION_API_URL(sessionId);
        axios_1.default.get(url, {
            headers: {
                "Authorization": (0, utils_1.generateAuth)(config.username, config.password),
                "content-type": "application/json"
            }
        })
            .then(({ data }) => {
            if (!config.isLive) {
                console.log(data);
            }
            resolve(data);
        })
            .catch((error) => {
            const { response } = error;
            if (response) {
                const { status } = response;
                switch (status) {
                    case 403:
                        reject(new CommonErrors_1.NotAuthorized());
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
exports.ReadCreditSession = ReadCreditSession;
//# sourceMappingURL=ReadCreditSession.js.map