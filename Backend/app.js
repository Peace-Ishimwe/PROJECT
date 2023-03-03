import  express  from "express";
const app = express()

// using express.json()
app.use(express.json())

// evnvironmental variables file
import dotenv from "dotenv"
dotenv.config()

// the database connection
import connectDB from "./database/db.js";
connectDB()

// importing and using the routes
import route from "./routes/routes.js";
app.use(route)

// importing and using morgan 
import morgan from "morgan";
app.use(morgan('tiny'))


// listening to the port 
app.listen(process.env.PORT , ()=>{
    console.log(`Listening on port ${process.env.PORT}`);
})