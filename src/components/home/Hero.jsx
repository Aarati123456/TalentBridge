import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 flex items-center">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* Left Content */}
        <div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight">
            Discover Hidden <span className="text-yellow-300">Talents</span>
          </h1>

          <p className="mt-6 text-lg text-gray-100">
            Showcase your skills, inspire others, and get recognized by the community.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition">
              Explore Talents
            </button>

            <button className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Side Illustration Placeholder */}
        <div className="flex justify-center">
          <div className="w-96 h-96 bg-white/20 rounded-3xl flex items-center justify-center shadow-2xl backdrop-blur-md">
            <span className="text-white text-2xl font-bold">
              Illustration
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;