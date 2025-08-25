import React from "react";
import { assets } from "../../assets/assets";
import { ListOfBlogs } from "../../components/Comp_index";

function BlogList() {
  return (
    <div className="w-full h-110 bg-white m-4 p-4">
      {/* Desktop/Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="table w-full">
            <thead className="bg-base-200 sticky top-0 z-10">
              <tr>
                <th className="">#</th>
                <th className="">Blog Title</th>
                <th className="">Date</th>
                <th className="">Status</th>
                <th className="">Action</th>
              </tr>
            </thead>
            <tbody>
              {assets.blogPosts.map((blog, index) => (
                <ListOfBlogs key={index} blog={blog} index={index} />
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="block md:hidden max-h-96 overflow-y-auto">
        {assets.blogPosts.map((blog, index) => (
          <ListOfBlogs key={index} blog={blog} index={index} />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
