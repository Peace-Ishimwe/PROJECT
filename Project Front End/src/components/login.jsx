import React from "react";
import { Button, Account, Input, OrWith, InputPassword, Link } from "./assests";

export function Login() {
  return (
    <div className="Signup--container flex items-center justify-center h-[100vh] w-fit mx-auto sm:w-full">
      <form
        class="flex flex-col w-fit h-fit items-center justify-center"
        method="POST"
        action="/signup"
      >
        <div className="mb-14">
          <h3 class="font-medium mx-auto w-fit font-[Poppins] text-2xl">
            Hi Welcome Back 👋!
          </h3>
          <InputPassword
            mt={"mt-2"}
            margin={"mt-5"}
            label={"email"}
            desc={"Email"}
            placeholder={"example@gmail.com"}
            id={"email"}
            name={"email"}
            type={"email"}
          />
          <InputPassword
            mt={"mt-2"}
            margin={"mt-5"}
            label={"password"}
            desc={"Password"}
            placeholder={"Enter Your Password"}
            id={"password"}
            name={"password"}
            type={"password"}
          />
          <div class="flex justify-between w-full mt-5">
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
          <Button
            type={"submit"}
            desc={"Login"}
            border={"border-0"}
            bg={"bg-blue-500"}
            position={"justify-center"}
            color={"text-white"}
          />
        </div>
        <OrWith />
        <Button
          type={"submit"}
          desc={"Login With Facebook"}
          border={"border-0"}
          bg={"bg-blue-500"}
          color={"text-white"}
          icon={"gg:facebook"}
        />
        <Button
          imgSrc={"src/components/Images/Google Logo.png"}
          desc={"Login With Google"}
          imgAlt={"google icon"}
          border={"border-2"}
        />
        <Account
          account={"Don't have an account"}
          action={"Signup"}
          link={"/signup"}
        />
      </form>
    </div>
  );
}
