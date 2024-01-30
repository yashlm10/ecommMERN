import express from "express";
import dotenv from "dotenv";

//configure .env
dotenv.config();

//rest obj
const app = express()

//rest api
app.get('/', (req,res) => {
    res.send("<h1> WELCOME TO ECOMM APP </h1>");
});

//PORT 
const PORT = process.env.PORT;

//run listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});