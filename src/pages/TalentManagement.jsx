import React, { useState } from "react";
import {
  Search,
  ChevronDown,
  Filter,
  Star,
  Eye,
  MoreVertical,
  Check,
  X,
  RotateCcw,
  Image,
  Video,
  Music,
  FileText,
  Heart,
  MessageCircle,
  CheckCircle,
  Clock,
  Flag,
  Plus,
} from "lucide-react";

import "./TalentManagement.css";

const talents = [
  {
    id: 1,
    title: "Musical Singing",
    creator: "Soni Limbu",
    time: "2h ago",
    category: "Singing",
    likes: 45,
    comments: 12,
    status: "Approved",
    type: "audio",
    image: "/images/talent1.jpg",
  },
  {
    id: 2,
    title: "Nature Photography",
    creator: "Smita Poudel",
    time: "1d ago",
    category: "Photography",
    likes: 27,
    comments: 8,
    status: "Approved",
    type: "image",
    image: "/images/talent2.jpg",
  },
  {
    id: 3,
    title: "E-commerce Website Design",
    creator: "Soni Limbu",
    time: "2d ago",
    category: "Web Development",
    likes: 36,
    comments: 10,
    status: "Pending Review",
    type: "code",
    image: "/images/talent3.jpg",
  },
  {
    id: 4,
    title: "Pencil Sketch Art",
    creator: "Ramesh Rai",
    time: "3d ago",
    category: "Art",
    likes: 19,
    comments: 6,
    status: "Pending Review",
    type: "image",
    image: "/images/talent4.jpg",
  },
  {
    id: 5,
    title: "Classical Dance",
    creator: "Pema Lama",
    time: "4d ago",
    category: "Dancing",
    likes: 14,
    comments: 3,
    status: "Rejected",
    type: "video",
    image: "/images/talent5.jpg",
  },
];

function TalentManagement() {
  const [activeTab, setActiveTab] = useState("All Talents");
  const [search, setSearch] = useState("");

  const filteredTalents = talents.filter((talent) => {
    const matchesSearch =
      talent.title.toLowerCase().includes(search.toLowerCase()) ||
      talent.creator.toLowerCase().includes(search.toLowerCase()) ||
      talent.category.toLowerCase().includes(search.toLowerCase());

    const matchesTab =
      activeTab === "All Talents" ||
      (activeTab === "Pending Review" &&
        talent.status === "Pending Review") ||
      (activeTab === "Approved" && talent.status === "Approved") ||
      (activeTab === "Rejected" && talent.status === "Rejected");

    return matchesSearch && matchesTab;
  });

  return (
    <div className="talent-management-page">

      {/* PAGE HEADER */}
      <div className="talent-page-header">
        <div>
          <h1>Talent Management</h1>
          <p>Review, organize and manage platform talents</p>
        </div>

        <button className="add-talent-btn">
          <Plus size={18} />
          Add New Talent
        </button>
      </div>

      {/* STAT CARDS */}
      <div className="talent-stat-grid">

        <div className="talent-stat-card purple">
          <div className="stat-icon">
            <Music size={22} />
          </div>

          <div>
            <span>Total Talents</span>
            <strong>128</strong>
            <small>↗ 12% from last month</small>
          </div>
        </div>

        <div className="talent-stat-card green">
          <div className="stat-icon">
            <CheckCircle size={22} />
          </div>

          <div>
            <span>Active Talents</span>
            <strong>98</strong>
            <small>↗ 8% from last month</small>
          </div>
        </div>

        <div className="talent-stat-card yellow">
          <div className="stat-icon">
            <Star size={22} />
          </div>

          <div>
            <span>Featured Talents</span>
            <strong>16</strong>
            <small>★ Showcase on homepage</small>
          </div>
        </div>

        <div className="talent-stat-card red">
          <div className="stat-icon">
            <Flag size={22} />
          </div>

          <div>
            <span>Flagged Talents</span>
            <strong>7</strong>
            <small>⚑ Needs attention</small>
          </div>
        </div>

      </div>

      {/* MAIN CONTENT */}
      <div className="talent-content-layout">

        {/* LEFT MAIN TABLE */}
        <div className="talent-main-card">

          {/* TABS */}
          <div className="talent-tabs">

            <button
              className={activeTab === "All Talents" ? "active" : ""}
              onClick={() => setActiveTab("All Talents")}
            >
              All Talents
            </button>

            <button
              className={activeTab === "Pending Review" ? "active" : ""}
              onClick={() => setActiveTab("Pending Review")}
            >
              Pending Review
              <span>18</span>
            </button>

            <button
              className={activeTab === "Approved" ? "active" : ""}
              onClick={() => setActiveTab("Approved")}
            >
              Approved
              <span>98</span>
            </button>

            <button
              className={activeTab === "Rejected" ? "active" : ""}
              onClick={() => setActiveTab("Rejected")}
            >
              Rejected
              <span>7</span>
            </button>

            <button>
              Featured
              <span>16</span>
            </button>

          </div>

          {/* FILTER BAR */}
          <div className="talent-filter-bar">

            <div className="talent-search">
              <Search size={18} />
              <input
                type="text"
                placeholder="Search talents..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <button className="filter-select">
              All Categories
              <ChevronDown size={16} />
            </button>

            <button className="filter-select">
              All Formats
              <ChevronDown size={16} />
            </button>

            <button className="filter-select">
              Sort: Newest
              <ChevronDown size={16} />
            </button>

            <button className="filter-btn">
              <Filter size={16} />
              Filter
            </button>

          </div>

          {/* TALENT LIST */}
          <div className="talent-list">

            {filteredTalents.map((talent) => (

              <div className="talent-row" key={talent.id}>

                {/* IMAGE */}
                <div className="talent-image">
                  <img
                    src={talent.image}
                    alt={talent.title}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>

                {/* TITLE */}
                <div className="talent-info">
                  <h3>{talent.title}</h3>
                  <p>
                    By {talent.creator}
                    <span>•</span>
                    {talent.time}
                  </p>
                </div>

                {/* CATEGORY */}
                <div className="talent-category">
                  <span>{talent.category}</span>
                </div>

                {/* TYPE */}
                <div className="talent-type">

                  {talent.type === "audio" && <Music size={16} />}
                  {talent.type === "image" && <Image size={16} />}
                  {talent.type === "video" && <Video size={16} />}
                  {talent.type === "code" && <FileText size={16} />}

                </div>

                {/* ENGAGEMENT */}
                <div className="talent-engagement">

                  <span>
                    <Heart size={15} />
                    {talent.likes}
                  </span>

                  <span>
                    <MessageCircle size={15} />
                    {talent.comments}
                  </span>

                </div>

                {/* STATUS */}
                <div className={`talent-status ${talent.status
                  .toLowerCase()
                  .replaceAll(" ", "-")}`}>

                  {talent.status === "Approved" && (
                    <CheckCircle size={14} />
                  )}

                  {talent.status === "Pending Review" && (
                    <Clock size={14} />
                  )}

                  {talent.status === "Rejected" && (
                    <X size={14} />
                  )}

                  {talent.status}

                </div>

                {/* ACTIONS */}
                <div className="talent-actions">

                  <button className="icon-action featured">
                    <Star size={16} />
                  </button>

                  <button className="icon-action">
                    <Eye size={16} />
                  </button>

                  {talent.status === "Pending Review" && (
                    <button className="icon-action approve">
                      <Check size={16} />
                    </button>
                  )}

                  {talent.status === "Rejected" && (
                    <button className="icon-action restore">
                      <RotateCcw size={16} />
                    </button>
                  )}

                  <button className="icon-action">
                    <MoreVertical size={16} />
                  </button>

                </div>

              </div>

            ))}

          </div>

          {/* PAGINATION */}
          <div className="talent-pagination">

            <span>
              Showing 1 to {filteredTalents.length} of 128 talents
            </span>

            <div>
              <button>‹</button>
              <button className="current">1</button>
              <button>2</button>
              <button>3</button>
              <button>...</button>
              <button>13</button>
              <button>›</button>
            </div>

          </div>

        </div>

        {/* RIGHT SIDEBAR */}
        <div className="talent-right-sidebar">

          {/* QUICK ACTIONS */}
          <div className="side-widget">

            <h3>Quick Actions</h3>

            <button>
              <Check size={16} />
              Approve Selected
            </button>

            <button>
              <X size={16} />
              Reject Selected
            </button>

            <button>
              <Star size={16} />
              Feature Selected
            </button>

            <button>
              <Star size={16} />
              Remove Featured
            </button>

            <button className="delete-action">
              <X size={16} />
              Delete Selected
            </button>

          </div>

          {/* TOP CATEGORIES */}
          <div className="side-widget">

            <div className="widget-title">
              <h3>Top Categories</h3>
              <a href="#">View all</a>
            </div>

            <div className="category-progress">
              <div>
                <span>Singing</span>
                <b>36</b>
              </div>
              <div className="progress">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>

            <div className="category-progress">
              <div>
                <span>Photography</span>
                <b>28</b>
              </div>
              <div className="progress">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>

            <div className="category-progress">
              <div>
                <span>Web Development</span>
                <b>22</b>
              </div>
              <div className="progress">
                <span style={{ width: "55%" }}></span>
              </div>
            </div>

            <div className="category-progress">
              <div>
                <span>Art</span>
                <b>16</b>
              </div>
              <div className="progress">
                <span style={{ width: "42%" }}></span>
              </div>
            </div>

            <div className="category-progress">
              <div>
                <span>Dancing</span>
                <b>14</b>
              </div>
              <div className="progress">
                <span style={{ width: "35%" }}></span>
              </div>
            </div>

          </div>

          {/* FORMATS */}
          <div className="side-widget">

            <div className="widget-title">
              <h3>Talent Formats</h3>
              <a href="#">View all</a>
            </div>

            <div className="format-item">
              <span>
                <Image size={16} />
                Images
              </span>
              <b>65</b>
            </div>

            <div className="format-item">
              <span>
                <Video size={16} />
                Videos
              </span>
              <b>38</b>
            </div>

            <div className="format-item">
              <span>
                <Music size={16} />
                Audio
              </span>
              <b>15</b>
            </div>

            <div className="format-item">
              <span>
                <FileText size={16} />
                Documents
              </span>
              <b>10</b>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default TalentManagement;