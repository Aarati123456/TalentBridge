import React from "react";
import "./Categories.css";
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
    image: "https://picsum.photos/seed/singing/600/400",
  },
  {
    name: "Classical Dance",
    description: "Explore talented dancers and dance performers.",
    icon: Music2,
    image: "https://picsum.photos/seed/dance/600/400",
  },
  {
    name: "Coding & Development",
    description: "Find talented developers and programmers.",
    icon: Code2,
    image: "https://picsum.photos/seed/coding/600/400",
  },
  {
    name: "Photography",
    description: "Explore creative photographers and visual artists.",
    icon: Camera,
    image: "https://picsum.photos/seed/photography/600/400",
  },
  {
    name: "Art & Design",
    description: "Discover creative artists and designers.",
    icon: Palette,
    image: "https://picsum.photos/seed/art/600/400",
  },
  {
    name: "Writing",
    description: "Find talented writers and content creators.",
    icon: PenLine,
    image: "https://picsum.photos/seed/writing/600/400",
  },
  {
    name: "Video & Film",
    description: "Explore filmmakers, editors and video creators.",
    icon: Video,
    image: "https://picsum.photos/seed/video/600/400",
  },
  {
    name: "Music & Instruments",
    description: "Discover musicians and instrumental performers.",
    icon: Music2,
    image: "https://picsum.photos/seed/instruments/600/400",
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
      <div className="content-wrap">
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
                <div className="category-image">
                  <img src={category.image} alt={category.name} />
              </div>

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
    </div>
  );
};

export default Categories;