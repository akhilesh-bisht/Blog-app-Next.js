"use client";
import Header from "@/components/Header";
import BlogList from "@/components/BlogList";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <h1 className="text-2xl font-bold ">
      <Header />
      <BlogList />
<Footer />
    </h1>
  );
}
