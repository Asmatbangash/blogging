import { BlogCard, Hero, Subscribe } from "../components/Comp_index";
import { assets } from "../assets/assets";

function All() {
  return (
    <>
      <Hero />

      <div className="flex flex-wrap px-10 justify-center items-center gap-4">
        {assets.blogPosts.map((blog) => (
          <BlogCard blog={blog} />
        ))}
      </div>

      <Subscribe />
    </>
  );
}

export default All;
