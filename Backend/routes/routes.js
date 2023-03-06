import { addUser, loginValidate } from "../controllers/controller.js";
import express  from "express";
const route = express.Router()

route.post('/signup', addUser)
route.post('/login' , loginValidate)

export default route