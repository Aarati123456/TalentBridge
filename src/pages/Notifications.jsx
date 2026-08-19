import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import {
  FiBell,
  FiHeart,
  FiMessageSquare,
  FiUserPlus,
  FiStar,
  FiCheck,
  FiTrash2,
  FiMoreVertical,
} from "react-icons/fi";
import "./Notifications.css";

const notificationData = [
  {
    id: 1,
    type: "like",
    title: "New Like",
    message: "Sayumma liked your Acoustic Guitar Performance.",
    time: "5 minutes ago",
    unread: true,
  },
  {
    id: 2,
    type: "comment",
    title: "New Comment",
    message: "Joshan commented on your Landscape Painting.",
    time: "25 minutes ago",
    unread: true,
  },
  {
    id: 3,
    type: "follow",
    title: "New Follower",
    message: "Arya started following you.",
    time: "1 hour ago",
    unread: true,
  },
  {
    id: 4,
    type: "rating",
    title: "New Rating",
    message: "Saujan rated your talent 5 stars.",
    time: "3 hours ago",
    unread: false,
  },
  {
    id: 5,
    type: "message",
    title: "New Message",
    message: "You received a new message from Michael Brown.",
    time: "Yesterday",
    unread: false,
  },
  {
    id: 6,
    type: "like",
    title: "New Like",
    message: "Nisham liked your Hip Hop Dance talent.",
    time: "Yesterday",
    unread: false,
  },
];

function Notifications() {
  const [notifications, setNotifications] =
    useState(notificationData);

  const [filter, setFilter] = useState("all");

  const getIcon = (type) => {
    switch (type) {
      case "like":
        return <FiHeart />;

      case "comment":
        return <FiMessageSquare />;

      case "follow":
        return <FiUserPlus />;

      case "rating":
        return <FiStar />;

      case "message":
        return <FiBell />;

      default:
        return <FiBell />;
    }
  };

  const markAllRead = () => {
    setNotifications((prev) =>
      prev.map((notification) => ({
        ...notification,
        unread: false,
      }))
    );
  };

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );
  };

  const deleteNotification = (id) => {
    setNotifications((prev) =>
      prev.filter((notification) => notification.id !== id)
    );
  };

  const filteredNotifications =
    filter === "unread"
      ? notifications.filter(
          (notification) => notification.unread
        )
      : notifications;

  const unreadCount = notifications.filter(
    (notification) => notification.unread
  ).length;

  return (
    <div className="notifications-page">

      {/* Existing Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="notifications-content">

        {/* Header */}
        <div className="notifications-header">

          <div>
            <h1>Notifications</h1>

            <p>
              Stay updated with activity on your talents and profile.
            </p>
          </div>

          <button
            className="mark-all-btn"
            onClick={markAllRead}
          >
            <FiCheck />
            Mark all as read
          </button>

        </div>

        {/* Stats */}
        <div className="notification-stats">

          <div className="notification-stat-card">
            <div className="stat-icon blue">
              <FiBell />
            </div>

            <div>
              <span>Total Notifications</span>
              <strong>{notifications.length}</strong>
            </div>
          </div>

          <div className="notification-stat-card">
            <div className="stat-icon red">
              <FiHeart />
            </div>

            <div>
              <span>Unread</span>
              <strong>{unreadCount}</strong>
            </div>
          </div>

          <div className="notification-stat-card">
            <div className="stat-icon green">
              <FiCheck />
            </div>

            <div>
              <span>Read</span>
              <strong>
                {notifications.length - unreadCount}
              </strong>
            </div>
          </div>

        </div>

        {/* Notification Box */}
        <div className="notifications-card">

          {/* Top */}
          <div className="notifications-card-header">

            <div>
              <h2>Recent Notifications</h2>

              <span>
                {unreadCount} unread notification
                {unreadCount !== 1 ? "s" : ""}
              </span>
            </div>

            <div className="notification-filters">

              <button
                className={
                  filter === "all"
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setFilter("all")}
              >
                All
              </button>

              <button
                className={
                  filter === "unread"
                    ? "filter-btn active"
                    : "filter-btn"
                }
                onClick={() => setFilter("unread")}
              >
                Unread
              </button>

            </div>

          </div>

          {/* List */}
          <div className="notification-list">

            {filteredNotifications.length === 0 ? (
              <div className="empty-notifications">
                <FiBell />
                <h3>No notifications</h3>
                <p>
                  You're all caught up!
                </p>
              </div>
            ) : (
              filteredNotifications.map(
                (notification) => (
                  <div
                    key={notification.id}
                    className={`notification-item ${
                      notification.unread
                        ? "unread-notification"
                        : ""
                    }`}
                    onClick={() =>
                      markAsRead(notification.id)
                    }
                  >

                    {/* Icon */}
                    <div
                      className={`notification-icon ${notification.type}`}
                    >
                      {getIcon(notification.type)}
                    </div>

                    {/* Content */}
                    <div className="notification-info">

                      <div className="notification-title-row">

                        <h3>
                          {notification.title}
                        </h3>

                        {notification.unread && (
                          <span className="unread-dot"></span>
                        )}

                      </div>

                      <p>
                        {notification.message}
                      </p>

                      <span className="notification-time">
                        {notification.time}
                      </span>

                    </div>

                    {/* Actions */}
                    <div className="notification-actions">

                      <button
                        title="Mark as read"
                        onClick={(e) => {
                          e.stopPropagation();
                          markAsRead(notification.id);
                        }}
                      >
                        <FiCheck />
                      </button>

                      <button
                        title="Delete"
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteNotification(notification.id);
                        }}
                      >
                        <FiTrash2 />
                      </button>

                      <button>
                        <FiMoreVertical />
                      </button>

                    </div>

                  </div>
                )
              )
            )}

          </div>

        </div>

      </main>
    </div>
  );
}

export default Notifications;