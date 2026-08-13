import React from "react";
import "./Profile.css";

const Profile = () => {
  return (
    <div className="profile-page">
      <div className="profile-header">
        <h1>My Profile</h1>
        <p>Manage your personal information and talents.</p>
      </div>

      <div className="profile-card">
        <div className="profile-image-section">
          <div className="profile-image">
            A
          </div>

          <button className="change-photo-btn">
            Change Photo
          </button>
        </div>

        <div className="profile-info">
          <div className="info-group">
            <label>Full Name</label>
            <p>Aarati Angbuhang</p>
          </div>

          <div className="info-group">
            <label>Email</label>
            <p>aarati@example.com</p>
          </div>

          <div className="info-group">
            <label>Bio</label>
            <p>
              Computing student and aspiring web developer passionate
              about technology and creativity.
            </p>
          </div>

          <div className="info-group">
            <label>Skills</label>

            <div className="skills">
              <span>Web Development</span>
              <span>React</span>
              <span>JavaScript</span>
              <span>Python</span>
            </div>
          </div>

          <button className="edit-profile-btn">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;