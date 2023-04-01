import Head from "next/head";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import About from "../components/About";
import Skills from "../components/Skills";

export default function Home() {
    return (
        <>
            <Head>
                <title>Alexander Morais</title>
                <meta name="description" content="" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            {/* Navbar */}
            <Navbar />

            {/* Main */}
            <Main />

            {/* About */}
            <About />

            {/* Skills */}
            <Skills />

        </>
    );
}
