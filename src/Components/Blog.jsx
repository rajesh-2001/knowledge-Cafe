const Blog = ({ blog }) => {
    const { author, cover, author_img, title, posted_date, reading_time, hashtag } = blog
    return (
        <div className="border-b-4 pb-8 mr-6 mb-10">
            <img src={cover} className="rounded-lg"></img>
            <div className="flex justify-between mt-5 items-center">
                <div className="flex gap-3">
                    <img src={author_img} alt="" className="w-14 h-14 rounded-full" />
                    <div className="flex flex-col">
                        <h4 className="text-xl font-bold">{author}</h4>
                        <p className="text-base font-semibold text-[#11111199]">{posted_date}</p>
                    </div>
                </div>

                <div className="flex gap-x-3 text-[#11111199]">
                    <p className="text-base font-medium ">{reading_time} min read</p>
                    <button>Book</button>
                </div>
            </div>
            <p className="my-3 text-4xl font-bold mr-24">{title}</p>
            <div className="mb-3 text-[#11111199] text-lg font-medium">
                <p >{hashtag}</p>
            </div>
            <button className="text-[#6047EC] underline"><a href="#">Mark as read</a></button>
        </div>
    );
};

export default Blog;



