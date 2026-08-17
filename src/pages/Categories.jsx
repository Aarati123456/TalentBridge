import React from "react";
import {
  Search,
  Mic2,
  Code2,
  Camera,
  Palette,
  PenLine,
  Video,
  Music2,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = [
  {
    name: "Musical Singing",
    description: "Discover talented singers and vocal performers.",
    icon: Mic2,
  },
  {
    name: "Classical Dance",
    description: "Explore talented dancers and dance performers.",
    icon: Music2,
  },
  {
    name: "Coding & Development",
    description: "Find talented developers and programmers.",
    icon: Code2,
  },
  {
    name: "Photography",
    description: "Explore creative photographers and visual artists.",
    icon: Camera,
  },
  {
    name: "Art & Design",
    description: "Discover creative artists and designers.",
    icon: Palette,
  },
  {
    name: "Writing",
    description: "Find talented writers and content creators.",
    icon: PenLine,
  },
  {
    name: "Video & Film",
    description: "Explore filmmakers, editors and video creators.",
    icon: Video,
  },
  {
    name: "Music & Instruments",
    description: "Discover musicians and instrumental performers.",
    icon: Music2,
  },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleExplore = (category) => {
    navigate("/explore-talents", {
      state: { category },
    });
  };

  return (
    <div className="categories-page">
      {/* Header */}
      <div className="categories-header">
        <div>
          <h1>Talent Categories</h1>
          <p>Explore talented creators by their skills and categories.</p>
        </div>
      </div>

      {/* Search */}
      <div className="category-search">
        <Search size={20} />
        <input
          type="text"
          placeholder="Search categories..."
        />
      </div>

      {/* Categories */}
      <div className="categories-grid">
        {categories.map((category) => {
          const Icon = category.icon;

          return (
            <div className="category-card" key={category.name}>
              <div className="category-icon">
                <Icon size={28} />
              </div>

              <h3>{category.name}</h3>

              <p>{category.description}</p>

              <button
                onClick={() => handleExplore(category.name)}
              >
                Explore Talents
                <ArrowRight size={17} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Categories;