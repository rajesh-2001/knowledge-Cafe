import { useState } from "react";
import Blogs from "./Components/Blogs";
import Bookmark from "./Components/Bookmark";
import Header from "./Components/Header";
import AllBookedBlog from "./Components/AllBookedBlog";

function App() {

  const [blogInfo,setBlog] = useState([]);
  const handleBooked = blog =>{
   const newBlog = [...blogInfo,blog]
   setBlog(newBlog)
  }

  const [readingTime,setReadingTime] = useState(0);
  const handleMarkAsRead = time =>{
    setReadingTime(readingTime+time)
  }

  return (
    <>
      <div className="lg:mx-44">
        <Header></Header>
        <div className="md:flex md:gap-6 mt-7" >
          <Blogs handleBooked={handleBooked}  handleMarkAsRead={ handleMarkAsRead}></Blogs>
          <Bookmark blogInfo={blogInfo} readingTime={readingTime}></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App
