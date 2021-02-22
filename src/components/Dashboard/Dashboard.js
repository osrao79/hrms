import React from "react";

export default function Dashboard({ children }) {
  return (
    <div className="main">
      <div className="dashboard-layout">
        <nav className="side-nav-bar">this is side nav</nav>
        <div className="main-container">
          this is children
          {children}
        </div>
      </div>
    </div>
  );
}
