import React, { useState } from "react";
import {
  FiSearch,
  FiPlus,
  FiEye,
  FiEdit2,
  FiTrash2,
  FiUsers,
  FiCheckCircle,
  FiClock,
  FiXCircle,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";

import "./TalentManagement.css";

const talents = [
  {
    id: 1,
    name: "Melodic Voice Performance",
    creator: "Sunita Rai",
    category: "Singing",
    status: "Approved",
    uploaded: "12 Aug 2026",
  },
  {
    id: 2,
    name: "E-commerce Website",
    creator: "Bimal Shrestha",
    category: "Web Development",
    status: "Pending",
    uploaded: "11 Aug 2026",
  },
  {
    id: 3,
    name: "Nature Photography",
    creator: "Prabin Gurung",
    category: "Photography",
    status: "Approved",
    uploaded: "10 Aug 2026",
  },
  {
    id: 4,
    name: "Pencil Sketch Art",
    creator: "Anjana Tamang",
    category: "Art",
    status: "Rejected",
    uploaded: "09 Aug 2026",
  },
  {
    id: 5,
    name: "Coding Portfolio",
    creator: "Aarati Angbuhang",
    category: "Coding",
    status: "Approved",
    uploaded: "08 Aug 2026",
  },
];

function TalentManagement() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All Categories");
  const [status, setStatus] = useState("All Status");

  const filteredTalents = talents.filter((talent) => {
    const matchesSearch =
      talent.name.toLowerCase().includes(search.toLowerCase()) ||
      talent.creator.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All Categories" || talent.category === category;

    const matchesStatus =
      status === "All Status" || talent.status === status;

    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="talent-management">
      {/* Page Header */}
      <div className="talent-page-header">
        <div>
          <h1>Talent Management</h1>
          <p>
            Manage and monitor all talents uploaded to TalentBridge.
          </p>
        </div>

        <button className="add-talent-btn">
          <FiPlus />
          Add Talent
        </button>
      </div>

      {/* Statistics Cards */}
      <div className="talent-stats-grid">
        <div className="talent-stat-card">
          <div className="stat-icon blue">
            <FiUsers />
          </div>

          <div>
            <h3>128</h3>
            <p>Total Talents</p>
          </div>
        </div>

        <div className="talent-stat-card">
          <div className="stat-icon green">
            <FiCheckCircle />
          </div>

          <div>
            <h3>96</h3>
            <p>Approved</p>
          </div>
        </div>

        <div className="talent-stat-card">
          <div className="stat-icon yellow">
            <FiClock />
          </div>

          <div>
            <h3>22</h3>
            <p>Pending</p>
          </div>
        </div>

        <div className="talent-stat-card">
          <div className="stat-icon red">
            <FiXCircle />
          </div>

          <div>
            <h3>10</h3>
            <p>Rejected</p>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="talent-filter-card">
        <div className="talent-search">
          <FiSearch />
          <input
            type="text"
            placeholder="Search talents..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option>All Categories</option>
          <option>Singing</option>
          <option>Web Development</option>
          <option>Photography</option>
          <option>Art</option>
          <option>Coding</option>
        </select>

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option>All Status</option>
          <option>Approved</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* Talents Table */}
      <div className="talent-table-card">
        <div className="talent-table-header">
          <div>
            <h2>All Talents</h2>
            <p>View and manage uploaded talents.</p>
          </div>
        </div>

        <div className="talent-table-wrapper">
          <table className="talent-table">
            <thead>
              <tr>
                <th>Talent</th>
                <th>Creator</th>
                <th>Category</th>
                <th>Status</th>
                <th>Uploaded</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {filteredTalents.length > 0 ? (
                filteredTalents.map((talent) => (
                  <tr key={talent.id}>
                    <td>
                      <div className="talent-name">
                        <div className="talent-avatar">
                          {talent.name.charAt(0)}
                        </div>

                        <span>{talent.name}</span>
                      </div>
                    </td>

                    <td>{talent.creator}</td>

                    <td>
                      <span className="category-text">
                        {talent.category}
                      </span>
                    </td>

                    <td>
                      <span
                        className={`status-badge ${talent.status.toLowerCase()}`}
                      >
                        {talent.status}
                      </span>
                    </td>

                    <td>{talent.uploaded}</td>

                    <td>
                      <div className="talent-actions">
                        <button title="View">
                          <FiEye />
                        </button>

                        <button title="Edit">
                          <FiEdit2 />
                        </button>

                        <button
                          title="Delete"
                          className="delete-action"
                        >
                          <FiTrash2 />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="no-talents">
                    No talents found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="talent-pagination">
          <p>
            Showing {filteredTalents.length} of 128 talents
          </p>

          <div className="pagination-buttons">
            <button>
              <FiChevronLeft />
            </button>

            <button className="active-page">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>26</button>

            <button>
              <FiChevronRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TalentManagement;