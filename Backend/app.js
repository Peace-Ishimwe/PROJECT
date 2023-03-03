import  express  from "express";
const app = express()

// evnvironmental variables file
import dotenv from "dotenv"
dotenv.config()

// the database connection
import connectDB from "./database/db.js";
connectDB()

// listening to the port 
app.listen(process.env.PORT , ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})