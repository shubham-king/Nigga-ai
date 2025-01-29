import Head from "next/head";
import Navbar from "../components/Navbar";
import SearchBox from "../components/SearchBox";
import ModelList from "../components/ModelList";
import "../styles/global.css";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Blackbox AI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>

            <Navbar />

            <main className="container">
                <h1>Ask Blackbox AI Anything</h1>
                <p className="subtext">+10M Users & Fortune 500 Companies</p>

                <SearchBox />
                <ModelList />
            </main>
        </div>
    );
}
