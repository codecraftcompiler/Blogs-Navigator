import React from "react";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import Blogs from "../components/Blogs";
import Footer from "../components/Footer";

function CategoryPage(){

    const navigation=useNavigate()
    const location =useLocation()
    const category=location.pathname.split('/').at(-1)

    return(
         <div className="flex justify-center items-center flex-col">
            <Header/>
            <div className="w-11/12 max-w-[500px] mt-[80px] flex items-center gap-2 -mb-14">
                <button className="border px-3 py-0.5 shadow-lg" onClick={()=>navigation(-1)}>
                    Back
                </button>
                <p className="font-bold">Blogs On <span className="underline font-[10px]">{category}</span></p>
            </div>
            <Blogs/>
            <Footer/>
        </div>
    )
}

export default CategoryPage;