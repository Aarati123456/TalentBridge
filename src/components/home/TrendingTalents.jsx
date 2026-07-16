import React from "react";
import TalentCard from "./TalentCard";

const trendingTalents = [
  {
    id: 1,
    image: "https://picsum.photos/400/250?1",
    avatar: "https://i.pravatar.cc/100?img=1",
    name: "John",
    title: "Photographer",
    category: "Photography",
    likes: 200,
    rating: 4.8,
  },
  {
    id: 2,
    image: "https://picsum.photos/400/250?2",
    avatar: "https://i.pravatar.cc/100?img=2",
    name: "Emma",
    title: "Singer",
    category: "Music",
    likes: 150,
    rating: 4.7,
  },
  {
    id: 3,
    image: "https://picsum.photos/400/250?3",
    avatar: "https://i.pravatar.cc/100?img=3",
    name: "David",
    title: "Web Developer",
    category: "Development",
    likes: 320,
    rating: 5.0,
  },
  {
    id: 4,
    image: "https://picsum.photos/400/250?4",
    avatar: "https://i.pravatar.cc/100?img=4",
    name: "Lisa",
    title: "Graphic Designer",
    category: "Design",
    likes: 180,
    rating: 4.9,
  },
];

const TrendingTalents = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-2">
          Trending Talents
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Discover the most popular talents.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trendingTalents.map((talent) => (
            <TalentCard
              key={talent.id}
              image={talent.image}
              avatar={talent.avatar}
              name={talent.name}
              title={talent.title}
              category={talent.category}
              likes={talent.likes}
              rating={talent.rating}
              trending={true}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingTalents;