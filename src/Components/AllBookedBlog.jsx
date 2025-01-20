const AllBookedBlog = ({blog})=>{
    const {title} = blog
    return(
        <div className="my-4 p-5 bg-white rounded-lg">
            <p className="text-lg font-semibold"> {title}</p>
        </div>
    )
}

export default AllBookedBlog;