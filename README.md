# 💰 Money Tracker

[![Build Status](https://img.shields.io/badge/status-live-brightgreen)](https://money-transaction-tracker.onrender.com)
[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

A **fullstack money tracking application** built with **React**, **Node.js/Express**, and **MongoDB**.  
Users can add, view, and manage transactions easily. Fully deployed on **Render**.

---------
**Live Demo:** [https://money-transaction-tracker.onrender.com](https://money-transaction-tracker.onrender.com)
---------

## Features

- Add new transactions with **name, price, description, date/time**  
- View all transactions in a clean UI  
- Backend APIs for transaction management  
- React frontend served as a single-page application  
- Full deployment on Render with automatic environment variable handling  


## Tech Stack

- **Frontend:** React, React DOM, React Scripts  
- **Backend:** Node.js, Express v4, MongoDB (Mongoose)  
- **Environment Variables:** dotenv  
- **CORS Enabled:** cors  


## Folder Structure

MONEY_TRACKER/
├─ api/
│ ├─ models/
│ │ └─ Transaction.js
│ ├─ index.js
│ └─ .env
├─ build/ # React production build
├─ node_modules/
├─ public/
├─ src/
├─ package.json
└─ .env


## Installation (Local Development)

1. **Clone the repository:**

```bash
git clone https://github.com/Santhiya1005/money_Transaction_Tracker.git
cd money_Transaction_Tracker
Install dependencies:

bash
Copy code
npm install
Create a .env file inside /api folder:

ini
Copy code
MONGO_URL=<Your MongoDB Connection String>
PORT=4040
Run backend and frontend locally:

bash
Copy code
# Start React frontend
npm start

# In another terminal, start backend
node api/index.js
React frontend: http://localhost:3000

Backend API test: http://localhost:4040/api/test

## Build & Deploy (Production)
Build React frontend:

bash
Copy code
npm run build
Ensure api/index.js serves the build folder:

js
Copy code
const path = require('path');
const express = require('express');
const app = express();

const buildPath = path.join(__dirname, '../build');
app.use(express.static(buildPath));
app.get('/*', (req, res) => {
    res.sendFile(path.join(buildPath, 'index.html'));
});
Deploy to Render:

Root Directory: Repository root

Build Command: npm install && npm run build

Start Command: node api/index.js

🔗 API Endpoints
Endpoint	Method	Description
/api/test	GET	Test endpoint
/api/transaction	POST	Create a new transaction
/api/transactions	GET	Get all transactions

POST /api/transaction Body Example:

json
Copy code
{
  "name": "Groceries",
  "price": 50,
  "description": "Bought vegetables",
  "datetime": "2025-10-22T15:00:00"
}

<img width="1918" height="908" alt="image" src="https://github.com/user-attachments/assets/a18412e0-3551-4255-ac53-24750bc27128" />


Notes
Ensure React build folder exists before deploying.

Express v4 is required to prevent wildcard route errors.

MongoDB connection string must be valid and accessible from Render.

License
This project is licensed under the MIT License. See LICENSE for details.

Acknowledgements
* Create React App
* Express.js
* MongoDB & Mongoose
* Render for hosting
