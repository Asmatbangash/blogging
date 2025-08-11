import React from "react";
import { Link } from "react-router-dom";

function BlogCard({ blog }) {
  return (
    <Link to={`/blog/${blog._id}`}>
      <div className="card bg-base-100 w-80 h-92 shadow-sm" key={blog.id}>
        <figure>
          <img src={blog.img} alt="blog" />
        </figure>
        <div className="card-body">
          <div className="badge badge-primary">{blog.category}</div>
          <h2 className="card-title">{blog.title}</h2>
          <p dangerouslySetInnerHTML={{ __html: blog.desc }} />
        </div>
      </div>
    </Link>
  );
}

export default BlogCard;
