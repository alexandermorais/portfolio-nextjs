import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
    // Variables
    const direccionDeLogo = "/../public/assets/googleLogo.png";

    // Retornar
    return (
        <div className="fixed w-full h-20 shadow-xl z-[100]">
            {/*Barra de navegación*/}
            <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
                {/*Imagen*/}
                <Image src={direccionDeLogo} alt="/" width="70" height="50" />

                {/*Links*/}
                <div>
                    <ul className="hidden md:flex">
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                Inicio
                            </li>
                        </Link>
                        <Link href="/">
                            <li className="ml-10 text-sm uppercase hover:border-b">
                                Proyectos
                            </li>
                        </Link>
                    </ul>
                </div>

                {/** Ícono de menú.
                 * Se oculta el ícono, pero se muestra cuando desaparecen los li.
                 * El md es cosa del responsive. Véase: https://tailwindcss.com/docs/responsive-design
                 * Quiere decir que en vez de md puede ser sm, lg, xl, etcétera.
                 */}
                <div className="md:hidden">
                    <AiOutlineMenu size={25} />
                </div>
            </div>

            {/**
             * Barra lateral.
             * Contendrá los li.
             */}
            <div className="fixed left-0 top-0 w-full h-screen bg-black/70">
                <div className="fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500">
                    <div>
                        <div className="flex w-full items-center justify-between">
                            {/*Imagen*/}
                            <Image
                                src={direccionDeLogo}
                                alt="/"
                                width="70"
                                height="50"
                            />

                            {/*Ícono*/}
                            <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer">
                                <AiOutlineClose />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
