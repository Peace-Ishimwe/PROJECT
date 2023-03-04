import React from "react";
import { Icon } from '@iconify/react';

export default function Signup() {
    return (
        <div class="flex items-center justify-center h-[100vh] w-fit mx-auto sm:w-full">
      <form class="flex flex-col w-fit h-fit items-center justify-center" method="POST">
        <h3 class="font-semibold text-3xl">Create an account</h3>
        <p class="text-md font-normal mb-3">Connect with your friends today!</p>
        <input
          class="border-2 border-slate-400 mt-5 w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
          type="text"
          name="username"
          id="username"
          placeholder="Enter Your Username"
        />
        <input
          class="border-2 border-slate-400 mt-5 w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <input
          class="border-2 border-slate-400 mt-5 w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
          type="tel"
          name="tel"
          id="tel"
          placeholder="Enter Your Phone Number"
        />
        <div
          class="border-2 border-slate-400 mt-5 w-10/12 h-12 rounded-md flex items-center justify-center outline-none focus-within:outline-slate-500 focus-within:border-0 text-md text-slate-900 placeholder-slate-600 pr-5"
        >
          <input
            class="w-full h-full rounded-md flex text-center outline-none text-md text-slate-900 placeholder-slate-600 password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />
          <iconify-icon class="hide cursor-pointer hidden" icon="mdi:password-off"></iconify-icon>
          <iconify-icon class="show cursor-pointer" icon="mdi:password"></iconify-icon>
        </div>
        <button
          class="bg-blue-600 mt-5 w-10/12 h-12 rounded-md flex items-center justify-center text-white font-semibold"
          type="submit"
        >
          Sign Up
        </button>
        <div class="flex items-center gap-5 w-10/12 whitespace-nowrap mt-7">
          <hr class="w-36 border-[0.1px] border-slate-400" />
          Or with
          <hr class="w-36 border-[0.1px] border-slate-400" />
        </div>
        <button
          class="bg-blue-500 mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-white font-semibold"
          type="submit"
        >
          <Icon width="32px" icon="gg:facebook"/>
          <span class="mx-auto">Signup with Facebook</span>
        </button>
        <button
          class="border-2 border-slate-400 bg-white mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-slate-600 font-semibold"
          type="submit"
        >
          <Icon width={'30px'} className='text-blue-500' icon="ph:google-logo-fill" />
          <span class="mx-auto">Signup with Google</span>
        </button>
        <div class="flex gap-2 mt-8"><span class="font-semibold text-slate-600 ">Already have an account?</span> <a class="text-blue-700 font-semibold hover:underline" href="/">Login</a></div>
      </form>
    </div>
    );
}