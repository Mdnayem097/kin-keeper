import React from "react";
import { NavLink } from "react-router";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div className="navbar shadow-sm px-20">
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
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            <li>
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#244D3F] text-white font-semibold px-4 py-2 rounded-lg"
                    : "text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#244D3F] text-white font-semibold px-4 py-2 rounded-lg"
                    : "text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
                }
                to="/timeline"
              >
                Timeline
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "bg-[#244D3F] text-white font-semibold px-4 py-2 rounded-lg"
                    : "text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
                }
                to="/stats"
              >
                Stats
              </NavLink>
            </li>
          </ul>
        </div>
        <NavLink href="/" className="text-xl font-bold flex items-center gap-0">
          Keen<span className="text-[#244D3F]">Keeper</span>
        </NavLink>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive
                  ? "bg-[#244D3F] text-white font-semibold px-4 py-2 rounded-lg"
                  : "text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#244D3F] text-white font-semibold px-4 py-2 rounded-lg"
                  : "text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
              }
              to="/timeline"
            >
              Timeline
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "bg-[#244D3F] text-white font-semibold px-4 py-2 rounded-lg"
                  : "text-gray-600 hover:bg-gray-100 px-4 py-2 rounded-lg"
              }
              to="/stats"
            >
              Stats
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
