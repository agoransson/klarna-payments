import { Config } from './Config';
import { CreateOrderPayload } from './Orders/CreateOrderPayload';
import { GenerateConsumerTokenPayload } from './Orders/GenerateConsumerTokenPayload';
import { CreateCreditSessionPayload } from './Sessions/CreateCreditSessionPayload';
import { UpdateCreditSessionPayload } from './Sessions/UpdateCreditSessionPayload';
export declare type KlarnaProps = {
    config: Config;
};
export declare class Klarna {
    config: Config;
    constructor({ config }: KlarnaProps);
    v100(): {
        orders: {
            cancelAuthorization: (authorizationToken: string) => Promise<void>;
            generateConsumerToken: (authorizationToken: string, consumerToken: GenerateConsumerTokenPayload) => Promise<import("./Orders/GenerateConsumerTokenResponse").GenerateConsumerTokenResponse>;
            createOrder: (authorizationToken: string, order: CreateOrderPayload) => Promise<import("./Orders/CreateOrderResponse").CreateOrderResponse>;
        };
        sessions: {
            createCreditSession: (session: CreateCreditSessionPayload) => Promise<import("./Sessions/CreateCreditSessionResponse").CreateCreditSessionResponse>;
            readCreditSession: (sessionId: string) => Promise<import("./Sessions/ReadCreditSessionResponse").ReadCreditSessionResponse>;
            updateCreditSession: (sessionId: string, session: UpdateCreditSessionPayload) => Promise<void>;
        };
    };
}
