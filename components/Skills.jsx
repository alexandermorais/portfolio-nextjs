import React from "react";
import Image from "next/image";

const Skills = () => {
    return (
        <div className="w'full lg:h-screen p-2">
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest uppercase text-[#5651e5]">
                    Habilidades
                </p>
                <h2 className="py-4">Tecnologías con las que trabajo</h2>
                <div className="grid md-grid-cols-2 lg:grid-cols-4 gap-8">
                    {/*HTML*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/html.png"
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>HTML</h3>
                            </div>
                        </div>
                    </div>

                    {/*CSS*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/css.png"
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>CSS (Bootstrap)</h3>
                            </div>
                        </div>
                    </div>

                    {/*JavaScript*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/javascript.png"
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>JavaScript (jQuery)</h3>
                            </div>
                        </div>
                    </div>

                    {/*Java*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/java.png"
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Java (Swing y Java Web)</h3>
                            </div>
                        </div>
                    </div>

                    {/*PHP*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/php.png"
                                    alt="/"
                                    width="200"
                                    height="200"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>PHP (Laravel)</h3>
                            </div>
                        </div>
                    </div>

                    {/*C++*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/cplusplus.png"
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>C++</h3>
                            </div>
                        </div>
                    </div>

                    {/*Python*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/python.png"
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Python</h3>
                            </div>
                        </div>
                    </div>

                    {/*Git*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/git.png"
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>Git (GitHub)</h3>
                            </div>
                        </div>
                    </div>

                    {/*MySQL*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/mysql.png"
                                    alt="/"
                                    width="200"
                                    height="200"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>MySQL</h3>
                            </div>
                        </div>
                    </div>

                    {/*PostgreSQL*/}
                    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
                        <div className="grid grid-cols-2 gap-4 justify-center items-center">
                            <div className="m-auto">
                                <Image
                                    src="/../public/assets/skills/postgresql.png"
                                    alt="/"
                                    width="64"
                                    height="64"
                                />
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <h3>PostgreSQL</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
