"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrder = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const UnableToCreateOrder_1 = require("./UnableToCreateOrder");
const CommonErrors_1 = require("../CommonErrors");
/**
 * Use this API call to create a new order. Placing an order towards Klarna
 * means that the Klarna Payments session will be closed and that an order
 * will be created in Klarna's system.
 *
 * When you have received the authorization_token for a successful authorization
 * you can place the order. Among the other order details in this request, you
 * include a URL to the confirmation page for the customer.
 *
 * When the Order has been successfully placed at Klarna, you need to handle it
 * either through the Merchant Portal or using Klarna’s Order Management API.
 *
 * @param config
 * @param authorizationToken
 * @param order
 * @param recurring
 * @returns
 */
function CreateOrder(config, authorizationToken, order, recurring) {
    return new Promise((resolve, reject) => {
        const url = utils_1.URLS.API_URL(config) + utils_1.URLS.ORDER_API_URL(recurring ? recurring : false, authorizationToken);
        axios_1.default.post(url, order, {
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
                    throw new UnableToCreateOrder_1.UnableToCreateOrder();
                case 403:
                    throw new CommonErrors_1.NotAuthorized();
                case 404:
                    throw new CommonErrors_1.ResourceMissing();
                case 409:
                    throw new CommonErrors_1.DataMismatch();
                default:
                    throw new CommonErrors_1.UnknownError();
            }
        }, (error) => {
            reject(error);
        });
    });
}
exports.CreateOrder = CreateOrder;
//# sourceMappingURL=CreateOrder.js.map