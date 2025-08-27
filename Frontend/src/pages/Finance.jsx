import React, { useContext } from "react";
import { BlogCard, Hero, Subscribe } from "../components/Comp_index";
import { contextData } from "../Context/Context";

function Finance() {
  const { filteredData } = useContext(contextData);

  // Prefer context data if searching, otherwise fall back to all Finance blogs
  const financeCategoryBlog = filteredData.filter(
    (blog) => blog.category === "Finance"
  );

  return (
    <>
      <Hero />

      <div className="px-6 sm:px-10 lg:px-20 py-10">
        {financeCategoryBlog.length > 0 ? (
          <div className="flex justify-center items-center flex-wrap">
            {financeCategoryBlog.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-20">
            <h1 className="text-red-600 text-center text-2xl sm:text-3xl lg:text-4xl font-bold animate-pulse">
              🚫 No Finance Blogs Available
            </h1>
          </div>
        )}
      </div>

      <Subscribe />
    </>
  );
}

export default Finance;
