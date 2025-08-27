import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div
        className="card m-2 bg-base-100 w-70 h-80 max-sm:w-full shadow-sm hover:scale-104"
        key={blog.id}
      >
        <figure>
          <img src={blog.img} alt="blog" className="w-full h-full" />
        </figure>
        <div className="card-body">
          <div className="badge badge-info text-white">{blog.category}</div>
          <h2 className="card-title">{blog.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: blog.desc.slice(0, 100) }} />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
