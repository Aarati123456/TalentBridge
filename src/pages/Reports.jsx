import React from "react";
import {
  FiUsers,
  FiGrid,
  FiUploadCloud,
  FiHeart,
  FiTrendingUp,
  FiTrendingDown,
  FiDownload,
  FiCalendar,
  FiEye,
  FiMessageCircle,
  FiStar,
} from "react-icons/fi";

import "./Reports.css";

const categoryData = [
  { name: "Singing", value: 35 },
  { name: "Photography", value: 25 },
  { name: "Web Development", value: 20 },
  { name: "Art", value: 12 },
  { name: "Dancing", value: 8 },
];

const topTalents = [
  {
    name: "Melodic Voice Performance",
    creator: "Soni Limbu",
    category: "Singing",
    views: "1,240",
    likes: "156",
    rating: "4.8",
  },
  {
    name: "Nature Photography",
    creator: "Smita Poudel",
    category: "Photography",
    views: "980",
    likes: "124",
    rating: "4.7",
  },
  {
    name: "E-commerce Website Design",
    creator: "Ramesh Rai",
    category: "Web Development",
    views: "860",
    likes: "98",
    rating: "4.6",
  },
  {
    name: "Pencil Sketch Art",
    creator: "Pema Lama",
    category: "Art",
    views: "720",
    likes: "86",
    rating: "4.5",
  },
];

