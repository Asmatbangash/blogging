import React from "react";
import { assets } from "../assets/assets";
import { BlogCard } from "../components/Comp_index";

function LifeStyle() {
  const lifeStyleCategoryBlog = assets.blogPosts.filter(
    (blog) => blog.category === "Lifestyle"
  );
  return (
    <div className="flex flex-wrap px-10 justify-center items-center gap-4">
      {lifeStyleCategoryBlog.map((blog) => (
        <BlogCard blog={blog} />
      ))}
    </div>
  );
}

export default LifeStyle;
