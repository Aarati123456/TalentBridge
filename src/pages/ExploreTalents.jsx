import React, { useState } from "react";
import "./ExploreTalents.css";
import { FiSearch } from "react-icons/fi";

const initialTalents = [
  {
    id: 1,
    name: "Soni Limbu",
    title: "Musical Singing",
    category: "Singing",
    image: "https://picsum.photos/seed/soni/600/400",
    avatar: "https://picsum.photos/seed/soni_avatar/80/80",
    likes: 156,
    rating: 4.8,
  },
  {
    id: 2,
    name: "Smita Poudel",
    title: "Nature Photography",
    category: "Photography",
    image: "https://picsum.photos/seed/smita/600/400",
    avatar: "https://picsum.photos/seed/smita_avatar/80/80",
    likes: 124,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Ramesh Rai",
    title: "E-commerce Website Design",
    category: "Web Development",
    image: "https://picsum.photos/seed/ramesh/600/400",
    avatar: "https://picsum.photos/seed/ramesh_avatar/80/80",
    likes: 98,
    rating: 4.6,
  },
  {
    id: 4,
    name: "Pema Lama",
    title: "Pencil Sketch Art",
    category: "Art",
    image: "https://picsum.photos/seed/pema/600/400",
    avatar: "https://picsum.photos/seed/pema_avatar/80/80",
    likes: 86,
    rating: 4.5,
  },
  {
    id: 5,
    name: "Tara Sherpa",
    title: "Classical Dance",
    category: "Dancing",
    image: "https://picsum.photos/seed/tara/600/400",
    avatar: "https://picsum.photos/seed/tara_avatar/80/80",
    likes: 72,
    rating: 4.4,
  },
];

const categories = ["All", "Singing", "Photography", "Web Development", "Art", "Dancing"];

const ExploreTalents = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = initialTalents.filter((t) => {
    const matchesQuery = (t.name + " " + t.title + " " + t.category)
      .toLowerCase()
      .includes(query.toLowerCase());
    const matchesCategory = activeCategory === "All" || t.category === activeCategory;
    return matchesQuery && matchesCategory;
  });

  return (
    <div className="explore-page">
      <div className="explore-header">
        <h1>Explore Talents</h1>
        <p>Discover talented creators and explore amazing work.</p>
      </div>

      {/* Search */}
      <div className="search-box" style={{ marginBottom: 12 }}>
        <FiSearch />
        <input
          placeholder="Search talents, skills, or creators"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Categories */}
      <div className="category-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            className={cat === activeCategory ? "active" : ""}
            onClick={() => setActiveCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Featured header */}
      <div className="featured-header">
        <h2>Featured Talents</h2>
        <span>Explore top picks curated by TalentBridge</span>
      </div>

      {/* Talent Grid */}
      <div className="talent-grid">
        {filtered.map((t) => (
          <div className="talent-card" key={t.id}>
            <div className="talent-image">
              <img src={t.image} alt={t.title} />
            </div>

            <div className="talent-content">
              <h3>{t.title}</h3>
              <p>
                <strong>{t.name}</strong> — <span>{t.category}</span>
              </p>

              <div className="talent-footer">
                <div className="stats">
                  <span>⭐ {t.rating}</span>
                  <span>❤️ {t.likes}</span>
                </div>
                <button>View Profile</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreTalents;