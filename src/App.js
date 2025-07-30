import React, { useContext, useEffect } from "react"
import { AppContext } from "./context/AppContext";
import { Routes, Route, useLocation } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import Home from "./Pages/Home";
import BlogPage from "./Pages/BlogPage";
import TagPage from "./Pages/TagPage";
import CategoryPage from "./Pages/CategoryPage";

 function App() {

  const [searchParams,setSearchParams] = useSearchParams()
  const {fetchBlogPosts}=useContext(AppContext)
  const location=useLocation()

  useEffect(()=>{
     const page=searchParams.get('page') ?? 1

     if(location.pathname.includes('tags')){
      // iska matlab tag wala chahiye
      const tag=location.pathname.split('/').at(-1).replaceAll('-',' ')
      fetchBlogPosts(Number(page),tag,null)
     }
    else if(location.pathname.includes('category')){
      //iska matlab category wala chahiye
      const category=location.pathname.split('/').at(-1).replaceAll('-',' ')
      fetchBlogPosts(Number(page),null,category)
     }
     else{
      fetchBlogPosts(Number(page))
     }

  },[location.pathname,location.search])

  return(

    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/blog/:blogid' element={<BlogPage/>}/>
      <Route path='/tags/:tag' element={<TagPage/>}/>
      <Route path='/category/:category' element={<CategoryPage/>}/>
    </Routes>
  )
}

export default App;
