import { Klarna, OrderLine, Locale } from '../dist/Klarna';
import { REGION } from '../dist/utils';

const klarna = new Klarna({
    config: {
        isLive: false,
        region: REGION.EU,
        username: "<username>",
        password: "<password>"
    }
});

klarna.v100.orders.createOrder("", {
    locale: Locale.sv_SE,
    order_amount: 1234,
    order_lines: new Array<OrderLine>(),
    purchase_country: 'SE',
    purchase_currency: 'SEK'
});
