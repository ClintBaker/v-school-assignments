/* eslint-disable react/prop-types */
function BlogPost({ blog }) {
  return (
    <div className="blog--post">
      <h1>{blog.title}</h1>
      <h2>{blog.subTitle}</h2>
      <p>
        Posted by <span className="author">{blog.author}</span> on {blog.date}
      </p>
      <hr />
    </div>
  );
}

export default BlogPost;
