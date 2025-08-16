import React from "react";
import { assets } from "../assets/assets";
import { BlogCard, Hero, Subscribe } from "../components/Comp_index";

function Technology() {
  const technologCategoryBlog = assets.blogPosts.filter(
    (blog) => blog.category === "Technology"
  );
  return (
    <>
      <Hero />
      <div className="flex flex-wrap max-sm:px-0 px-10 justify-center items-center gap-4">
        {technologCategoryBlog.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
      <Subscribe />
    </>
  );
}

export default Technology;
