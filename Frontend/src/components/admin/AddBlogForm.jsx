import { useState } from "react";
import { assets } from "../../assets/assets.js";

function AddBlogForm() {
  const [image, setImage] = useState();
  const [title, setTitle] = useState();
  const [subTitle, setSubTitle] = useState();
  const [category, setCategory] = useState();
  const [isPublished, setIsPublished] = useState();
  return (
    <form className="w-full mx-20 max-sm:mx-2 my-10 max-sm:my-2 p-6 bg-white shadow rounded-lg max-h-96 overflow-y-auto">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Add New Blog</h2>
      {/* Cover Image */}
      <div className="mb-5">
        <p>Thumbnail</p>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-900"
        >
          <img
            src={!image ? assets.upload_area : URL.createObjectURL(image)}
            alt="upload"
            className="w-10 h-10"
          />
          <input
            id="image"
            name="image"
            type="file"
            className="mt-2 block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-indigo-600 file:px-3 file:py-2 file:text-white hover:file:bg-indigo-500"
            onChange={(e) => setImage(e.target.files[0])}
            hidden
            required
          />
        </label>
      </div>
      {/* Blog Title */}
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-900"
        >
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter blog title"
          className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        />
      </div>

      {/* Blog Sub-Title */}
      <div className="mb-5">
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-900"
        >
          Sub-title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          placeholder="Enter blog title"
          className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        />
      </div>

      {/* Blog Content */}
      <div className="mb-5">
        <label
          htmlFor="content"
          className="block text-sm font-medium text-gray-900"
        >
          Blog Content
        </label>
        <textarea
          id="content"
          name="content"
          rows={6}
          placeholder="Write your blog here..."
          className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        />
      </div>

      {/* Category */}
      <div className="mb-5">
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-900"
        >
          Category
        </label>
        <select
          id="category"
          name="category"
          className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        >
          <option value="">Select category</option>
          <option value="tech">Tech</option>
          <option value="lifestyle">Lifestyle</option>
          <option value="news">News</option>
        </select>
      </div>

      {/* Status */}
      <div className="mb-6">
        <label
          htmlFor="status"
          className="block text-sm font-medium text-gray-900"
        >
          Status
        </label>
        <select
          id="status"
          name="status"
          className="mt-2 block w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-base text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-600 sm:text-sm"
        >
          <option value="draft">Draft</option>
          <option value="published">Published</option>
        </select>
      </div>

      {/* Submit Button */}
      <div className="flex justify-end">
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        >
          add Blog
        </button>
      </div>
    </form>
  );
}

export default AddBlogForm;
