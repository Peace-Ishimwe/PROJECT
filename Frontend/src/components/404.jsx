
import React from "react";

export function Not__Found() {
    return (
        <div>
            <div class="flex justify-between py-5 px-5 sm:py-10 sm:px-20 w-full">
                <div>
                    <a href="/">
                        <img src="/src/components/Images/menu.svg"/>
                    </a>
                </div>
                <div
                    class="w-fit hidden sm:block font-extrabold text-4xl sm:text-8xl font-[Poppins] text-slate-400"
                >
                    404
                </div>
            </div>
            <div
                class="flex flex-col lg:flex-row justify-between mx-auto w-11/12 md:pl-0 md:w-10/12"
            >
                <img class="w-8/12 mx-auto sm:w-fit" src="src/components/Images/404 image.svg" />
                <img src="src/components/Images/pep.svg" />
            </div>
        </div>
    )
}