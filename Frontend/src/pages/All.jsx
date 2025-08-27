import { BlogCard, Hero, Subscribe } from "../components/Comp_index";
import { useContext } from "react";
import { contextData } from "../Context/Context";

function All() {
  const { filteredData } = useContext(contextData);

  return (
    <>
      <Hero />

      <div className="px-6 sm:px-10 lg:px-20 py-10">
        {filteredData.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredData.map((blog, index) => (
              <BlogCard key={index} blog={blog} />
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center py-20">
            <h1 className="text-red-600 text-center text-2xl sm:text-3xl lg:text-4xl font-bold animate-pulse">
              🚫 Results Not Found
            </h1>
          </div>
        )}
      </div>

      <Subscribe />
    </>
  );
}

export default All;
