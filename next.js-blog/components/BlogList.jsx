import React, { useState } from "react";
import BlogItem from "./BlogItem";
import { blog_data } from "@/Assets/assets"; // Import the blog data

function BlogList() {
  // State for selected category filter
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Filter the blog data based on the selected category
  const filteredBlogs = blog_data.filter(
    (blog) =>
      selectedCategory === "all" ||
      blog.category.toLowerCase() === selectedCategory.toLowerCase()
  );

  return (
    <div className="container mx-auto py-8">
      {/* Category Filters */}
      <div className="flex justify-center space-x-4 mb-6">
        <button
          onClick={() => setSelectedCategory("all")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          All
        </button>
        <button
          onClick={() => setSelectedCategory("technology")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Technology
        </button>
        <button
          onClick={() => setSelectedCategory("startup")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Startup
        </button>
        <button
          onClick={() => setSelectedCategory("lifestyle")}
          className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-700"
        >
          Lifestyle
        </button>
      </div>

      {/* Blog List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredBlogs.map((blog) => (
          <BlogItem
            key={blog.id}
            id={blog.id}
            image={blog.image}
            title={blog.title}
            description={blog.description} 
            category={blog.category}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogList;
