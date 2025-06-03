import React from "react";
import { assets } from "../assets/assets";
import { BlogCard } from "../components/Comp_index";

function Finance() {
  const financeCategoryBlog = assets.blogPosts.filter(
    (blog) => blog.category === "Finance"
  );
  return (
    <div className="flex flex-wrap px-10 justify-center items-center gap-4">
      {financeCategoryBlog.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
}

export default Finance;
