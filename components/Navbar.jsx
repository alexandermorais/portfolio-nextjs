import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";

const Navbar = () => {
    // Variables
    const direccionDeLogo = "/../public/assets/googleLogo.png";

    // Return
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            {/*Navbar*/}
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                {/*Image*/}
                <Image src={direccionDeLogo} alt="/" width="70" height="50" />

                {/*Links*/}
                <div>
                    <ul className="hidden md:flex">
                        {/*Inicio*/}
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                Inicio
                            </li>
                        </Link>

                        {/*Proyectos*/}
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                Proyectos
                            </li>
                        </Link>
                    </ul>
                </div>

                {/** Icon
                 * The icon is hidded, but it appears when the li disappears.
                 * md is responsive. Véase: https://tailwindcss.com/docs/responsive-design
                 * It meants that instead of md we can use sm, lg, xl, etc.
                 */}
                <div className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            {/*Sidebar*/}
            <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
                <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
                    {/*Head of the sidebar*/}
                    <div>
                        <div className="flex w-full items-center justify-between">
                            {/*Image*/}
                            <Image
                                src={direccionDeLogo}
                                alt="/"
                                width="70"
                                height="50"
                            />

                            {/*Icon*/}
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>

                        {/*Separator*/}
                        <div className="border-b border-gray-300 my-4">
                            <p className="w-[85%] md:w-[90%] py-4">
                                Portfolio in Next.js
                            </p>
                        </div>
                    </div>

                    {/*Links of the sidebar*/}
                    <div className="py-4 flex flex-col">
                        <ul className="uppercase">
                            {/*Inicio*/}
                            <Link href="/">
                                <li className="py-4 text-sm">Inicio</li>
                            </Link>

                            {/*Proyectos*/}
                            <Link href="/">
                                <li className="py-4 text-sm">Proyectos</li>
                            </Link>
                        </ul>

                        {/*Footer*/}
                        <div className="pt-40">
                            {/*Title*/}
                            <p className="uppercase tracking-widest text-[#5651e5]">
                                Contactos
                            </p>

                            {/*Icons*/}
                            <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                                {/*GitHub*/}
                                <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                                    <FaGithub />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
