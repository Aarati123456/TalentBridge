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
  FiChevronDown,
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
    name: "Musical Singing",
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

const growthData = [
  180, 280, 290, 430, 370, 600, 560, 740, 650, 820, 960, 900, 1120, 1160, 1380
];

function Reports() {
  return (
    <div className="reports-page">

      {/* HEADER */}
      <div className="reports-header">
        <div>
          <h1>Reports & Analytics</h1>
          <p>Overview of platform activity and key metrics</p>
        </div>

        <div className="reports-header-right">
          <button className="date-btn">
            <FiCalendar />
            Last 30 Days
          </button>

          <div className="admin-profile">
            <div className="admin-avatar">A</div>
            <div className="admin-info">
              <div className="admin-name">Admin</div>
            </div>
            <FiChevronDown />
          </div>
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

            <div className="chart-container">
              {/* Simple fixed SVG chart per instructions */}
              <svg viewBox="0 0 700 180" preserveAspectRatio="none" width="100%" height="100%">
                {
                   (() => {
                     const left = 40; const right = 10; const top = 10; const bottom = 30;
                     const graphW = 700 - left - right; // 650
                     const graphH = 180 - top - bottom; // 140
                     const max = 1500;
                     const n = growthData.length; // 15

                     // compute points
                     const points = growthData.map((v, i) => {
                       const x = left + (i * (graphW / (n - 1)));
                       const y = 140 - (v / max) * 120; // per step 4
                       return { x, y };
                     });

                     // area path
                     const areaPath = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ') +
                       ` L ${points[points.length - 1].x} 140 L ${points[0].x} 140 Z`;

                     // line path
                     const linePath = points.map((p, i) => (i === 0 ? `M ${p.x} ${p.y}` : `L ${p.x} ${p.y}`)).join(' ');

                     // grid y positions for ticks 1500..0
                     const ticks = [1500,1200,900,600,300,0];
                     const tickYs = ticks.map(t => 140 - (t / max) * 120);

                     // x labels positions (7 labels) evenly distributed
                     const labels = ["May 20","May 25","May 30","Jun 5","Jun 10","Jun 15","Jun 20"];
                     const labelXs = labels.map((l, i) => left + (i * (graphW / (labels.length - 1))));

                     return (
                       <g>
                         {/* grid lines */}
                         {tickYs.map((y, idx) => (
                           <line key={'g'+idx} x1={left} x2={700 - right} y1={y} y2={y} stroke="#E8EEF7" strokeWidth="1" />
                         ))}

                         {/* area */}
                         <path d={areaPath} fill="rgba(59,130,246,0.12)" stroke="none" />

                         {/* line */}
                         <path d={linePath} fill="none" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />

                         {/* points */}
                         {points.map((p, i) => (
                           <circle key={'p'+i} cx={p.x} cy={p.y} r={2.5} fill="#3B82F6" />
                         ))}

                         {/* x labels */}
                         {labels.map((lbl, i) => (
                           <text key={'l'+i} x={labelXs[i]} y={160} fontSize="8" fill="#64748B" textAnchor="middle">{lbl}</text>
                         ))}

                         {/* y labels */}
                         {ticks.map((t, i) => {
                           const y = tickYs[i];
                           return <text key={'y'+i} x={left - 6} y={y + 4} fontSize="8" fill="#64748B" textAnchor="end">{t}</text>;
                         })}
                       </g>
                     );
                   })()
                }
              </svg>
            </div>

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
                      <FiEye size={14} />
                      {talent.views}
                    </div>
                  </td>

                  <td>
                    <div className="table-stat">
                      <FiHeart size={14} />
                      {talent.likes}
                    </div>
                  </td>

                  <td>
                    <div className="rating">
                      <FiStar size={14} />
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