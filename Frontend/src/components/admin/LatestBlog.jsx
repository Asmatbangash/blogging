import React from "react";
import { assets } from "../../assets/assets";
import ListOfBlogs from "./ListOfBlogs";

function LatestBlog() {
  return (
    <div className="w-full bg-white p-10">
      {/* Desktop/Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="table w-full">
            <thead className="bg-base-200 sticky top-0 z-10">
              <tr>
                <th>#</th>
                <th>Blog Title</th>
                <th>Date</th>
                <th>Status</th>
                <th>Action</th>
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

export default LatestBlog;
