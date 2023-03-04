import Signup from "../model/schema.js";
import validateSignup from "../validator/joi.js";

export const addUser = async (req , res) =>{
    const user = await req.body
    console.log(user)
}