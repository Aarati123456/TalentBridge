import React from "react";
import {
  FaMicrophone,
  FaMusic,
  FaCode,
  FaCamera,
  FaPalette,
  FaFootballBall,
  FaPenFancy,
} from "react-icons/fa";

const categories = [
  {
    icon: <FaMicrophone className="text-5xl text-indigo-600" />,
    title: "Singing",
    description: "Show your amazing vocal talent.",
  },
  {
    icon: <FaMusic className="text-5xl text-pink-500" />,
    title: "Dancing",
    description: "Express yourself through dance.",
  },
  {
    icon: <FaCode className="text-5xl text-green-600" />,
    title: "Coding",
    description: "Build creative software projects.",
  },
  {
    icon: <FaCamera className="text-5xl text-blue-500" />,
    title: "Photography",
    description: "Capture beautiful moments.",
  },
  {
    icon: <FaPalette className="text-5xl text-yellow-500" />,
    title: "Art",
    description: "Display your creative artwork.",
  },
  {
    icon: <FaFootballBall className="text-5xl text-red-500" />,
    title: "Sports",
    description: "Show your athletic abilities.",
  },
  {
    icon: <FaPenFancy className="text-5xl text-purple-600" />,
    title: "Writing",
    description: "Share stories and creative writing.",
  },
];

const TalentCategories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Talent Categories
        </h2>

        <p className="text-gray-500 text-center mb-12">
          Explore different categories and discover talented people.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-8 text-center hover:shadow-xl hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center mb-5">
                {category.icon}
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {category.title}
              </h3>

              <p className="text-gray-500">
                {category.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TalentCategories;