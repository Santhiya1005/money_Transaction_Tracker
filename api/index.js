const express =require('express');
const cors = require('cors');
require('dotenv').config();
const Transaction=require('./models/Transaction.js');
const { default: mongoose } = require('mongoose');
const { getSuggestedQuery } = require('@testing-library/dom');
const app=express();
app.use(cors());
app.use(express.json()); 
app.get('/api/test',(req,res)=>{
    res.json('test kkkkkkkkk here');
});
app.post('/api/transaction',async (req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const {name,price,description,datetime}=req.body;
    const transaction = await Transaction.create({name,price,description,datetime});
    res.json(transaction);
});
app.get('/api/transactions',async (req,res)=>{
    await mongoose.connect(process.env.MONGO_URL);
    const transactions= await Transaction.find();
    res.json(transactions);
});
app.listen(4040);
