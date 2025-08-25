import { useState } from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { BiAddToQueue } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { FaRegCommentDots } from "react-icons/fa";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { NavLink, useLocation } from "react-router-dom";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const sideNavigation = [
    {
      name: "Dashboard",
      href: "dashbaord",
      Icon: MdOutlineDashboardCustomize,
    },
    { name: "Add Blog", href: "add-blog", Icon: BiAddToQueue },
    { name: "Blog List", href: "blog-list", Icon: CiViewList },
    { name: "Comments", href: "comments", Icon: FaRegCommentDots },
  ];

  return (
    <>
      <div className="md:hidden flex items-center justify-between p-4 shadow-md bg-white">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? <HiOutlineX /> : <HiOutlineMenuAlt3 />}
        </button>
      </div>
      <div
        className={`fixed md:static top-0 left-0 z-50 max-w-72 min-h-screen bg-white p-4 flex flex-col  border-gray-200 transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0`}
      >
        <ul className="flex flex-col gap-2 mt-4">
          {sideNavigation.map((item, index) => {
            const isActive = location.pathname === item.href;
            return (
              <li key={index}>
                <NavLink
                  to={item.href}
                  onClick={() => setIsOpen(false)} // close on mobile click
                  className={({
                    isActive,
                  }) => `flex items-center gap-4 p-3 rounded-lg transition-all duration-300 
                    ${
                      isActive
                        ? "bg-purple-100 text-purple-700 font-semibold shadow-inner"
                        : "text-gray-600 hover:bg-purple-50 hover:text-purple-600"
                    }`}
                >
                  <item.Icon className="text-xl" />
                  <span className="truncate">{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 md:hidden"
        ></div>
      )}
    </>
  );
}

export default Sidebar;
