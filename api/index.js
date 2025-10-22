// index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const path = require('path');
const Transaction = require('./models/Transaction.js');

const app = express();
app.use(cors());
app.use(express.json());

// --- Connect to MongoDB once ---
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log('MongoDB connection error:', err));

// --- API Routes ---
app.get('/api/test', (req, res) => {
    res.json('Test endpoint working!');
});

app.post('/api/transaction', async (req, res) => {
    try {
        const { name, price, description, datetime } = req.body;
        const transaction = await Transaction.create({ name, price, description, datetime });
        res.json(transaction);
    } catch (err) {
        res.status(500).json({ error: 'Failed to create transaction', details: err.message });
    }
});

app.get('/api/transactions', async (req, res) => {
    try {
        const transactions = await Transaction.find();
        res.json(transactions);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch transactions', details: err.message });
    }
});

// --- Serve React Frontend ---
app.use(express.static(path.join(__dirname, '../build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

// --- Start Server ---
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
