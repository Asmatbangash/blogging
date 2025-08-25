import React from "react";
import { assets } from "../../assets/assets";

function Comments() {
  return (
    <div className="overflow-x-auto bg-white m-10 w-full p-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-xl">Comments</h2>
        </div>
        <div className="mb-2">
          <button className="btn btn-ghost">Approved</button>
          <button className="btn btn-ghost mx-4">Not Approved</button>
        </div>
      </div>
      <table className="table">
        {/* head */}
        <thead className="bg-base-200">
          <tr>
            <th className="">Blog Title & Comments</th>
            <th className="">Date</th>

            <th className="">Action</th>
          </tr>
        </thead>
        <tbody>
          {assets.blogPosts.map((blog) => (
            <tr>
              <td className="">
                <b>Blog : </b>
                {blog.title}
                <br />
                <b>Name : </b> {blog.name}
                <br />
                <b>Comment : </b> {blog.comments}
              </td>
              <td className="">{blog.date}</td>
              <td className="text-xl">
                <button className="">✔</button>
                <button className="px-4">🗑</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Comments;
