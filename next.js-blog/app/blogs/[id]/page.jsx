"use client";
import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import Link from "next/link";

const Page = ({ params }) => {
  const [data, setData] = useState(null);
  const { id } = params;

  // Fetch data based on the blog ID
  const fetchData = async () => {
    for (let i = 0; i < blog_data.length; i++) {
      if (Number(id) === blog_data[i].id) {
        setData(blog_data[i]);
        break;
      }
    }
  };

  // Use effect to call fetchData on mount
  useEffect(() => {
    fetchData();
  }, [id]);

  // Helper function to format the date
  const formatDate = (date) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString(undefined, options);
  };

  return (
    <div className="container mx-auto p-6">
      {data ? (
        <div className="blog-post space-y-6">
          {/* Blog Image */}
          <Link href="/">
            <h1>Back</h1>
          </Link>
          <img
            src={data.image.src}
            alt={data.title}
            className="w-full h-82 object-cover rounded-lg shadow-md"
            loading="lazy"
          />

          {/* Blog Title */}
          <h1 className="text-4xl font-bold text-gray-900">{data.title}</h1>

          {/* Blog Description */}
          <p className="text-lg text-gray-600">{data.description}</p>

          {/* Blog Details: Category, Date, Author */}
          <div className="flex items-center space-x-4 mt-4">
            <img
              src={data.author_img.src}
              alt={data.author}
              className="w-24 h-24 rounded-full border-2 border-gray-300"
            />
            <div>
              <p className="text-xl font-semibold text-gray-900">{data.author}</p>
              <p className="text-sm text-gray-500">{formatDate(data.date)} - {data.category}</p>
            </div>
          </div>

          {/* Blog Content */}
          <div className="text-lg text-gray-700 mt-6">
            {/* You can replace this with actual content if available */}
            <p>{data.content || "Blog content goes here..."}</p>
          </div>
        </div>
      ) : (
        <p className="text-center text-xl text-gray-600">Loading...</p>
      )}
    </div>
  );
};

export default Page;
