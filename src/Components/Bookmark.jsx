import AllBookedBlog from "./AllBookedBlog";

const Bookmark = ({ blogInfo, readingTime}) => {
    const { id,reading_time } = blogInfo;
    return (
        <div className="md:w-1/3">
            <div className="border rounded-lg bg-[#6047EC1A] px-10 py-5 text-xl font-bold text-[#6047EC] text-center">
                Spent time on read:{readingTime}
            </div>
            <div className="bg-[#1111110D] rounded-lg  mt-5">
                <p className="text-xl font-bold pt-7 pl-7">Bookmarked Blogs: {blogInfo.length}</p>
                <div className="mt-4 mx-7 pb-7">
                    {
                        blogInfo.map(blog => <AllBookedBlog key={id} blog={blog}></AllBookedBlog>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Bookmark;