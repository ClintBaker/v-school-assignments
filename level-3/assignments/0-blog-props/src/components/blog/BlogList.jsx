import BlogPost from "./BlogPost";
import data from "../../data/blog";

function BlogList() {
  const blogs = data.map((blog) => {
    return <BlogPost key={blog.title} blog={blog} />;
  });
  return (
    <>
      <div className="hero">
        <h1>Clean blog</h1>
        <h2>A Blog Theme by Start Bootstrap</h2>
      </div>
      <div className="blog--list">{blogs}</div>
    </>
  );
}

export default BlogList;
