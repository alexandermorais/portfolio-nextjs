import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

const Main = () => {
    // Return
    return (
        <div id="main" className="w-full h-screen text-center">
            <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
                <div>
                    {/*First text*/}
                    <p className="uppercase text-sm tracking-widest text-gray-600">
                        Portfolio in Next.js
                    </p>

                    {/*Second text*/}
                    <h1 className="py-4 text-gray-700">
                        ¡Hola, soy{" "}
                        <span className="text-[#5651e5]">John Doe</span>!
                    </h1>

                    {/*Third text*/}
                    <h1 className="py-2 text-gray-700">Software Engineer</h1>

                    {/*Fourth text*/}
                    <p className="py-4 text-gray-600 sm:max-w-[70%] m-auto">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </p>

                    {/*Icons*/}
                    <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
                        {/*LinkedIn*/}
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>

                        {/*GitHub*/}
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <FaGithub />
                        </div>

                        {/*Email*/}
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-105 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
