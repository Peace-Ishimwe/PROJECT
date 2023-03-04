import mongoose from "mongoose";
import Joi from 'joi'


const signupSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  tel: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  confirmPassword: {
    type: String,
    required: true,
  }
} , {
    collection: "users"
});

const Signup = mongoose.model('Signup' , signupSchema , "users")
export default Signup