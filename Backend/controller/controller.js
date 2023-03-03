import Signup from "../model/schema.js";

// importing validateSignup joi
import validateSignup from "../validator/signup.js"; 


let db = Signup

export const post = (req , res) => {
    if(!req.body){
        res.send('Invalid input')
    }

    const {value , error} = validateSignup(req.body)

    const User = new db({
        username: req.body.username,
        email: req.body.email,
        tel: req.body.tel,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    })

    User.save(User)
        .then(()=>{
            res.status(200).json({message: 'Added the book '})
        })
        .catch((err)=>{
            res.status(500).json(err)
        }) 
}

export const get = (req , res) =>{
    res.send('Hello this is Prop')
}