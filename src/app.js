const express = require('express');
const dotEnv = require('dotenv');
const app = express();
app.use(express.json());
dotEnv.config()
const number = process.env.NUMBER;

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   //Write your code here
    res.json({"number":number})
});

module.exports = app;
