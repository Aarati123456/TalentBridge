import React from "react";
import { FaStar, FaHeart } from "react-icons/fa";

const TalentCard = ({
  image,
  avatar,
  name,
  title,
  category,
  likes,
  rating,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">

      {/* Talent Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-52 object-cover"
      />

      <div className="p-5">

        {/* User */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={avatar}
            alt={name}
            className="w-12 h-12 rounded-full"
          />

          <div>
            <h3 className="font-semibold">{name}</h3>
            <p className="text-sm text-gray-500">{title}</p>
          </div>
        </div>

        {/* Category */}
        <span className="bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full text-sm">
          {category}
        </span>

        {/* Rating */}
        <div className="flex items-center gap-2 mt-4">
          <FaStar className="text-yellow-400" />
          <span>{rating}</span>
        </div>

        {/* Likes */}
        <div className="flex items-center gap-2 mt-2">
          <FaHeart className="text-red-500" />
          <span>{likes} Likes</span>
        </div>

        {/* Button */}
        <button className="mt-5 w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
          View Details
        </button>

      </div>
    </div>
  );
};

export default TalentCard;