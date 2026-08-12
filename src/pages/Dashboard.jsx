import React from "react";
import {
  Star,
  Menu,
  Search,
  Bell,
  ChevronDown,
  Home,
  Compass,
  UserRound,
  Upload,
  Grid2X2,
  MessageSquare,
  Settings,
  LogOut,
  Heart,
  Music,
  PersonStanding,
  Code2,
  Camera,
  Palette,
  PenLine,
  CircleDot,
  Users,
  Folder,
  Trophy,
  ArrowUp,
  UserPlus,
} from "lucide-react";

import "./Dashboard.css";

const recentTalents = [
  {
    title: "Melodic Voice Performance",
    name: "Sunita Rai",
    category: "Singing",
    time: "2h ago",
    likes: 45,
    image: "/images/singing.jpg",
  },
  {
    title: "E-commerce Website",
    name: "Bimal Shrestha",
    category: "Web Development",
    time: "5h ago",
    likes: 38,
    image: "/images/coding.jpg",
  },
  {
    title: "Nature Photography",
    name: "Prabin Gurung",
    category: "Photography",
    time: "1d ago",
    likes: 27,
    image: "/images/photography.jpg",
  },
  {
    title: "Pencil Sketch Art",
    name: "Anjana Tamang",
    category: "Art",
    time: "1d ago",
    likes: 21,
    image: "/images/art.jpg",
  },
];

const categories = [
  { name: "Singing", icon: Music, color: "purple" },
  { name: "Dancing", icon: PersonStanding, color: "pink" },
  { name: "Coding", icon: Code2, color: "blue" },
  { name: "Photography", icon: Camera, color: "green" },
  { name: "Art", icon: Palette, color: "orange" },
  { name: "Writing", icon: PenLine, color: "purple" },
  { name: "Sports", icon: CircleDot, color: "cyan" },
  { name: "Others", icon: Grid2X2, color: "gray" },
];

