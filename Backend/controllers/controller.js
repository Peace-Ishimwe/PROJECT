import Signup from "../model/schema.js";
import validateSignup from "../validator/joi.js";

export const addUser = async (req , res) =>{
    try {
        const { error, value } = validateSignup(req.body);
        if(error) {
            return res.status(400).json(JSON.parse(JSON.stringify(error.message)))
        }
        const userExists = await Signup.findOne({username: req.body.username})
        const emailExists = await Signup.findOne({email: req.body.email})

        if(userExists) {
            return res.status(400).json('user already exists!')
        }else if(emailExists){
            return res.status(400).json('Email already taken!')
        }else{
            const user = new Signup(req.body)
            await user.save(user)
        }
        return res.status(201).json("user")
    } catch (error) {
       return res.status(500).json(error)
    }
}