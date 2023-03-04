import React, { useState } from "react";
import { Icon } from "@iconify/react";
import axios from "axios"
export default function Signup() {

    const [username , setUsername] = useState("")
    const [email , setEmail] = useState("")
    const [tel , setTel] = useState("")
    const [password , setPassword] = useState("")
    const [confirmPassword , setConfirmPassword] = useState("")

    const handleSubmit = async() =>{
        e.preventDefault()
        try {
            await axios.post('http://localhost:3000/signup' , {
                username , email , tel , password , confirmPassword
            })
            .then((res)=>{
                console.log(res.data)
            })
            .catch((e)=>{
                console.log(e.message);
            })
            console.log(res.data)
        } catch (err) {
            console.log(err.message);
        }
    }

    return (
        <div className="flex items-center justify-center h-[100vh] w-fit mx-auto sm:w-full">
            <form
                className="flex flex-col w-fit h-fit items-center justify-center"
                method="POST"
                onSubmit={handleSubmit}
            >
                <h3 className="font-semibold text-3xl">Create an account</h3>
                <p className="text-md font-normal mb-3">Connect with your friends today!</p>
                <input
                    className="border-2 border-slate-400 mt-5 w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
                    type="text"
                    name="username"
                    id="username"
                    placeholder="Enter Your Username"
                    onChange={(e)=>{setUsername(e.target.value)}}
                />
                <input
                    className="border-2 border-slate-400 mt-5 w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email"
                    onChange={(e)=>{setEmail(e.target.value)}}
                />
                <input
                    className="border-2 border-slate-400 mt-5 w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
                    type="tel"
                    name="tel"
                    id="tel"
                    placeholder="Enter Your Phone Number"
                    onChange={(e)=>{setTel(e.target.email)}}
                />
                <div className="border-2 border-slate-400 mt-5 w-10/12 h-12 rounded-md flex items-center justify-center outline-none focus-within:outline-slate-500 focus-within:border-0 text-md text-slate-900 placeholder-slate-600 pr-5">
                    <input
                        className="w-full h-full rounded-md flex text-center outline-none text-md text-slate-900 placeholder-slate-600 password"
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Enter Your Password"
                        onChange={(e)=>{setPassword(e.target.value)}}
                    />
                </div>
                <div className="border-2 border-slate-400 mt-5 w-10/12 h-12 rounded-md flex items-center justify-center outline-none focus-within:outline-slate-500 focus-within:border-0 text-md text-slate-900 placeholder-slate-600 pr-5">
                    <input
                        className="w-full h-full rounded-md flex text-center outline-none text-md text-slate-900 placeholder-slate-600 password"
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Confirm Your Password"
                        onChange={(e)=>{setConfirmPassword(e.target.value)}}
                    />
                </div>
                <button
                    className="bg-blue-600 mt-5 w-10/12 h-12 rounded-md flex items-center justify-center text-white font-semibold"
                    type="submit"
                >
                    Sign Up
                </button>
                <div className="flex items-center gap-5 w-10/12 whitespace-nowrap mt-7">
                    <hr className="w-36 border-[0.1px] border-slate-400" />
                    Or with
                    <hr className="w-36 border-[0.1px] border-slate-400" />
                </div>
                <button
                    className="bg-blue-500 mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-white font-semibold"
                    type="submit"
                >
                    <Icon width="32px" icon="gg:facebook" />
                    <span className="mx-auto">Signup with Facebook</span>
                </button>
                <button
                    className="border-2 border-slate-400 bg-white mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-slate-600 font-semibold"
                    type="submit"
                >
                    <Icon width={"30px"} className="text-blue-500" icon="mdi:google" />
                    <span className="mx-auto">Signup with Google</span>
                </button>
                <div className="flex gap-2 mt-8">
                    <span className="font-semibold text-slate-600 ">
                        Already have an account?
                    </span>{" "}
                    <a className="text-blue-700 font-semibold hover:underline" href="/">
                        Login
                    </a>
                </div>
            </form>
        </div>
    );
}
