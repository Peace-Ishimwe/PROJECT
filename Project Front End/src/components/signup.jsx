import React from "react";
import { Button, Account, Input, OrWith  , InputPassword} from "./assests";
import axios from "axios";

export function Signup() {
    return (
        <div className="Signup--container flex items-center justify-center h-[100vh] w-fit mx-auto sm:w-full">
            <form
                class="flex flex-col w-fit h-fit items-center justify-center"
                method="POST"
                action="/signup"
            >
                <h3 class="font-semibold text-3xl">Create an account</h3>
                <p class="text-md font-normal mb-3">Connect with your friends today!</p>
                <Input placeholder={'Enter Your Username'} id={'username'} name={'username'} type={'text'} />
                <Input placeholder={'Enter Your Email'} id={'email'} name={'email'} type={'email'} />
                <Input placeholder={'Enter Your Phone Number'} id={'phone--number'} name={'phone--number'} type={'tel'} />
                <InputPassword placeholder={'Enter Your Password'} id={'password'} name={'password'} type={'password'} />
                <InputPassword placeholder={'Confirm Your Password'} id={'confirm--password'} name={'confirm--password'} type={'password'} />
                <Button type={'submit'} desc={'Signup'} border={'border-0'} bg={'bg-blue-500'} position={'justify-center'} color={'text-white'} />
                <OrWith/>
                <Button  type={'submit'} desc={'Signup With Facebook'} border={'border-0'} bg={'bg-blue-500'} color={'text-white'} icon={'gg:facebook'} />
                <Button imgSrc={'src/components/Images/Google Logo.png'} desc={'Signup With Google'} imgAlt={'google icon'} border={'border-2'} />
                <Account account={'Already have an account'} action={'Login'} link={'/login'} />
            </form>
        </div>
    );
}
