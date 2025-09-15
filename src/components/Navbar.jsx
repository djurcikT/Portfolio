import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Tamara Đurčik</h1>
        <div className={`navbar-links ${isOpen ? "open" : ""}`}>
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
              onClick={() => setIsOpen(false)} // zatvara meni na klik
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}
