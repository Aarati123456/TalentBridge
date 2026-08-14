import React from "react";
import "./UserManagement.css";

const users = [
  {
    id: 1,
    name: "Aarati Angbuhang",
    email: "aarati@example.com",
    role: "Admin",
    status: "Active",
    joined: "12 May 2024",
  },
  {
    id: 2,
    name: "Sunita Rai",
    email: "sunita.rai@example.com",
    role: "User",
    status: "Active",
    joined: "10 May 2024",
  },
  {
    id: 3,
    name: "Bimal Shrestha",
    email: "bimal@example.com",
    role: "User",
    status: "Active",
    joined: "08 May 2024",
  },
  {
    id: 4,
    name: "Ram Thapa",
    email: "ram.thapa@example.com",
    role: "User",
    status: "Inactive",
    joined: "05 May 2024",
  },
  {
    id: 5,
    name: "Sita Limbu",
    email: "sita.limbu@example.com",
    role: "User",
    status: "Active",
    joined: "01 May 2024",
  },
];

function UserManagement() {
  return (
    <div className="user-management">
      {/* Header */}
      <div className="user-page-header">
        <div>
          <h1>User Management</h1>
          <p>Manage and monitor all registered users on TalentBridge.</p>
        </div>

        <button className="add-user-btn">
          + Add User
        </button>
      </div>

      {/* Statistics */}
      <div className="user-statistics">
        <div className="user-stat-card">
          <div className="stat-icon total-icon">👥</div>
          <div>
            <p>Total Users</p>
            <h2>342</h2>
            <span>All registered users</span>
          </div>
        </div>

        <div className="user-stat-card">
          <div className="stat-icon active-icon">✓</div>
          <div>
            <p>Active Users</p>
            <h2>318</h2>
            <span>Users with active accounts</span>
          </div>
        </div>

        <div className="user-stat-card">
          <div className="stat-icon inactive-icon">×</div>
          <div>
            <p>Inactive Users</p>
            <h2>24</h2>
            <span>Users with inactive accounts</span>
          </div>
        </div>
      </div>

      {/* Users Table Card */}
      <div className="users-table-card">
        {/* Table Header */}
        <div className="users-table-header">
          <div className="search-box">
            <span>⌕</span>
            <input
              type="text"
              placeholder="Search users by name or email..."
            />
          </div>

          <div className="table-filters">
            <select>
              <option>All Roles</option>
              <option>Admin</option>
              <option>User</option>
            </select>

            <button className="filter-btn">
              ⚱ Filter
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-wrapper">
          <table>
            <thead>
              <tr>
                <th>User</th>
                <th>Email</th>
                <th>Role</th>
                <th>Status</th>
                <th>Joined Date</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>
                    <div className="user-info">
                      <div className="user-avatar">
                        {user.name.charAt(0)}
                      </div>

                      <span>{user.name}</span>
                    </div>
                  </td>

                  <td>{user.email}</td>

                  <td>
                    <span
                      className={`role-badge ${user.role.toLowerCase()}`}
                    >
                      {user.role}
                    </span>
                  </td>

                  <td>
                    <span
                      className={`status-badge ${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>

                  <td>{user.joined}</td>

                  <td>
                    <div className="action-buttons">
                      <button className="view-btn">
                        View
                      </button>

                      <button className="delete-btn">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination-section">
          <p>Showing 1 to 5 of 342 users</p>

          <div className="pagination">
            <button>‹</button>
            <button className="page-active">1</button>
            <button>2</button>
            <button>3</button>
            <span>...</span>
            <button>69</button>
            <button>›</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserManagement;