import Link from "next/link";
import Image from "next/image";
import { assets } from "@/Assets/assets";

function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-800 via-blue-700 to-blue-500 text-white p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Blog Title with Logo */}
        <Link href="/">
          <Image
            src={assets.logo}
            alt="Logo"
            width={180}
            height={40}
            className="w-[180px] sm:mx-auto"
          />
        </Link>

        {/* Get Started Button */}
        <button className="flex items-center gap-2 font-medium py-2 px-5 sm:py-3 sm:px-6 bg-yellow-500 hover:bg-yellow-400 text-black shadow-[7px_7px_0px_#000000] hover:scale-105 transition duration-300 ease-in-out">
          Get Started
          <Image src={assets.arrow} alt="Get Started" width={16} height={16} />
        </button>
      </div>

      {/* Hero Section */}
      <div className="text-center my-12">
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 text-white">
          Welcome to My Blog
        </h1>
        <p className="text-gray-200 text-lg mb-6">
          Explore the latest trends, articles, and insights on various topics.
        </p>

        {/* Newsletter Section */}
        <form action="" className="flex justify-center mt-6 space-x-3">
          <input
            type="email"
            placeholder="Enter your email"
            className="border border-gray-300 rounded-l-lg py-3 px-5 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent w-80 sm:w-96"
          />
          <button className="bg-yellow-500 text-black rounded-r-lg py-3 px-6 hover:bg-yellow-400 shadow-[7px_7px_0px_#000000] hover:scale-105 transition duration-300 ease-in-out">
            Subscribe
          </button>
        </form>
      </div>
    </header>
  );
}

export default Header;
