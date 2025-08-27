import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useParams } from "react-router-dom";

function BlogInDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [comments, setComments] = useState([]);

  const fetchBlogData = async () => {
    const blogData = assets.blogPosts.find((item) => item._id == id);
    console.log(blogData);
    setData(blogData);
  };

  useEffect(() => {
    fetchBlogData();
  }, []);

  return data ? (
    <div className="flex flex-col justify-center items-center my-5 max-sm:px-5">
      <div className="text-center max-w-md my-10">
        <p className="pb-5">Published on {data.date}</p>
        <h1 className="text-3xl max-sm:text-3xl font-bold opacity-80">
          {data.title}
        </h1>

        <p
          className="py-4"
          dangerouslySetInnerHTML={{ __html: data.desc.slice(0, 50) }}
        ></p>
        <p className="text-xl bg-amber-200 rounded-full p-2">
          {data.autherName}
        </p>
      </div>

      <img src={data.img} alt="" className="w-200 rounded-md" />
      <div className="my-10">
        <h1 className="text-2xl font-bold">{data.title}</h1>
        <p>{data.desc}</p>
      </div>
    </div>
  ) : (
    <span className="loading loading-spinner text-secondary"></span>
  );
}

export default BlogInDetail;
