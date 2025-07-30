import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import Header from "../components/Header";
import Card from "../components/Card";
import Spinner from "../components/Spinner";

function BlogPage() {

    const newBaseUrl = "https://codehelp-apis.vercel.app/api/"
    const [blog, setBlog] = useState(null)
    const [relatedblogs, setRelatedBlogs] = useState([])
    const location = useLocation()
    const blogId = location.pathname.split('/').at(-1)
    const navigation = useNavigate()
    const { setLoading, loading } = useContext(AppContext)

    async function fetchRelatedBlogs() {
        setLoading(true)
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`
        try {
            const result = await fetch(url)
            const data = await result.json()
            setBlog(data.blog)
            setRelatedBlogs(data.relatedBlogs)
        } catch (error) {
            alert("problem")
            setBlog(null)
            setRelatedBlogs([])
        }
        setLoading(false)
    }

    useEffect(() => {
        if (blogId) {
            fetchRelatedBlogs()
        }
    }, [location.pathname])

    return (
        <div className="w-full flex flex-col items-center">
            <Header />
            <div className="w-11/12 max-w-[500px] mt-[80px]">
                <button className="border px-3 py-0.5 shadow-lg mb-3" onClick={() => navigation(-1)}>
                    Back
                </button>
            </div>
            <div className="w-11/12 max-w-[500px] flex flex-col items-center">
                {
                    loading ? <Spinner /> :
                        blog ? (
                            <div>
                                <Card posts={blog} />
                                   <h2 className="font-bold mt-5 mb-2">Related Blogs</h2>
                                {
                                    relatedblogs.map((posts) => (
                                        <div key={posts.id} className="mb-4">
                                            <Card posts={posts} />
                                        </div>
                                      ))
                                }
                            </div>
                        )
                            : (<p>No Blog Found</p>)
                }
                </div>

        </div>
    )
}

export default BlogPage;