function Dashboard() {
  return (
    <div className="dashboard">

      {/* ================= SIDEBAR ================= */}
      <aside className="sidebar">

        <div className="sidebar-logo">
          <Star size={27} fill="none" />
          <span>TalentBridge</span>
        </div>

        <nav className="sidebar-nav">

          <a className="nav-item active">
            <Home size={20} />
            <span>Dashboard</span>
          </a>

          <a className="nav-item">
            <Compass size={20} />
            <span>Explore Talents</span>
          </a>

          <a className="nav-item">
            <UserRound size={20} />
            <span>My Talents</span>
          </a>

          <a className="nav-item">
            <Upload size={20} />
            <span>Upload Talent</span>
          </a>

          <a className="nav-item">
            <Grid2X2 size={20} />
            <span>Categories</span>
          </a>

          <a className="nav-item">
            <MessageSquare size={20} />
            <span>Messages</span>
          </a>

          <a className="nav-item">
            <Bell size={20} />
            <span>Notifications</span>
            <span className="badge">3</span>
          </a>

          <a className="nav-item">
            <UserRound size={20} />
            <span>Profile</span>
          </a>

          <a className="nav-item">
            <Settings size={20} />
            <span>Settings</span>
          </a>

          <a className="nav-item">
            <LogOut size={20} />
            <span>Logout</span>
          </a>

        </nav>

        {/* Sidebar Bottom Card */}
        <div className="profile-card">
          <div className="trophy">
            <Trophy size={45} />
          </div>

          <h4>Showcase your talent</h4>

          <p>
            Upload your talent and get discovered.
          </p>

          <button>Upload Now</button>
        </div>

      </aside>


      {/* ================= MAIN ================= */}
      <main className="main-content">

        {/* HEADER */}
        <header className="top-header">

          <button className="menu-button">
            <Menu size={24} />
          </button>

          <div className="search-box">
            <Search size={19} />
            <input
              type="text"
              placeholder="Search talents, categories..."
            />
          </div>

          <div className="header-right">

            <div className="notification">
              <Bell size={21} />
              <span>3</span>
            </div>

            <div className="user-profile">

              <div className="avatar">
                A
              </div>

              <span>Aarati Angbuhang</span>

              <ChevronDown size={17} />

            </div>

          </div>

        </header>


        {/* PAGE */}
        <section className="page-content">

          {/* WELCOME */}
          <div className="welcome">
            <h1>
              Welcome back, Aarati! 👋
            </h1>

            <p>
              Here's what's happening on TalentBridge today.
            </p>
          </div>


          {/* STAT CARDS */}
          <div className="stats-grid">

            <div className="stat-card">
              <div className="stat-icon blue">
                <Users size={25} />
              </div>

              <div>
                <h2>128</h2>
                <p>Total Talents</p>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon green">
                <Users size={25} />
              </div>

              <div>
                <h2>342</h2>
                <p>Total Users</p>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon purple">
                <Folder size={25} />
              </div>

              <div>
                <h2>16</h2>
                <p>Categories</p>
              </div>
            </div>


            <div className="stat-card">
              <div className="stat-icon orange">
                <Star size={25} />
              </div>

              <div>
                <h2>56</h2>
                <p>My Talents</p>
              </div>
            </div>

          </div>


          {/* TWO COLUMN SECTION */}
          <div className="content-grid">

            {/* RECENT TALENTS */}
            <div className="panel recent-panel">

              <div className="panel-header">
                <h3>Recent Talents</h3>
                <button>View all</button>
              </div>

              <div className="talent-list">

                {recentTalents.map((talent, index) => (

                  <div className="talent-item" key={index}>

                    <img
                      src={talent.image}
                      alt={talent.title}
                    />

                    <div className="talent-info">

                      <h4>{talent.title}</h4>

                      <p>
                        By {talent.name}
                      </p>

                      <span className={`category-tag ${talent.category
                        .toLowerCase()
                        .replace(" ", "-")}`}>
                        {talent.category}
                      </span>

                    </div>

                    <div className="talent-meta">

                      <span>{talent.time}</span>

                      <div>
                        <Heart size={17} />
                        {talent.likes}
                      </div>

                    </div>

                  </div>

                ))}

              </div>

            </div>


            {/* RIGHT SIDE */}
            <div className="right-column">

              {/* CATEGORIES */}
              <div className="panel categories-panel">

                <div className="panel-header">
                  <h3>Top Categories</h3>
                  <button>View all</button>
                </div>

                <div className="categories-grid">

                  {categories.map((category, index) => {

                    const Icon = category.icon;

                    return (
                      <div
                        className="category-box"
                        key={index}
                      >

                        <div
                          className={`category-icon ${category.color}`}
                        >
                          <Icon size={19} />
                        </div>

                        <span>
                          {category.name}
                        </span>

                      </div>
                    );
                  })}

                </div>

              </div>


              {/* QUICK ACTIONS */}
              <div className="panel quick-panel">

                <h3>Quick Actions</h3>

                <div className="quick-grid">

                  <div className="quick-card">

                    <div className="quick-icon blue">
                      <ArrowUp size={22} />
                    </div>

                    <strong>Upload Talent</strong>

                    <p>
                      Share your talent with the world
                    </p>

                  </div>


                  <div className="quick-card">

                    <div className="quick-icon green">
                      <Search size={22} />
                    </div>

                    <strong>Explore Talents</strong>

                    <p>
                      Discover amazing talents
                    </p>

                  </div>


                  <div className="quick-card">

                    <div className="quick-icon purple">
                      <UserPlus size={22} />
                    </div>

                    <strong>View Profile</strong>

                    <p>
                      Manage your profile and settings
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>


          {/* BOTTOM CTA */}
          <div className="bottom-banner">

            <div className="banner-icon">
              <Trophy size={38} />
            </div>

            <div className="banner-text">

              <h3>
                Showcase Your Talent to the World!
              </h3>

              <p>
                Upload your talent and connect with people
                who appreciate your skills.
              </p>

            </div>

            <button>
              Upload Talent Now →
            </button>

          </div>

        </section>

      </main>

    </div>
  );
}

export default Dashboard;