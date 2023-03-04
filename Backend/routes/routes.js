import { addUser } from "../controllers/controller.js";
import express  from "express";
const route = express.Router()

route.post('/signup', addUser)

export default route