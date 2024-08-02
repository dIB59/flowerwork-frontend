import React from 'react';
import Head from 'next/head';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center py-2 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <Head>
        <title>Flowerwork - Innovating with Blockchain and AI</title>
        <meta name="description" content="Flowerwork is at the forefront of innovation, leveraging blockchain and AI to revolutionize industries." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center flex-1 px-20 text-center">
        <h1 className="text-6xl font-bold mb-6 animate-fadeIn">
          Welcome to <span className="text-yellow-300">Flowerwork</span>
        </h1>
        
        <p className="mt-3 text-2xl max-w-2xl animate-fadeIn delay-2s">
          At Flowerwork, we are pioneering the future with blockchain and AI.
        </p>

        <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
          <a href="#blockchain" className="p-6 mt-6 text-left border border-gray-300 w-96 rounded-xl hover:text-yellow-300 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold">Blockchain &rarr;</h3>
            <p className="mt-4 text-xl">
              Discover how we are utilizing blockchain technology to create secure and transparent solutions.
            </p>
          </a>

          <a href="#ai" className="p-6 mt-6 text-left border border-gray-300 w-96 rounded-xl hover:text-yellow-300 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold">Artificial Intelligence &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about our AI innovations that are driving intelligent automation and insights.
            </p>
          </a>

          <a href="#about" className="p-6 mt-6 text-left border border-gray-300 w-96 rounded-xl hover:text-yellow-300 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold">About Us &rarr;</h3>
            <p className="mt-4 text-xl">
              Get to know our mission, vision, and the team behind Flowerwork.
            </p>
          </a>

          <a href="#contact" className="p-6 mt-6 text-left border border-gray-300 w-96 rounded-xl hover:text-yellow-300 hover:border-yellow-300 transition-all duration-300 transform hover:scale-105">
            <h3 className="text-2xl font-bold">Contact Us &rarr;</h3>
            <p className="mt-4 text-xl">
              Reach out to us for collaboration, inquiries, or support.
            </p>
          </a>
        </div>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t border-gray-300 mt-8">
        <p>&copy; 2024 Flowerwork. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default HomePage;
