import React from "react";
import { Link } from "react-router-dom";

export default function Homepage() {

  return (
    <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
            <div className="lg:gap-4 lg:flex">
                <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                    <h1 className="font-bold text-blue-600 text-3xl">This is the fake home page not yet done 👋</h1>
                <div className="flex gap-4 mt-5">
                    <Link
                        to="/login"
                        className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
                    >
                        Login
                    </Link>
                    <Link
                        to="/Signup"
                        className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
                    >
                        Signup
                    </Link>
                </div>
                </div>
                <div className="mt-4">
                </div>
            </div>
        </div>
    </div>
  );
}