import { Config } from './Config';
import { CancelAuthorization, GenerateConsumerToken, CreateOrder } from './Orders';
import { CreateOrderPayload } from './Orders/CreateOrderPayload';
import { CreateOrderResponse } from './Orders/CreateOrderResponse';
import { GenerateConsumerTokenPayload } from './Orders/GenerateConsumerTokenPayload';
import { GenerateConsumerTokenResponse } from './Orders/GenerateConsumerTokenResponse';
import { CreateCreditSession, ReadCreditSession, UpdateCreditSession } from './Sessions';
import { CreateCreditSessionPayload } from './Sessions/CreateCreditSessionPayload';
import { CreateCreditSessionResponse } from './Sessions/CreateCreditSessionResponse';
import { ReadCreditSessionResponse } from './Sessions/ReadCreditSessionResponse';
import { UpdateCreditSessionPayload } from './Sessions/UpdateCreditSessionPayload';

export * from './Orders';
export * from './Sessions';
export * from './CommonTypes';
export * from './CommonErrors';

type PaymentsProps = {
    config: Config;
}

type OrdersVersion100 = {
    cancelAuthorization: (authorizationToken: string) => Promise<void>,
    generateConsumerToken: (authorizationToken: string, consumerToken: GenerateConsumerTokenPayload) => Promise<GenerateConsumerTokenResponse>,
    createOrder: (authorizationToken: string, order: CreateOrderPayload, recurring: boolean) => Promise<CreateOrderResponse>
}

type SessionsVersion100 = {
    createCreditSession: (session: CreateCreditSessionPayload) => Promise<CreateCreditSessionResponse>,
    readCreditSession: (sessionId: string) => Promise<ReadCreditSessionResponse>;
    updateCreditSession: (sessionId: string, session: UpdateCreditSessionPayload) => Promise<void>;
}

type PaymentsVersion100 = {
    orders: OrdersVersion100;
    sessions: SessionsVersion100;
}

export class Payments {

    config: Config;
    
    v100: PaymentsVersion100 = {
        orders: {
            cancelAuthorization: (authorizationToken: string) => (
                CancelAuthorization(this.config, authorizationToken)
            ),
            generateConsumerToken: (authorizationToken: string, consumerToken: GenerateConsumerTokenPayload) => (
                GenerateConsumerToken(this.config, authorizationToken, consumerToken)
            ),
            createOrder: (authorizationToken: string, order: CreateOrderPayload, recurring: boolean = false) => (
                CreateOrder(this.config, authorizationToken, order, recurring)
            )
        },
        sessions: {
            createCreditSession: (session: CreateCreditSessionPayload) => (
                CreateCreditSession(this.config, session)
            ),
            readCreditSession: (sessionId: string) => (
                ReadCreditSession(this.config, sessionId)
            ),
            updateCreditSession: (sessionId: string, session: UpdateCreditSessionPayload) => (
                UpdateCreditSession(this.config, sessionId, session)
            )
        }
    };

    constructor({ config }: PaymentsProps) {
        this.config = config;
    }
}
