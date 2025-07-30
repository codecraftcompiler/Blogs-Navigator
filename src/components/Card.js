import React from "react";
import { NavLink } from "react-router-dom";

function Card({posts}){
    return(
        <div>
            <NavLink to={`/blog/${posts.id}`}>
                <p className="font-bold font-xs">{posts.title}</p>
            </NavLink>
            <p className="text-[10px]">By <span className="italic">{posts.author}</span> on <NavLink to={`/category/${posts.category}`}><span className="underline font-bold">{posts.category}</span></NavLink></p>
            <p className="text-[10px]">Posted On {posts.date}</p>
            <p className="text-[13px] pt-3 pb-2">{posts.content}</p>
            <div className="text-[10px] underline text-blue-500 flex gap-x-1">
                {
                    posts.tags.map( (tag, index) => {
                        return <NavLink key={index} to={`/tags/${tag.replaceAll(' ','-')}`}><span>{`#${tag}`}</span></NavLink>
                    })
                }
            </div>
        </div>
    )
}

export default Card; 