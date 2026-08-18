import React, { useState } from "react";
import {
  FiUser,
  FiEye,
  FiHeart,
  FiStar,
  FiUploadCloud,
  FiSearch,
  FiChevronDown,
  FiMoreVertical,
  FiEdit2,
  FiCopy,
  FiShare2,
  FiArchive,
  FiTrash2,
  FiBarChart2,
  FiHome,
  FiCompass,
  FiGrid,
  FiMessageSquare,
  FiBell,
  FiUsers,
} from "react-icons/fi";

import "./MyTalents.css";

const talents = [
  {
    title: "Acoustic Guitar Performance",
    category: "Music",
    subcategory: "Acoustic",
    description: "Instrumental guitar performance with emotion and rhythm.",
    image:
      "https://images.unsplash.com/photo-1525201548942-d8732f6617a0?w=500",
    views: 320,
    likes: 85,
    rating: 4.8,
    status: "Published",
    date: "May 15, 2025",
    duration: "03:45",
  },
  {
    title: "Landscape Painting",
    category: "Visual Art",
    subcategory: "Painting",
    description: "Acrylic painting of nature and mountain.",
    image:
      "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500",
    views: 210,
    likes: 60,
    rating: 4.5,
    status: "Published",
    date: "May 12, 2025",
  },
  {
    title: "Hip Hop Dance",
    category: "Dance",
    subcategory: "Freestyle",
    description: "High energy hip hop freestyle performance.",
    image:
      "https://images.unsplash.com/photo-1547153760-18fc86324498?w=500",
    views: 430,
    likes: 120,
    rating: 4.7,
    status: "Published",
    date: "May 10, 2025",
    duration: "02:15",
  },
  {
    title: "Pencil Portrait Sketch",
    category: "Visual Art",
    subcategory: "Sketch",
    description: "Realistic pencil sketch of a portrait.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500",
    views: 0,
    likes: 0,
    rating: null,
    status: "Draft",
    date: "May 08, 2025",
  },
];

const navMain = [
  { icon: <FiHome />, label: "Dashboard" },
  { icon: <FiCompass />, label: "Explore Talents" },
  { icon: <FiGrid />, label: "Categories" },
];

const navAccount = [
  { icon: <FiUser />, label: "My Talents", active: true },
  { icon: <FiMessageSquare />, label: "Messages" },
  { icon: <FiBell />, label: "Notifications", badge: 3 },
  { icon: <FiUser />, label: "Profile" },
];

const navAdmin = [
  { icon: <FiUsers />, label: "User Management" },
  { icon: <FiGrid />, label: "Talent Management" },
  { icon: <FiBarChart2 />, label: "Reports" },
];

function MyTalents() {
  const [activeTab, setActiveTab] = useState("All Talents");
  const [openMenu, setOpenMenu] = useState(null);
  const [search, setSearch] = useState("");

  const filteredTalents = talents.filter((talent) => {
    const matchesSearch = talent.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesTab =
      activeTab === "All Talents" ||
      (activeTab === "Published" && talent.status === "Published") ||
      (activeTab === "Drafts" && talent.status === "Draft");

    return matchesSearch && matchesTab;
  });

  const tabs = [
    { name: "All Talents", count: 8 },
    { name: "Published", count: 6 },
    { name: "Drafts", count: 2 },
    { name: "Saved", count: 0 },
    { name: "Archived", count: 0 },
  ];

  return (
    <div className="my-talents-page">

      {/* SIDEBAR */}
      <aside className="talent-sidebar">

        <div className="sidebar-section-title">MAIN</div>

        <div className="sidebar-menu">
          {navMain.map((item) => (
            <div className="sidebar-item" key={item.label}>
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        <div className="sidebar-section-title account-title">
          MY ACCOUNT
        </div>

        <div className="sidebar-menu">
          {navAccount.map((item) => (
            <div
              className={`sidebar-item ${item.active ? "active" : ""}`}
              key={item.label}
            >
              <span>{item.icon}</span>

              <span className="nav-label">{item.label}</span>

              {item.badge && (
                <span className="notification-badge">
                  {item.badge}
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="sidebar-section-title admin-title">
          ADMIN
        </div>

        <div className="sidebar-menu">
          {navAdmin.map((item) => (
            <div className="sidebar-item" key={item.label}>
              <span>{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* SHOWCASE CARD */}
        <div className="showcase-card">
          <h4>Showcase your talent</h4>

          <p>
            Get discovered by thousands of people and grow your personal
            brand.
          </p>

          <button>
            Start Uploading
            <span>→</span>
          </button>

          <div className="showcase-icon">
            ⭐
          </div>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="talent-content">

        {/* HEADER */}
        <div className="talent-header">
          <div>
            <h1>My Talents</h1>
            <p>Manage talents you've uploaded or saved.</p>
          </div>

          <button className="upload-btn">
            <FiUploadCloud />
            Upload New Talent
          </button>
        </div>

        {/* STAT CARDS */}
        <div className="stats-grid">

          <div className="stat-card">
            <div className="stat-icon blue">
              <FiUser />
            </div>

            <div>
              <span>Total Talents</span>
              <strong>8</strong>
              <small>+2 this month</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon green">
              <FiEye />
            </div>

            <div>
              <span>Total Views</span>
              <strong>1,245</strong>
              <small>+180 this month</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon red">
              <FiHeart />
            </div>

            <div>
              <span>Total Likes</span>
              <strong>320</strong>
              <small>+45 this month</small>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon yellow">
              <FiStar />
            </div>

            <div>
              <span>Avg. Rating</span>
              <strong>4.6 / 5</strong>
              <small>+0.2 this month</small>
            </div>
          </div>

        </div>

        {/* FILTER BAR */}
        <div className="filter-row">

          <div className="tabs">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                className={activeTab === tab.name ? "tab active" : "tab"}
                onClick={() => setActiveTab(tab.name)}
              >
                {tab.name}
                <span>{tab.count}</span>
              </button>
            ))}
          </div>

          <div className="filter-actions">

            <div className="search-box">
              <FiSearch />
              <input
                type="text"
                placeholder="Search my talents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button className="sort-btn">
              Sort by: Latest
              <FiChevronDown />
            </button>

          </div>
        </div>

        {/* TALENT LIST */}
        <div className="talent-list">

          {filteredTalents.map((talent, index) => (
            <div className="talent-card" key={talent.title}>

              <div className="talent-image-wrapper">
                <img src={talent.image} alt={talent.title} />

                {talent.duration && (
                  <span className="duration">
                    {talent.duration}
                  </span>
                )}
              </div>

              <div className="talent-info">

                <h3>{talent.title}</h3>

                <div className="category-line">
                  <span
                    className={
                      talent.status === "Draft"
                        ? "status-dot draft"
                        : "status-dot"
                    }
                  ></span>

                  <span>{talent.category}</span>

                  <b>•</b>

                  <span>{talent.subcategory}</span>
                </div>

                <p>{talent.description}</p>

                <div className="talent-stats">

                  <span>
                    <FiEye />
                    {talent.views} views
                  </span>

                  <span className="like-stat">
                    <FiHeart />
                    {talent.likes} likes
                  </span>

                  <span className="rating-stat">
                    <FiStar />
                    {talent.rating || "—"}
                  </span>

                </div>

              </div>

              <div className="talent-right">

                <span
                  className={
                    talent.status === "Draft"
                      ? "talent-status draft-status"
                      : "talent-status"
                  }
                >
                  {talent.status}
                </span>

                <div className="date-info">
                  <small>
                    {talent.status === "Draft"
                      ? "Last edited"
                      : "Uploaded on"}
                  </small>

                  <strong>{talent.date}</strong>
                </div>

                <button
                  className="more-btn"
                  onClick={() =>
                    setOpenMenu(
                      openMenu === index ? null : index
                    )
                  }
                >
                  <FiMoreVertical />
                </button>

                {openMenu === index && (
                  <div className="action-menu">

                    <button>
                      <FiEye />
                      View
                    </button>

                    <button>
                      <FiEdit2 />
                      Edit
                    </button>

                    <button>
                      <FiCopy />
                      Duplicate
                    </button>

                    <button>
                      <FiShare2 />
                      Share
                    </button>

                    <button>
                      <FiArchive />
                      Archive
                    </button>

                    <button className="delete-action">
                      <FiTrash2 />
                      Delete
                    </button>

                  </div>
                )}

              </div>

            </div>
          ))}

        </div>

        {/* PAGINATION */}
        <div className="pagination">

          <button>«</button>
          <button>‹</button>
          <button className="current">1</button>
          <button>2</button>
          <button>›</button>
          <button>»</button>

        </div>

        {/* INSIGHTS */}
        <section className="insights-section">

          <div className="insights-header">

            <div>
              <div className="insight-title">
                <div className="insight-icon">
                  <FiBarChart2 />
                </div>

                <div>
                  <h3>Insights Overview</h3>
                  <p>Your talent performance in the last 30 days</p>
                </div>
              </div>
            </div>

            <button className="analytics-btn">
              <FiBarChart2 />
              View Full Analytics
            </button>

          </div>

          <div className="insight-grid">

            <div className="insight-card">
              <span>Views</span>
              <strong>1,245</strong>
              <small>▲ 18%</small>

              <div className="mini-chart">
                ╱╲╱╲╱╲╱
              </div>
            </div>

            <div className="insight-card">
              <span>Likes</span>
              <strong>320</strong>
              <small>▲ 12%</small>

              <div className="mini-chart">
                ╲╱╲╱╲╱
              </div>
            </div>

            <div className="insight-card">
              <span>Profile Visits</span>
              <strong>156</strong>
              <small>▲ 9%</small>

              <div className="mini-chart">
                ╱╲╱╲╱╲
              </div>
            </div>

            <div className="insight-card">
              <span>Avg. Rating</span>
              <strong>4.6</strong>
              <small>▲ 0.2</small>

              <div className="mini-chart">
                ╲╱╲╱╲
              </div>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default MyTalents;