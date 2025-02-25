import { Config } from './Config';
import { CreateOrderPayload } from './Orders/CreateOrderPayload';
import { CreateOrderResponse } from './Orders/CreateOrderResponse';
import { GenerateConsumerTokenPayload } from './Orders/GenerateConsumerTokenPayload';
import { GenerateConsumerTokenResponse } from './Orders/GenerateConsumerTokenResponse';
import { CreateCreditSessionPayload } from './Sessions/CreateCreditSessionPayload';
import { CreateCreditSessionResponse } from './Sessions/CreateCreditSessionResponse';
import { ReadCreditSessionResponse } from './Sessions/ReadCreditSessionResponse';
import { UpdateCreditSessionPayload } from './Sessions/UpdateCreditSessionPayload';
export * from './Orders';
export * from './Sessions';
export * from './CommonTypes';
export * from './CommonErrors';
declare type PaymentsProps = {
    config: Config;
};
declare type OrdersVersion100 = {
    cancelAuthorization: (authorizationToken: string) => Promise<void>;
    generateConsumerToken: (authorizationToken: string, consumerToken: GenerateConsumerTokenPayload) => Promise<GenerateConsumerTokenResponse>;
    createOrder: (authorizationToken: string, order: CreateOrderPayload) => Promise<CreateOrderResponse>;
};
declare type SessionsVersion100 = {
    createCreditSession: (session: CreateCreditSessionPayload) => Promise<CreateCreditSessionResponse>;
    readCreditSession: (sessionId: string) => Promise<ReadCreditSessionResponse>;
    updateCreditSession: (sessionId: string, session: UpdateCreditSessionPayload) => Promise<void>;
};
declare type PaymentsVersion100 = {
    orders: OrdersVersion100;
    sessions: SessionsVersion100;
};
export declare class Payments {
    config: Config;
    v100: PaymentsVersion100;
    constructor({ config }: PaymentsProps);
}
