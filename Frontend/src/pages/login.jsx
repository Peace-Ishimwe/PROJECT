import React from "react";
import { Icon } from "@iconify/react";

export default function Login() {
  return (
    <div class="flex items-center justify-center h-[100vh] w-fit mx-auto sm:w-full">
      <form
        class="flex flex-col w-fit h-fit items-center justify-center"
        method="POST"
      >
        <h3 class="font-semibold text-2xl font-[Poppins]">
          Hi, Welcome Back! 👋
        </h3>
        <label class="self-start w-10/12 mt-5 mb-1 pl-2 mx-auto" for="email">
          Email
        </label>
        <input
          class="border-2 border-slate-400  w-10/12 h-12 rounded-md flex text-center outline-none focus:outline-slate-500 focus:border-0 text-md text-slate-900 placeholder-slate-600"
          type="email"
          name="email"
          id="email"
          placeholder="Enter Your Email"
        />
        <label class="self-start w-10/12 mt-5 mb-1 pl-2 mx-auto" for="password">
          Password
        </label>
        <div class="border-2 border-slate-400  w-10/12 h-12 rounded-md flex items-center justify-center outline-none focus-within:outline-slate-500 focus-within:border-0 text-md text-slate-900 placeholder-slate-600 pr-5">
          <input
            class="w-full h-full rounded-md flex text-center outline-none text-md text-slate-900 placeholder-slate-600 password"
            type="password"
            name="password"
            id="password"
            placeholder="Enter Your Password"
          />
        </div>
        <div class="flex justify-between w-10/12 mt-5">
          <div class="text-black font-semibold flex items-center gap-2">
            <input
              class="h-4 w-4"
              type="checkbox"
              name="remember-me"
              id="remember-me"
            />
            <span>Remember Me</span>
          </div>
          <div>
            <a class="text-slate-600 hover:text-slate-800" href="#">
              Forgot Password?
            </a>
          </div>
        </div>
        <button
          class="bg-blue-600 mt-5 w-10/12 h-12 rounded-md flex items-center justify-center text-white font-semibold"
          type="submit"
        >
          Login
        </button>
        <div class="flex items-center gap-5 w-10/12 whitespace-nowrap mt-24">
          <hr class="w-36 border-[0.1px] border-slate-400 " />
          Or with
          <hr class="w-36 border-[0.1px] border-slate-400" />
        </div>
        <button
          class="bg-blue-500 mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-white font-semibold"
          type="submit"
        >
          <Icon width="32px" icon="gg:facebook" />
          <span class="mx-auto">Login with Facebook</span>
        </button>
        <button
          class="border-2 border-slate-400 bg-white mt-5 w-10/12 h-12 rounded-md flex items-center pl-3 text-slate-600 font-semibold"
          type="submit"
        >
          <Icon width={"30px"} className="text-blue-500" icon="mdi:google" />
          <span class="mx-auto">Login with Google</span>
        </button>
        <div class="flex gap-2 mt-8">
          <span class="font-semibold text-slate-600 ">
            Don't have an account?
          </span>{" "}
          <a class="text-blue-700 font-semibold hover:underline" href="/signup">
            Sign Up
          </a>
        </div>
      </form>
    </div>
  );
}
