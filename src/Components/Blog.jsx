const Blog = ({blog}) => {
    const {author,cover} = blog
    return (
        <div>
            <img src={cover} className="rounded-lg"></img>
            <h4>Name: {author}</h4>
        </div>
    );
};

export default Blog;