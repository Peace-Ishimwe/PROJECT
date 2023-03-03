import { post , get } from "../controller/controller.js";
import  express  from "express";
const route  = express.Router()

route.post('/signup' , post)
route.get('/' , get)

export default route