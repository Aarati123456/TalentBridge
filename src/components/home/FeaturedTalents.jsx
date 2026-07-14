import React from "react";
import TalentCard from "./TalentCard";

const talents = Array.from({ length: 6 }, (_, index) => ({
  id: index + 1,
  image: "https://via.placeholder.com/400x250",
  avatar: "https://via.placeholder.com/80",
  name: `User ${index + 1}`,
  title: "Amazing Talent",
  category: "Coding",
  rating: 4.8,
  likes: 120 + index * 10,
}));

const FeaturedTalents = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-4">
          Featured Talents
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Discover talented creators from different categories.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {talents.map((talent) => (
            <TalentCard
              key={talent.id}
              image={talent.image}
              avatar={talent.avatar}
              name={talent.name}
              title={talent.title}
              category={talent.category}
              rating={talent.rating}
              likes={talent.likes}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedTalents;