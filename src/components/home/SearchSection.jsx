import React from "react";

const SearchSection = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Find Amazing Talents
        </h2>

        {/* Search Box */}
        <div className="bg-gray-100 rounded-2xl shadow-lg p-6 flex flex-col md:flex-row gap-4">

          {/* Search Input */}
          <input
            type="text"
            placeholder="Search talents..."
            className="flex-1 px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          {/* Category Dropdown */}
          <select className="px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500">
            <option>Select Category</option>
            <option>Singing</option>
            <option>Dancing</option>
            <option>Coding</option>
            <option>Photography</option>
            <option>Art</option>
            <option>Sports</option>
            <option>Writing</option>
          </select>

          {/* Search Button */}
          <button className="bg-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-indigo-700 transition">
            Search
          </button>

        </div>
      </div>
    </section>
  );
};

export default SearchSection;