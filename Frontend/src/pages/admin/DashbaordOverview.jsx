import React from "react";
import { BiAddToQueue } from "react-icons/bi";
import { RiDraftLine } from "react-icons/ri";
import { FaRegCommentDots } from "react-icons/fa";
import { LatestBlog } from "../../components/Comp_index";
import { MdLineWeight } from "react-icons/md";

function DashbaordOverview() {
  const boxes = [
    { name: "Blogs", counting: "12", icon: <BiAddToQueue /> },
    { name: "comments", counting: "33", icon: <FaRegCommentDots /> },
    { name: "Draft", counting: "22", icon: <RiDraftLine /> },
  ];
  return (
    <div className="flex  flex-wrap m-4">
      {boxes.map((box) => (
        <div class="flex items-center p-3 w-60 h-20 bg-white rounded-md shadow-lg m-2">
          <section class="flex justify-center items-center w-14 h-14 rounded-full shadow-md bg-gradient-to-r from-[#F9C97C] to-[#A2E9C1] hover:from-[#C9A9E9] hover:to-[#7EE7FC] hover:cursor-pointer hover:scale-110 duration-300">
            {box.icon}
          </section>
          <section class="block border-l border-gray-300 m-3">
            <div class="pl-3">
              <h1 class="text-gray-600 font-semibold text-lg">
                {box.counting}
              </h1>
              <h3 class="bg-clip-text text-transparent bg-gradient-to-l from-[#005BC4] to-[#27272A] text-sm font-bold">
                {box.name}
              </h3>
            </div>
          </section>
        </div>
      ))}
      <div className="my-10">
        <div className="flex  items-center">
          <MdLineWeight />
          <h1 className="text-xl mx-2">Latest Blog</h1>
        </div>
        <LatestBlog />
      </div>
    </div>
  );
}

export default DashbaordOverview;
