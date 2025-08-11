import React from "react";
import { assets } from "../assets/assets";
import { BlogCard, Hero } from "../components/Comp_index";

function Startup() {
  const startUpCategoryBlog = assets.blogPosts.filter(
    (blog) => blog.category === "Startup"
  );
  return (
    <>
      <Hero />
      <div className="flex flex-wrap px-10 justify-center items-center gap-4">
        {startUpCategoryBlog.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>
    </>
  );
}

export default Startup;
