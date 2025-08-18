import React from "react";

function ListOfBlogs({ blog }) {
  return (
    <tr>
      <td className="">{blog._id}</td>
      <td className="">{blog.title}</td>
      <td className="">{blog.date}</td>
      <td className="text-green-600">Published</td>
      <td className="">
        <button className="btn btn-info">Update</button>
      </td>
    </tr>
  );
}

export default ListOfBlogs;
