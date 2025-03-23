import { useState } from "react";
import Nav from "react-bootstrap/Nav";
import "./SideNav.css";

function StackedExample() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <>
      {/* כפתור שמופיע רק כשהתפריט סגור */}
      <button
        className={`hamburger-btn ${isOpen ? "hide-btn" : ""}`}
        onClick={toggleNav}
      >
        ☰
      </button>

      {/* תפריט צד */}
      <div className={`side-nav ${isOpen ? "open" : ""}`}>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/home" className="nav-link" onClick={toggleNav}>
            Active
          </Nav.Link>
          <Nav.Link eventKey="link-1" className="nav-link" onClick={toggleNav}>
            Link
          </Nav.Link>
          <Nav.Link eventKey="link-2" className="nav-link" onClick={toggleNav}>
            Link
          </Nav.Link>
          <Nav.Link eventKey="disabled" disabled className="nav-link disabled">
            Disabled
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
}

export default StackedExample;
