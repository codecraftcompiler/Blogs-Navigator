import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Blogs from '../components/Blogs'

function Home() {
    return (
        <div className="w-full min-h-[100vh] h-auto flex justify-center items-center gap-y-1 flex-col">
            <Header />
            <Blogs />
            <Footer />
        </div>
    )
}

export default Home;