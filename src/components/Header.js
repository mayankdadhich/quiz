import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header">
      <div className="logo">LoremIpsum</div>
      <div className="profile">
        <nav className="navigation">
          <ul>
            <li>Home</li>
            <li><strong>GameMaster</strong></li>
            <li>Participant</li>
            <li>Judge</li>
          </ul>
        </nav>
        <span>Utkarsh</span>
        <img src="https://templates-flatlogic.herokuapp.com/sing-app/html5/demo/img/people/a5.jpg" alt="Profile" />
      </div>
    </header>
  );
}

export default Header;
