import axios from "axios";
import React, { useState } from "react";
import { useNavigate , Link } from "react-router-dom";

export default function Login() {

    const history = useNavigate()


    const [email ,setEmail] = useState('')
    const [password , setPassword]  = useState('')

    const submit  = async () =>{
        e.preventDefault()

        try {
            await axios.post('http://localhost:8000' , {
                email , password
            })
            .then((res)=>{
                if(res.data = 'exist'){
                    history('/home' , {state:{id:email}})
                }else if (res.data = 'notexist'){
                    alert("you have not signed up")
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
        <form  method="post">
            <input type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} placeholder="email" />
            <input type="password" name="password" onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />
            <input type="submit" value="login" onClick={submit} />
            <br />
            <p>OR</p>
            <br />
            <Link to="/signup" >Signup</Link>
        </form>
    );
}