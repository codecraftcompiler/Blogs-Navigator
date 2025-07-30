import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AppContext = createContext();
const baseUrl = "https://codehelp-apis.vercel.app/api/get-blogs";

export default function AppContextProvider({children}){

    const [loading,setLoading] = useState(false)
    const [post,setPost] = useState([])
    const [page,setPage] = useState(1)
    const [totalpage,setTotalPage] = useState(null)
    const navigate=useNavigate()

    //data filling
    async function fetchBlogPosts(page=1,tag=null,category=null) {
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        if(tag){
            url+=`&tag=${tag}`
        }
        if(category){
            url+=`&category=${category}`
        }
        try{
            const result=await fetch(url)
            const data=await result.json()
            setPage(data.page)
            setPost(data.posts)
            setTotalPage(data.totalPages)
        }catch(error){
            alert("wait")
            setPage(1)
            setPost([])
            setTotalPage(null)
        }
        setLoading(false)
    }

    function handlePageChange(page){
        navigate({search: `?page=${page}` })
        setPage(page)
    }

    const value={
        post,
        setPage,
        loading,
        setLoading,
        totalpage,
        setTotalPage,
        page,
        setPost,
        fetchBlogPosts,
        handlePageChange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>

}