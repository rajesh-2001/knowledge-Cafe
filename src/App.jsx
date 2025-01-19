import Blogs from "./Components/Blogs";
import Bookmark from "./Components/Bookmark";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <div className="lg:mx-44">
        <Header></Header>
        <div className="md:flex md:gap-6" >
          <Blogs></Blogs>
          <Bookmark></Bookmark>
        </div>
      </div>
    </>
  )
}

export default App
