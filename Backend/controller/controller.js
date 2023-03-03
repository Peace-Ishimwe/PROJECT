import Signup from "../model/schema.js";
let db = Signup

// importing validateSignup joi
import validateSignup from "../validator/signup.js"; 

export const post = (req , res) => {
    if(!req.body){
        res.send('Please enter your credentials')
    }
    const {value , error} = validateSignup(req.body)

    if(!error){
    const User = new db({
        username: req.body.username,
        email: req.body.email,
        tel: req.body.tel,
        password: req.body.password,
        confirmPassword: req.body.confirmPassword,
    })

    User.save(User)
        .then(()=>{
            res.status(200).json({message: `Added the User with id: ${User.id}`})
        })
        .catch((err)=>{
            res.status(500).json(err)
        }) 
    }else{
        console.log(error.message)
        res.send(`Invalid ${error.message}`)
    }   
}

export const get = (req , res) =>{
    res.send('Hello this is Prop')
}