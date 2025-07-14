// pages/about.js

import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | My Blog</title>
        <meta name="description" content="Learn more about the people behind My Blog." />
      </Head>

      <main className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        <p className="text-lg mb-4">
          Welcome to <strong>My Blog</strong> — your go-to place for insights, stories, and guides across technology, design, development, and more.
        </p>

        <p className="text-lg mb-4">
          Our mission is to create helpful, well-researched, and engaging content for readers worldwide. Whether you're a beginner or an expert, we strive to offer something valuable to enhance your knowledge and spark your curiosity.
        </p>

        <p className="text-lg mb-4">
          Built with love by a small team of writers and developers who are passionate about sharing what they learn.
        </p>

        <p className="text-lg">
          Thank you for visiting! 🙌
        </p>
      </main>
    </>
  );
}
