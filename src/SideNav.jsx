import { useState } from "react";
import "./SideNav.css";

function SideNav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* כפתור פתיחה (המבורגר) */}
      <button className={`hamburger-btn ${isOpen ? "hide" : ""}`} onClick={toggleNav}>
        ☰
      </button>

      {/* תפריט צד */}
      <div className={`side-nav ${isOpen ? "open" : ""}`}>
        <ul className="menu-content">
          <li><a href="#"><span className="material-symbols-outlined">home</span><span>Home</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">dashboard</span><span>Dashboard</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">explore</span><span>Explore</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">analytics</span><span>Analytics</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">settings</span><span>Settings</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">person</span><span>Account</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">report</span><span>Report</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">email</span><span>Contact</span></a></li>
          <li><a href="#"><span className="material-symbols-outlined">logout</span><span>Logout</span></a></li>
        </ul>
      </div>
    </>
  );
}

export default SideNav;