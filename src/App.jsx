import { useState } from "react";
import Blogs from "./Components/Blogs";
import Bookmark from "./Components/Bookmark";
import Header from "./Components/Header";

function App() {

  const [blogInfo,setBlog] = useState([]);
  const handleBlog = blog =>{
    console.log(blog);
  }

  return (
    <>
      <div className="lg:mx-44">
        <Header></Header>
        <div className="md:flex md:gap-6 mt-7" >
          <Blogs handleBlog={handleBlog}></Blogs>
          <Bookmark ></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App
