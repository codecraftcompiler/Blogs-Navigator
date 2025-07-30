import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

function TagPage(){

    const navigation = useNavigate()
    const location = useLocation()
    const tag=location.pathname.split('/').at(-1)

    return(
        <div className="flex flex-col justify-center items-center">
            <Header/>
            <div className="w-11/12 max-w-[500px] mt-[80px] flex items-center gap-2 -mb-14">
                <button className="border px-3 py-0.5 shadow-lg" onClick={()=>navigation(-1)}>
                    Back
                </button>
                <p className="font-bold">Blogs Tagged <span className="underline text-blue-400">#{tag}</span></p>
            </div>
            <Blogs/>
            <Footer/>
        </div>
    )
}

export default TagPage;