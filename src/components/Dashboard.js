import React from "react";
import "./Dashboard.css";

const challenges = [
  { id: 1, title: "Challenge 1", status: "Closed", questions: 1 },
  { id: 2, title: "Challenge 2", status: "Open", questions: 2 },
  { id: 3, title: "Challenge 3", status: "Open", questions: 2 },
  { id: 4, title: "Challenge 4", status: "Open", questions: 2 },
  { id: 5, title: "Challenge 5", status: "Closed", questions: 1 },
  { id: 6, title: "Challenge 6", status: "Open", questions: 2 },
];

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header className="header">
        <div className="brand">LoremIpsum</div>
        <nav className="navigation">
          <a href="/">Home</a>
          <a href="/">GameMaster</a>
          <a href="/">Participant</a>
          <a href="/">Judge</a>
        </nav>
        <div className="profile">
          <img
            src="https://via.placeholder.com/32"
            alt="profile"
            className="profile-img"
          />
          <span className="profile-name">Utkarsh</span>
        </div>
      </header>

      <div className="content">
        <div className="welcome-message">
          <h1>Hello! 👋</h1>
          <p>Lorem ipsum dolar sit amet</p>
        </div>
        <div className="challenge-controls">
          <input
            type="text"
            placeholder="Search by title..."
            className="search-input"
          />
          <button className="add-challenge-btn">+ Add Challenge</button>
        </div>

        <div className="challenge-list">
          {challenges.map((challenge) => (
            <div
              key={challenge.id}
              className={`challenge-item ${
                challenge.status === "Closed" ? "closed" : "open"
              }`}
            >
              <div className="challenge-header">
                <span className="challenge-status">{challenge.status}</span>
                <h2>{challenge.title}</h2>
                <p>Total Questions: {challenge.questions}</p>
              </div>
              <div className="challenge-body">
                <p>
                  Background Details: What needs to be done and why. What needs
                  to be disrupted. Lorem ipsum dolar sit amet.
                </p>
              </div>
              <div className="challenge-actions">
                <button className="action-btn">Delete</button>
                <button className="action-btn">Edit</button>
                <button className="action-btn">View</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
