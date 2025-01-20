import { useState } from "react";
import Blog from "./Blog";

const Blogs = ({handleBooked, handleMarkAsRead}) => {
    const [blogs,setBlogs] = useState([])
    useState(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            {
                blogs.map(blog => <Blog key={blog.id}
                 blog={blog} handleBooked = {handleBooked}
                 handleMarkAsRead = {handleMarkAsRead}
                 ></Blog>)
            }
        </div>
    );
};

export default Blogs;