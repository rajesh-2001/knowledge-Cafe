import { useState } from "react";
import Blog from "./Blog";

const Blogs = () => {
    const [blogs,setBlogs] = useState([])
    useState(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id} blog={blog} ></Blog>)
            }
        </div>
    );
};

export default Blogs;