import React from "react";

const SearchSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-gray-900">
            Find Amazing Talents
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Search talented people from different categories.
          </p>
        </div>

        {/* Search Box */}
        <div className="bg-white rounded-2xl shadow-xl p-6 flex flex-col md:flex-row gap-4">

          {/* Search Input */}
          <input
            type="text"
            placeholder="🔍 Search talents..."
            className="flex-1 px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600"
          />

          {/* Category */}
          <select className="px-5 py-4 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-600">
            <option>Select Category</option>
            <option>Singing</option>
            <option>Dancing</option>
            <option>Coding</option>
            <option>Photography</option>
            <option>Art</option>
            <option>Sports</option>
            <option>Writing</option>
          </select>

          {/* Button */}
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-8 py-4 rounded-xl font-semibold transition duration-300">
            Search
          </button>

        </div>
      </div>
    </section>
  );
};

export default SearchSection;