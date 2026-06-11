import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">

        {/* LOGO */}
        <h2 className="logo">
          ✈ FUTURE <span>FIT</span>
        </h2>

        {/* DESKTOP MENU */}
        <div className="nav-links">

          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/services">Services</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/partnership">Partnership</NavLink>
          {/* <NavLink to="/contact">Contact</NavLink> */}

          {/* AUTH PAGE */}
          <NavLink to="/auth">Login / Register</NavLink>

        </div>

        {/* MOBILE MENU ICON */}
        <div className="menu-icon" onClick={() => setOpen(true)}>
          ☰
        </div>

      </nav>

      {/* OVERLAY */}
      <div
        className={`overlay ${open ? "show" : ""}`}
        onClick={() => setOpen(false)}
      ></div>

      {/* SIDEBAR */}
      <div className={`sidebar ${open ? "open" : ""}`}>

        <button className="close-btn" onClick={() => setOpen(false)}>
          ✕
        </button>

        <NavLink onClick={() => setOpen(false)} to="/" end>Home</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/about">About</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/services">Services</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/jobs">Jobs</NavLink>
        <NavLink onClick={() => setOpen(false)} to="/partnership">Partnership</NavLink>

        {/* AUTH */}
        <NavLink onClick={() => setOpen(false)} to="/auth">
          Login / Register
        </NavLink>

      </div>
    </>
  );
}