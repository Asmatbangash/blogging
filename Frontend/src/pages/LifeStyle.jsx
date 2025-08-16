import React from "react";
import { assets } from "../assets/assets";
import { BlogCard, Hero, Subscribe } from "../components/Comp_index";

function LifeStyle() {
  const lifeStyleCategoryBlog = assets.blogPosts.filter(
    (blog) => blog.category === "Lifestyle"
  );
  return (
    <>
      <Hero />
      <div className="flex flex-wrap px-10 max-sm:px-0 justify-center items-center gap-4">
        {lifeStyleCategoryBlog.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
      <Subscribe />
    </>
  );
}

export default LifeStyle;
