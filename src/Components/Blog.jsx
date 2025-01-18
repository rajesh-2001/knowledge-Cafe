const Blog = ({blog}) => {
    const {author,cover} = blog
    return (
        <div>
            <h4>Name: {author}</h4>
            <img src={cover}></img>
        </div>
    );
};

export default Blog;