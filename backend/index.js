const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Routes/AuthRouter');
const ProductRouter = require('./Routes/ProductRouter');
const stripe = require('stripe')('sk_test_51QRi0eDXIAmBgT0VsnePXOS6fooTHdvzVUAMX7bkySLtdUc2mGp1M5AeH1eW7hBzt9lGxnw3yvWKVx2LRodj9yyH001HX82YXc')


require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 8080;

app.get('/ping', (req, res) => {
    res.send('PONG');
});

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);

app.post('/payment', async (req, res) => {
    try {
        // Step 1: Create a product
        const product = await stripe.products.create({
            name: "T-Shirt"
        });

        if (!product) {
            return res.status(500).json({ message: "Failed to create product" });
        }

        // Step 2: Create a price for the product
        const price = await stripe.prices.create({
            product: product.id,
            unit_amount: 100 * 100, // 100 INR
            currency: 'inr'
        });

        if (!price) {
            return res.status(500).json({ message: "Failed to create price" });
        }

        // Step 3: Create a checkout session
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    price: price.id,
                    quantity: 1
                }
            ],
            mode: 'payment',
            success_url: 'http://localhost:8080/success',
            cancel_url: 'http://localhost:8080/cancel'
            
        });

        if (!session) {
            return res.status(500).json({ message: "Failed to create session" });
        }

        // Send the response with the session URL
        res.json({
            url: session.url
        });
    } catch (error) {
        console.error("Error in payment endpoint:", error.message);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})