function Reports() {
  return (
    <div className="reports-page">

      {/* HEADER */}
      <div className="reports-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p>
            Monitor platform performance and user engagement
          </p>
        </div>

        <div className="reports-header-actions">
          <button className="date-btn">
            <FiCalendar />
            Last 30 Days
          </button>

          <button className="export-btn">
            <FiDownload />
            Export Report
          </button>
        </div>
      </div>

      {/* STAT CARDS */}
      <div className="report-stat-grid">

        <div className="report-stat-card">
          <div className="report-icon purple">
            <FiUsers />
          </div>

          <div className="report-stat-content">
            <span>Total Users</span>
            <h2>1,284</h2>

            <p className="positive">
              <FiTrendingUp />
              12.5% from last month
            </p>
          </div>
        </div>

        <div className="report-stat-card">
          <div className="report-icon blue">
            <FiGrid />
          </div>

          <div className="report-stat-content">
            <span>Total Talents</span>
            <h2>642</h2>

            <p className="positive">
              <FiTrendingUp />
              8.2% from last month
            </p>
          </div>
        </div>

        <div className="report-stat-card">
          <div className="report-icon green">
            <FiUploadCloud />
          </div>

          <div className="report-stat-content">
            <span>Total Uploads</span>
            <h2>389</h2>

            <p className="positive">
              <FiTrendingUp />
              15.4% from last month
            </p>
          </div>
        </div>

        <div className="report-stat-card">
          <div className="report-icon orange">
            <FiHeart />
          </div>

          <div className="report-stat-content">
            <span>Total Engagement</span>
            <h2>12.8K</h2>

            <p className="negative">
              <FiTrendingDown />
              2.1% from last month
            </p>
          </div>
        </div>

      </div>

      {/* CHART SECTION */}
      <div className="analytics-grid">

        {/* USER GROWTH */}
        <div className="analytics-card user-growth-card">

          <div className="analytics-card-header">
            <div>
              <h3>User Growth</h3>
              <p>New registered users over the last 30 days</p>
            </div>

            <select>
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
              <option>Last 3 Months</option>
            </select>
          </div>

          <div className="fake-chart">

            <div className="chart-y-axis">
              <span>1500</span>
              <span>1200</span>
              <span>900</span>
              <span>600</span>
              <span>300</span>
              <span>0</span>
            </div>

            <div className="chart-area">

              <div className="chart-grid-line line1"></div>
              <div className="chart-grid-line line2"></div>
              <div className="chart-grid-line line3"></div>
              <div className="chart-grid-line line4"></div>
              <div className="chart-grid-line line5"></div>

              <svg
                className="growth-line"
                viewBox="0 0 700 240"
                preserveAspectRatio="none"
              >
                <polyline
                  points="0,205 70,190 140,195 210,165 280,175 350,140 420,150 490,105 560,115 630,70 700,45"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />

                <polyline
                  points="0,240 0,205 70,190 140,195 210,165 280,175 350,140 420,150 490,105 560,115 630,70 700,45 700,240"
                  fill="currentColor"
                  opacity="0.08"
                />
              </svg>

              <div className="chart-labels">
                <span>May 20</span>
                <span>May 25</span>
                <span>May 30</span>
                <span>Jun 5</span>
                <span>Jun 10</span>
                <span>Jun 15</span>
                <span>Jun 20</span>
              </div>

            </div>
          </div>

        </div>

        {/* CATEGORY CARD */}
        <div className="analytics-card category-card">

          <div className="analytics-card-header">
            <div>
              <h3>Talent Categories</h3>
              <p>Distribution of talents by category</p>
            </div>
          </div>

          <div className="category-chart">

            <div className="donut-chart">
              <div className="donut-center">
                <strong>642</strong>
                <span>Talents</span>
              </div>
            </div>

          </div>

          <div className="category-list">

            {categoryData.map((category, index) => (
              <div className="category-item" key={category.name}>

                <div className="category-name">
                  <span className={`category-dot dot-${index}`}></span>
                  <span>{category.name}</span>
                </div>

                <strong>{category.value}%</strong>

              </div>
            ))}

          </div>

        </div>

      </div>

      {/* ENGAGEMENT */}
      <div className="engagement-card">

        <div className="analytics-card-header">
          <div>
            <h3>Platform Engagement</h3>
            <p>Overall activity across the platform</p>
          </div>

          <select>
            <option>This Month</option>
            <option>Last Month</option>
            <option>This Year</option>
          </select>
        </div>

        <div className="engagement-grid">

          <div className="engagement-item">
            <div className="engagement-item-top">
              <FiEye />
              <span>Views</span>
            </div>
            <strong>28.4K</strong>
            <small>+14.8%</small>
          </div>

          <div className="engagement-item">
            <div className="engagement-item-top">
              <FiHeart />
              <span>Likes</span>
            </div>
            <strong>8.6K</strong>
            <small>+9.3%</small>
          </div>

          <div className="engagement-item">
            <div className="engagement-item-top">
              <FiMessageCircle />
              <span>Comments</span>
            </div>
            <strong>3.2K</strong>
            <small>+6.7%</small>
          </div>

          <div className="engagement-item">
            <div className="engagement-item-top">
              <FiStar />
              <span>Ratings</span>
            </div>
            <strong>1.8K</strong>
            <small>+11.2%</small>
          </div>

        </div>

      </div>

      {/* TOP TALENTS */}
      <div className="top-talents-card">

        <div className="analytics-card-header">
          <div>
            <h3>Most Popular Talents</h3>
            <p>Top performing talents based on engagement</p>
          </div>

          <button className="view-all-btn">
            View All
          </button>
        </div>

        <div className="talents-table-wrapper">

          <table className="talents-table">

            <thead>
              <tr>
                <th>Talent</th>
                <th>Creator</th>
                <th>Category</th>
                <th>Views</th>
                <th>Likes</th>
                <th>Rating</th>
              </tr>
            </thead>

            <tbody>

              {topTalents.map((talent, index) => (

                <tr key={index}>

                  <td>
                    <div className="talent-table-name">
                      <div className="talent-number">
                        {index + 1}
                      </div>

                      <span>{talent.name}</span>
                    </div>
                  </td>

                  <td>{talent.creator}</td>

                  <td>
                    <span className="category-badge">
                      {talent.category}
                    </span>
                  </td>

                  <td>
                    <div className="table-stat">
                      <FiEye />
                      {talent.views}
                    </div>
                  </td>

                  <td>
                    <div className="table-stat">
                      <FiHeart />
                      {talent.likes}
                    </div>
                  </td>

                  <td>
                    <div className="rating">
                      <FiStar />
                      {talent.rating}
                    </div>
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default Reports;