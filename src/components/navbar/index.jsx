import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-slate-500">
      <div className="container mx-auto navbar text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about"}>About</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bussness Agency</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5">
            <NavLink className={"btn btn-neutral"} to={"/"}>
              Home
            </NavLink>
            <NavLink className={"btn btn-neutral"} to={"/about"}>
              About
            </NavLink>
            <NavLink className={"btn btn-neutral"} to={"/contact"}>
              Contact
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <NavLink to={"/LogIn"} className="btn btn-accent">
            Login
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
