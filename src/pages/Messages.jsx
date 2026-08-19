import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FiHome,
  FiCompass,
  FiGrid,
  FiUser,
  FiMessageSquare,
  FiBell,
  FiUsers,
  FiBarChart2,
  FiSearch,
  FiSend,
  FiPaperclip,
  FiSmile,
  FiMoreVertical,
} from "react-icons/fi";
import "./Messages.css";

const conversations = [
  {
    id: 1,
    name: "Pabitra Raut",
    message: "Hey, I really liked your talent!",
    time: "10:32 AM",
    unread: 2,
    online: true,
    avatar: "SJ",
  },
  {
    id: 2,
    name: "Aasvi Rijal",
    message: "Are you available for a collaboration?",
    time: "Yesterday",
    unread: 1,
    online: true,
    avatar: "JS",
  },
  {
    id: 3,
    name: "Pratikshya Raut",
    message: "Nice talent! Keep it up.",
    time: "Monday",
    unread: 0,
    online: false,
    avatar: "AW",
  },
  {
    id: 4,
    name: "Swagat Shrestha",
    message: "Can you share more details?",
    time: "Sunday",
    unread: 0,
    online: false,
    avatar: "ED",
  },
];

const messagesData = {
  1: [
    {
      sender: "other",
      text: "Hi! I came across your profile.",
      time: "10:25 AM",
    },
    {
      sender: "other",
      text: "I really liked your talent!",
      time: "10:26 AM",
    },
    {
      sender: "me",
      text: "Thank you so much! I really appreciate it.",
      time: "10:29 AM",
    },
    {
      sender: "other",
      text: "You're welcome! Keep sharing your amazing work.",
      time: "10:32 AM",
    },
  ],
  2: [
    {
      sender: "other",
      text: "Hello! Are you available for a collaboration?",
      time: "Yesterday",
    },
    {
      sender: "me",
      text: "Yes, I would love to hear more about it.",
      time: "Yesterday",
    },
  ],
  3: [
    {
      sender: "other",
      text: "Nice talent! Keep it up.",
      time: "Monday",
    },
    {
      sender: "me",
      text: "Thank you!",
      time: "Monday",
    },
  ],
  4: [
    {
      sender: "other",
      text: "Can you share more details about your work?",
      time: "Sunday",
    },
  ],
};

function Messages() {
  const [selectedChat, setSelectedChat] = useState(1);
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");

  const selectedUser = conversations.find(
    (user) => user.id === selectedChat
  );

  const [chatMessages, setChatMessages] = useState(messagesData);

  const filteredConversations = conversations.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleSend = () => {
    if (!message.trim()) return;

    setChatMessages((prev) => ({
      ...prev,
      [selectedChat]: [
        ...prev[selectedChat],
        {
          sender: "me",
          text: message,
          time: "Now",
        },
      ],
    }));

    setMessage("");
  };

  return (
    <div className="messages-page">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          <div className="sidebar-section-title">MAIN</div>

          <NavLink to="/dashboard" className="sidebar-link">
            <FiHome />
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/explore" className="sidebar-link">
            <FiCompass />
            <span>Explore Talents</span>
          </NavLink>

          <NavLink to="/categories" className="sidebar-link">
            <FiGrid />
            <span>Categories</span>
          </NavLink>

          <div className="sidebar-section-title account-title">
            MY ACCOUNT
          </div>

          <NavLink to="/my-talents" className="sidebar-link">
            <FiUser />
            <span>My Talents</span>
          </NavLink>

          <NavLink to="/messages" className="sidebar-link active">
            <FiMessageSquare />
            <span>Messages</span>
          </NavLink>

          <NavLink to="/notifications" className="sidebar-link">
            <FiBell />
            <span>Notifications</span>
            <span className="notification-count">3</span>
          </NavLink>

          <NavLink to="/profile" className="sidebar-link">
            <FiUser />
            <span>Profile</span>
          </NavLink>

          <div className="sidebar-section-title admin-title">ADMIN</div>

          <NavLink to="/user-management" className="sidebar-link">
            <FiUsers />
            <span>User Management</span>
          </NavLink>

          <NavLink to="/talent-management" className="sidebar-link">
            <FiGrid />
            <span>Talent Management</span>
          </NavLink>

          <NavLink to="/reports" className="sidebar-link">
            <FiBarChart2 />
            <span>Reports</span>
          </NavLink>
        </div>
      </aside>

      {/* Main Content */}
      <main className="messages-content">
        <div className="messages-header">
          <div>
            <h1>Messages</h1>
            <p>Connect and communicate with other talented people.</p>
          </div>
        </div>

        <div className="messages-container">
          {/* Conversation List */}
          <div className="conversation-panel">
            <div className="conversation-header">
              <h2>Messages</h2>
              <span className="message-total">
                {conversations.length}
              </span>
            </div>

            <div className="message-search">
              <FiSearch />
              <input
                type="text"
                placeholder="Search messages..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="message-tabs">
              <button className="message-tab active-tab">All</button>
              <button className="message-tab">Unread</button>
            </div>

            <div className="conversation-list">
              {filteredConversations.map((user) => (
                <div
                  key={user.id}
                  className={`conversation-item ${
                    selectedChat === user.id ? "selected-conversation" : ""
                  }`}
                  onClick={() => setSelectedChat(user.id)}
                >
                  <div className="avatar-wrapper">
                    <div className="user-avatar">{user.avatar}</div>

                    {user.online && <span className="online-dot"></span>}
                  </div>

                  <div className="conversation-info">
                    <div className="conversation-top">
                      <h3>{user.name}</h3>
                      <span>{user.time}</span>
                    </div>

                    <div className="conversation-bottom">
                      <p>{user.message}</p>

                      {user.unread > 0 && (
                        <span className="unread-count">
                          {user.unread}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="chat-panel">
            {/* Chat Header */}
            <div className="chat-header">
              <div className="chat-user">
                <div className="avatar-wrapper">
                  <div className="user-avatar">
                    {selectedUser.avatar}
                  </div>

                  {selectedUser.online && (
                    <span className="online-dot"></span>
                  )}
                </div>

                <div>
                  <h3>{selectedUser.name}</h3>
                  <span>
                    {selectedUser.online ? "Online" : "Offline"}
                  </span>
                </div>
              </div>

              <button className="chat-more">
                <FiMoreVertical />
              </button>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              <div className="chat-date">Today</div>

              {chatMessages[selectedChat].map((msg, index) => (
                <div
                  key={index}
                  className={`message-row ${
                    msg.sender === "me" ? "my-message" : "received-message"
                  }`}
                >
                  <div className="message-bubble">
                    <p>{msg.text}</p>
                    <span>{msg.time}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="message-input-area">
              <button className="input-icon">
                <FiPaperclip />
              </button>

              <input
                type="text"
                placeholder="Type a message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleSend();
                  }
                }}
              />

              <button className="input-icon">
                <FiSmile />
              </button>

              <button className="send-button" onClick={handleSend}>
                <FiSend />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Messages;