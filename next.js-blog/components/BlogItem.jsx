import React from "react";
import Image from "next/image";
import Link from "next/link";

function BlogItem({ image, title, description, category, id }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Blog Image */}
      <Link href={`/blogs/${id}`}>
      <Image
        src={image}
        alt="Blog Thumbnail"
        width={400}
        height={250}
        className="w-full h-56 object-cover"
        />
        </Link>

      <div className="p-4">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 mt-2">{description}</p>

        {/* Category Badge */}
        <div className="flex justify-between items-center mt-4">
          <span className="bg-gray-200 text-gray-800 px-3 py-1 text-sm rounded-full">
            {category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
