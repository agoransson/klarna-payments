const express = require('express');
const path = require('path');
const { Payments } = require('../dist/Payments.js');
const { Region, getRegion } = require('../dist/utils');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

var payments = undefined;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.post('/init', (req, res) => {
    const { region } = req.body;

    const config = {...req.body, region: getRegion(region.trim())};

    payments = new Payments({
        config
    });

    if (!payments) {
        res.send({
            message: "Klarna Payments not initialized!"
        });
    }

    res.send(config);
});

app.post('/createCreditSession', async (req, res) => {
    const session = {...req.body};

    console.log(req.body);
    try {
        const result = await payments.v100.sessions.createCreditSession(session);

        res.send(result);
    } catch (error) {
        console.log(error);
        res.send(error);
    }
});

app.post('/createNewOrder/:authorizationToken', async (req, res) => {
    const { authorizationToken } = req.params;
    const order = {...req.body};

    try {
        const result = await payments.v100.orders.createOrder(authorizationToken, order);

        res.send(result);
    } catch (error) {
        res.send(error);
    }
});

app.listen(8080, () => {
    console.log('http://localhost:8080');
});
