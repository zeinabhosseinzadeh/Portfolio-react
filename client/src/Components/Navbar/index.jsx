import React, { useState } from "react";
import { NavLink } from "react-router-dom"; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const linkStyle = ({ isActive }) =>
    `relative pb-1 transition duration-200 ${isActive ? 'text-white' : 'text-white/60 hover:text-white'}`

  return (
    <nav className="sticky  top-0 z-50  bg-slate-800 backdrop-blur border-b ">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex h-16 items-center justify-between">
          <h1 className="text-lg text-white/80 hover:text-white font-semibold tracking-wider">Zeinab Hosseinzadeh</h1>
          <button
            className="md:hidden text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {/* {" "} */}
            {isOpen ? "✕" : "☰"}
          </button>
          <div className="hidden md:flex gap-10">
            <NavLink to="/" className={linkStyle}>
              About Me
            </NavLink>

            <NavLink to="/Resume" className={linkStyle}>
              Resume
            </NavLink>

            <NavLink to="/Projects" className={linkStyle}>
              Projects
            </NavLink>

            <NavLink to="/Contact" className={linkStyle}>
              Contact
            </NavLink>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden
            ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <div className="flex flex-col gap-6 py-6">
            <NavLink
              to="/"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              About Me
            </NavLink>

            <NavLink
              to="/Resume"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
             Resume
            </NavLink>

            <NavLink
              to="/Projects"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/Contact"
              className={linkStyle}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}
