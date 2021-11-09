# Typescript wrapper for Klarna Payments API

This is not an official Klarna product, they take no responsibility for this product. And I have no affiliation with Klarna.

This library is meant for the back-end server, it's not to be confused with the official Javascript SDK released by Klarna which is used in the front-end.

The example application included in this repository uses both

## Installation

## How to use this library

### Initialize the library

```
const config = {
    isLive: true/false;
    region: REGION.EU / REGION.US / REGION.OCEANIA;
    username: <klarna merchant username>;
    password: <klarna merchant password>;
};

const payments = new Payments({
    config
});
```

### Create new credit session

This is a minimal example on how to create a new Credit Session, for a complete set of attributes read the official Klarna API documentation.

```
const session = {
    locale: Locale.sv_SV;
    order_amount: 1;
    order_lines: [
        {name: "The product", quantity: 1, total_amount: 1000, unit_price: 1000}
    ];
    purchase_country: "SE";
    purchase_currency: "SEK";
};

const result = await payments.v100.sessions.createCreditSession(session);

const { client_token, payment_method_categories, session_id } = result;
```

### Create a new order

This is a minimal example on how to create a new Order, for a complete set of attributes read the official Klarna API documentation.

```
// Authorization token is created from the front-end script, when the user authorizes the purchase.

const authorizationToken = "<string from front-end authorization process>";

const order = {
    locale: Locale.sv_SV;
    order_amount: 1;
    order_lines: [
        {name: "The product", quantity: 1, total_amount: 1000, unit_price: 1000}
    ];
    purchase_country: "SE";
    purchase_currency: "SEK";
};

const result = await payments.v100.orders.createOrder(authorizationToken, order);

```

### Cancel authorization 

TODO: Write example

### Generate consumer token

TODO: Write example

### Read credit session

TODO: Write example

### Update credit session

TODO: Write example

## Running the example locally

Note that this example requires you to have access to a merchan-portal. By default, it is set to use the playground endpoints, you can change this in the Express server (`index.js`), the front-end is a simple HTML with JQuery, found in a single file (`index.html`) served through express.

This is a minimal example showing how to interact with Klarna, your production implementation will of course look different!

1. `git clone https://github.com/agoransson/klarna-payments.git`
2. `cd klarna-payments`
3. `yarn` or `npm install`
4. `yarn run prepublish`
5. `cd example`
6. `yarn` or `npm install`
7. `yarn start`
8. Open `http://localhost:8080/` and follow the steps outlined.


## Forked from klarna-payments-nodejs-wrapper
https://github.com/vsaravind007/klarna-payments-nodejs-wrapper
