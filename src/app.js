const express = require('express');
const dotEnv = require('dotenv');
dotEnv.config()
const app = express();
const number = process.env.NUMBER;
app.use(express.json());

// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   //Write your code here
    res.send(number)
});

module.exports = app;
