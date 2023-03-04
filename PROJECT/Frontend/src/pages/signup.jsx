import axios from "axios";
import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";

export default function Signup() {

    const history = useNavigate()


    const [email ,setEmail] = useState('')
    const [password , setPassword]  = useState('')

    const submit  = async () =>{
        e.preventDefault()

        try {
            await axios.post('http://localhost:8000/signup' , {
                email , password
            })
            .then((res)=>{
                if(res.data = 'exist'){
                    alert('User already exist')
                }else if (res.data = 'notexist'){
                    history('/home' , {state:{id:email}})
                }
            })
            .catch((e)=>{
                alert('wrong details')
            })
        } catch (e) {
            console.log(e)
        }
    }

    return (
        <form method="post">
            <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" />
            <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />
            <input type="submit" value="signup" onClick={submit} />
            <br />
            <p>OR</p>
            <br />
            <Link to="/" >Login</Link>
        </form>
    );
}