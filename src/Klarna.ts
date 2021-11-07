import { Config } from './Config';
import { CancelAuthorization, GenerateConsumerToken, CreateOrder } from './Orders';
import { CreateOrderPayload } from './Orders/CreateOrderPayload';
import { GenerateConsumerTokenPayload } from './Orders/GenerateConsumerTokenPayload';
import { CreateCreditSession, ReadCreditSession, UpdateCreditSession } from './Sessions';
import { CreateCreditSessionPayload } from './Sessions/CreateCreditSessionPayload';
import { UpdateCreditSessionPayload } from './Sessions/UpdateCreditSessionPayload';

export type KlarnaProps = {
    config: Config;
}

export class Klarna {

    config: Config;
    
    constructor({ config }: KlarnaProps) {
        this.config = config;
    }

    v100() {
        return {
            orders: {
                cancelAuthorization: (authorizationToken: string) => (
                    CancelAuthorization(this.config, authorizationToken)
                ),
                generateConsumerToken: (authorizationToken: string, consumerToken: GenerateConsumerTokenPayload) => (
                    GenerateConsumerToken(this.config, authorizationToken, consumerToken)
                ),
                createOrder: (authorizationToken: string, order: CreateOrderPayload) => (
                    CreateOrder(this.config, authorizationToken, order)
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
        }   
    }
}