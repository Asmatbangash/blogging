import React from "react";

function ListOfBlogs({ blog, index }) {
  return (
    <>
      {/* Desktop/Tablet Table Row */}
      <tr className="hidden md:table-row">
        <td>{index + 1}</td>
        <td>{blog.title}</td>
        <td>{blog.date}</td>
        <td>{blog.status}</td>
        <td>
          <button className="btn btn-sm btn-primary">Edit</button>
        </td>
      </tr>

      {/* Mobile Card View */}
      <div className=" md:hidden bg-base-200 rounded-xl shadow-md p-4 flex flex-col space-y-2 mb-3">
        <div className="flex justify-between">
          <span className="font-semibold"># {index + 1}</span>
          <span className="text-sm text-gray-500">{blog.date}</span>
        </div>
        <div>
          <h3 className="font-bold">{blog.title}</h3>
          <p className="text-sm">
            Status: <span className="font-medium">{blog.status}</span>
          </p>
        </div>
        <div className="flex justify-end">
          <button className="btn btn-sm btn-primary">Edit</button>
        </div>
      </div>
    </>
  );
}

export default ListOfBlogs;
