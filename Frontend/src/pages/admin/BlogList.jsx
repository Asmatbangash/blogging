import React from "react";
import { assets } from "../../assets/assets";
import { ListOfBlogs } from "../../components/Comp_index";

function BlogList() {
  return (
    <div className="overflow-x-auto w-full p-15 max-sm:px-0">
      <h2 className="p-2">All Blog</h2>
      <table className="table">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th className="">#</th>
            <th className="">Blog Title</th>
            <th className="">Date</th>
            <th className="">Status</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody>
          {assets.blogPosts.map((blog) => (
            <ListOfBlogs blog={blog} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default BlogList;
