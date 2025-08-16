import React from "react";
import { assets } from "../../assets/assets";

function LatestBlog() {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th className="">#</th>
            <th className="">Blog</th>
            <th className="">Data</th>
            <th className="">Status</th>
            <th className="">Action</th>
          </tr>
        </thead>
        <tbody>
          {assets.blogPosts.map((blog) => (
            <tr>
              <td className="">{blog._id}</td>
              <td className="">{blog.title}</td>
              <td className="">{blog.date}</td>
              <td className="text-green-600">Published</td>
              <td className="">
                <button className="btn btn-info">Update</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LatestBlog;
