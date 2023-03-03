import mongoose from "mongoose";
import Joi from 'joi'


const signupSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (value) => Joi.string().regex(/^[A-Z][a-z]{2,9}$/).validate(value).error === null,
    //   message: 'Invalid username'
    // }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    // validate: {
    //   validator: (value) => Joi.string().email().validate(value).error === null,
    //   message: 'Invalid email address'
    // }
  },
  tel: {
    type: String,
    required: true,
    // validate: {
    //   validator: (value) => Joi.string().regex(/^\d{10}$/).validate(value).error === null,
    //   message: 'Invalid phone number'
    // }
  },
  password: {
    type: String,
    required: true,
    // validate: {
    //   validator: (value) => Joi.string().min(8).pattern(new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$')).validate(value).error === null,
    //   message: 'Invalid password'
    // }
  },
  confirmPassword: {
    type: String,
    required: true,
    // validate: {
    //   validator: function(value) {
    //     return value === this.password;
    //   },
    //   message: 'Passwords do not match'
    // }
  }
});

const Signup = mongoose.model('Signup' , signupSchema)
export default Signup