import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Tamara Đurčik</h1>
        <div className="navbar-links">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={location.pathname === link.path ? "active" : ""}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
