
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function WelcomePageNewUser() {  
    
  return (
    <div className="flex items-center justify-center w-screen h-screen">
        <div className="px-4 lg:py-12">
            <div className="lg:gap-4 lg:flex">
                <div className="flex flex-col items-center justify-center md:py-24 lg:py-32">
                    <h1 className="font-bold text-blue-600 text-5xl mb-5">Welcome 👋 </h1>
                    <Link
                        to="/"
                        className="px-5 py-2 rounded-md text-blue-100 bg-blue-600 hover:bg-blue-700"
                    >
                        Go home
                    </Link>
                </div>
                <div className="mt-4">
                </div>
            </div>
        </div>
    </div>
  );
}