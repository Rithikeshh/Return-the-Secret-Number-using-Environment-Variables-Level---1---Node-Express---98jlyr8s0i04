const express = require('express');
const app = express();
app.use(express.json());


// Write a GET route to return the value stored in the NUMBER variable stored in the .env file
/*
{
    "number" : "2"
}
*/
app.get('/api/get-env', (req, res) => {
   //Write your code here
    const number = process.env.NUMBER;
    res.status(200).json({"number":number})
});

module.exports = app;
