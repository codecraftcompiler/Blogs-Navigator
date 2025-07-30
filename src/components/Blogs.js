import React, { useContext } from "react";
import Spinner from "./Spinner";
import {AppContext} from '../context/AppContext'
import Card from "./Card";

function Blogs(){

    // consume
    const {loading} = useContext(AppContext)
    const {post} = useContext(AppContext)

    return(
        <div className="w-11/12 max-w-[500px] mt-14 py-8 flex flex-col gap-y-7 mb-14 justify-center items-center">
            {
                loading ? 
                (<Spinner/>) :
                (post.length === 0 ?
                    (<div><p>No post found</p></div>) :
                    (post.map( (posts)=>(
                        <Card posts={posts}/>
                    )) ) 
                )
            }
        </div> 
    )
}

export default Blogs;