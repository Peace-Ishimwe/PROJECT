import joi from "joi";

const validator = (Schema) => (payload) => 
    Schema.validate(payload , {abortEarly: false})

const signupSchema = joi.object({
    username: joi.string().regex(/^[A-Z][a-z]{2,9}$/).required(),
    email: joi.string().email().required(),
    tel: joi.string().regex(/^\d{10}$/).required(),
    password: joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')).required(),
    confirmPassword: joi.string().valid(joi.ref('password')).required(),
});

const validateSignup = validator(signupSchema)

export default validateSignup